// Dictation, as the app does it: hold Fn, the pill shows the mark with its ribs moving to your
// voice, let go, it transcribes, cleans up (crossing out, never adding) and types where the cursor
// is. The visitor can hold the key and dictate the next sentence themselves.

import { film, Run, Stopped } from './run';
import { subscribe, whenVisible } from '../fish/ticker';
import type { NFish } from '../fish/element';

interface Mark {
  kind: string;
  from: string;
  to?: string;
}
interface Script {
  spoken: string;
  marks: Mark[];
  written: string;
}
interface Data {
  states: Record<'transcribing' | 'cleaning' | 'typing' | 'done', string>;
  scripts: Script[];
}

const el = (tag: string, cls: string, text?: string) => {
  const e = document.createElement(tag);
  e.className = cls;
  if (text) e.textContent = text;
  return e;
};

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const root of document.querySelectorAll<HTMLElement>('[data-dictation]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const text = $('[data-text]'), caret = $('[data-caret]'), said = $('[data-said]'), saidText = $('[data-said-text]');
  const pill = $('[data-pill]'), state = $('[data-state]'), icon = $('[data-icon]'), key = $<HTMLButtonElement>('[data-key]');
  const wave = $('[data-wave]') as unknown as NFish;

  // The ribs follow a voice: a new syllable every 120-180 ms, fast attack, slow decay.
  const levels = [0.2, 0.2, 0.2, 0.2], targets = [0.2, 0.2, 0.2, 0.2];
  wave.levels = levels;
  let speaking = 0, syllable = 0;
  const voice = (dt: number) => {
    syllable -= dt;
    if (syllable <= 0) {
      syllable = 0.12 + Math.random() * 0.06;
      const loud = speaking * (0.55 + Math.random() * 0.45);
      for (let r = 0; r < 4; r++) targets[r] = 0.2 + loud * (0.5 + Math.random() * 0.5) * [0.8, 1, 0.95, 0.85][r];
    }
    for (let r = 0; r < 4; r++) {
      const rate = targets[r] > levels[r] ? 24 : 7;
      levels[r] += (targets[r] - levels[r]) * Math.min(1, dt * rate);
    }
  };
  let unsubscribe: (() => void) | null = null;
  whenVisible(root, (visible) => {
    if (visible && !unsubscribe) unsubscribe = subscribe(voice);
    if (!visible && unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
  });

  const setPill = (s: '' | 'rec' | keyof Data['states']) => {
    pill.dataset.state = s;
    if (s && s !== 'rec') {
      state.textContent = data.states[s];
      icon.dataset.icon = s === 'done' ? 'check' : s === 'typing' ? 'cursor' : 'spin';
    }
  };

  function spoken(s: Script) {
    saidText.textContent = '';
    const words: HTMLElement[] = [];
    const marks: HTMLElement[] = [];
    const ranges = s.marks
      .map((m) => ({ m, start: s.spoken.indexOf(m.from) }))
      .filter((r) => r.start >= 0)
      .sort((a, b) => a.start - b.start);
    const add = (parent: HTMLElement, str: string) => {
      for (const part of str.split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) parent.append(part);
        else {
          const w = el('span', 'w', part);
          parent.append(w);
          words.push(w);
        }
      }
    };
    let pos = 0;
    for (const { m, start } of ranges) {
      add(saidText, s.spoken.slice(pos, start));
      const span = el('span', `mk mk--${m.kind}`);
      if (m.to) span.dataset.to = m.to;
      add(span, m.from);
      saidText.append(span);
      marks.push(span);
      pos = start + m.from.length;
    }
    add(saidText, s.spoken.slice(pos));
    return { words, marks };
  }

  let paragraphs = 0;
  function clearDoc() {
    text.querySelectorAll('p').forEach((p) => p.remove());
    text.append(caret);
    paragraphs = 0;
  }

  interface Hold {
    held: () => boolean;
    released: Promise<void>;
  }

  async function dictate(run: Run, s: Script, hold?: Hold) {
    const { words, marks } = spoken(s);
    said.classList.add('show');
    key.classList.add('down');
    setPill('rec');
    await run.wait(250);
    for (const w of words) {
      speaking = 1;
      w.classList.add('on');
      await run.wait(hold && !hold.held() ? 45 : 150 + (w.textContent?.length ?? 3) * 30);
    }
    speaking = 0;
    if (hold) await hold.released;
    else await run.wait(420);
    key.classList.remove('down');

    setPill('transcribing');
    await run.wait(700);
    if (marks.length) {
      if (s.marks.some((m) => m.kind === 'strike')) setPill('cleaning');
      for (const m of marks) {
        m.classList.add('on');
        await run.wait(480);
      }
      await run.wait(650);
    }

    setPill('typing');
    if (paragraphs >= 3) clearDoc();
    const p = el('p', 'dd__line');
    const node = document.createTextNode('');
    p.append(node, caret);
    text.append(p);
    paragraphs++;
    await run.type(node, s.written, 70);
    // What the vocabulary fixed lights up for a moment where it landed.
    const fixed = s.marks.filter((m) => m.kind === 'fix' && m.to).map((m) => m.to!);
    if (fixed.length) {
      let html = escape(s.written);
      for (const f of fixed) html = html.replace(escape(f), `<span class="dd__fixed">${escape(f)}</span>`);
      p.innerHTML = html;
      p.append(caret);
    }
    setPill('done');
    await run.wait(900);
    setPill('');
    said.classList.remove('show');
    await run.wait(500);
  }

  let next = 0;

  const reset = () => {
    clearDoc();
    setPill('');
    said.classList.remove('show');
    key.classList.remove('down');
    speaking = 0;
    next = 0;
  };

  const auto = film(root, {
    reset,
    async play(run) {
      for (const s of data.scripts) {
        await dictate(run, s);
        next++;
        await run.wait(500);
      }
    },
    rest: 2600,
  });

  // The visitor's turn: hold the key (or Space/Enter on it) and the next sentence is theirs.
  let manual: AbortController | null = null;
  let held = false;
  let release: () => void = () => {};
  let resume = 0;

  const down = (e: Event) => {
    e.preventDefault();
    if (held) return;
    held = true;
    auto.interrupt();
    root.classList.remove('ending');
    clearTimeout(resume);
    manual?.abort();
    const mine = (manual = new AbortController());
    speaking = 0;
    setPill('');
    said.classList.remove('show');
    const released = new Promise<void>((r) => (release = r));
    const s = data.scripts[next % data.scripts.length];
    next++;
    dictate(new Run(mine.signal, false), s, { held: () => held, released })
      .then(() => {
        resume = window.setTimeout(() => auto.restart(), 9000);
      })
      .catch((err) => {
        if (!(err instanceof Stopped)) throw err;
      });
  };
  const up = () => {
    if (!held) return;
    held = false;
    release();
  };

  key.addEventListener('pointerdown', (e) => {
    key.setPointerCapture(e.pointerId);
    down(e);
  });
  key.addEventListener('pointerup', up);
  key.addEventListener('pointercancel', up);
  key.addEventListener('keydown', (e) => {
    if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) down(e);
  });
  key.addEventListener('keyup', (e) => {
    if (e.key === ' ' || e.key === 'Enter') up();
  });
  key.addEventListener('contextmenu', (e) => e.preventDefault());
}
