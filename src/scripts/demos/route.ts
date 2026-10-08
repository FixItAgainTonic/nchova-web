// Where your voice goes. The wires are drawn from where things are on screen (the pill, the model's chip, the note, the
// servers outside the Mac), again whenever the scene changes size; the packets are dots running along them. Their way:
// out to the servers while you speak, back as text. Ours: from the pill to the model on the Mac to the note, nothing out.

import { film, type Run } from './run';
import { subscribe, whenVisible } from '../fish/ticker';
import type { NFish } from '../fish/element';

type Mode = 'them' | 'us';
type Wire = 'out' | 'back' | 'local';
interface Data {
  meeting?: boolean;
  words: { written: string };
  them: { sent: string };
  us: { sent: string };
  states: Record<'transcribing' | 'typing' | 'done', string>;
}

const SVG = 'http://www.w3.org/2000/svg';

for (const root of document.querySelectorAll<HTMLElement>('[data-route]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends Element = HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const scene = $('.route__scene'), svg = $<SVGSVGElement>('[data-wires]'), dots = $<SVGGElement>('[data-packets]');
  const pill = $('[data-pill]'), chip = $('[data-chip]');
  // The pill itself carries data-state: the words go in its state slot.
  const state = pill.querySelector<HTMLElement>('.pill__state [data-state]'), icon = pill.querySelector<HTMLElement>('[data-icon]');
  const cloud = $('[data-cloud]'), sent = $('[data-sent]'), sentLabel = $('[data-sent-label]'), busy = $('[data-busy]');
  const said = $('[data-said]'), text = $('[data-text]'), win = $('.route__win'), stageBox = $('.route__stage');
  const wave = $('[data-wave]') as unknown as NFish;
  // The meeting pill swims instead of drawing a waveform.
  const levelsOn = !data.meeting;
  const chipFish = $('[data-chip-fish]') as unknown as NFish;
  const wires = Object.fromEntries(
    (['out', 'back', 'local'] as Wire[]).map((w) => [w, $<SVGPathElement>(`[data-wire="${w}"]`)]),
  ) as Record<Wire, SVGPathElement>;
  const picks = [...root.querySelectorAll<HTMLButtonElement>('[data-pick]')];

  // ----- The wires, from where things are.
  const draw = () => {
    const s = scene.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${s.width} ${s.height}`);
    const at = (el: Element, fx: number, fy: number) => {
      const r = el.getBoundingClientRect();
      return [r.left - s.left + r.width * fx, r.top - s.top + r.height * fy];
    };
    // Stacked when the CSS put the servers under the Mac, whatever made it do so.
    const stacked = cloud.getBoundingClientRect().top >= stageBox.getBoundingClientRect().bottom;
    // The pill where it rests: hidden, it is slid down out of the stage, and the wires would start there.
    const [px] = at(pill, 0.5, 0.5);
    const inner = (pill.offsetParent as HTMLElement).getBoundingClientRect();
    const py = inner.top - s.top + pill.offsetTop + pill.offsetHeight / 2;
    const [cx, cy] = at(cloud, stacked ? 0.35 : 0, stacked ? 0 : 0.42);
    const [bx, by] = at(cloud, stacked ? 0.65 : 0, stacked ? 0 : 0.62);
    const [tx, ty] = at(win, 0.94, 0.62);
    const [kx, ky] = at(chip, 0.5, 0.5);
    const curve = (x1: number, y1: number, x2: number, y2: number) =>
      stacked
        ? `M${x1} ${y1} C${x1} ${(y1 + y2) / 2} ${x2} ${(y1 + y2) / 2} ${x2} ${y2}`
        : `M${x1} ${y1} C${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2} ${y2}`;
    wires.out.setAttribute('d', curve(px, py, cx, cy));
    wires.back.setAttribute('d', curve(bx, by, tx, ty));
    // Ours never leaves the Mac: up from the pill to the model's chip, then across to the note.
    const k = chip.getBoundingClientRect();
    const kb = k.bottom - s.top, kl = k.left - s.left;
    wires.local.setAttribute(
      'd',
      `M${px} ${py} C${px} ${(py + kb) / 2} ${kx} ${(py + kb) / 2} ${kx} ${kb} L${kx} ${ky} L${kl} ${ky} ` +
        `C${(kl + tx) / 2} ${ky} ${(kl + tx) / 2} ${ty} ${tx} ${ty}`,
    );
  };
  new ResizeObserver(draw).observe(scene);

  // ----- The packets: dots along a wire, moved every frame while the scene is on screen.
  interface Packet {
    dot: SVGCircleElement;
    wire: SVGPathElement;
    t: number;
  }
  let packets: Packet[] = [];
  const send = (wire: Wire) => {
    const dot = document.createElementNS(SVG, 'circle');
    dot.setAttribute('r', '4.2');
    dot.setAttribute('class', `route__packet route__packet--${wire}`);
    dots.append(dot);
    packets.push({ dot, wire: wires[wire], t: 0 });
  };
  const move = (dt: number) => {
    voice(dt);
    for (const p of packets) {
      p.t += dt / 1.1;
      const len = p.wire.getTotalLength();
      const pt = p.wire.getPointAtLength(Math.min(1, p.t) * len);
      p.dot.setAttribute('cx', String(pt.x));
      p.dot.setAttribute('cy', String(pt.y));
      if (p.t >= 1) p.dot.remove();
    }
    packets = packets.filter((p) => p.t < 1);
  };

  // The ribs follow a voice while you speak, as in the dictation demo.
  const levels = [0.2, 0.2, 0.2, 0.2], targets = [0.2, 0.2, 0.2, 0.2];
  if (levelsOn) wave.levels = levels;
  let speaking = 0, syllable = 0;
  const voice = (dt: number) => {
    syllable -= dt;
    if (syllable <= 0) {
      syllable = 0.12 + Math.random() * 0.06;
      const loud = speaking * (0.55 + Math.random() * 0.45);
      for (let r = 0; r < 4; r++) targets[r] = 0.2 + loud * (0.5 + Math.random() * 0.5) * [0.8, 1, 0.95, 0.85][r];
    }
    for (let r = 0; r < 4; r++) levels[r] += (targets[r] - levels[r]) * Math.min(1, dt * (targets[r] > levels[r] ? 24 : 7));
  };
  let unsubscribe: (() => void) | null = null;
  whenVisible(root, (visible) => {
    if (visible && !unsubscribe) {
      draw();
      unsubscribe = subscribe(move);
    }
    if (!visible && unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
  });

  // ----- The film.
  let mode: Mode = 'them';
  let pinned = false;
  /** The film ended on its own: the next one shows the other way. */
  let flip = false;
  let seconds = 0;
  const setPill = (s: '' | 'rec' | keyof Data['states']) => {
    // The meeting pill has no words: it shows while the meeting is on, until the transcript is written.
    if (data.meeting) return pill.classList.toggle('show', s !== '' && s !== 'done');
    pill.dataset.state = s;
    if (s && s !== 'rec' && state && icon) {
      state.textContent = data.states[s];
      icon.dataset.icon = s === 'done' ? 'check' : s === 'typing' ? 'cursor' : 'spin';
    }
  };
  const setMode = (m: Mode) => {
    mode = m;
    root.dataset.mode = m;
    for (const b of picks) b.setAttribute('aria-pressed', String(b.dataset.pick === m));
    sentLabel.textContent = m === 'them' ? data.them.sent : data.us.sent;
  };

  /** Speaks for `ms`, sending a packet every so often along `wire`; counts the seconds that leave the Mac. */
  const speak = async (run: Run, ms: number, wire: Wire) => {
    setPill('rec');
    said.classList.add('show');
    speaking = 1;
    const out = wire === 'out';
    for (let t = 0; t < ms; t += 140) {
      if (!run.fast) send(wire);
      if (out) {
        seconds += 0.14;
        sent.textContent = seconds.toFixed(1);
      }
      await run.wait(140);
    }
    speaking = 0;
  };

  const controls = film(root, {
    reset() {
      if (flip && !pinned) mode = mode === 'them' ? 'us' : 'them';
      flip = false;
      setMode(mode);
      setPill('');
      speaking = 0;
      chipFish.boost = 1;
      seconds = 0;
      said.classList.remove('show', 'gone');
      text.textContent = '';
      sent.textContent = '0.0';
      busy.classList.remove('on');
      cloud.classList.remove('lit');
      chip.classList.remove('lit');
      packets.forEach((p) => p.dot.remove());
      packets = [];
    },
    async play(run) {
      await run.wait(300);
      if (mode === 'them') {
        cloud.classList.add('lit');
        await speak(run, 2600, 'out');
        setPill('transcribing');
        busy.classList.add('on');
        await run.wait(1300);
        busy.classList.remove('on');
        for (let i = 0; i < 6; i++) {
          if (!run.fast) send('back');
          await run.wait(110);
        }
        await run.wait(900);
        cloud.classList.remove('lit');
      } else {
        chip.classList.add('lit');
        chipFish.boost = 2.2;
        await speak(run, 2600, 'local');
        setPill('transcribing');
        await run.wait(1200);
        chipFish.boost = 1;
        chip.classList.remove('lit');
      }
      said.classList.add('gone');
      setPill('typing');
      await run.type(text, data.words.written, 34);
      setPill('done');
      await run.wait(900);
      setPill('');
    },
    rest: 2600,
  });

  // Left alone, the film goes back and forth between the two ways (it flips at the next start, while the scene is
  // faded out); a click on the switch keeps one.
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
