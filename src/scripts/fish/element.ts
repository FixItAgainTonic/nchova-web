// <n-fish size="22">: the mark swimming on the spot, as in the app's pills.
//
// Attributes: size (height in CSS px; or `fit` to take the height CSS gives it), period (s per tail
// beat), vigour, still, bones, ribs (colours).
// Properties: `levels` turns the ribs into a waveform (the dictation pill), `boost` speeds the beat.

import { BOX, IDLE, Midline, drawMark } from './mark';
import { fitCanvas, reducedMotion, subscribe, whenVisible } from './ticker';

class NFish extends HTMLElement {
  private canvas = document.createElement('canvas');
  private ctx = this.canvas.getContext('2d')!;
  private midline = new Midline();
  private phase = Math.random() * Math.PI * 2;
  private dpr = 1;
  private drawn = 0;
  private unsubscribe: (() => void) | null = null;
  private unobserve: (() => void) | null = null;
  /** Rib heights, 0…1, or null for the plain mark. */
  levels: number[] | null = null;
  /** Multiplies the beat: 1 is the app's idle swim. */
  boost = 1;

  static get observedAttributes() {
    return ['size', 'still'];
  }

  connectedCallback() {
    if (!this.canvas.isConnected) {
      this.canvas.setAttribute('aria-hidden', 'true');
      this.appendChild(this.canvas);
    }
    this.layout();
    if (this.hasAttribute('fit') && !this.resizer) {
      this.resizer = new ResizeObserver(() => this.layout());
      this.resizer.observe(this);
    }
    this.unobserve = whenVisible(this, (visible) => (visible ? this.start() : this.stop()));
  }

  private resizer: ResizeObserver | null = null;

  disconnectedCallback() {
    this.stop();
    this.unobserve?.();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.drawn = 0;
      this.layout();
      this.draw();
    }
  }

  private get size() {
    if (this.hasAttribute('fit')) return this.getBoundingClientRect().height || 24;
    return Number(this.getAttribute('size')) || 24;
  }

  get still() {
    return this.hasAttribute('still') || reducedMotion();
  }

  private layout() {
    const h = this.size, w = (h * BOX.w) / BOX.h;
    if (Math.abs(h - this.drawn) < 0.5) return;
    this.drawn = h;
    this.dpr = fitCanvas(this.canvas, w, h);
    this.style.width = `${w}px`;
    if (!this.hasAttribute('fit')) this.style.height = `${h}px`;
    this.draw();
  }

  private start() {
    if (this.unsubscribe) return;
    this.draw();
    this.unsubscribe = subscribe((dt) => {
      if (this.still && !this.levels) return;
      const period = Number(this.getAttribute('period')) || IDLE.period;
      this.phase += ((dt * Math.PI * 2) / period) * this.boost;
      this.draw();
    });
  }

  private stop() {
    this.unsubscribe?.();
    this.unsubscribe = null;
  }

  draw() {
    const { ctx, canvas } = this;
    const s = (this.size / BOX.h) * this.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(s, 0, 0, s, -BOX.x * s, -BOX.y * s);
    const vigour = Number(this.getAttribute('vigour')) || IDLE.vigour;
    const m = this.still ? null : this.midline.set(this.phase, vigour, IDLE.elevation);
    drawMark(ctx, m, {
      bones: this.getAttribute('bones') ?? undefined,
      ribs: this.getAttribute('ribs') ?? undefined,
      levels: this.levels,
    });
  }
}

if (!customElements.get('n-fish')) customElements.define('n-fish', NFish);

export type { NFish };
