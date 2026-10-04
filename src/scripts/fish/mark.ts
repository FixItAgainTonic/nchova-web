// The nchova mark, in the app's 1024 grid, and the way it swims.
//
// A port of `SwimmingMark` (NchovaApp/MeetingPromptPanel.swift), numbers included. The mark is a
// fish seen from the side: the brace is the tail, the four bars are the ribs, the arc is the head.
// A fish swims by bending left and right, which in profile is towards us and away, so the mark is
// painted on the fish's own middle plane and that plane bends the way a fish's midline bends
// (Di Santo et al., PNAS 2021): a wave about one body long travelling from head to tail, smallest a
// quarter of the way down, six times wider at the tail than at the head. The eye sits 14° above
// side-on, which is what lets the wave show along the body.

export const INK = { deep: '#796cbf', violet: '#9184d9', lilac: '#d2cefd' };

export const STROKE = 54;
const RIB_WIDTH = 42;
const RIBS: [number, number][] = [
  [342, 130],
  [430, 230],
  [518, 300],
  [606, 210],
];

/** The ink of the mark, plus the room a piece needs when it comes nearer. */
export const BOX = { x: 160, y: 270, w: 695, h: 484 };
/** The middle of the ink: what turns and moves. */
export const CENTRE = { x: 507, y: 512 };

type Pt = [number, number];

function cubic(out: Pt[], p0: Pt, c1: Pt, c2: Pt, p1: Pt, n: number) {
  for (let i = 1; i <= n; i++) {
    const t = i / n, u = 1 - t;
    out.push([
      u * u * u * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * p1[0],
      u * u * u * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * p1[1],
    ]);
  }
}

function line(out: Pt[], p0: Pt, p1: Pt, n: number) {
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    out.push([p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t]);
  }
}

/** The brace: two ends on the left, the tip that meets the body on the right. */
const TAIL: Pt[] = (() => {
  const p: Pt[] = [[204, 362]];
  cubic(p, [204, 362], [240, 362], [246, 376], [246, 406], 6);
  line(p, [246, 406], [246, 474], 4);
  cubic(p, [246, 474], [246, 498], [254, 506], [272, 512], 5);
  cubic(p, [272, 512], [254, 518], [246, 526], [246, 550], 5);
  line(p, [246, 550], [246, 618], 4);
  cubic(p, [246, 618], [246, 648], [240, 662], [204, 662], 6);
  return p;
})();

const HEAD: Pt[] = (() => {
  const p: Pt[] = [[700, 342]];
  cubic(p, [700, 342], [766.9, 372.1], [810, 438.6], [810, 512], 14);
  cubic(p, [810, 512], [810, 585.4], [766.9, 651.9], [700, 682], 14);
  return p;
})();

