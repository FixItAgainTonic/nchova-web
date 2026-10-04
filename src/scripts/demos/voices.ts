// Voices on a score: one lane per voice, the bars drawn like the mark's ribs as the meeting plays.
// A voice it has heard before gets its name as soon as it is clearly them; one that only looks
// alike is offered ("maybe"), and the one it never heard is asked about at the end. Only among the
// invitees, as the app does.

import { film, type Run } from './run';

interface Data {
  voice: string;
  people: string[];
  maybe: string;
  known: string;
}

/** Who speaks when: lane, from, to (fractions of the meeting). Lane 0 is you. */
const SEGMENTS: [number, number, number][] = [
  [0, 0.0, 0.09],
  [1, 0.11, 0.25],
  [0, 0.27, 0.32],
  [2, 0.34, 0.49],
  [1, 0.51, 0.57],
  [3, 0.59, 0.73],
  [0, 0.75, 0.8],
  [2, 0.82, 0.9],
  [3, 0.92, 1.0],
];
const SECONDS = 9;

for (const root of document.querySelectorAll<HTMLElement>('[data-voices]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const playhead = $('[data-playhead]'), maybe = $('[data-maybe]'), maybeText = $('[data-maybe-text]'), yes = $('[data-yes]');
  const ask = $('[data-ask]'), input = $('[data-input]'), save = $('[data-save]');
  const lanes = [...root.querySelectorAll<HTMLElement>('[data-lane]')];
  const names = lanes.map((l) => l.querySelector<HTMLElement>('[data-name]')!);
  const badges = lanes.map((l) => l.querySelector<HTMLElement>('[data-badge]')!);
  const people = [...root.querySelectorAll<HTMLElement>('[data-person]')];

  // The bars, drawn once, shown as the playhead passes them.
  const bars: { el: HTMLElement; at: number }[] = [];
  for (const [lane, from, to] of SEGMENTS) {
    const track = lanes[lane].querySelector<HTMLElement>('[data-track]')!;
    const n = Math.max(3, Math.round((to - from) * 70));
    for (let k = 0; k < n; k++) {
      const at = from + ((to - from) * (k + 0.5)) / n;
      const bar = document.createElement('i');
      // Louder in the middle of a sentence, like speech.
      const env = Math.sin(((k + 0.5) / n) * Math.PI);
      bar.style.left = `${at * 100}%`;
      bar.style.setProperty('--h', `${Math.round(22 + 78 * env * (0.45 + Math.random() * 0.55))}%`);
      track.append(bar);
      bars.push({ el: bar, at });
    }
  }

  let t = 0;
  const firstWord = (lane: number) => SEGMENTS.find(([l]) => l === lane)![1];

  /** Plays the meeting through: the playhead walks and the bars come up behind it. */
  async function roll(run: Run) {
    if (run.fast) t = 1;
    const start = performance.now();
    while (t < 1) {
      t = Math.min(1, (performance.now() - start) / 1000 / SECONDS);
      playhead.style.left = `${t * 100}%`;
      for (const b of bars) if (b.at <= t) b.el.classList.add('on');
      await run.wait(40);
    }
    playhead.style.left = '100%';
    for (const b of bars) b.el.classList.add('on');
  }

  const until = async (run: Run, at: number) => {
    while (t < at && !run.fast) await run.wait(40);
  };

  const rename = async (run: Run, lane: number, name: string) => {
    names[lane].classList.add('typing');
    await run.erase(names[lane], Infinity, 30);
    await run.type(names[lane], name, 22);
    names[lane].classList.remove('typing');
  };

  film(root, {
    reset() {
      t = 0;
      playhead.style.left = '0%';
      bars.forEach((b) => b.el.classList.remove('on'));
      names.forEach((n, i) => (n.textContent = i === 0 ? n.textContent : ''));
      names.forEach((n) => n.classList.remove('named'));
      badges.forEach((b) => (b.textContent = ''));
      lanes.forEach((l) => l.classList.remove('heard'));
      people.forEach((p) => p.classList.remove('ok'));
      maybe.classList.remove('show');
      ask.classList.remove('show');
      input.textContent = '';
    },
    async play(run) {
      lanes[0].classList.add('heard');
      const playing = roll(run);
      playing.catch(() => {});

      // Voice 1: heard before, and invited: named straight away.
      await until(run, firstWord(1));
      lanes[1].classList.add('heard');
      await run.type(names[1], `${data.voice} 1`, 30);
      await until(run, firstWord(1) + 0.07);
      await rename(run, 1, data.people[0]);
      names[1].classList.add('named');
      badges[1].textContent = data.known;
      people[0].classList.add('ok');

      // Voice 2: only looks like someone known, so it is offered, not named.
      await until(run, firstWord(2));
      lanes[2].classList.add('heard');
      await run.type(names[2], `${data.voice} 2`, 30);
      await until(run, firstWord(2) + 0.06);
      maybeText.textContent = `${data.maybe} ${data.people[1]}?`;
      maybe.classList.add('show');
      await until(run, firstWord(2) + 0.15);
      yes.classList.add('pressed');
      await run.wait(260);
      yes.classList.remove('pressed');
      maybe.classList.remove('show');
      await rename(run, 2, data.people[1]);
      names[2].classList.add('named');
      people[1].classList.add('ok');

      // Voice 3: never heard. It stays a number until the end.
      await until(run, firstWord(3));
      lanes[3].classList.add('heard');
      await run.type(names[3], `${data.voice} 3`, 30);

      await playing;
      await run.wait(600);
      ask.classList.add('show');
      await run.wait(900);
      await run.type(input, data.people[2], 14);
      await run.wait(350);
      save.classList.add('pressed');
      await run.wait(220);
      save.classList.remove('pressed');
      ask.classList.remove('show');
      await run.wait(300);
      await rename(run, 3, data.people[2]);
      names[3].classList.add('named');
      people[2].classList.add('ok');
    },
    rest: 3400,
  });
}
