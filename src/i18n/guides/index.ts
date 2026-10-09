import type { Guide, Guides } from './types';
import { LANGUAGES } from '../../config';
import { fill, tokens, type Lang } from '..';

export type { Block, Guide, Guides } from './types';

/** The languages the guides are written in so far: every file next to this one named after a language (en.ts, it.ts…). */
const files = import.meta.glob<{ default: Guides }>(['./*.ts', '!./index.ts', '!./types.ts'], { eager: true });
const written: Partial<Record<Lang, Guides>> = Object.fromEntries(
  Object.entries(files).map(([file, mod]) => [file.slice(2, -3), mod.default]),
);

/** The guides in `lang`, tokens filled; undefined while they are not translated. */
export function guides(lang: Lang): Guides | undefined {
  const g = written[lang];
  return g && fill(g, tokens(lang));
}

/** The published languages a guide (or the hub, id 'hub') exists in. */
export function guideLangs(id: string): Lang[] {
  return LANGUAGES.filter((l) => (id === 'hub' ? written[l] : written[l]?.list.some((g: Guide) => g.id === id)));
}