/** A rib as an outline: a stadium, sampled so that every point can be moved on its own. */
function ribOutline(x: number, height: number): Pt[] {
  const r = RIB_WIDTH / 2, cx = x + r, top = 512 - height / 2 + r, bottom = 512 + height / 2 - r;
  const p: Pt[] = [];
  const arc = (cy: number, from: number) => {
    for (let i = 0; i <= 8; i++) {
      const a = from + (Math.PI * i) / 8;
      p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  };
  arc(top, Math.PI);
  line(p, p[p.length - 1], [cx + r, bottom], 4);
  arc(bottom, 0);
  line(p, p[p.length - 1], [cx - r, top], 4);
  return p;
}

const RIB_OUTLINES = RIBS.map(([x, h]) => ribOutline(x, h));

export interface Swim {
  /** Seconds per tail beat. A cruising fish does one to three a second; the app's one idles at 2.8. */
  period: number;
  /** 1 is a fish cruising: the tail sweeps a fifth of the body length from side to side. */
  vigour: number;
  /** How far above side-on the eye is, in degrees. */
  elevation: number;
}

export const IDLE: Swim = { period: 2.8, vigour: 1, elevation: 14 };

const NOSE = 837, LENGTH = 660, SAMPLES = 66;
/** Body lengths per wave, between an eel's 0.75 and a tuna's 1.14. */
const WAVELENGTH = 0.95;
/** How far the eye is: a tail swinging a tenth of a body towards us grows by a tenth. */
const EYE = 700;

/** One instant of the stroke: the fish's midline walked from the nose to the end of the tail. */
export class Midline {
  private xs = new Float64Array(SAMPLES + 1);
  private depths = new Float64Array(SAMPLES + 1);
  private lift = 0;

  set(phase: number, vigour = 1, elevation = 14) {
    const xs = this.xs, depths = this.depths;
    this.lift = Math.sin((elevation * Math.PI) / 180);
    const step = LENGTH / SAMPLES, k = (2 * Math.PI) / WAVELENGTH;
    xs[0] = NOSE;
    depths[0] = 0;
    for (let i = 0; i < SAMPLES; i++) {
      // Half the side-to-side sweep at `u` body lengths from the nose, and the slope of the wave there.
      const u = (i + 0.5) / SAMPLES;
      const reach = (0.05 - 0.13 * u + 0.28 * u * u) / 2, grows = (-0.13 + 0.56 * u) / 2;
      const turn = Math.atan(vigour * (grows * Math.sin(k * u - phase) + reach * k * Math.cos(k * u - phase)));
      xs[i + 1] = xs[i] - step * Math.cos(turn);
      depths[i + 1] = depths[i] + step * Math.sin(turn);
    }
    // It swims on the spot, around its own middle: the bending shortens it from both ends.
    const drift = (LENGTH - (xs[0] - xs[SAMPLES])) / 2;
    let middle = 0;
    for (let i = 0; i <= SAMPLES; i++) middle += depths[i];
    middle /= SAMPLES + 1;
    for (let i = 0; i <= SAMPLES; i++) {
      xs[i] -= drift;
      depths[i] -= middle;
    }
    return this;
  }

  /** Where a point of the flat mark is seen now. */
  project(px: number, py: number, out: Pt) {
    const at = Math.min(Math.max((NOSE - px) / LENGTH, 0), 1) * SAMPLES;
    const i = Math.min(Math.floor(at), SAMPLES - 1), f = at - i;
    const x = this.xs[i] + (this.xs[i + 1] - this.xs[i]) * f;
    const depth = this.depths[i] + (this.depths[i + 1] - this.depths[i]) * f;
    // Seen from a little above, what is nearer is also lower.
    out[0] = x;
    out[1] = 512 + (py - 512) * (1 + depth / EYE) + depth * this.lift;
  }
}

export interface Paint {
  /** The brackets: tail and head. */
  bones?: string;
  ribs?: string;
  /** Rib heights as a fraction of their own, for the waveform the dictation pill shows. */
  levels?: ArrayLike<number> | null;
}

const scratch: Pt = [0, 0];

function trace(ctx: CanvasRenderingContext2D, pts: Pt[], m: Midline | null, close: boolean) {
  for (let i = 0; i < pts.length; i++) {
    let x = pts[i][0], y = pts[i][1];
    if (m) {
      m.project(x, y, scratch);
      x = scratch[0];
      y = scratch[1];
    }
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  if (close) ctx.closePath();
}

/** Draws the mark in grid units: the caller sets the transform. `m` null is the flat mark. */
export function drawMark(ctx: CanvasRenderingContext2D, m: Midline | null, paint: Paint = {}) {
  ctx.lineWidth = STROKE;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = paint.bones ?? INK.deep;
  ctx.beginPath();
  trace(ctx, TAIL, m, false);
  trace(ctx, HEAD, m, false);
  ctx.stroke();

  ctx.fillStyle = paint.ribs ?? INK.violet;
  ctx.beginPath();
  if (paint.levels) {
    for (let r = 0; r < RIBS.length; r++) {
      const level = Math.max(0.14, Math.min(1, paint.levels[r] ?? 1));
      trace(ctx, ribOutline(RIBS[r][0], Math.max(RIB_WIDTH, RIBS[r][1] * level)), m, true);
    }
  } else {
    for (const rib of RIB_OUTLINES) trace(ctx, rib, m, true);
  }
  ctx.fill();
}

/** Body length in grid units, for the swimmers' speed. */
export const BODY = LENGTH;
