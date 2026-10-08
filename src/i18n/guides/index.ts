import en from './en';
import type { Guide, Guides } from './types';
import { LANGUAGES } from '../../config';
import { fill, tokens, type Lang } from '..';

export type { Block, Guide, Guides } from './types';

/** The languages the guides are written in so far. */
const written: Partial<Record<Lang, Guides>> = { en };

/** The guides in `lang`, tokens filled; undefined while they are not translated. */
export function guides(lang: Lang): Guides | undefined {
  const g = written[lang];
  return g && fill(g, tokens(lang));
}

/** The published languages a guide (or the hub, id 'hub') exists in. */
export function guideLangs(id: string): Lang[] {
  return LANGUAGES.filter((l) => id === 'hub' ? written[l] : written[l]?.list.some((g: Guide) => g.id === id));
}
