// A mark that swims around: wanders, keeps away from the edges or wraps past them, turns round the
// way a fish seen from the side does (it narrows to nothing and comes back the other way), and runs
// from the pointer. Its tail beats as fast as its speed needs: Bainbridge's U ≈ 0.75 · L · f.

import { BODY, BOX, CENTRE, IDLE, Midline, drawMark, type Paint } from './mark';

export interface World {
  w: number;
  h: number;
  pointer: { x: number; y: number } | null;
  edges: 'wrap' | 'turn';
  /** A point the school is heading for. */
  target?: { x: number; y: number } | null;
}

export interface SwimmerOptions {
  x: number;
  y: number;
  /** Height of the mark's box in CSS px. */
  size: number;
  /** Cruising speed in px/s. */
  cruise?: number;
  alpha?: number;
  paint?: Paint;
  dir?: 1 | -1;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export class Swimmer {
  x: number;
  y: number;
  size: number;
  cruise: number;
  alpha: number;
  paint: Paint;
  dir: 1 | -1;
  /** The horizontal scale now: -1…1, through 0 while turning round. */
  face: number;
  pitch = 0;
  speed: number;
  phase = Math.random() * Math.PI * 2;
  vigour = 1;
  /** Where to place the school member relative to the target. */
  offset = { x: 0, y: 0 };
  private t = Math.random() * 100;
  private seeds = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
  private cooldown = 0;
  private idleTurn = 6 + Math.random() * 12;
  private midline = new Midline();

  constructor(o: SwimmerOptions) {
    this.x = o.x;
    this.y = o.y;
    this.size = o.size;
    this.cruise = o.cruise ?? this.length * 0.45;
    this.speed = this.cruise;
    this.alpha = o.alpha ?? 1;
    this.paint = o.paint ?? {};
    this.dir = o.dir ?? (Math.random() < 0.5 ? 1 : -1);
    this.face = this.dir;
  }

  /** Body length in CSS px. */
  get length() {
    return (this.size * BODY) / BOX.h;
  }

  /** The nose, the middle and the tail, where the fish pushes the water (and the letters). */
  body(out: { x: number; y: number }[]) {
    const half = this.length / 2, c = Math.cos(this.pitch), s = Math.sin(this.pitch);
    out[0].x = this.x + this.face * c * half * 0.8;
    out[0].y = this.y + s * half * 0.8;
    out[1].x = this.x;
    out[1].y = this.y;
    out[2].x = this.x - this.face * c * half * 0.8;
    out[2].y = this.y - s * half * 0.8;
  }

  update(dt: number, world: World) {
    this.t += dt;
    const [a, b, c] = this.seeds, L = this.length, t = this.t;
    let pitchTarget = 0.32 * Math.sin(t * 0.37 + a) + 0.18 * Math.sin(t * 0.83 + b);
    let speedTarget = this.cruise * (0.75 + 0.5 * (0.5 + 0.5 * Math.sin(t * 0.29 + c)));
    let wantDir = this.dir;

    if (world.target) {
      const tx = world.target.x + this.offset.x, ty = world.target.y + this.offset.y;
      const dx = tx - this.x, dy = ty - this.y, d = Math.hypot(dx, dy);
      if (Math.abs(dx) > L * 1.2) wantDir = dx > 0 ? 1 : -1;
      pitchTarget = clamp(Math.atan2(dy, Math.abs(dx) + L), -0.6, 0.6) + 0.12 * Math.sin(t * 0.9 + a);
      speedTarget = this.cruise * clamp(d / (L * 2.5), 0.55, 2);
    }

    // Away from the top and bottom: a fish does not leave the water.
    const m = Math.max(L * 0.7, 30);
    if (world.edges === 'turn' || world.target) {
      if (this.y < m) pitchTarget = Math.max(pitchTarget, 0.5 * clamp((m - this.y) / m, 0, 1));
      if (this.y > world.h - m) pitchTarget = Math.min(pitchTarget, -0.5 * clamp((this.y - world.h + m) / m, 0, 1));
    }

    if (world.edges === 'turn' && !world.target) {
      if (this.x > world.w - m && this.dir > 0) wantDir = -1;
      if (this.x < m && this.dir < 0) wantDir = 1;
      this.idleTurn -= dt;
      if (this.idleTurn < 0) {
        this.idleTurn = 8 + Math.random() * 14;
        if (this.x > world.w * 0.25 && this.x < world.w * 0.75) wantDir = this.dir > 0 ? -1 : 1;
      }
    }

    if (world.pointer) {
      const dx = this.x - world.pointer.x, dy = this.y - world.pointer.y, d = Math.hypot(dx, dy);
      const R = L * 1.3 + 70;
      if (d < R) {
        const fear = 1 - d / R;
        speedTarget = Math.max(speedTarget, this.cruise * (1 + 3.5 * fear));
        pitchTarget = clamp(pitchTarget + (dy / R) * 1.4 * fear, -0.65, 0.65);
        // The pointer is ahead: turn round and go.
        if (dx * this.dir < 0 && fear > 0.25) wantDir = this.dir > 0 ? -1 : 1;
      }
    }

    this.cooldown -= dt;
    if (wantDir !== this.dir && this.cooldown <= 0) {
      this.dir = wantDir;
      this.cooldown = 1.4;
    }
    // Turning round takes about half a second.
    const step = dt * 3.2;
    this.face = this.dir > this.face ? Math.min(this.dir, this.face + step) : Math.max(this.dir, this.face - step);
    const turning = 1 - Math.abs(this.face);

    this.speed += (speedTarget * (1 - 0.6 * turning) - this.speed) * Math.min(1, dt * 1.6);
    this.pitch += (pitchTarget - this.pitch) * Math.min(1, dt * 1.3);
    this.x += this.face * Math.cos(this.pitch) * this.speed * dt;
    this.y += Math.sin(this.pitch) * this.speed * dt;

    if (world.edges === 'wrap') {
      const pad = L;
      if (this.x > world.w + pad) this.x = -pad;
      if (this.x < -pad) this.x = world.w + pad;
      if (this.y > world.h + pad) this.y = -pad;
      if (this.y < -pad) this.y = world.h + pad;
    }

    const beat = Math.max(this.speed / (0.75 * L), 1 / IDLE.period);
    this.phase += Math.PI * 2 * beat * dt;
    this.vigour = clamp(0.85 + 0.35 * (this.speed / this.cruise), 0.85, 1.7);
  }

  /** In CSS px: the caller has already scaled the context to the screen's density. */
  draw(ctx: CanvasRenderingContext2D, still = false) {
    const s = this.size / BOX.h;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.scale(Math.sign(this.face || 1) * Math.max(Math.abs(this.face), 0.04), 1);
    ctx.rotate(this.pitch);
    ctx.scale(s, s);
    ctx.translate(-CENTRE.x, -CENTRE.y);
    drawMark(ctx, still ? null : this.midline.set(this.phase, this.vigour, IDLE.elevation), this.paint);
    ctx.restore();
  }
}
