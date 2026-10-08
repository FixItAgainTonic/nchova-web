// The guides: pages that answer one search each (nchova next to another app, or one job done with it), written in
// English first and translated later. Each language that has them gets a file next to this one; a language without one
// simply has no guides yet, and its pages and links are left out.
//
// In every string: `*word*` is italic, `**label**` a name on screen, `[text](@page/)` a link to another page of the site
// in the same language, `[text](https://…)` a link out.

import type { Dict } from '../it';

/** Two words and their meaning: a note at the side of a demo, a row of a list. */
export type Pair = [label: string, text: string, tag?: 'pro'];

export type Block =
  /** Paragraphs under a heading. */
  | { kind: 'prose'; id?: string; h: string; p: string[] }
  /** Things side by side: a label and a sentence each. */
  | { kind: 'points'; id?: string; h: string; lead?: string; items: Pair[] }
  /** Numbered steps, the help page's way. */
  | { kind: 'steps'; id?: string; h: string; lead?: string; steps: string[] }
  /** One of the home page's demos, with other words if needed, and notes at its side. */
  | {
      kind: 'demo';
      id?: string;
      h?: string;
      lead?: string;
      flip?: boolean;
      notes?: Pair[];
      demo:
        | { name: 'dictation'; data?: Dict['dictation']['demo']; offline?: string }
        | { name: 'meeting'; data?: Dict['meeting']['demo']; browser?: boolean }
        | { name: 'voices'; data?: Dict['voices']['demo'] }
        | { name: 'notes'; data?: Dict['notes']['demo'] }
        | { name: 'assistants'; data?: Dict['assistants']['demo'] };
    }
  /** The two apps side by side: what, theirs, ours. */
  | { kind: 'table'; id?: string; h: string; lead?: string; them: string; rows: [what: string, them: string, us: string][] }
  /** A subscription's receipt printing month after month, next to Pro's single line. */
  | { kind: 'bill'; id?: string; h: string; lead?: string; bill: Bill }
  /** Where the voice goes: to someone's servers and back, or nowhere. */
  | { kind: 'route'; id?: string; h: string; lead?: string; route: Route }
  /** A notetaker bot joining the call, next to nchova, which does not. */
  | { kind: 'bot'; id?: string; h: string; lead?: string; bot: Bot }
  /** nchova's Settings › Assistants, connecting two apps with a click each. */
  | { kind: 'connect'; id?: string; h: string; lead?: string; connect: Connect }
  /** Questions and answers, the home page's way; also told to search engines. */
  | { kind: 'faq'; id?: string; h: string; items: [q: string, a: string][] };

export interface Bill {
  /** The receipt's head: 'WISPR FLOW PRO'. */
  head: string;
  /** The way it is billed, one per tab: every how many months, how much each time. */
  plans: { tab: string; sub: string; every: number; amount: number }[];
  /** How their price is written: '$' before, or ' €' after. */
  currency: { before?: string; after?: string };
  /** Months the film runs for. */
  months: number;
  /** 'Month', 'Year 2', 'Total'… */
  words: { month: string; months: string; total: string; once: string; year: string; nothing: string; switchLabel: string; label: string };
}

export interface Route {
  /** The two ways, the other app's first: a tab each. */
  them: { tab: string; place: string; what: string; back: string; sent: string };
  us: { tab: string; place: string; sent: string };
  words: { mac: string; said: string; written: string; switchLabel: string; label: string };
  /** A meeting instead of a dictation: the meeting pill, and the window is the transcript (`title`). */
  meeting?: boolean;
  title?: string;
}

export interface Bot {
  them: { tab: string; name: string; joined: string; banner: string; caption: string };
  us: { tab: string; caption: string };
  /** bubbles: who speaks (a tile's name, '' for you), what they say, and how nchova's card labels them (Voice 1…). */
  words: { switchLabel: string; label: string; call: string; tiles: string[]; live: string; bubbles: [string, string, string?][] };
}

export interface Connect {
  /** The settings window's tabs, the one that is open, the section's title. */
  tabs: string[];
  tab: string;
  section: string;
  /** The apps on this Mac, with what nchova says once each is connected; the film connects those with `click`. */
  rows: { name: string; after: string; click?: boolean }[];
  others: string;
  button: string;
  again: string;
  connected: string;
  footer: string;
  label: string;
}

export interface Guide {
  /** Short and stable: the download counter's source and the footer's key. */
  id: string;
  /** Where it lives in its language, as path() wants it: 'alternatives/wispr-flow/'. */
  page: string;
  group: 'compare' | 'use';
  /** Its name in a list of links: 'Wispr Flow'. */
  short: string;
  metaTitle: string;
  description: string;
  kicker: string;
  title: string;
  lead: string;
  /** The answer in three lines, right under the title. */
  short3?: Pair[];
  blocks: Block[];
  /** The other app's pages the facts come from, and when they were read. */
  sources?: [label: string, url: string][];
  checked?: string;
}

export interface Guides {
  words: {
    compare: string;
    use: string;
    inShort: string;
    sources: string;
    home: string;
    cta: string;
    ctaNote: string;
    meta: string;
    more: string;
    us: string;
    hubLink: string;
  };
  /** The page that lists the comparisons: /alternatives/. */
  hub: { page: string; metaTitle: string; description: string; kicker: string; title: string; lead: string; cols: string[]; rows: { id: string; does: string; where: string; bot: string; price: string }[]; us: { does: string; where: string; bot: string; price: string } };
  list: Guide[];
}
