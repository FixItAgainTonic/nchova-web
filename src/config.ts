// Links that live outside the copy, in one place.

/** Every language the site has copy for, in src/i18n/ (the guides, in src/i18n/guides/, may lag behind). */
export const ALL_LANGUAGES = ['en', 'it', 'de', 'fr', 'es'] as const;
export type Lang = (typeof ALL_LANGUAGES)[number];

/**
 * The languages the site publishes. The first is the default, at /; each other one gets its own
 * folder (/it/…). The copy for each is in src/i18n/.
 */
export const LANGUAGES: Lang[] = ['en', 'it', 'de', 'fr', 'es'];

/** The trial DMG: always the latest release, with the same file name every time. Sparkle's updates go straight here. */
export const DMG_URL = 'https://github.com/FixItAgainTonic/nchova-web/releases/latest/download/Nchova.dmg';

/** What the site's download buttons point to: src/pages/download.ts counts the download, then sends on to DMG_URL. */
export const DOWNLOAD_URL = '/download';

/** Polar checkout of nchova Pro (organisation nchova, 29.99 EUR tax included). Today the same link as the app's. */
export const CHECKOUT_URL = 'https://buy.polar.sh/polar_cl_ZECtqsONpN8DgSE6iOJmWdMOqu2iQ7VyAfYGM2Rqn9s';

/** The Polar code behind nchova.com/meet, the page on the card Rudy hands out at events: 100% off Pro, with its own
 *  limit and end date on Polar. Another event, another code. */
export const MEET_CODE = 'MEETNCHOVA';

/** The Polar code behind nchova.com/ironhack/claim, the link Rudy gives to colleagues at Ironhack. */
export const IRONHACK_CODE = 'ironhack';

/** The creators who talk about nchova, at nchova.com/with/<slug>: the visit is counted (event "Partner"), the browser
 *  lands on the home page in the creator's language, and on that visit Buy opens the checkout with their Polar code
 *  already in (20% off; they get 60% of the net). Nothing is stored in the browser: buy later, or from the app, and the
 *  code is typed by hand. Each code is made on Polar first. */
export const PARTNERS: Record<string, { name: string; code: string; lang: Lang }> = {
  rubenloan: { name: 'Ruben Loan', code: 'RUBENLOAN', lang: 'es' },
  aprenden5: { name: 'Aprende N5', code: 'APRENDEN5', lang: 'es' },
};

export const CONTACT_EMAIL = 'hello@nchova.com';

/** Who sells nchova. Italian law (art. 35 DPR 633/1972) wants the VAT number on the site. */
export const COMPANY = { name: 'Forcelab', vat: '14481340967' };

/** Pro's price, for search engines (the copy writes it in each language). */
export const PRO_PRICE = { amount: '29.99', currency: 'EUR' };

/** Pages about nchova elsewhere, for search engines (sameAs of the app in the home page's structured data): the same
 *  app, so they help tell it apart from other things called nchova. One line each, as they are made. */
export const PROFILES = ['https://alternativeto.net/software/nchova/'];

export const SITE = 'https://nchova.com';
