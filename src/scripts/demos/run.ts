// Demos play like a short film while they are on screen, from the top every time they come back.
// With reduced motion they play once, instantly, and stay on their last frame.

import { reducedMotion, whenVisible } from '../fish/ticker';

export class Stopped extends Error {}

export class Run {
  constructor(
    readonly signal: AbortSignal,
    readonly fast: boolean,
  ) {}

  get stopped() {
    return this.signal.aborted;
  }

  wait(ms: number): Promise<void> {
    if (this.signal.aborted) return Promise.reject(new Stopped());
    if (this.fast) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, ms);
      this.signal.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new Stopped());
      }, { once: true });
    });
  }

  /** Types `text` into `el`, a character at a time, at about `cps` characters a second. */
  async type(el: HTMLElement | Text, text: string, cps = 30) {
    if (this.fast) {
      el.textContent += text;
      return;
    }
    for (const ch of text) {
      el.textContent += ch;
      await this.wait((1000 / cps) * (ch === ' ' ? 0.6 : 0.7 + Math.random() * 0.6));
    }
  }

  /** Deletes `n` characters from the end of `el`, like holding backspace. */
  async erase(el: HTMLElement, n = Infinity, cps = 40) {
    const text = el.textContent ?? '';
    const keep = Math.max(0, text.length - n);
    if (this.fast) {
      el.textContent = text.slice(0, keep);
      return;
    }
    for (let i = text.length - 1; i >= keep; i--) {
      el.textContent = text.slice(0, i);
      await this.wait(1000 / cps);
    }
  }
}

interface Film {
  /** Back to the first frame. */
  reset(): void;
  play(run: Run): Promise<void>;
  /** Pause between the end and the next start. */
  rest?: number;
}

export function film(root: HTMLElement, f: Film) {
  const fast = reducedMotion();
  let controller: AbortController | null = null;

  const start = async () => {
    controller?.abort();
    const mine = (controller = new AbortController());
    const run = new Run(mine.signal, fast);
    try {
      do {
        f.reset();
        root.classList.remove('ending');
        await run.wait(400);
        await f.play(run);
        if (fast) return;
        await run.wait(f.rest ?? 3200);
        root.classList.add('ending');
        await run.wait(600);
      } while (!run.stopped);
    } catch (e) {
      if (!(e instanceof Stopped)) throw e;
    }
  };

  const stop = () => {
    controller?.abort();
    controller = null;
  };

  whenVisible(root, (visible) => {
    if (visible && !controller) start();
    if (!visible && !fast) stop();
  }, '-15% 0px');

  return {
    /** Takes over: stops the film so the visitor can play with the demo. */
    interrupt: stop,
    restart: start,
  };
}
