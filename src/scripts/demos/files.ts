// A file dropped on the Meetings window. The pointer takes it from the desktop; over the window its edge turns violet
// and says where it goes; let go, and the meeting appears under Today, named after the file, while the line over its
// notes counts the per cent and the time left and the transcript fills in on the right, voice by voice. Read to the end,
// the notes are written; a file whose name says nothing is titled by the Mac's model. The next film drops the next file.

import { film, type Run } from './run';
import type { Files } from '../../i18n/guides/types';

for (const root of document.querySelectorAll<HTMLElement>('[data-files]')) setup(root);

function setup(root: HTMLElement) {
  const data: Files = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const w = data.words;
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const detail = $('[data-detail]'), title = $('[data-title]'), meta = $('[data-meta]');
  const pline = $('[data-pline]'), bar = $('[data-bar]'), notes = $('[data-notes]'), turns = $('[data-turns]');
  const rowTitle = $('[data-row-title]'), rowMeta = $('[data-row-meta]');
  const fname = $('[data-fname]'), ext = $('[data-ext]');
  const picks = [...root.querySelectorAll<HTMLButtonElement>('[data-pick]')];
  const captions = [...root.querySelectorAll<HTMLElement>('[data-caption]')];

  /** The app's format strings: '%d' a number, '%%' a per cent sign. */
  const fmt = (s: string, n: number) => s.replace('%d', String(n)).replace('%%', '%');

  let index = 0;
  let pinned = false;
  /** The film ended on its own: the next one drops the next file. */
  let advance = false;
  const show = (i: number) => {
    index = i;
    const f = data.files[i];
    root.dataset.kind = f.kind;
    fname.textContent = f.file;
    ext.textContent = f.file.slice(f.file.lastIndexOf('.') + 1).toUpperCase();
    picks.forEach((b, j) => b.setAttribute('aria-pressed', String(j === i)));
    captions.forEach((c, j) => (c.hidden = j !== i));
  };

  /** How long the app says is left: nothing until it knows, then about so many minutes, then under a minute. */
  const left = (f: Files['files'][number], fraction: number) => {
    if (fraction < 0.12) return '';
    const minutes = (f.minutes / 10) * (1 - fraction);
    return ' · ' + (minutes < 1 ? w.underMinute : fmt(w.about, Math.ceil(minutes)));
  };

  const turn = (run: Run, who: string, text: string) => {
    const b = document.createElement('div');
    b.className = 'fd__turn';
    const head = document.createElement('span');
    head.textContent = who;
    const p = document.createElement('p');
    p.textContent = text;
    b.append(head, p);
    turns.append(b);
    turns.scrollTo({ top: turns.scrollHeight, behavior: run.fast ? 'auto' : 'smooth' });
  };

  const controls = film(root, {
    reset() {
      if (advance && !pinned) index = (index + 1) % data.files.length;
      advance = false;
      show(index);
      root.classList.remove('grab', 'drag', 'over', 'dropped', 'listed', 'renamed', 'done');
      detail.dataset.state = 'empty';
      for (const el of [title, meta, pline, rowTitle, rowMeta, notes]) el.textContent = '';
      turns.querySelectorAll('.fd__turn').forEach((t) => t.remove());
      bar.style.width = '0';
    },
    async play(run) {
      const f = data.files[index];
      await run.wait(500);
      root.classList.add('grab');
      await run.wait(650);
      root.classList.add('drag');
      await run.wait(950);
      root.classList.add('over');
      await run.wait(800);
      root.classList.remove('over');
      root.classList.add('dropped');

      // Its meeting, under Today, chosen: named after the file, dated when it was recorded.
      rowTitle.textContent = title.textContent = f.title;
      meta.textContent = f.meta;
      const row = (pct: number) => (rowMeta.textContent = `${f.time} · ${f.length} · ${fmt(w.row, pct)}`);
      row(0);
      pline.textContent = fmt(w.progress, 0);
      root.classList.add('listed');
      detail.dataset.state = 'reading';
      await run.wait(600);

      // Read from start to end: the bar moves on, and what was said comes in, in order.
      const steps = 30;
      let said = 0;
      for (let s = 1; s <= steps; s++) {
        const fraction = s / steps;
        const pct = Math.round(fraction * 100);
        bar.style.width = `${pct}%`;
        pline.textContent = fmt(w.progress, pct) + left(f, fraction);
        row(pct);
        while (said < f.lines.length && fraction >= (said + 1) / (f.lines.length + 0.6)) {
          const [who, text] = f.lines[said++];
          turn(run, who, text);
        }
        await run.wait(210);
      }
      while (said < f.lines.length) turn(run, ...f.lines[said++]);

      // Read: the notes are written, as after a call.
      detail.dataset.state = 'writing';
      rowMeta.textContent = `${f.time} · ${f.length} · ${w.writing}`;
      await run.wait(1100);
      if (f.named) {
        rowTitle.textContent = title.textContent = f.named;
        root.classList.add('renamed');
      }
      for (const [heading, points] of f.notes) {
        const h = document.createElement('p');
        h.className = 'fd__h';
        h.textContent = heading;
        const ul = document.createElement('ul');
        notes.append(h, ul);
        for (const point of points) {
          const li = document.createElement('li');
          ul.append(li);
          await run.type(li, point, 110);
          await run.wait(140);
        }
        await run.wait(180);
      }
      detail.dataset.state = 'done';
      root.classList.add('done');
      // The notes took room from the transcript, where it sits under them: its last words in sight again.
      turns.scrollTo({ top: turns.scrollHeight, behavior: run.fast ? 'auto' : 'smooth' });
      rowMeta.textContent = `${f.time} · ${f.length}`;
    },
    rest: 3200,
  });

  // Left alone, each film drops the next file (it changes at the next start, while the scene is faded out).
  new MutationObserver(() => {
    if (root.classList.contains('ending')) advance = true;
  }).observe(root, { attributes: true, attributeFilter: ['class'] });

  for (const button of picks) {
    button.addEventListener('click', () => {
      pinned = true;
      show(Number(button.dataset.pick));
      controls.restart();
    });
  }
}
