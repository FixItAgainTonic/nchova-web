// What every page needs: the swimming mark element, the few fish that wander the whole page,
// things rising into place as you read, and the nav waking up once you scroll.

import './fish/element';
import { Tank } from './fish/tank';

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
