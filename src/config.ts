// Links that live outside the copy, in one place.

/**
 * The languages the site publishes. The first is the default, at /; each other one gets its own
 * folder (/it/…). The copy for each is in src/i18n/. Today: English only.
 */
export const LANGUAGES: ('en' | 'it')[] = ['en'];

/** The trial DMG: always the latest release, with the same file name every time. */
export const DOWNLOAD_URL = 'https://github.com/FixItAgainTonic/nchova-web/releases/latest/download/Nchova.dmg';

/** Polar checkout. Not created yet: until then the buy buttons point to the price section. */
export const CHECKOUT_URL = '#price';

export const CONTACT_EMAIL = 'ciao@nchova.com';

/** Who sells nchova. Italian law (art. 35 DPR 633/1972) wants the VAT number on the site. */
export const COMPANY = { name: 'Forcelab', vat: '14481340967' };

/** Pro's price, for search engines (the copy writes it in each language). */
export const PRO_PRICE = { amount: '29.99', currency: 'EUR' };

export const SITE = 'https://nchova.com';
