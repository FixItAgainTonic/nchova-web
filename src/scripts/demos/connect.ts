// Settings › Assistants: the pointer clicks Connect on each app the film connects; a spinner, "Connected", the button
// becomes Reconnect, and the line under the list says what the app needs next (a restart, a new session…).

import { film, type Run } from './run';

interface Data {
  rows: { name: string; after: string; click?: boolean }[];
}

for (const root of document.querySelectorAll<HTMLElement>('[data-connect]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends Element = HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const stage = $('.stage__in'), cursor = $('[data-cursor]'), notice = $('[data-notice]');
  const rows = [...root.querySelectorAll<HTMLElement>('[data-row]')];

  const point = async (run: Run, target: Element, ms = 800) => {
    const s = stage.getBoundingClientRect(), r = target.getBoundingClientRect();
    cursor.style.left = `${((r.left + r.width / 2 - s.left) / s.width) * 100}%`;
    cursor.style.top = `${((r.top + r.height / 2 - s.top) / s.height) * 100}%`;
    cursor.classList.add('show');
    await run.wait(ms);
  };
  const click = async (run: Run, target: Element) => {
    cursor.classList.add('press');
    target.classList.add('pressed');
    await run.wait(170);
    cursor.classList.remove('press');
    target.classList.remove('pressed');
  };

  film(root, {
    reset() {
      rows.forEach((r) => r.classList.remove('busy', 'done'));
      notice.textContent = '';
      notice.classList.remove('show');
      // A film stopped mid-click leaves the button pressed and the pointer down.
      cursor.classList.remove('show', 'press');
      root.querySelectorAll('.pressed').forEach((b) => b.classList.remove('pressed'));
      cursor.style.left = '60%';
      cursor.style.top = '80%';
    },
    async play(run) {
      await run.wait(500);
      for (const [i, row] of data.rows.entries()) {
        if (!row.click) continue;
        const el = rows[i];
        const button = el.querySelector('[data-button]')!;
        await point(run, button, 900);
        await click(run, button);
        el.classList.add('busy');
        notice.classList.remove('show');
        await run.wait(1000);
        el.classList.remove('busy');
        el.classList.add('done');
        notice.textContent = `${row.name}: ${row.after}`;
        notice.classList.add('show');
        await run.wait(1800);
      }
      cursor.classList.remove('show');
    },
    rest: 3400,
  });
}
