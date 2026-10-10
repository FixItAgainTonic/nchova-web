#!/usr/bin/env node
// The site quotes nchova's own labels in bold (**Settings › Dictation**, **Connect**…), in the language of each page.
// This lists, for every language the app is translated into, the bold labels on the site that are NOT among the app's
// strings: some are macOS's own labels (expected), the rest are labels the app has renamed since the site was written.
// Run it before publishing a release of the app:  node tools/check-app-labels.mjs [path to the app, default ../nchova]

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = join(dirname(fileURLToPath(import.meta.url)), '..');
const app = process.argv[2] ?? join(site, '..', 'nchova');
const resources = join(app, 'Sources/NchovaApp/Resources');

/** The app's strings in `lang`: the values of its Localizable.strings; for English, the keys (the English UI is the
 *  keys themselves) plus the few English overrides. null if the app is not translated into `lang` yet. */
function strings(lang) {
  const read = (l) => {
    const file = join(resources, `${l}.lproj/Localizable.strings`);
    return existsSync(file) ? readFileSync(file, 'utf8') : null;
  };
  const unescape = (s) => s.replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
  const pairs = (text) => [...text.matchAll(/^"((?:[^"\\]|\\.)*)"\s*=\s*"((?:[^"\\]|\\.)*)";/gm)].map((m) => [unescape(m[1]), unescape(m[2])]);
  if (lang === 'en') {
    const keys = read('it');
    const en = read('en');
    if (!keys) return null;
    return new Set([...pairs(keys).map(([k]) => k), ...(en ? pairs(en).map(([, v]) => v) : [])]);
  }
  const text = read(lang);
  return text ? new Set(pairs(text).map(([, v]) => v)) : null;
}

/** A label matches a string when it is the string, or one piece of it around › or →, or the string with %@/%d filled. */
function known(label, set) {
  // Same text if only the kind of space differs (the app puts a no-break space before "…" in German and French).
  const clean = (s) => s.replace(/\u2026|\.\.\./g, '…').replace(/\s+/g, ' ').trim();
  const l = clean(label);
  for (const s of set) {
    const c = clean(s);
    if (c === l) return true;
    if (c.split(/\s*[›→]\s*/).includes(l)) return true;
    if (/%[@d]/.test(c) && new RegExp('^' + c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/%[@d]/g, '.+') + '$').test(l)) return true;
  }
  return false;
}

let missing = 0;
for (const lang of ['en', 'it', 'de', 'fr', 'es']) {
  const appStrings = strings(lang);
  if (!appStrings) {
    console.log(`${lang}: the app has no ${lang}.lproj yet`);
    continue;
  }
  const labels = new Set();
  for (const file of [`src/i18n/${lang}.ts`, `src/i18n/guides/${lang}.ts`]) {
    const path = join(site, file);
    if (!existsSync(path)) continue;
    for (const m of readFileSync(path, 'utf8').matchAll(/\*\*([^*]+)\*\*/g)) labels.add(m[1]);
  }
  const out = [...labels].filter((l) => ![...l.split(/\s*›\s*/)].every((piece) => known(piece, appStrings)));
  missing += out.length;
  console.log(`\n${lang}: ${labels.size} bold labels, ${labels.size - out.length} found in the app, ${out.length} not (macOS's own, or renamed):`);
  for (const l of out.sort()) console.log(`  ${l}`);
}
console.log(missing ? '\nCheck the list above: a label of nchova\'s in it means the site quotes a string the app no longer has.' : '\nAll bold labels found in the app.');
