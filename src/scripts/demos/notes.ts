// The Meetings window as the app shows it once a call has ended: the writer reads the meeting (a spinner and Stop in
// the notes' header, "writing notes…" in the list), the notes come in, built around what you jotted (the two light up
// together), the list row gets its notes mark and the header its buttons. Then a question in the chat on the right:
// the suggestions go, your question on the right in violet, the answer under it.

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
  const reading = $('[data-reading]'), summary = $('[data-summary]'), decisions = $('[data-decisions]'), actions = $('[data-actions]');
  const busy = $('[data-busy]'), tools = $('[data-tools]'), by = $('[data-by]');
  const rowWriting = $('[data-row-writing]'), rowNotes = $('[data-row-notes]');
  const askList = $('[data-asklist]'), q = $('[data-q]'), wait = $('[data-wait]'), a = $('[data-a]');
  const sections = [...root.querySelectorAll<HTMLElement>('[data-sec]')];
  const jots = [...root.querySelectorAll<HTMLElement>('[data-jot]')];
  const chips = [...root.querySelectorAll<HTMLElement>('[data-chip]')];

  const link = (key: string, li: HTMLElement) => {
    const j = FROM_JOT[key];
    if (j === undefined) return;
    jots[j].classList.add('linked');
    li.classList.add('linked');
  };

  const writing = (on: boolean) => {
    for (const el of [busy, reading, rowWriting]) el.classList.toggle('show', on);
    for (const el of [tools, by, rowNotes]) el.classList.toggle('show', !on);
  };

  film(root, {
    reset() {
      writing(true);
      sections.forEach((s) => s.classList.remove('show'));
      summary.textContent = '';
      decisions.textContent = '';
      actions.textContent = '';
      jots.forEach((j) => j.classList.remove('linked'));
      askList.classList.remove('gone');
      chips.forEach((c) => c.classList.remove('pressed'));
      for (const el of [q, wait, a]) el.classList.remove('show');
      a.textContent = '';
    },
    async play(run) {
      writing(true);
      await run.wait(1900);
      reading.classList.remove('show');

      // A model that streams: the notes appear as they are written, the spinner still going.
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
        const name = document.createElement('b');
        const rest = document.createElement('span');
        name.textContent = who;
        li.append(name, rest);
        actions.append(li);
        link(`action:${i}`, li);
        await run.type(rest, ` — ${what}`, 90);
        await run.wait(150);
      }
      writing(false);

      await run.wait(1100);
      chips[1].classList.add('pressed');
      await run.wait(350);
      askList.classList.add('gone');
      q.classList.add('show');
      wait.classList.add('show');
      await run.wait(1100);
      wait.classList.remove('show');
      a.classList.add('show');
      await run.type(a, data.answer, 60);
    },
    rest: 3600,
  });
}
