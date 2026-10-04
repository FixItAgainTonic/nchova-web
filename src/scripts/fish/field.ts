// The opening: a page of transcript, set small and faint, flowing around the headline. The fish
// swim through it and the letters part around them and close up behind, like water; what a fish
// touches turns violet for a moment. The pointer stirs it too.

import { Tank, type TankOptions } from './tank';

type Line = [time: string, who: string, text: string];

const PAPER = '#f2eee6';
const KIND = { text: 0, who: 1, time: 2 } as const;

interface Push {
  x: number;
  y: number;
  r: number;
  k: number;
}

export class TextField extends Tank {
  private base = document.createElement('canvas');
  private lines: Line[];
  private cols = 0;
  private rows = 0;
  private cw = 8;
  private lh = 22;
  private x0 = 0;
  private y0 = 0;
  private font = '';
  private chars: string[] = [];
  private kinds = new Uint8Array(0);
  private trail: { x: number; y: number; r: number; age: number }[][] = [];
  private since = 0;
  private stamp = new Uint32Array(0);
  private frameNo = 0;
  private ready = false;
  private styles: string[][] = [];

  constructor(host: HTMLElement, options: TankOptions, lines: Line[]) {
    super(host, options);
    this.lines = lines;
    // Letters can only be laid out once the face is there.
    document.fonts.load('400 13px "DM Mono"').finally(() => {
      this.ready = true;
      this.layout();
      this.draw();
    });
    // The headline can reflow without the tank changing size (a font arriving late).
    new ResizeObserver(() => {
      if (this.ready) {
        this.layout();
        this.draw();
      }
    }).observe(host.querySelector('[data-avoid]')?.parentElement ?? host);
  }

  /** Where the hero's own words are: the field leaves room around each line of them. */
  private holes(): DOMRect[] {
    const origin = this.canvas.getBoundingClientRect();
    const out: DOMRect[] = [];
    const padX = this.cw * 2, padY = this.lh * 0.45;
    for (const el of this.host.querySelectorAll<HTMLElement>('[data-avoid]')) {
      let rects: DOMRect[];
      if (el.dataset.avoid === 'lines') {
        const range = document.createRange();
        range.selectNodeContents(el);
        rects = [...range.getClientRects()];
      } else rects = [el.getBoundingClientRect()];
      for (const r of rects) {
        if (!r.width || !r.height) continue;
        out.push(new DOMRect(r.left - origin.left - padX, r.top - origin.top - padY, r.width + padX * 2, r.height + padY * 2));
      }
    }
    return out;
  }

  protected layout() {
    if (!this.ready || !this.w) return;
    const small = this.w < 700;
    const size = small ? 11.5 : 13;
    this.lh = small ? 19 : 22;
    this.font = `400 ${size}px "DM Mono", ui-monospace, monospace`;
    const ctx = this.ctx;
    ctx.font = this.font;
    this.cw = ctx.measureText('0').width;
    this.cols = Math.floor(this.w / this.cw);
    // The nav sits over the first lines: the page starts below it.
    this.y0 = 78;
    this.rows = Math.ceil((this.h - this.y0) / this.lh);
    this.x0 = (this.w - this.cols * this.cw) / 2;
    const n = this.cols * this.rows;
    this.chars = new Array(n).fill('');
    this.kinds = new Uint8Array(n);
    this.stamp = new Uint32Array(n);

    // Which cells are free.
    const free = new Uint8Array(n).fill(1);
    for (const h of this.holes()) {
      const c0 = Math.max(0, Math.floor((h.left - this.x0) / this.cw)), c1 = Math.min(this.cols - 1, Math.ceil((h.right - this.x0) / this.cw));
      const r0 = Math.max(0, Math.floor((h.top - this.y0) / this.lh)), r1 = Math.min(this.rows - 1, Math.floor((h.bottom - this.y0) / this.lh));
      for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) free[r * this.cols + c] = 0;
    }

    // The words, in order, as many times as it takes to fill the page.
    const words: { s: string; kind: number }[] = [];
    for (const [time, who, text] of this.lines) {
      words.push({ s: time, kind: KIND.time }, { s: `${who}`, kind: KIND.who });
      for (const w of text.split(' ')) words.push({ s: w, kind: KIND.text });
    }
    let wi = 0;
    for (let r = 0; r < this.rows; r++) {
      let c = 0;
      while (c < this.cols) {
        if (!free[r * this.cols + c]) {
          c++;
          continue;
        }
        let run = 0;
        while (c + run < this.cols && free[r * this.cols + c + run]) run++;
        // A sliver beside the headline would stack single words: leave it blank.
        if (run < 18 && run < this.cols) {
          c += run;
          continue;
        }
        // Fill this stretch with whole words.
        let at = c;
        const end = c + run;
        let placed = 0;
        while (true) {
          const word = words[wi % words.length];
          if (at + word.s.length > end) break;
          for (let i = 0; i < word.s.length; i++) {
            this.chars[r * this.cols + at + i] = word.s[i];
            this.kinds[r * this.cols + at + i] = word.kind;
          }
          at += word.s.length + 1;
          wi++;
          placed++;
          if (at >= end) break;
        }
        if (!placed) wi++;
        c = end;
      }
    }

