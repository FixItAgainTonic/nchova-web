// Links that live outside the copy, in one place.

/** The trial DMG: always the latest release, with the same file name every time. */
export const DOWNLOAD_URL = 'https://github.com/FixItAgainTonic/nchova-web/releases/latest/download/Nchova.dmg';

/** false until nchova is on sale: the download and buy buttons become a waitlist. */
export const LAUNCHED = false;

/**
 * The waitlist form posts straight to the mailing service: no script of theirs on the page, and
 * without JavaScript it still works (the service shows its own page). Double opt-in is theirs.
 * `action` stays empty until the account exists; the form then says the list is not open yet.
 */
export const WAITLIST = {
  provider: 'Buttondown',
  /** e.g. https://buttondown.com/api/emails/embed-subscribe/nchova */
  action: '',
  field: 'email',
  hidden: { embed: '1' } as Record<string, string>,
};

/** Polar checkout. Not created yet: until then the buy buttons point to the price section. */
export const CHECKOUT_URL = '#prezzo';

export const CONTACT_EMAIL = 'ciao@nchova.com';

export const SITE = 'https://nchova.com';
