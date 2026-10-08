// The bill: a month goes by every few hundred milliseconds. The other app's receipt prints a line whenever a payment is
// due (every month, or once a year, from the switch) and its total climbs; Pro's printed once and adds only a line of
// updates at €0.00 when a year turns. The months are the real ones, from this month on.

import { film, type Run } from './run';

interface Plan {
  sub: string;
  every: number;
  amount: number;
}
interface Data {
  lang: string;
  ours: string;
  plans: Plan[];
  currency: { before?: string; after?: string };
  months: number;
  words: { month: string; months: string; year: string; nothing: string };
}

const el = (tag: string, cls = '', text?: string) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

/** A receipt line: what, the dotted leader, how much. */
const line = (what: string, amount: string) => {
  const li = el('li', 'bill__new');
  li.append(el('span', '', what), el('i'), el('span', '', amount));
  return li;
};

for (const root of document.querySelectorAll<HTMLElement>('[data-bill]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const feed = $('[data-feed]'), ours = $('[data-ours]'), total = $('[data-total]'), sub = $('[data-sub]');
  const count = $('[data-count]'), unit = $('[data-unit]');
  const picks = [...root.querySelectorAll<HTMLButtonElement>('[data-plan]')];
  const money = (n: number) => `${data.currency.before ?? ''}${n.toFixed(2)}${data.currency.after ?? ''}`;
  const monthName = new Intl.DateTimeFormat(data.lang, { month: 'short', year: 'numeric' });
  const start = new Date();
  start.setDate(1);
  const nth = (m: number) => monthName.format(new Date(start.getFullYear(), start.getMonth() + m, 1));

  let plan = 0;

  const show = (m: number) => {
    count.textContent = String(m);
    unit.textContent = m === 1 ? data.words.month : data.words.months;
  };

  const controls = film(root, {
    reset() {
      const p = data.plans[plan];
      sub.textContent = p.sub;
      feed.textContent = '';
      ours.querySelectorAll('[data-year], .bill__new').forEach((li) => li.remove());
      total.textContent = money(0);
      show(0);
    },
    async play(run: Run) {
      const p = data.plans[plan];
      let sum = 0;
      for (let m = 0; m < data.months; m++) {
        show(m + 1);
        if (m % p.every === 0) {
          sum += p.amount;
          feed.append(line(nth(m), money(p.amount)));
          total.textContent = money(sum);
          total.classList.remove('bill__bump');
          void total.offsetWidth;
          total.classList.add('bill__bump');
        }
        if (m > 0 && m % 12 === 0) ours.append(line(data.words.year.replace('{n}', String(m / 12 + 1)), data.words.nothing));
        await run.wait(m < 12 ? 300 : 190);
      }
    },
    rest: 4200,
  });

  for (const button of picks) {
    button.addEventListener('click', () => {
      plan = Number(button.dataset.plan);
      for (const b of picks) b.setAttribute('aria-pressed', String(b === button));
      controls.restart();
    });
  }
}
