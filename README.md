# nchova.com

Il sito di **nchova**: dettatura e meeting trascritti sul Mac. Oggi in inglese, su `/`.

Le lingue pubblicate sono in `LANGUAGES` (`src/config.ts`): la prima sta alla radice, ogni altra
nella sua cartella. I testi italiani sono già pronti in `src/i18n/it.ts`: per pubblicarli su `/it/`
basta `LANGUAGES = ['en', 'it']`.

Il logo è fatto di segni tipografici (una graffa, quattro barre, una parentesi), quindi il sito è
tipografico: carta e inchiostro viola, *Fraunces corsivo* per la voce, Fraunces tondo e DM Mono per
il testo. I pesci nuotano col modello dell'app (`SwimmingMark`), portato in `src/scripts/fish/`.

## Lavorarci

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # sito statico in dist/
npm run check      # tipi e template
```

## Dove stanno le cose

| | |
|---|---|
| `src/i18n/it.ts`, `en.ts` | tutti i testi, demo comprese. `*parola*` è in corsivo |
| `src/i18n/guides/` | le guide, una pagina per ricerca: nchova accanto agli altri (`/alternatives/…`) e i lavori che fa (`/transcribe/zoom/`, `/dictation/offline/`, `/mcp/`…). Per ora in inglese; una lingua senza file non ha guide |
| `src/config.ts` | link di download e di acquisto, contatti |
| `src/components/` | le sezioni della pagina; `demos/` le cinque demo animate |
| `src/scripts/fish/` | il nuoto: `mark.ts` (il marchio e la sua onda), `swimmer.ts`, `tank.ts`, `field.ts` (il testo che si scosta) |
| `src/scripts/demos/` | i copioni delle demo |
| `src/styles/` | `global.css` (colori, caratteri), `sections.css`, `demos.css` |
| `tools/og.sh` | rigenera le anteprime dei link (`public/og-en.png`, `public/og-it.png`) con Chrome headless |

Niente cookie, niente statistiche, niente risorse di terzi: i caratteri sono serviti dal sito.
Con «riduci movimento» attivo i pesci stanno fermi e le demo mostrano subito il risultato.

## Lingue di dettatura

Le lingue di dettatura e meeting stanno in un posto solo, `src/i18n/languages.ts`: gratis coi
modelli Apple, le europee di Parakeet con Pro. Ogni frase del sito che le conta o le elenca nasce da
lì (`{free}`, `{pro}`, `{nFree}`… nei testi).

## Cosa manca

- `CHECKOUT_URL` in `src/config.ts`: il checkout Polar di nchova Pro.
- I pulsanti di download puntano a `/download` (`src/pages/download.ts`): conta il download in Vercel Web
  Analytics e rimanda a `releases/latest/download/Nchova.dmg` di questa repo (`DMG_URL`).
- `public/updates/appcast.xml` → `https://nchova.com/updates/appcast.xml`, definitivo: è dentro
  l'app. Lo riscrive lo script di rilascio dell'app a ogni versione. Il sito non usa nient'altro sotto `/updates/`.

## Pubblicazione

Dal lancio (7 ottobre 2026) il sito sta su **Vercel** (progetto `nchova-web`, team Pro di FixItAgainTonic): ogni push
su `main` lo ripubblica, appcast compreso. DNS su Register.it: `A @ 216.150.1.1`, `CNAME www
b5322d7f22c6c5cd.vercel-dns-016.com.`; gli MX della posta restano quelli di Register.it. Statistiche: Vercel ›
progetto › Analytics (visite, provenienze, evento «Download» con il pulsante di partenza). GitHub conta a parte ogni
download del DMG, aggiornamenti di Sparkle compresi.
