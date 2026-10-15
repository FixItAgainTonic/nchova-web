# nchova.com

Il sito di **nchova**: dettatura e meeting trascritti sul Mac. In inglese su `/`, poi in italiano, tedesco,
francese e spagnolo (`/it/`, `/de/`, `/fr/`, `/es/`).

Le lingue pubblicate sono in `LANGUAGES` (`src/config.ts`): la prima sta alla radice, ogni altra
nella sua cartella. Ogni lingua ha i suoi testi in `src/i18n/<lingua>.ts` e le guide in
`src/i18n/guides/<lingua>.ts` (una lingua senza file di guide non le pubblica). Le pagine hanno lo stesso
indirizzo in ogni lingua, così gli hreflang si trovano da soli. L'app parla solo inglese e italiano: nelle
altre lingue le voci di nchova restano in inglese, quelle di macOS sono nella lingua del sistema, e la pulizia
dei ripensamenti (solo inglese e italiano) non si promette. Le anteprime dei link: `tools/og.sh`.

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
- `src/updates/appcast.xml` → `https://nchova.com/updates/appcast.xml`, definitivo: è dentro
  l'app. Lo riscrive lo script di rilascio dell'app a ogni versione. Lo serve `src/pages/updates/appcast.xml.ts`, che
  conta ogni controllo di Sparkle (evento «Update check», con la sola versione: ogni copia accesa chiede una volta al
  giorno). Fino al 10 ottobre 2026 era un file statico in `public/updates/`, che nessuno poteva contare. Il sito non usa
  nient'altro sotto `/updates/`.

## Pubblicazione

Dal lancio (7 ottobre 2026) il sito sta su **Vercel** (progetto `nchova-web`, team Pro di FixItAgainTonic): ogni push
su `main` lo ripubblica, appcast compreso. DNS su Register.it: `A @ 216.150.1.1`, `CNAME www
b5322d7f22c6c5cd.vercel-dns-016.com.`; gli MX della posta restano quelli di Register.it. Statistiche: Vercel ›
progetto › Analytics (visite, provenienze, evento «Download» con il pulsante di partenza e, se c'è, il creator che ha
portato la visita, contato dal server su ogni `/download` aperto da un browser, link da fuori sito e ad blocker compresi;
evento «Download click», gli stessi clic sui pulsanti del sito contati dal browser sul visitatore della pagina, il numero
da mettere accanto ai visitatori; dal 15 ottobre 2026, quando un bot ha fatto 70 «Download» in un giorno di 8 visitatori.
Della riga «Download» vale il totale: i visitatori degli eventi dal server passano tutti da Francoforte. Evento
«Partner» per ogni visita da `nchova.com/with/<creator>`, evento «Voucher» con il codice per ogni clic su `nchova.com/meet/claim` e `nchova.com/ironhack/claim`, evento «Update check» con
la versione dell'app). I creator e i loro codici Polar stanno in `PARTNERS` (`src/config.ts`): il codice si crea
prima su Polar, poi si aggiunge una riga. GitHub conta a parte ogni
download del DMG, aggiornamenti di Sparkle compresi.
