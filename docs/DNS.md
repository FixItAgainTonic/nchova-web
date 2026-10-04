# nchova.com su GitHub Pages — DNS su Register.it

Il sito è pubblicato da GitHub Pages (`.github/workflows/pages.yml`), dominio personalizzato
`nchova.com`. Su Register.it, nella gestione DNS del dominio:

## 1. Togliere quello che c'è

Oggi `nchova.com` punta alla pagina di cortesia di Register.it (`195.110.124.133`) e `www` è un
alias di `nchova.com`. Cancellare il record **A** di `nchova.com` verso `195.110.124.133` e il
record di `www`.

## 2. Apex `nchova.com`: quattro record A (e, se il pannello lo permette, quattro AAAA)

| Tipo | Nome | Valore |
|---|---|---|
| A | `@` (nchova.com) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

## 3. `www`: un CNAME

| Tipo | Nome | Valore |
|---|---|---|
| CNAME | `www` | `fixitagaintonic.github.io.` |

GitHub reindirizza da solo `www.nchova.com` a `nchova.com`.

## 4. Verifica del dominio (consigliata)

GitHub › Settings (dell'account) › Pages › *Add a domain* › `nchova.com`: GitHub mostra un
record **TXT** (`_github-pages-challenge-fixitagaintonic.nchova.com` con un valore suo) da
aggiungere su Register.it. Così nessun altro può usare il dominio su Pages.

## 5. Su GitHub

Nella repo › Settings › Pages: *Source* «GitHub Actions», *Custom domain* `nchova.com`, poi,
quando il certificato è pronto (di solito entro un'ora dalla propagazione del DNS),
*Enforce HTTPS*.

## Controllare

```bash
dig +short nchova.com A        # i quattro 185.199.10x.153
dig +short www.nchova.com      # fixitagaintonic.github.io. e poi gli stessi indirizzi
```

`https://nchova.com/updates/appcast.xml` deve rispondere con l'XML degli aggiornamenti.
