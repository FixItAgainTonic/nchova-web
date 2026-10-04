// An assistant reading your meetings through nchova's MCP server: the question, the tool calls
// (the little fish swims while each one runs), the answer with where it was said, and a summary
// saved back into the meeting.

import { film, type Run } from './run';

interface Data {
  q1: string;
  calls1: [string, string, string][];
  a1: string;
  cite: string;
  q2: string;
  calls2: [string, string, string][];
  a2: string;
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const rich = (s: string) => escape(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');

const el = (tag: string, cls: string, text?: string) => {
  const e = document.createElement(tag);
  e.className = cls;
  if (text) e.textContent = text;
  return e;
};

for (const root of document.querySelectorAll<HTMLElement>('[data-assistant]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const log = $('[data-log]'), input = $('[data-input]'), ph = $('[data-ph]'), send = $('[data-send]');

  const scroll = (run: Run) => log.scrollTo({ top: log.scrollHeight, behavior: run.fast ? 'auto' : 'smooth' });

  async function ask(run: Run, question: string) {
    ph.classList.add('hide');
    await run.type(input, question, 38);
    await run.wait(350);
    send.classList.add('pressed');
    await run.wait(180);
    send.classList.remove('pressed');
    input.textContent = '';
    ph.classList.remove('hide');
    const msg = el('div', 'msg msg--you');
    msg.append(el('p', '', question));
    log.append(msg);
    scroll(run);
    await run.wait(500);
  }

  async function call(run: Run, [tool, args, result]: [string, string, string]) {
    const box = el('div', 'tool');
    const head = el('p', 'tool__head');
    const fish = document.createElement('n-fish');
    fish.setAttribute('size', '15');
    fish.setAttribute('period', '0.9');
    head.append(fish, el('span', 'tool__from', 'nchova'), el('b', '', tool));
    const res = el('p', 'tool__res');
    box.append(head, el('code', 'tool__args', args), res);
    log.append(box);
    scroll(run);
    res.append(el('i', 'tool__spin'));
    await run.wait(1000);
    fish.setAttribute('still', '');
    res.textContent = `→ ${result}`;
    box.classList.add('done');
    await run.wait(350);
  }

  async function answer(run: Run, text: string, cite?: string) {
    const msg = el('div', 'msg msg--ai');
    const p = el('p', '');
    msg.append(p);
    log.append(msg);
    await run.type(p, text.replace(/\*/g, ''), 85);
    p.innerHTML = rich(text);
    if (cite) msg.append(el('span', 'msg__cite', cite));
    scroll(run);
  }

  film(root, {
    reset() {
      log.textContent = '';
      input.textContent = '';
      ph.classList.remove('hide');
    },
    async play(run) {
      await ask(run, data.q1);
      for (const c of data.calls1) await call(run, c);
      await answer(run, data.a1, data.cite);
      await run.wait(1400);
      await ask(run, data.q2);
      for (const c of data.calls2) await call(run, c);
      await answer(run, data.a2);
    },
    rest: 4200,
  });
}
