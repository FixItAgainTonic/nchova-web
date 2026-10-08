// A notetaker bot, or nchova. The bot's way: the call is on, the bot asks in and its tile joins the grid, everyone
// gets the notice and the red REC; then people talk to the bot's recording. nchova's way: the call is on, nobody
// joins, the pill shows on your own screen and the transcript fills the card. Back and forth, unless the switch picks.

import { film, type Run } from './run';

type Mode = 'them' | 'us';
interface Data {
  /** Who speaks (their tile lights up), what they say, and how nchova's card labels them. */
  bubbles: [string, string, string?][];
}

for (const root of document.querySelectorAll<HTMLElement>('[data-bot]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const tile = $('[data-bot-tile]'), toast = $('[data-toast]');
  // The REC mark and the line under the call, where the call app shows them (not every page has them).
  const banner = root.querySelector<HTMLElement>('[data-banner]'), rec = root.querySelector<HTMLElement>('[data-rec]');
  const card = $('[data-card]'), chat = $('[data-chat]'), pill = $('[data-pill]');
  const tiles = [...root.querySelectorAll<HTMLElement>('[data-tile]')];
  const picks = [...root.querySelectorAll<HTMLButtonElement>('[data-pick]')];

  let mode: Mode = 'them';
  let pinned = false;
  /** The film ended on its own: the next one shows the other way. */
  let flip = false;
  const setMode = (m: Mode) => {
    mode = m;
    root.dataset.mode = m;
    for (const b of picks) b.setAttribute('aria-pressed', String(b.dataset.pick === m));
  };

  /** Someone speaks: their tile lights up; with nchova, the sentence lands in the card. */
  const say = async (run: Run, who: string, line: string, label?: string) => {
    const speaker = tiles.find((t) => t.dataset.tile === (who || 'me'));
    tiles.forEach((t) => t.classList.toggle('talking', t === speaker));
    await run.wait(850);
    if (mode === 'us') {
      const b = document.createElement('div');
      b.className = `bubble ${who ? 'bubble--them' : 'bubble--me'}`;
      if (who) {
        const name = document.createElement('span');
        name.className = 'bubble__who';
        name.textContent = label ?? who;
        b.append(name);
      }
      const p = document.createElement('p');
      p.textContent = line;
      b.append(p);
      chat.append(b);
      chat.scrollTo({ top: chat.scrollHeight, behavior: run.fast ? 'auto' : 'smooth' });
    }
    await run.wait(500);
  };

  const controls = film(root, {
    reset() {
      if (flip && !pinned) mode = mode === 'them' ? 'us' : 'them';
      flip = false;
      setMode(mode);
      for (const el of [tile, toast, banner, rec, card, pill]) el?.classList.remove('show');
      tiles.forEach((t) => t.classList.remove('talking'));
      chat.textContent = '';
    },
    async play(run) {
      await run.wait(700);
      if (mode === 'them') {
        tile.classList.add('show');
        await run.wait(500);
        toast.classList.add('show');
        await run.wait(900);
        rec?.classList.add('show');
        banner?.classList.add('show');
        await run.wait(1600);
        toast.classList.remove('show');
      } else {
        pill.classList.add('show');
        await run.wait(700);
        card.classList.add('show');
        await run.wait(500);
      }
      for (const [who, line, label] of data.bubbles) await say(run, who, line, label);
      tiles.forEach((t) => t.classList.remove('talking'));
    },
    rest: 2800,
  });

  // Left alone the film alternates (it flips at the next start, while the scene is faded out); the switch keeps one.
  new MutationObserver(() => {
    if (root.classList.contains('ending')) flip = true;
  }).observe(root, { attributes: true, attributeFilter: ['class'] });

  for (const button of picks) {
    button.addEventListener('click', () => {
      pinned = true;
      setMode(button.dataset.pick as Mode);
      controls.restart();
    });
  }
}
