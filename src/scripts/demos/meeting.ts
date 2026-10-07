// A meeting, as the app runs one: the prompt under the menu bar with the fish swimming, a click on
// Transcribe, the pill at the bottom (red dot, fish), the card opening above it with the live
// transcript as a chat (you on the right), then the notepad.

import { film, type Run } from './run';

interface Data {
  me: string;
  bubbles: [string, string][];
  jotted: string;
}

for (const root of document.querySelectorAll<HTMLElement>('[data-meeting]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const stage = $('.stage__in'), prompt = $('[data-prompt]'), yes = $('[data-yes]'), card = $('[data-card]');
  const pill = $('[data-pill]'), cursor = $('[data-cursor]'), chat = $('[data-chat]'), pad = $('[data-pad]');
  const clock = $('[data-clock]'), notesTab = $('[data-notes-tab]');
  const tiles = [...root.querySelectorAll<HTMLElement>('[data-tile]')];

  /** Moves the pointer to the middle of `target`, as a fraction of the stage. */
  const point = async (run: Run, target: HTMLElement, ms = 700) => {
    const s = stage.getBoundingClientRect(), r = target.getBoundingClientRect();
    cursor.style.left = `${((r.left + r.width / 2 - s.left) / s.width) * 100}%`;
    cursor.style.top = `${((r.top + r.height / 2 - s.top) / s.height) * 100}%`;
    cursor.classList.add('show');
    await run.wait(ms);
  };
  const click = async (run: Run, target: HTMLElement) => {
    cursor.classList.add('press');
    target.classList.add('pressed');
    await run.wait(160);
    cursor.classList.remove('press');
    target.classList.remove('pressed');
  };

  let started = 0, timer = 0;
  const tickClock = () => {
    const s = Math.floor((Date.now() - started) / 1000);
    clock.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  const face = (which: 'live' | 'notes') => {
    root.querySelectorAll<HTMLElement>('[data-face]').forEach((f) => f.classList.toggle('on', f.dataset.face === which));
    card.dataset.face = which;
  };

  film(root, {
    reset() {
      for (const el of [prompt, card, pill, cursor]) el.classList.remove('show');
      chat.textContent = '';
      pad.textContent = '';
      face('live');
      clock.textContent = '0:00';
      clearInterval(timer);
      tiles.forEach((t) => t.classList.remove('talking'));
      cursor.style.left = '62%';
      cursor.style.top = '70%';
    },
    async play(run) {
      prompt.classList.add('show');
      await run.wait(1300);
      await point(run, yes, 900);
      await click(run, yes);
      prompt.classList.remove('show');
      await run.wait(450);
      pill.classList.add('show');
      started = Date.now();
      timer = window.setInterval(tickClock, 1000);
      await run.wait(900);
      await point(run, pill, 800);
      await click(run, pill);
      card.classList.add('show');
      cursor.classList.remove('show');
      await run.wait(700);

      for (const [who, line] of data.bubbles) {
        const tile = tiles.find((t) => t.dataset.tile === (who || 'me'));
        tiles.forEach((t) => t.classList.toggle('talking', t === tile));
        // Each sentence appears a few seconds after it is said: here, a beat.
        await run.wait(900);
        const b = document.createElement('div');
        b.className = `bubble ${who ? 'bubble--them' : 'bubble--me'}`;
        if (who) {
          const name = document.createElement('span');
          name.className = 'bubble__who';
          name.textContent = who;
          b.append(name);
        }
        const p = document.createElement('p');
        p.textContent = line;
        b.append(p);
        // As the app: when it was said, from the start of the meeting, under the sentence.
        const at = document.createElement('span');
        at.className = 'bubble__at';
        const s = Math.max(0, Math.floor((Date.now() - started) / 1000) - 1);
        at.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
        b.append(at);
        chat.append(b);
        chat.scrollTo({ top: chat.scrollHeight, behavior: run.fast ? 'auto' : 'smooth' });
        await run.wait(600);
      }
      tiles.forEach((t) => t.classList.remove('talking'));

      await run.wait(700);
      await point(run, notesTab, 700);
      await click(run, notesTab);
      face('notes');
      cursor.classList.remove('show');
      await run.wait(400);
      await run.type(pad, data.jotted, 16);
      clearInterval(timer);
    },
    rest: 3000,
  });
}
