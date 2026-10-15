#!/usr/bin/env node
// Tells Bing and the other IndexNow engines (Yandex, Seznam, Naver…; not Google) which pages of nchova.com changed, as
// soon as Vercel has published them: .github/workflows/indexnow.yml runs it after every production deployment.
//
// The pages come from the live sitemap. A page counts as changed when what it says changed: its words, title,
// description, canonical, hreflang and structured data, hashed and compared with the previous run's hashes (kept by the
// workflow in its cache, in .indexnow/hashes.json). A change of style or script alone is not a change. With no
// previous hashes (the first run, or a cache gone), every page is sent once. Pages gone from the sitemap are sent too,
// so the engines come and find them gone.
//
//   node tools/indexnow.mjs            sends what changed and keeps the new hashes
//   node tools/indexnow.mjs --dry-run  says what it would send, sends nothing, keeps nothing
//   node tools/indexnow.mjs --seed     keeps the hashes, sends nothing (after the cache was lost)

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://nchova.com';
/** The key, also at public/<key>.txt, where the engines check it. Not a secret: anyone can read that file. */
const KEY = '7cc785b2312772595f7b0c314cd207c4';
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const store = join(root, '.indexnow', 'hashes.json');
const dryRun = process.argv.includes('--dry-run');
const seed = process.argv.includes('--seed');

async function get(url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'nchova-indexnow' } });
      if (!res.ok) throw new Error(`${res.status} ${url}`);
      return await res.text();
    } catch (e) {
      if (attempt === 3) throw e;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
}

/** Every page in the sitemap index's sitemaps. */
async function pages() {
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const sitemaps = locs(await get(`${SITE}/sitemap-index.xml`));
  return (await Promise.all(sitemaps.map(async (s) => locs(await get(s))))).flat();
}

/** What a page says: the head's meaning (title, description, canonical, hreflang, structured data) and its words. */
function meaning(html) {
  const head = [
    ...html.matchAll(/<title>[\s\S]*?<\/title>|<meta name="(?:description|robots)"[^>]*>|<link rel="(?:canonical|alternate)"[^>]*>/g),
    ...html.matchAll(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g),
  ].map((m) => m[0]);
  const words = html
    .replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return createHash('sha256').update(head.join('\n') + '\n' + words).digest('hex');
}

/** At most `n` at a time. */
async function each(items, n, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: n }, async () => {
    while (next < items.length) {
      const i = next++;
      out[i] = await fn(items[i]);
    }
  }));
  return out;
}

const key = await get(`${SITE}/${KEY}.txt`).then((t) => t.trim(), () => null);
if (key !== KEY) {
  const why = `${SITE}/${KEY}.txt does not hold the key: is this deployment live yet?`;
  if (!dryRun) throw new Error(why);
  console.warn(why);
}

const urls = await pages();
const hashes = Object.fromEntries(await each(urls, 6, async (url) => [url, meaning(await get(url))]));
const before = existsSync(store) ? JSON.parse(readFileSync(store, 'utf8')) : null;
const changed = urls.filter((url) => !before || before[url] !== hashes[url]);
const gone = before ? Object.keys(before).filter((url) => !(url in hashes)) : [];
const send = [...changed, ...gone];

console.log(`${urls.length} pages; ${before ? `${changed.length} changed, ${gone.length} gone` : 'no previous run: all of them'}`);
for (const url of send) console.log(`  ${url}`);

if (dryRun) process.exit(0);

// One request takes up to 10,000 URLs.
if (seed) console.log('Seed: hashes kept, nothing sent.');
else if (send.length > 0) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: send }),
  });
  // 200: received. 202: received, the key still being checked (the first time).
  if (res.status !== 200 && res.status !== 202) throw new Error(`IndexNow answered ${res.status}: ${await res.text()}`);
  console.log(`IndexNow: ${res.status}`);
}

mkdirSync(dirname(store), { recursive: true });
writeFileSync(store, JSON.stringify(hashes, null, 1) + '\n');
