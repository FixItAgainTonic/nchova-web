// One animation loop for the whole page. Everything that moves subscribes; nothing runs while
// nobody is subscribed or the tab is hidden (requestAnimationFrame stops by itself).

type Tick = (dt: number, now: number) => void;

const subscribers = new Set<Tick>();
let frame = 0;
let last = 0;

function loop(now: number) {
  // A long pause (a hidden tab, a debugger) is not a long frame: the fish do not teleport.
  const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;
  last = now;
  for (const tick of subscribers) tick(dt, now / 1000);
  frame = subscribers.size ? requestAnimationFrame(loop) : 0;
  if (!frame) last = 0;
}

export function subscribe(tick: Tick): () => void {
  subscribers.add(tick);
  if (!frame) frame = requestAnimationFrame(loop);
  return () => {
    subscribers.delete(tick);
  };
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** A canvas sized to its box in CSS pixels, drawn at the screen's density. */
export function fitCanvas(canvas: HTMLCanvasElement, width: number, height: number) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  return dpr;
}

/** Calls `onChange(true|false)` as the element enters and leaves the screen. */
export function whenVisible(el: Element, onChange: (visible: boolean) => void, margin = '120px') {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) onChange(e.isIntersecting);
  }, { rootMargin: margin });
  io.observe(el);
  return () => io.disconnect();
}
