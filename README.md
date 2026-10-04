# nchova.com

Il sito di **nchova**: dettatura e meeting trascritti sul Mac. Italiano su `/`, inglese su `/en/`.

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
| `src/config.ts` | link di download e di acquisto, contatti |
| `src/components/` | le sezioni della pagina; `demos/` le cinque demo animate |
| `src/scripts/fish/` | il nuoto: `mark.ts` (il marchio e la sua onda), `swimmer.ts`, `tank.ts`, `field.ts` (il testo che si scosta) |
| `src/scripts/demos/` | i copioni delle demo |
| `src/styles/` | `global.css` (colori, caratteri), `sections.css`, `demos.css` |
| `tools/og.sh` | rigenera le anteprime dei link (`public/og.png`, `public/og-en.png`) con Chrome headless |

Niente cookie, niente statistiche, niente risorse di terzi: i caratteri sono serviti dal sito.
Con «riduci movimento» attivo i pesci stanno fermi e le demo mostrano subito il risultato.

## Cosa manca

- `CHECKOUT_URL` in `src/config.ts`: il checkout Polar, quando c'è.
- Il download punta a `releases/latest/download/Nchova.dmg` di questa repo: funziona dalla prima
  release con quel file allegato.
- `public/updates/appcast.xml` → `https://nchova.com/updates/appcast.xml`, definitivo: è dentro
  l'app. Lo riscrive lo script di rilascio dell'app a ogni versione; finché non c'è una release è un
  feed vuoto. Il sito non usa nient'altro sotto `/updates/`.

## Pubblicazione

GitHub Pages con GitHub Actions (`.github/workflows/pages.yml`) a ogni push su `main`, dominio
`nchova.com`. Il job salta finché la repo è privata. DNS su Register.it: [`docs/DNS.md`](docs/DNS.md).
