import it, { type Dict } from './it';
import en from './en';
import de from './de';
import fr from './fr';
import es from './es';
import { languageTokens } from './languages';
import { COMPANY, LANGUAGES, type Lang } from '../config';

export type { Dict, Lang };

/** Fills `{token}`s (the language lists, the company) in every string of the dictionary. */
export function fill<T>(value: T, tokens: Record<string, string>): T {
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

/** What `{token}`s become in a language. */
export const tokens = (lang: Lang) => ({ ...languageTokens(lang), company: COMPANY.name, vat: COMPANY.vat });

const raw: Record<Lang, Dict> = { en, it, de, fr, es };
export const dicts = Object.fromEntries(
  Object.entries(raw).map(([lang, dict]) => [lang, fill(dict, tokens(lang as Lang))]),
) as Record<Lang, Dict>;

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** `*word*` → the spoken voice, in italic. Everything else escaped. */
export function rich(s: string): string {
  return escape(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** `**label**` → the name of something on screen (a button, a setting), in bold. Everything else escaped. */
export function ui(s: string): string {
  return escape(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
}

/** The guides' paragraphs: `*italic*`, `**on screen**`, `[a link](@page/)` to a page of the site in `lang`, or
 *  `[a link](https://…)` out of it. Everything else escaped. */
export function md(s: string, lang: Lang): string {
  return escape(s)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text: string, href: string) =>
      href.startsWith('@')
        ? `<a class="link" href="${path(lang, href.slice(1))}">${text}</a>`
        : `<a class="link" href="${href}" rel="nofollow noopener">${text}</a>`,
    )
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** The same text without the markup, for attributes and titles. */
export function plain(s: string): string {
  return s.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1').replace(/\*/g, '');
}
