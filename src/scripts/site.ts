// What every page needs: the swimming mark element, the few fish that wander the whole page,
// things rising into place as you read, and the nav waking up once you scroll.

import './fish/element';
import { Tank } from './fish/tank';
import { track } from '@vercel/analytics';
import { CHECKOUT_URL, PARTNERS } from '../config';

const ocean = document.querySelector<HTMLElement>('[data-ocean]');
if (ocean) {
  new Tank(ocean, {
    edges: 'wrap',
    parallax: true,
    pointer: true,
    fish: (w) => {
      const n = w < 700 ? 2 : 4;
      return Array.from({ length: n }, (_, i) => ({
        size: (w < 700 ? 26 : 34) + i * 9,
        alpha: 0.42 + i * 0.1,
      }));
    },
  });
}

const rising = document.querySelectorAll<HTMLElement>('.rise');
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  },
  { rootMargin: '0px 0px -8% 0px' },
);
rising.forEach((el) => io.observe(el));

const nav = document.querySelector<HTMLElement>('[data-nav]');
if (nav) {
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

// The language switch closes when you click elsewhere.
const langs = document.querySelector<HTMLDetailsElement>('[data-langs]');
if (langs) {
  document.addEventListener('click', (e) => {
    if (langs.open && !langs.contains(e.target as Node)) langs.open = false;
  });
}

// Arrived through a creator's link (nchova.com/with/<slug>, src/pages/with/[partner].ts): on this visit Buy opens the
// checkout with their code already in, and the downloads say who sent them. Only in the address, never stored.
const slug = new URLSearchParams(location.search).get('with') ?? '';
const partner = Object.hasOwn(PARTNERS, slug) ? PARTNERS[slug] : undefined;
if (partner) {
  const strip = document.querySelector<HTMLElement>('[data-partner]');
  if (strip) {
    const [before, after] = (strip.dataset.line ?? '').replace('{name}', partner.name).split('{code}');
    const code = document.createElement('strong');
    code.textContent = partner.code;
    strip.querySelector('span')?.replaceChildren(before, code, after ?? '');
    strip.hidden = false;
    // Room for it under the nav, kept as the strip grows: fonts arriving late, a narrower window.
    const room = () => document.documentElement.style.setProperty('--partner', `${strip.offsetHeight}px`);
    room();
    new ResizeObserver(room).observe(strip);
  }
  for (const a of document.querySelectorAll<HTMLAnchorElement>(`a[href^="${CHECKOUT_URL}"]`)) {
    a.href = `${CHECKOUT_URL}?discount_code=${partner.code}`;
  }
  for (const a of document.querySelectorAll<HTMLAnchorElement>('a[href^="/download"]')) {
    const url = new URL(a.href);
    url.searchParams.set('partner', slug);
    a.href = url.pathname + url.search;
  }
}

// A click on a download button is counted here too (event "Download click", with the same button and creator as
// /download's "Download"): on the visitor of the page view, so set against the visitors it says how many download.
// /download counts on the server, from outside the site and past blockers, and is the more easily fooled (src/lib/count.ts).
document.addEventListener('click', (e) => {
  const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="/download"]');
  if (!a) return;
  const url = new URL(a.href);
  const from = url.searchParams.get('from') ?? 'link';
  const partner = url.searchParams.get('partner');
  track('Download click', { from, ...(partner && { partner }) });
});
