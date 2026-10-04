// The languages nchova dictates and transcribes, as planned for launch. The one place to change
// them: every sentence on the site that counts or lists languages is built from these two lists.

/** Free, with Apple's speech models (macOS 26). */
export const APPLE = ['it', 'en', 'fr', 'de', 'es', 'pt', 'ja', 'ko', 'zh', 'yue'];

/** Pro, with Parakeet: its European languages. The ones Apple lacks work only with Pro. */
export const PARAKEET = ['bg', 'cs', 'hr', 'da', 'et', 'fi', 'fr', 'el', 'en', 'it', 'lv', 'lt', 'mt', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'es', 'sv', 'de', 'uk', 'hu'];

/** Two of the Parakeet-only languages, named as examples. */
const EXAMPLES = ['pl', 'nl'];

const NAMES: Record<'it' | 'en', Record<string, string>> = {
  it: {
    it: 'italiano', en: 'inglese', fr: 'francese', de: 'tedesco', es: 'spagnolo', pt: 'portoghese',
    ja: 'giapponese', ko: 'coreano', zh: 'cinese', yue: 'cantonese',
    bg: 'bulgaro', cs: 'ceco', hr: 'croato', da: 'danese', et: 'estone', fi: 'finlandese', el: 'greco',
    lv: 'lettone', lt: 'lituano', mt: 'maltese', nl: 'olandese', pl: 'polacco', ro: 'rumeno', ru: 'russo',
    sk: 'slovacco', sl: 'sloveno', sv: 'svedese', uk: 'ucraino', hu: 'ungherese',
  },
  en: {
    it: 'Italian', en: 'English', fr: 'French', de: 'German', es: 'Spanish', pt: 'Portuguese',
    ja: 'Japanese', ko: 'Korean', zh: 'Chinese', yue: 'Cantonese',
    bg: 'Bulgarian', cs: 'Czech', hr: 'Croatian', da: 'Danish', et: 'Estonian', fi: 'Finnish', el: 'Greek',
    lv: 'Latvian', lt: 'Lithuanian', mt: 'Maltese', nl: 'Dutch', pl: 'Polish', ro: 'Romanian', ru: 'Russian',
    sk: 'Slovak', sl: 'Slovenian', sv: 'Swedish', uk: 'Ukrainian', hu: 'Hungarian',
  },
};

const join = (names: string[], lang: 'it' | 'en') =>
  new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' }).format(names);

/** The two short lists: Apple's languages, then the ones only Parakeet (Pro) adds, as ISO codes. */
export function languageCodes(lang: 'it' | 'en') {
  const named = (code: string) => ({ code, name: NAMES[lang][code] });
  return {
    free: APPLE.map(named),
    proOnly: PARAKEET.filter((c) => !APPLE.includes(c)).sort().map(named),
  };
}

/** The tokens the copy uses: {free}, {pro}, {nFree}, {nPro}, {proOnly}, {nProOnly}. */
export function languageTokens(lang: 'it' | 'en'): Record<string, string> {
  const name = (code: string) => NAMES[lang][code];
  const byName = (a: string, b: string) => name(a).localeCompare(name(b), lang);
  const proOnly = PARAKEET.filter((code) => !APPLE.includes(code));
  return {
    free: join(APPLE.map(name), lang),
    pro: join([...PARAKEET].sort(byName).map(name), lang),
    nFree: String(APPLE.length),
    nPro: String(PARAKEET.length),
    nProOnly: String(proOnly.length),
    proOnly: join(EXAMPLES.filter((c) => proOnly.includes(c)).map(name), lang),
  };
}
