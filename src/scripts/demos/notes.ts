// The notes, written when the call ends: a moment of "writing notes…", then summary, decisions and
// action items appear, built around what you jotted in the margin (the two light up together).
// Then a question to the meeting, and the Markdown copy saved in your folder.

import { film } from './run';

interface Data {
  summary: string;
  decisions: string[];
  actions: [string, string][];
  answer: string;
}

/** Which jotted line each decision or action grew from. */
const FROM_JOT: Record<string, number> = { 'decision:0': 0, 'action:1': 1 };

for (const root of document.querySelectorAll<HTMLElement>('[data-notes]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const writing = $('[data-writing]'), summary = $('[data-summary]'), decisions = $('[data-decisions]'), actions = $('[data-actions]');
  const chat = $('[data-chat]'), q = $('[data-q]'), a = $('[data-a]'), foot = $('[data-foot]');
  const sections = [...root.querySelectorAll<HTMLElement>('[data-sec]')];
  const jots = [...root.querySelectorAll<HTMLElement>('[data-jot]')];
  const chips = [...root.querySelectorAll<HTMLElement>('[data-chip]')];

  const link = (key: string, li: HTMLElement) => {
    const j = FROM_JOT[key];
    if (j === undefined) return;
    jots[j].classList.add('linked');
    li.classList.add('linked');
  };

  film(root, {
    reset() {
      writing.classList.remove('show');
      sections.forEach((s) => s.classList.remove('show'));
      summary.textContent = '';
      decisions.textContent = '';
      actions.textContent = '';
      jots.forEach((j) => j.classList.remove('linked'));
      chat.classList.remove('show');
      q.classList.remove('show');
      a.textContent = '';
      chips.forEach((c) => c.classList.remove('pressed'));
      foot.classList.remove('show');
    },
    async play(run) {
      writing.classList.add('show');
      await run.wait(1700);
      writing.classList.remove('show');

      sections[0].classList.add('show');
      await run.type(summary, data.summary, 110);
      await run.wait(250);

      sections[1].classList.add('show');
      for (const [i, line] of data.decisions.entries()) {
        const li = document.createElement('li');
        decisions.append(li);
        link(`decision:${i}`, li);
        await run.type(li, line, 90);
        await run.wait(150);
      }

      sections[2].classList.add('show');
      for (const [i, [who, what]] of data.actions.entries()) {
        const li = document.createElement('li');
        const box = document.createElement('i');
        const name = document.createElement('b');
        const rest = document.createElement('span');
        name.textContent = who;
        li.append(box, name, rest);
        actions.append(li);
        link(`action:${i}`, li);
        await run.type(rest, ` — ${what}`, 90);
        await run.wait(150);
      }

      await run.wait(700);
      chat.classList.add('show');
      await run.wait(900);
      chips[1].classList.add('pressed');
      await run.wait(300);
      q.classList.add('show');
      await run.wait(600);
      await run.type(a, data.answer, 60);
      await run.wait(500);
      foot.classList.add('show');
    },
    rest: 3600,
  });
}