    // Faint ink for the words, a little stronger for the names; the stirred ones go violet.
    const ink = '29, 26, 43', violet = '121, 108, 191';
    const base = [0.15, 0.3, 0.19];
    this.styles = [0, 1, 2].map((kind) =>
      Array.from({ length: 9 }, (_, level) => {
        const a = Math.min(0.95, base[kind] + level * 0.09);
        return level === 0 ? `rgba(${kind === KIND.who ? violet : ink}, ${a})` : `rgba(${violet}, ${a})`;
      }),
    );

    // The still page, drawn once.
    this.base.width = this.canvas.width;
    this.base.height = this.canvas.height;
    const b = this.base.getContext('2d')!;
    b.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    b.fillStyle = PAPER;
    b.fillRect(0, 0, this.w, this.h);
    b.font = this.font;
    b.textBaseline = 'middle';
    for (let i = 0; i < n; i++) {
      const ch = this.chars[i];
      if (!ch) continue;
      b.fillStyle = this.styles[this.kinds[i]][0];
      b.fillText(ch, this.x0 + (i % this.cols) * this.cw, this.y0 + Math.floor(i / this.cols) * this.lh + this.lh / 2);
    }
  }

  protected tick(dt: number) {
    // Every fish leaves a wake: where it was, closing up over a second.
    while (this.trail.length < this.swimmers.length) this.trail.push([]);
    this.since += dt;
    const drop = this.since > 0.07;
    if (drop) this.since = 0;
    this.swimmers.forEach((s, i) => {
      const t = this.trail[i];
      for (const p of t) p.age += dt;
      while (t.length && t[0].age > 1.1) t.shift();
      if (drop) t.push({ x: s.x, y: s.y, r: Math.min(s.length * 0.3, 80), age: 0 });
    });
  }

  private pushes(): Push[] {
    const out: Push[] = [];
    const pts = [{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }];
    this.swimmers.forEach((s, i) => {
      s.body(pts);
      const r = Math.min(s.length * 0.36 + 12, 96);
      for (const p of pts) out.push({ x: p.x, y: p.y, r, k: 1 });
      for (const p of this.trail[i] ?? []) {
        const life = 1 - p.age / 1.1;
        out.push({ x: p.x, y: p.y, r: p.r * (0.5 + 0.5 * life), k: life * life * 0.55 });
      }
    });
    if (this.world.pointer) out.push({ x: this.world.pointer.x, y: this.world.pointer.y, r: 64, k: 0.9 });
    return out;
  }

  protected background() {
    const ctx = this.ctx;
    if (!this.ready || !this.base.width) {
      ctx.fillStyle = PAPER;
      ctx.fillRect(0, 0, this.w, this.h);
      return;
    }
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(this.base, 0, 0);
    ctx.restore();
    if (this.still) return;

    // The letters near a fish: rubbed out where they were, written again where the water took them.
    const pushes = this.pushes();
    const frame = ++this.frameNo;
    const cells: number[] = [];
    for (const p of pushes) {
      const c0 = Math.max(0, Math.floor((p.x - p.r - this.x0) / this.cw)), c1 = Math.min(this.cols - 1, Math.ceil((p.x + p.r - this.x0) / this.cw));
      const r0 = Math.max(0, Math.floor((p.y - p.r - this.y0) / this.lh)), r1 = Math.min(this.rows - 1, Math.ceil((p.y + p.r - this.y0) / this.lh));
      for (let r = r0; r <= r1; r++)
        for (let c = c0; c <= c1; c++) {
          const i = r * this.cols + c;
          if (!this.chars[i] || this.stamp[i] === frame) continue;
          this.stamp[i] = frame;
          cells.push(i);
        }
    }
    if (!cells.length) return;

    ctx.fillStyle = PAPER;
    for (const i of cells) ctx.fillRect(this.x0 + (i % this.cols) * this.cw, this.y0 + Math.floor(i / this.cols) * this.lh, this.cw, this.lh);

    ctx.font = this.font;
    ctx.textBaseline = 'middle';
    for (const i of cells) {
      const cx = this.x0 + (i % this.cols) * this.cw, cy = this.y0 + Math.floor(i / this.cols) * this.lh + this.lh / 2;
      let dx = 0, dy = 0, glow = 0;
      for (const p of pushes) {
        const ex = cx + this.cw / 2 - p.x, ey = cy - p.y, d = Math.hypot(ex, ey);
        if (d >= p.r || d < 0.001) continue;
        // Pushed out of the way, at most about two letters' worth: water parting, not an explosion.
        const f = 1 - d / p.r, push = p.k * f * f * Math.min(p.r, 70) * 0.34;
        dx += (ex / d) * push;
        dy += (ey / d) * push;
        glow += p.k * f;
      }
      ctx.fillStyle = this.styles[this.kinds[i]][Math.min(8, Math.floor(glow * 6))];
      ctx.fillText(this.chars[i], cx + dx, cy + dy);
    }
  }
}

