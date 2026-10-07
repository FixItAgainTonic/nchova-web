# nchova.com su Vercel — DNS su Register.it

Il sito sta su Vercel dal lancio (7 ottobre 2026). Su Register.it, nella gestione DNS del dominio:

## 1. Togliere quello che c'era

Il record **A** di `nchova.com` verso `195.110.124.133` (la pagina di cortesia di Register.it) e il record di `www`.

## 2. I due record di Vercel

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` (nchova.com) | `216.150.1.1` |
| CNAME | `www` | `b5322d7f22c6c5cd.vercel-dns-016.com.` |

Sono quelli che Vercel mostra in progetto › Settings › Domains: se un giorno li cambia, valgono i suoi.

## 3. Non toccare

I record **MX** (`mail.register.it`): sono la posta di nchova.com.

## Controllo

`dig +short nchova.com A` deve dire `216.150.1.1`; Vercel › Domains segna i due domini «Valid Configuration» e
rilascia da solo il certificato HTTPS.
