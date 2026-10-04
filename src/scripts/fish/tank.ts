// A canvas with fish in it, filling its host element. The fish wander (or swim as a school), run
// from the pointer, and stop when the tank is off screen. With reduced motion they are drawn once,
// still and flat.

import { Swimmer, type World } from './swimmer';
import { fitCanvas, reducedMotion, subscribe, whenVisible } from './ticker';
import type { Paint } from './mark';

export interface FishSpec {
  size: number;
  alpha?: number;
  cruise?: number;
  paint?: Paint;
}

export interface TankOptions {
  fish: (w: number, h: number) => FishSpec[];
  edges: 'wrap' | 'turn';
  school?: boolean;
  pointer?: boolean;
  /** The tank is fixed to the viewport: scrolling drifts the fish past, the nearer ones faster. */
  parallax?: boolean;
  start?: (i: number, w: number, h: number) => { x: number; y: number; dir?: 1 | -1 };
}

export class Tank {
  readonly canvas = document.createElement('canvas');
  protected ctx = this.canvas.getContext('2d')!;
  protected dpr = 1;
  w = 0;
  h = 0;
  swimmers: Swimmer[] = [];
  protected world: World;
  protected still = reducedMotion();
  private t = Math.random() * 50;
  private unsubscribe: (() => void) | null = null;
  private lastScroll = window.scrollY;

  constructor(protected host: HTMLElement, protected options: TankOptions) {
    this.canvas.className = 'tank';
    this.canvas.setAttribute('aria-hidden', 'true');
    host.prepend(this.canvas);
    this.world = { w: 0, h: 0, pointer: null, edges: options.edges, target: null };

    new ResizeObserver(() => this.resize()).observe(host);

    if (options.pointer) {
      const target: HTMLElement | Window = options.parallax ? window : host;
      target.addEventListener('pointermove', (e) => {
        const ev = e as PointerEvent;
        if (ev.pointerType === 'touch') return;
        const r = this.canvas.getBoundingClientRect();
        this.world.pointer = { x: ev.clientX - r.left, y: ev.clientY - r.top };
      }, { passive: true });
      (options.parallax ? document.documentElement : host).addEventListener('pointerleave', () => (this.world.pointer = null));
    }

    if (options.parallax) {
      window.addEventListener('scroll', () => {
        const dy = window.scrollY - this.lastScroll;
        this.lastScroll = window.scrollY;
        if (this.still) return;
        const biggest = Math.max(...this.swimmers.map((s) => s.size));
        for (const s of this.swimmers) s.y -= dy * (0.12 + 0.45 * (s.size / biggest));
      }, { passive: true });
    }

    if (this.still) return;
    whenVisible(host, (visible) => {
      if (visible && !this.unsubscribe) this.unsubscribe = subscribe((dt) => this.frame(dt));
      if (!visible && this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }, '0px');
  }

  protected resize() {
    const r = this.host.getBoundingClientRect();
    const w = Math.round(r.width), h = Math.round(r.height);
    if (!w || !h || (w === this.w && h === this.h)) return;
    const first = !this.swimmers.length;
    const sx = this.w ? w / this.w : 1, sy = this.h ? h / this.h : 1;
    this.w = this.world.w = w;
    this.h = this.world.h = h;
    this.dpr = fitCanvas(this.canvas, w, h);
    if (first) this.populate();
    else for (const s of this.swimmers) {
      s.x *= sx;
      s.y *= sy;
    }
    this.layout();
    this.draw();
  }

  protected populate() {
    const specs = this.options.fish(this.w, this.h);
    this.swimmers = specs
      .map((spec, i) => {
        const at = this.options.start?.(i, this.w, this.h) ?? { x: Math.random() * this.w, y: Math.random() * this.h };
        const s = new Swimmer({ ...spec, x: at.x, y: at.y, dir: at.dir });
        if (this.options.school) s.offset = { x: (Math.random() - 0.5) * this.w * 0.28, y: (Math.random() - 0.5) * this.h * 0.4 };
        return s;
      })
      // Far ones first: the small fish are further away.
      .sort((a, b) => a.size - b.size);
  }

  /** For subclasses that lay something out at the tank's size. */
  protected layout() {}

  protected frame(dt: number) {
    this.t += dt;
    if (this.options.school) {
      const t = this.t;
      this.world.target = {
        x: this.w * (0.5 + 0.36 * Math.sin(t * 0.09) + 0.08 * Math.sin(t * 0.31)),
        y: this.h * (0.5 + 0.22 * Math.sin(t * 0.13 + 1.3)),
      };
    }
    for (const s of this.swimmers) s.update(dt, this.world);
    this.tick(dt);
    this.draw();
  }

  /** For subclasses: after the fish moved, before anything is drawn. */
  protected tick(_dt: number) {}

  protected background() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  protected draw() {
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.background();
    for (const s of this.swimmers) s.draw(this.ctx, this.still);
  }
}
