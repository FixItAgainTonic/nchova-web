import it, { type Dict } from './it';
import en from './en';

export type Lang = 'it' | 'en';
export type { Dict };

export const dicts: Record<Lang, Dict> = { it, en };

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** `*word*` → the spoken voice, in italic. Everything else escaped. */
export function rich(s: string): string {
  return escape(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** The same text without the markup, for attributes and titles. */
export function plain(s: string): string {
  return s.replace(/\*/g, '');
}
