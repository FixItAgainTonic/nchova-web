// Links that live outside the copy, in one place.

/**
 * The languages the site publishes. The first is the default, at /; each other one gets its own
 * folder (/it/…). The copy for each is in src/i18n/. Today: English only.
 */
export const LANGUAGES: ('en' | 'it')[] = ['en'];

/** The trial DMG: always the latest release, with the same file name every time. Sparkle's updates go straight here. */
export const DMG_URL = 'https://github.com/FixItAgainTonic/nchova-web/releases/latest/download/Nchova.dmg';

/** What the site's download buttons point to: src/pages/download.ts counts the download, then sends on to DMG_URL. */
export const DOWNLOAD_URL = '/download';

/** Polar checkout of nchova Pro (organisation nchova, 29.99 EUR tax included). Today the same link as the app's. */
export const CHECKOUT_URL = 'https://buy.polar.sh/polar_cl_ZECtqsONpN8DgSE6iOJmWdMOqu2iQ7VyAfYGM2Rqn9s';

/** The Polar code behind nchova.com/meet, the page on the card Rudy hands out at events: 100% off Pro, with its own
 *  limit and end date on Polar. Another event, another code. */
export const MEET_CODE = 'MEETNCHOVA';

export const CONTACT_EMAIL = 'hello@nchova.com';

/** Who sells nchova. Italian law (art. 35 DPR 633/1972) wants the VAT number on the site. */
export const COMPANY = { name: 'Forcelab', vat: '14481340967' };

/** Pro's price, for search engines (the copy writes it in each language). */
export const PRO_PRICE = { amount: '29.99', currency: 'EUR' };

export const SITE = 'https://nchova.com';
