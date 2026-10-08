import it, { type Dict } from './it';
import en from './en';
import { languageTokens } from './languages';
import { COMPANY, LANGUAGES } from '../config';

export type Lang = 'it' | 'en';
export type { Dict };

/** Fills `{token}`s (the language lists, the company) in every string of the dictionary. */
function fill<T>(value: T, tokens: Record<string, string>): T {
  if (typeof value === 'string') return value.replace(/\{(\w+)\}/g, (all, key) => tokens[key] ?? all) as T;
  if (Array.isArray(value)) return value.map((v) => fill(v, tokens)) as T;
  if (value && typeof value === 'object')
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fill(v, tokens)])) as T;
  return value;
}

/** The default language, served at the root. */
export const DEFAULT: Lang = LANGUAGES[0];

/** Where a page lives in a language: /privacy/ in the default one, /it/privacy/ in the others. */
export const path = (lang: Lang, page = '') => (lang === DEFAULT ? '/' : `/${lang}/`) + page;

export const dicts: Record<Lang, Dict> = {
  it: fill(it, { ...languageTokens('it'), company: COMPANY.name, vat: COMPANY.vat }),
  en: fill(en, { ...languageTokens('en'), company: COMPANY.name, vat: COMPANY.vat }),
};

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** `*word*` → the spoken voice, in italic. Everything else escaped. */
export function rich(s: string): string {
  return escape(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** `**label**` → the name of something on screen (a button, a setting), in bold. Everything else escaped. */
export function ui(s: string): string {
  return escape(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
}

/** The same text without the markup, for attributes and titles. */
export function plain(s: string): string {
  return s.replace(/\*/g, '');
}
