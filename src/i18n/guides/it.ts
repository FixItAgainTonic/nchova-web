// Le guide, in italiano. Tipi e markup in ./types.ts.

import base from '../it';
import type { Bot, Guide, Guides } from './types';

const dictation = base.dictation.demo;
const assistants = base.assistants.demo;
const settingsTabs = base.calendarPage.demo.app.tabs;

// ---------- I lavori che fa nchova ----------

const offline: Guide = {
  id: 'offline',
  page: 'dictation/offline/',
  group: 'use',
  short: 'Dettatura offline',
  metaTitle: 'Dettatura offline su Mac, in qualsiasi app — nchova',
  description:
    'Detta in ogni app del Mac senza internet: nchova trasforma la voce in testo sul Mac, col modello di Apple o con Parakeet di NVIDIA. La tua voce resta sul Mac.',
  kicker: 'dettatura offline',
  title: 'La dettatura che funziona *col Wi‑Fi spento*.',
  lead: 'nchova trasforma la tua voce in testo sul Mac stesso, quindi scrive in qualsiasi app anche in aereo, in treno o dietro il firewall dell’azienda. Non invia niente e non aspetta nessun server: tieni premuto Fn, parla, rilascia.',
  short3: [
    ['Sì, *del tutto* offline', 'una volta che i modelli sono sul Mac, la dettatura non ha bisogno di nessuna connessione. Non è una modalità di riserva: è l’unica che c’è.'],
    ['In *qualsiasi* app', 'il testo arriva dov’è il cursore: Mail, Slack, Notion, il terminale, un modulo nel browser.'],
    ['Gratis', 'col modello vocale di Apple, in {nFree} lingue, per sempre. Parakeet, il modello di NVIDIA, arriva con Pro: {nPro} lingue europee.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        offline: 'Wi‑Fi: disattivato',
        data: {
          ...dictation,
          doc: 'In treno',
          scripts: [
            {
              spoken: 'il treno arriva alle sette, quindi ti chiamo dalla stazione',
              marks: [],
              written: 'Il treno arriva alle sette, quindi ti chiamo dalla stazione.',
            },
            {
              spoken: 'ho pushato il fix e aggiornato la config jason per il rilascio',
              marks: [{ kind: 'fix', from: 'jason', to: 'JSON' }],
              written: 'Ho pushato il fix e aggiornato la config JSON per il rilascio.',
            },
            {
              spoken: 'appunti per l’intervento: apro con la demo, poi i numeri, poi le domande',
              marks: [],
              written: 'Appunti per l’intervento: apro con la demo, poi i numeri, poi le domande.',
            },
          ],
        },
      },
      notes: [
        ['Nessuna connessione', 'il Wi‑Fi è spento, e il testo arriva lo stesso, veloce come alla scrivania.'],
        ['Dov’è il cursore', 'qualsiasi app, qualsiasi campo di testo. Se non c’è dove scrivere, il testo ti aspetta negli appunti: ⌘V.'],
        ['Tieni premuto, non cliccare', 'tieni premuto Fn, o il tasto Opzione di destra, mentre parli. Rilasci e scrive.'],
        ['Le tue parole', 'nomi e sigle scritti come vuoi tu, anche offline: «jason» diventa JSON.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Cosa gira sul Mac, e cosa ha bisogno di internet *una volta*',
      p: [
        'Tutto quello che nchova fa con la tua voce succede sul tuo Mac: la dettatura, la trascrizione dei meeting, la pulizia dei ripensamenti, le note quando le scrive il modello di Apple o Qwen. Niente di tutto questo chiama un server, quindi non importa se sei online o no.',
        'Internet serve qualche volta, e mai per la tua voce: per scaricare un modello la prima volta (macOS scarica ogni lingua per il motore di Apple; Parakeet pesa circa 480 MB, una volta sola), per attivare Pro e per cercare gli aggiornamenti. Dopo, spegni il Wi‑Fi e non pensarci più.',
        'Tre cose sono online per natura, e solo se le scegli tu: le note scritte dal tuo Claude Code o Codex, che mandano la trascrizione del meeting ad Anthropic o a OpenAI; un assistente nel cloud come Claude o ChatGPT collegato ai tuoi meeting, che manda quello che legge al proprio modello; e la sync dei meeting fra i tuoi Mac via iCloud (Pro).',
      ],
    },
    {
      kind: 'points',
      h: 'Due motori, *tutti e due* sul Mac',
      lead: 'Ne scegli uno in Impostazioni › Dettatura. Quello che scegli trascrive anche i tuoi meeting.',
      items: [
        ['Riconoscimento vocale di Apple', 'integrato in macOS: niente da scaricare da noi, detta dal primo minuto, in {nFree} lingue. Gratis, per sempre.'],
        ['Parakeet', 'il modello vocale di NVIDIA, circa 480 MB una volta sola, in {nPro} lingue europee, comprese quelle che Apple non ha, come {proOnly}. Mentre si scarica, continua a dettare Apple.', 'pro'],
        ['Dieci minuti alla volta', 'fino a dieci minuti per dettatura, tre mentre si trascrive un meeting; negli ultimi 30 secondi la pillola fa il conto alla rovescia.'],
      ],
    },
    {
      kind: 'steps',
      h: 'Preparala prima di perdere il segnale',
      steps: [
        '[Scarica nchova](/download?from=offline-steps) e aprila. Ti chiede l’accesso al **Microfono** e all’**Accessibilità**, e di impostare **Premi il tasto 🌐 per** su **Non fare nulla**, così Fn è di nchova e non della dettatura di macOS.',
        'Scegli le tue lingue, fino a tre. Lascia che macOS le scarichi, o che nchova scarichi Parakeet, mentre sei ancora online.',
        'Spegni il Wi‑Fi e prova: tieni premuto **Fn**, parla, rilascia.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *offline*',
      items: [
        ['nchova funziona in aereo?', 'Sì. Dettatura e trascrizione dei meeting girano sul Mac: con i modelli scaricati, non serve nessuna connessione.'],
        ['La dettatura offline è meno precisa?', 'È la stessa dettatura: nchova non ha una modalità online. Il modello che scrive in aereo è lo stesso che scrive alla tua scrivania.'],
        ['Quando torno online, manda qualcosa?', 'Mai la tua voce. Tornata online, nchova cerca gli aggiornamenti e, ogni tanto, controlla la tua licenza Pro: la chiave e il nome del Mac, nient’altro. Tutto il resto lo hai acceso tu: la sync iCloud manda i tuoi meeting agli altri tuoi Mac, e Claude Code o Codex, se scrivono le tue note, ricevono la trascrizione di ogni nuovo meeting.'],
        ['C’è un limite di tempo?', 'Dieci minuti per dettatura, tre mentre si trascrive un meeting. Negli ultimi 30 secondi la pillola fa il conto alla rovescia.'],
        ['E i meeting, offline?', 'Funzionano allo stesso modo: un meeting attorno a un tavolo, col Mac al centro, si trascrive senza rete, e le note si scrivono sul Mac.'],
      ],
    },
  ],
};

const multilingual: Guide = {
  id: 'multilingual',
  page: 'dictation/multilingual/',
  group: 'use',
  short: 'Dettatura in più lingue',
  metaTitle: 'Dettatura multilingue su Mac, anche a metà frase — nchova',
  description:
    'Detta in italiano, inglese, spagnolo o tedesco e cambia lingua a metà frase: nchova capisce quale parli e la scrive, sul tuo Mac. {nAll} lingue, anche offline.',
  kicker: 'dettatura multilingue',
  title: 'Parla *tutte* le tue lingue. nchova ti sta dietro.',
  lead: 'Scegli fino a tre lingue e parla e basta: nchova capisce quale stai usando, frase per frase e anche a metà frase, e la scrive dov’è il cursore. Nessuna tastiera da cambiare, nessuna impostazione da toccare, niente che parta verso un server.',
  short3: [
    ['*{nAll}* lingue', '{nFree} gratis col modello di Apple, {nPro} europee con Parakeet (Pro), ognuna contata una volta.'],
    ['*Tre* insieme', 'nchova ascolta tutte quelle che hai scelto, e tiene quella che stai parlando.'],
    ['*A metà frase*', '«La riunione è domani alle dieci, so please send the deck tonight» esce come l’hai detta.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        data: {
          ...dictation,
          doc: 'Messaggi',
          scripts: [
            {
              spoken: 'la riunione è domani alle dieci, so please send the deck tonight',
              marks: [
                { kind: 'lang', from: 'la riunione è domani alle dieci,', to: 'IT' },
                { kind: 'lang', from: 'so please send the deck tonight', to: 'EN' },
              ],
              written: 'La riunione è domani alle dieci, so please send the deck tonight.',
            },
            {
              spoken: 'kannst du mir das angebot schicken? mi serve prima della call',
              marks: [
                { kind: 'lang', from: 'kannst du mir das angebot schicken?', to: 'DE' },
                { kind: 'lang', from: 'mi serve prima della call', to: 'IT' },
              ],
              written: 'Kannst du mir das Angebot schicken? Mi serve prima della call.',
            },
            {
              spoken: 'on se voit à midi devant la gare, poi prendiamo il treno insieme',
              marks: [
                { kind: 'lang', from: 'on se voit à midi devant la gare,', to: 'FR' },
                { kind: 'lang', from: 'poi prendiamo il treno insieme', to: 'IT' },
              ],
              written: 'On se voit à midi devant la gare, poi prendiamo il treno insieme.',
            },
          ],
        },
      },
      notes: [
        ['Automatico', 'nchova ascolta tutte le tue lingue insieme e scrive quella che hai parlato.'],
        ['O una lingua fissa', 'tieni sempre attiva una lingua sola, e cambiala dalle Impostazioni quando te ne serve un’altra.'],
        ['Il tuo vocabolario', 'nomi e sigle scritti come vuoi tu: «gira» diventa Jira, e puoi aggiungere come li sente il motore.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Come distingue *le tue lingue*',
      p: [
        'Col motore di Apple, nchova fa girare un riconoscitore per ogni lingua che hai scelto, tutti insieme, sullo stesso audio. Quando rilasci, li mette a confronto: quanto era sicuro ognuno delle sue parole, e quanto il suo testo somiglia alla sua lingua. Scrive il migliore. Se cambi lingua a metà, fa la stessa scelta tratto per tratto.',
        'Con Parakeet (Pro), un solo modello conosce {nPro} lingue europee e scrive quello che ha sentito; nchova legge il risultato per capire quale delle tue era.',
        'Meno lingue tieni, più la scelta è sicura: per questo il limite è tre. Un tratto lungo nell’altra lingua, o uno in fondo alla frase, esce giusto; due parole d’inglese fra due frasi in polacco possono uscire in polacco. I nomi e i termini che usi in tutte le lingue vanno nel vocabolario.',
      ],
    },
    {
      kind: 'points',
      h: 'Le lingue',
      items: [
        ['Gratis, col modello di Apple', '{free}.'],
        ['Con Pro, Parakeet', '{pro}.', 'pro'],
        ['L’app', 'menu e impostazioni di nchova sono in italiano, inglese, tedesco, francese e spagnolo, in qualunque lingua tu detti.'],
      ],
    },
    {
      kind: 'prose',
      h: 'E i meeting in *due lingue*?',
      p: [
        'Funzionano allo stesso modo: nchova riconosce ogni frase nella lingua in cui è stata detta, quindi una call che passa dall’italiano all’inglese viene trascritta in tutte e due. Un breve inciso in un’altra lingua viene letto nella lingua principale del meeting.',
        'Le note si scrivono nella lingua del meeting, e puoi fargli domande in un’altra: in italiano, inglese, francese, spagnolo, tedesco, portoghese, olandese, giapponese, coreano o cinese, «Cosa abbiamo deciso?» riceve la risposta nella lingua della domanda.',
      ],
    },
    {
      kind: 'steps',
      h: 'Imposta le tue lingue',
      steps: [
        'In nchova apri **Impostazioni › Dettatura** e, sotto **Riconoscimento**, fai clic su **Aggiungi una lingua…**. Scegline fino a tre.',
        'Lascia **Lingua** su **Automatico**: nchova le ascolta tutte insieme.',
        'Tieni premuto **Fn** e parla come parli sempre.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande in *tutte* le lingue',
      items: [
        ['Posso mischiare due lingue nella stessa frase?', 'Sì, se ogni parte è più lunga di un paio di parole: nchova decide tratto per tratto. Una sola parola straniera dentro una frase conviene insegnarla al vocabolario.'],
        ['Quali lingue sono gratis?', 'Col modello di Apple: {free}. Pro aggiunge Parakeet e le lingue che conosce solo lui, come {proOnly}.'],
        ['Perché al massimo tre?', 'Col motore di Apple, ogni lingua in Automatico è un riconoscitore in più che ascolta ogni dettatura; con Parakeet, una lingua in più da distinguere. Con tre la scelta resta sicura e il Mac resta veloce: per dettare in un’altra lingua, togline una delle tre.'],
        ['Funziona offline in tutte le lingue?', 'Sì: tutti e due i motori girano sul Mac. La prima volta macOS scarica la lingua per il motore di Apple, o nchova scarica Parakeet, una volta sola.'],
      ],
    },
  ],
};

const mcp: Guide = {
  id: 'mcp',
  page: 'mcp/',
  group: 'use',
  short: 'I meeting in Claude e ChatGPT (MCP)',
  metaTitle: 'Trascrizioni dei meeting in Claude e ChatGPT (MCP) — nchova',
  description:
    'nchova ha un server MCP locale: Claude, ChatGPT, Cursor e altri assistenti AI cercano e leggono le trascrizioni dei tuoi meeting, sul Mac. Gratis, con un clic.',
  kicker: 'server MCP',
  title: 'Chiedi al tuo assistente *dei tuoi meeting*.',
  lead: 'nchova trascrive le tue call sul Mac e le passa al tuo assistente AI con un server MCP locale. Claude, ChatGPT, Cursor e gli altri cercano quello che è stato detto, riassumono la settimana, ti dicono chi deve fare cosa e salvano le note in nchova. In mezzo non c’è nessun server nostro: non ne abbiamo.',
  short3: [
    ['*Un* clic', 'Impostazioni › Assistenti › Collega: nchova si aggiunge alla configurazione del tuo assistente, e fa una copia di ogni file che cambia.'],
    ['I meeting, *mai* la dettatura', 'l’assistente legge trascrizioni e note; quello che detti resta fuori dalla sua portata.'],
    ['Gratis', 'il server MCP è nella versione gratuita, per sempre, con Pro o senza.'],
  ],
  blocks: [
    {
      kind: 'connect',
      h: 'Collegalo *una volta*',
      lead: 'nchova trova gli assistenti che hai sul Mac e li configura con un clic. Alle app in cui non può scrivere dà una configurazione da incollare.',
      connect: {
        tabs: settingsTabs,
        tab: 'Assistenti',
        section: 'I tuoi meeting nel tuo assistente',
        rows: [
          { name: 'Claude', after: 'Chiudi e riapri Claude per vedere gli strumenti di Nchova.', click: true },
          { name: 'Claude Code', after: 'Claude Code vede gli strumenti di Nchova dalla prossima sessione.' },
          { name: 'ChatGPT / Codex', after: 'Nell’app ChatGPT premi Restart in Settings → MCP servers; Codex vede gli strumenti dalla prossima sessione.' },
          { name: 'Cursor', after: 'Cursor lo prende da solo: controlla in Settings → MCP.', click: true },
        ],
        others: 'Altri che Nchova sa collegare',
        button: 'Collega',
        again: 'Ricollega',
        connected: 'Collegato',
        footer:
          'Permette all’assistente di elencare, cercare e leggere le trascrizioni dei meeting, seguire un meeting in corso e salvare i riassunti, tramite un server MCP locale. Si condividono solo i meeting, mai le dettature, e niente passa dai server di Nchova: non esistono.',
        label: 'Impostazioni › Assistenti di nchova: si fa clic su Collega accanto a Claude, poi accanto a Cursor, e ognuno mostra Collegato.',
      },
    },
    {
      kind: 'demo',
      h: 'Poi *chiedi*',
      lead: 'L’assistente sceglie da solo gli strumenti: il riepilogo della settimana, le cose che ognuno si è preso in carico, tutto su una persona, le parole che qualcuno ha detto.',
      demo: {
        name: 'assistants',
        data: {
          ...assistants,
          q1: 'Cosa ho promesso di fare questa settimana?',
          calls1: [['digest', '{ "from": "2026-10-05" }', '6 meeting · 9 azioni']],
          a1: 'Tre cose: rispondere ai tester (*Sync prodotto*, martedì), mandare al cliente il preventivo rivisto (mercoledì) e la presentazione per la revisione di giovedì.',
          cite: 'Sync prodotto · 1:06',
          q2: 'Fra cinque minuti chiamo Sara. Cosa si è presa in carico?',
          calls2: [['find_person', '{ "name": "Sara" }', '4 meeting · 2 azioni']],
          a2: 'Due cose: la newsletter, che ha detto di mandare lunedì alle 10, e la pagina dei prezzi, che le hai chiesto di rivedere.',
        },
      },
      notes: [
        ['Cerca', 'quello che qualcuno ha detto, parola per parola, in tutti i meeting.'],
        ['Riassume', 'la settimana, o il mese: meeting, persone, argomenti e cose da fare.'],
        ['Dal vivo', 'anche il meeting in corso: «cosa hanno appena deciso?»'],
        ['Salva', 'le note e le azioni scritte dall’assistente compaiono in nchova.'],
      ],
    },
    {
      kind: 'points',
      h: 'I *dieci* strumenti',
      lead: 'Quello che offre il server MCP di nchova. L’assistente legge le loro descrizioni e sceglie.',
      items: base.assistants.tools.list.map(([name, what]) => [name, `${what}.`]),
    },
    {
      kind: 'prose',
      h: 'Come funziona, e *cosa va dove*',
      p: [
        'Il server MCP è un piccolo programma dentro nchova. Il tuo assistente lo avvia sul Mac e ci parla attraverso una pipe (stdio): niente rete, niente porte, nessun token che possa sfuggire. Legge lo stesso database su cui scrive l’app, quindi risponde anche con nchova chiusa.',
        'Condivide solo i meeting: trascrizioni, note, azioni, titoli e nomi delle voci. Le tue dettature non ci sono mai, e nemmeno l’audio, che nchova non tiene.',
        'Quello che succede dopo dipende dall’assistente. Claude, ChatGPT e gli altri assistenti nel cloud mandano quello che leggono ai loro modelli, come fanno con qualsiasi cosa incolli in una chat. Un modello locale, per esempio in LM Studio, tiene tutto sul Mac.',
      ],
    },
    {
      kind: 'steps',
      h: 'Collega il tuo assistente',
      steps: [
        '[Scarica nchova](/download?from=mcp-steps) e lasciale trascrivere un meeting o due.',
        'Apri **Impostazioni › Assistenti**. In cima ci sono gli assistenti che hai sul Mac.',
        'Fai clic su **Collega** accanto al tuo. nchova si aggiunge alla configurazione dell’assistente: prima di cambiare un file ne salva una copia o, per Claude Code e Codex, usa il loro comando.',
        'Fai quello che nchova ti dice dopo (per Claude: chiudilo e riaprilo), poi chiedi dei tuoi meeting.',
        'Per Perplexity, Raycast, Zed, Goose e qualsiasi altra app che parla MCP, **Copia la configurazione** mette negli appunti quello che c’è da incollare.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande su *MCP*',
      items: [
        ['Cos’è MCP?', 'Il Model Context Protocol: uno standard aperto che permette agli assistenti AI di usare strumenti e dati che sono sul tuo computer. nchova lo parla, quindi qualsiasi assistente che lo parla può leggere i tuoi meeting.'],
        ['Quali assistenti funzionano?', 'Claude, Claude Code, ChatGPT e Codex, Cursor, VS Code, Windsurf, Gemini CLI e LM Studio si collegano con un clic; Perplexity, Raycast, Zed e Goose con una configurazione da incollare; e qualsiasi app che avvia un server MCP locale (stdio).'],
        ['Serve Pro?', 'No. Il server MCP è gratis, per sempre.'],
        ['L’assistente può cambiare o cancellare i miei meeting?', 'Può salvare note e azioni, che prendono il posto di quelle del meeting, anche delle note che hai modificato tu, e correggere il titolo di un meeting, i suoi invitati o i nomi delle sue voci. Non può cancellare un meeting né toccarne la trascrizione, e un titolo o il nome di una voce che hai scelto tu non vengono mai sovrascritti.'],
        ['Funziona durante un meeting?', 'Sì: l’assistente può leggere quello che è stato detto finora, o solo gli ultimi minuti.'],
        ['I miei meeting arrivano a nchova?', 'Non hanno dove arrivare: nchova non ha server. L’assistente parla con nchova sul tuo Mac.'],
      ],
    },
  ],
};


// ---------- nchova accanto agli altri ----------

/** Le parole di tutti gli scontrini: i mesi, le righe. */
const billWords = {
  month: 'mese',
  months: 'mesi',
  total: 'Totale',
  once: 'nchova Pro, una volta',
  year: 'Anno {n}, aggiornamenti',
  nothing: '0,00 €',
  switchLabel: 'Addebito',
};

const routeWords = { mac: 'Il tuo Mac', switchLabel: 'Mostra' };

const wisprFlow: Guide = {
  id: 'wispr-flow',
  page: 'alternatives/wispr-flow/',
  group: 'compare',
  short: 'Wispr Flow',
  metaTitle: 'Alternativa a Wispr Flow, dettatura sul tuo Mac — nchova',
  description:
    'nchova accanto a Wispr Flow: dettatura che gira sul tuo Mac, offline, senza account e senza abbonamento. Dove va la tua voce, e i prezzi, a confronto.',
  kicker: 'nchova vs Wispr Flow',
  title: 'L’alternativa a Wispr Flow che *resta sul tuo Mac*.',
  lead: 'Wispr Flow è una tastiera vocale curata, e funziona mandando quello che dici al suo cloud. nchova fa lo stesso lavoro (tieni premuto un tasto, parla, il testo compare in qualsiasi app) col modello vocale sul tuo Mac: offline, senza account, e se paghi, paghi una volta.',
  short3: [
    ['*Dove* ascolta', 'Wispr Flow trascrive nel suo cloud, sempre. nchova trascrive sul tuo Mac, sempre.'],
    ['*Cosa* tiene', 'Nei piani Free e Pro, Wispr Flow di default conserva le dettature e le usa per addestrare i modelli, a meno che tu non disattivi entrambe le cose. nchova le tiene solo sul tuo Mac: non ha server a cui mandarle.'],
    ['*Quanto* paghi', 'Wispr Flow Pro costa 15 $ al mese, o 144 $ all’anno. nchova è gratis, o 29,99 € una volta per Pro.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Dove *va* la tua voce',
      lead: 'La stessa frase, dettata due volte. Wispr Flow la manda ai suoi server, con l’app in cui sei e il testo attorno al cursore, e scrive quello che torna indietro. nchova la passa a un modello vocale sul Mac.',
      route: {
        them: { tab: 'Wispr Flow', place: 'Il cloud di Wispr, negli USA', what: 'la tua voce, il nome dell’app, il testo attorno al cursore', back: 'testo', sent: 'secondi della tua voce inviati' },
        us: { tab: 'nchova', place: 'Modello vocale, su questo Mac', sent: 'secondi della tua voce inviati' },
        words: {
          ...routeWords,
          said: 'spostiamo il lancio a venerdì alle dieci',
          written: 'Spostiamo il lancio a venerdì alle dieci.',
          label: 'Una frase dettata con Wispr Flow va ai suoi server e torna indietro; con nchova va a un modello sul Mac, e non esce niente.',
        },
      },
    },
    {
      kind: 'table',
      h: 'A confronto',
      them: 'Wispr Flow',
      rows: [
        ['Dove trascrive', 'Nel cloud di Wispr: «transcription always occurs on the cloud»', 'Sul tuo Mac'],
        ['Senza internet', 'Niente dettatura: «an internet connection is required for transcription»; l’audio viene tenuto per riprovare', 'Funziona uguale'],
        ['Inviato con la tua voce', 'Con Context Awareness, attiva di default: l’app, il campo di testo, il testo sullo schermo', 'Non si invia niente'],
        ['Le tue dettature', 'Archiviazione nel cloud e addestramento dei modelli attivi di default nei piani Free e Pro; si possono spegnere tutti e due', 'Solo sul tuo Mac: non abbiamo server'],
        ['Account', 'Obbligatorio', 'Nessuno'],
        ['Lingue', 'Più di 100, una per dettatura: «the dominant language wins»', '{nAll}, di cui {nFree} gratis; fino a tre insieme, e cambia lingua anche a metà frase'],
        ['Meeting', 'Notetaker: senza bot; chi parla prende il nome dall’invito, anche nel piano Free; trascritti e conservati nel cloud di Wispr', 'Senza bot; trascritti sul tuo Mac, voci distinte (Pro)'],
        ['Assistenti AI (MCP)', 'Server ospitato da loro, per meeting e note', 'Server locale, per i meeting; mai la tua dettatura'],
        ['Piano gratuito', '2.000 parole a settimana sul desktop', 'Nessun limite di parole, col modello di Apple'],
        ['Piano a pagamento', 'Pro: 15 $ al mese, o 144 $ all’anno', 'Pro: 29,99 € una volta, fino a 3 Mac'],
        ['Gira su', 'Mac, Windows, iPhone, Android', 'Mac con chip Apple e macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Tre anni *di ciascuno*',
      lead: 'Wispr Flow Pro ai prezzi USA, con addebito annuale o mensile, accanto a nchova Pro. Scegli come pagare e guarda passare i mesi.',
      bill: {
        head: 'WISPR FLOW PRO',
        plans: [
          { tab: 'Annuale', sub: 'ogni anno, 144,00 USD', every: 12, amount: 144 },
          { tab: 'Mensile', sub: 'ogni mese, 15,00 USD', every: 1, amount: 15 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'In tre anni Wispr Flow Pro arriva a 432,00 USD con l’addebito annuale, o a 540,00 USD con quello mensile; nchova Pro resta 29,99 €, pagati una volta.' },
      },
    },
    {
      kind: 'demo',
      h: 'Stesso gesto. *Provalo*.',
      lead: 'Tieni premuto un tasto, parla, rilascia: come detti già con Wispr Flow. Tieni premuto il tasto sotto la finestra e la prossima frase è la tua.',
      demo: { name: 'dictation' },
      notes: base.dictation.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quando Wispr Flow è la *scelta migliore*',
      p: [
        'Se detti su Windows, su iPhone o su Android oltre che sul Mac, Wispr Flow ti segue dappertutto. nchova è un’app per Mac, per i Mac con chip Apple e macOS 26 o successivo.',
        'Se scrivi in una lingua che non conoscono né Apple né Parakeet, le oltre cento lingue di Wispr Flow coprono più terreno. E i suoi comandi, che riscrivono a voce il testo selezionato, in nchova non hanno un equivalente: nchova scrive quello che hai detto e non aggiunge mai una parola.',
        'Se non ti ritrovi in niente di tutto questo, lo scambio è semplice: lo stesso gesto, senza che la tua voce esca dal Mac, senza account, senza abbonamento.',
      ],
    },
    {
      kind: 'steps',
      h: 'Passare da Wispr Flow',
      steps: [
        'Chiudi Wispr Flow, così due app non ascoltano lo stesso tasto.',
        '[Scarica nchova](/download?from=wispr-flow-steps) e segui la configurazione: il **Microfono**, l’**Accessibilità** e **Premi il tasto 🌐 per** su **Non fare nulla**.',
        'Scegli le tue lingue, fino a tre, e aggiungi i nomi e le sigle che usi in **Impostazioni › Vocabolario**.',
        'Tieni premuto **Fn**, o il tasto Opzione di destra, e parla.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['nchova è precisa quanto Wispr Flow?', 'Provala sulla tua voce: per 30 giorni la prova gratuita include tutto. nchova usa il modello vocale di Apple o Parakeet di NVIDIA sul tuo Mac; Wispr Flow usa un modello suo nel suo cloud.'],
        ['Serve un account?', 'No. Scarichi nchova e funziona. Pro è una chiave di licenza che arriva per email.'],
        ['nchova funziona su Windows o su iPhone?', 'No: è fatta per i Mac con chip Apple e macOS 26 o successivo.'],
        ['Funziona anche nei meeting?', 'Sì, e senza bot: nchova si accorge della call, la trascrive sul Mac, distingue le voci (Pro) e scrive le note quando chiudi. Guarda [come trascrive una call su Zoom](@transcribe/zoom/).'],
        ['Cosa succede dopo la prova?', 'nchova resta gratis coi modelli di Apple: dettatura, meeting, note. Pro aggiunge Parakeet, le voci distinte e riconosciute per nome, le note migliori e la sync iCloud, a 29,99 € una volta sola.'],
      ],
    },
  ],
  sources: [
    ['Prezzi di Wispr Flow', 'https://wisprflow.ai/pricing'],
    ['Controllo dei dati', 'https://wisprflow.ai/data-controls'],
    ['FAQ su sicurezza e conformità', 'https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq'],
    ['Context Awareness', 'https://docs.wisprflow.ai/articles/4678293671-feature-context-awareness'],
    ['Più lingue', 'https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages'],
    ['Cos’è Flow', 'https://docs.wisprflow.ai/articles/2772472373-what-is-flow'],
    ['Precisione e limiti noti', 'https://docs.wisprflow.ai/articles/4048537120-what-to-expect-from-flow-accuracy-and-known-limitations'],
    ['Notetaker', 'https://wisprflow.ai/notetaker'],
  ],
  checked: 'l’8 ottobre 2026',
};

const superwhisper: Guide = {
  id: 'superwhisper',
  page: 'alternatives/superwhisper/',
  group: 'compare',
  short: 'Superwhisper',
  metaTitle: 'Alternativa a Superwhisper per call e dettatura — nchova',
  description:
    'nchova accanto a Superwhisper: tutte e due dettano sul Mac. nchova in più si accorge delle call, segue il calendario e scrive le note. Pro: 29,99 € una volta.',
  kicker: 'nchova vs Superwhisper',
  title: 'L’alternativa a Superwhisper, *anche per i meeting*.',
  lead: 'Superwhisper e nchova mettono tutte e due un modello vocale sul tuo Mac, e tutte e due scrivono dov’è il cursore. La differenza è quello che succede attorno a una call: nchova se ne accorge e ti propone di trascriverla, segue il tuo calendario, sente tutte e due le parti anche nel piano gratuito, e scrive le note quando chiudi. E Pro costa 29,99 €, una volta sola.',
  short3: [
    ['Dettatura, *tutte e due*', 'Superwhisper usa modelli locali o nel cloud, modalità per modalità; nchova gira solo sul Mac.'],
    ['Meeting, *da soli*', 'Superwhisper ha una modalità meeting che avvii tu; nchova si accorge della call, legge il calendario e scrive le note da sola. Con Pro dà anche un nome alle voci.'],
    ['*Una volta*', 'Superwhisper Pro costa 84,99 $ all’anno, o 249,99 $ a vita. nchova Pro costa 29,99 €, una volta.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'Parte la call. *nchova chiede*.',
      lead: 'Appena Zoom, Meet, Teams o Slack prende il microfono, nchova ti propone di trascrivere; col calendario, dà al meeting il nome dell’evento. La documentazione di Superwhisper descrive una modalità meeting che avvii tu.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'A confronto',
      them: 'Superwhisper',
      rows: [
        ['Dove trascrive', 'Sul Mac con modelli locali, o nel cloud (il suo S1, o i modelli di Deepgram ed ElevenLabs), a scelta per ogni modalità', 'Sul tuo Mac, sempre'],
        ['Piano gratuito', 'Modelli Whisper locali, due modalità senza elaborazione AI', 'Dettatura, meeting e note coi modelli di Apple'],
        ['Meeting', 'Una modalità meeting che avvii tu; l’altra parte della call richiede Pro', 'Si accorge della call, chiede, segue il tuo calendario'],
        ['Chi parla', 'Separazione dei parlanti (Pro), non usata nei riassunti AI', 'Voce 1, Voce 2…, col nome riconosciuto dalla voce fra gli invitati (Pro)'],
        ['Note', 'Da una modalità AI, locale o nel cloud', 'Scritte quando finisce la call, attorno ai tuoi appunti'],
        ['Assistenti AI (MCP)', 'Server locale per la cronologia delle dettature (macOS)', 'Server locale per i tuoi meeting; mai la tua dettatura'],
        ['Lingue', 'Più di 100, a seconda del modello', '{nAll}, di cui {nFree} gratis; fino a tre insieme, e cambia lingua anche a metà frase'],
        ['Riscrittura', 'Modalità AI che formattano e riscrivono quello che hai detto', 'Scrive quello che hai detto; la pulizia può solo togliere parole'],
        ['Piano a pagamento', 'Pro: 8,49 $ al mese, 84,99 $ all’anno o 249,99 $ a vita', 'Pro: 29,99 € una volta, fino a 3 Mac'],
        ['Gira su', 'Mac (anche Intel), Windows, iPhone, Android', 'Mac con chip Apple e macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Tre anni *di ciascuno*',
      lead: 'Superwhisper Pro ai prezzi USA, annuale, mensile o a vita, accanto a nchova Pro.',
      bill: {
        head: 'SUPERWHISPER PRO',
        plans: [
          { tab: 'Annuale', sub: 'ogni anno, 84,99 USD', every: 12, amount: 84.99 },
          { tab: 'Mensile', sub: 'ogni mese, 8,49 USD', every: 1, amount: 8.49 },
          { tab: 'A vita', sub: 'una volta, 249,99 USD', every: 1000, amount: 249.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'In tre anni Superwhisper Pro arriva a 254,97 USD con l’addebito annuale, a 305,64 USD con quello mensile, o a 249,99 USD a vita; nchova Pro resta 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Sa *chi* sta parlando',
      lead: 'Con Pro, nchova distingue le voci degli altri mentre parlano e dà un nome a quelle che ha già sentito, fra le persone invitate. I nomi finiscono nella trascrizione, nelle note e in quello che legge il tuo assistente.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quando Superwhisper è la *scelta migliore*',
      p: [
        'Se detti su Windows, su iPhone o su Android, o su un Mac Intel, Superwhisper li copre, con una licenza sola. nchova ha bisogno di un Mac con chip Apple e macOS 26.',
        'Se vuoi che le tue parole vengano riscritte mentre detti, col tono di una mail o la forma di un appunto, le modalità AI di Superwhisper lo fanno. nchova scrive quello che hai detto.',
        'Se le tue giornate sono fatte di call, nchova fa da sola la parte che c’è attorno: si accorge della call, sa chi era invitato e scrive le note quando chiudi; con Pro, dà anche un nome alle voci.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['nchova usa anche Parakeet?', 'Sì: con Pro, Parakeet di NVIDIA gira sul tuo Mac in {nPro} lingue europee. Senza Pro lavora il modello vocale di Apple, in {nFree} lingue.'],
        ['nchova funziona offline?', 'Sì: dettatura, meeting e note scritte sul Mac funzionano senza connessione. Internet serve per scaricare i modelli la prima volta, per attivare Pro e per gli aggiornamenti. Leggi la guida alla [dettatura offline](@dictation/offline/).'],
        ['Posso provarla prima di pagare?', 'Trenta giorni con tutto, senza carta e senza account. Dopo resta gratis coi modelli di Apple.'],
        ['C’è una licenza a vita?', 'Pro è a vita: 29,99 € una volta, fino a 3 Mac, con tutti gli aggiornamenti inclusi finché nchova ne riceve.'],
      ],
    },
  ],
  sources: [
    ['Piani di Superwhisper', 'https://superwhisper.com/docs/billing/plans'],
    ['Modelli vocali', 'https://superwhisper.com/docs/models/voice'],
    ['Scegliere un modello', 'https://superwhisper.com/docs/get-started/choose-your-model'],
    ['Modalità integrate', 'https://superwhisper.com/docs/modes/built-in'],
    ['Meeting con i parlanti separati', 'https://superwhisper.com/docs/modes/speaker-separated-meetings'],
    ['CLI e server MCP', 'https://superwhisper.com/docs/get-started/cli'],
    ['Introduzione', 'https://superwhisper.com/docs/get-started/introduction'],
  ],
  checked: 'l’8 ottobre 2026',
};

const otter: Guide = {
  id: 'otter',
  page: 'alternatives/otter/',
  group: 'compare',
  short: 'Otter',
  metaTitle: 'Alternativa a Otter.ai senza bot, sul tuo Mac — nchova',
  description:
    'nchova accanto a Otter.ai: trascrizione delle riunioni sul tuo Mac, senza bot nella call e senza caricare l’audio. Note, voci, prezzi e privacy a confronto.',
  kicker: 'nchova vs Otter',
  title: 'L’alternativa a Otter che *non entra mai nella call*.',
  lead: 'Il Notetaker di Otter entra nelle tue call su Zoom, Meet e Teams come ospite, e ogni registrazione, col bot o senza, viene trascritta e conservata nel cloud di Otter. nchova trascrive le stesse call dal tuo Mac: non entra nessuno, l’audio non viene mai caricato, e le note si scrivono quando chiudi.',
  short3: [
    ['*Nessun* ospite', 'il Notetaker di Otter entra come un partecipante che vedono tutti. nchova ascolta dal tuo Mac, come fai tu.'],
    ['*Niente* da caricare', 'Otter conserva l’audio e può usarlo, de-identificato, per addestrare i modelli. nchova non tiene l’audio, e non avrebbe dove mandarlo.'],
    ['*Nessun* limite di minuti', 'Otter Basic si ferma a 300 minuti al mese, e di ogni call mostra solo i primi 30 minuti. nchova non ha limiti, e Pro costa 29,99 € una volta.'],
  ],
  blocks: [
    {
      kind: 'bot',
      h: 'Un ospite nella call, *o nessuno*',
      lead: 'Con Otter, un Notetaker entra nel meeting a tuo nome, e può entrarci da solo partendo dal tuo calendario. Con nchova, nella call ci sono le persone invitate, e nessun altro.',
      bot: {
        them: {
          tab: 'Otter Notetaker',
          name: 'Alessio’s Notetaker',
          joined: 'Alessio’s Notetaker (Otter.ai) è entrato nel meeting',
          banner: '',
          caption: 'Il Notetaker entra come ospite: nella call lo vedono tutti, e la registrazione va nel cloud di Otter.',
        },
        us: { tab: 'nchova', caption: 'Non entra nessuno. nchova ascolta dal tuo Mac, e la trascrizione resta lì.' },
        words: {
          switchLabel: 'Mostra',
          label: 'Una call in cui il Notetaker di Otter entra come ospite, accanto alla stessa call con nchova, dove non entra nessuno e la trascrizione compare sul tuo schermo.',
          call: 'Sync prodotto',
          tiles: ['Giulia', 'Marco', 'Sara', 'Tommaso', 'Alessio'],
          live: 'Transcript dal vivo',
          bubbles: [
            ['Giulia', 'Il testo della pagina è pronto.', 'Voce 1'],
            ['', 'Perfetto. E le animazioni?'],
            ['Marco', 'Entro giovedì, anzi no, venerdì.', 'Voce 2'],
          ],
        },
      },
    },
    {
      kind: 'table',
      h: 'A confronto',
      them: 'Otter',
      rows: [
        ['Come sente la call', 'Otter Notetaker entra in Zoom, Meet e Teams come ospite; l’app desktop può anche registrare senza', 'Dal tuo Mac: il tuo microfono e l’audio della call, nessun ospite'],
        ['Dove trascrive', 'Nel cloud di Otter, negli USA', 'Sul tuo Mac'],
        ['L’audio', 'Conservato con la conversazione, esportabile in mp3', 'Mai conservato: solo il testo'],
        ['Addestramento', 'La sua informativa sulla privacy consente l’addestramento su audio e trascrizioni de-identificati', 'Non ci arriva niente su cui addestrare'],
        ['Chi parla', 'Riconosciuto da impronte vocali conservate da Otter, condivise in un workspace', 'Con Pro, Voce 1, Voce 2…, col nome riconosciuto da impronte vocali tenute sul tuo Mac; senza Pro, «Io» e «Altri»'],
        ['Lingue', '6, una per conversazione (il francese può passare all’inglese)', '{nAll}, di cui {nFree} gratis; fino a tre insieme, frase per frase'],
        ['Dettatura', 'Nessuna', 'Tieni premuto Fn, in qualsiasi app'],
        ['Senza internet', 'Registra, e trascrive dopo il caricamento', 'Trascrive come sempre'],
        ['Assistenti AI (MCP)', 'Un server nel cloud di Otter', 'Un server locale, sul tuo Mac'],
        ['Piano gratuito', '300 minuti al mese; i primi 30 minuti di ogni conversazione; le ultime 25 conversazioni', 'Nessun limite, coi modelli di Apple'],
        ['Piano a pagamento', 'Pro: 16,99 $ al mese, o 8,33 $ al mese con addebito annuale', 'Pro: 29,99 € una volta, fino a 3 Mac'],
        ['Gira su', 'Web, Mac, Windows, iPhone, Android', 'Mac con chip Apple e macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'La trascrizione, *dal vivo*, sul tuo schermo',
      lead: 'Arriva la call, nchova chiede una volta, e la trascrizione si scrive da sola in una scheda che vedi solo tu: il tuo microfono è «Io», la call sono tutti gli altri.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'bill',
      h: 'Tre anni *di ciascuno*',
      lead: 'Otter Pro ai prezzi USA, con addebito annuale o mensile, accanto a nchova Pro.',
      bill: {
        head: 'OTTER PRO',
        plans: [
          { tab: 'Annuale', sub: 'ogni anno, 99,99 USD', every: 12, amount: 99.99 },
          { tab: 'Mensile', sub: 'ogni mese, 16,99 USD', every: 1, amount: 16.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'In tre anni Otter Pro arriva a 299,97 USD con l’addebito annuale, o a 611,64 USD con quello mensile; nchova Pro resta 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Le note, *quando finisce la call*',
      lead: 'Scritte attorno a quello che hai annotato, col modello che scegli tu: quello di Apple o Qwen sul Mac, o il tuo Claude Code o Codex. Poi chiedi al meeting cosa si è deciso.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Quando Otter è la *scelta migliore*',
      p: [
        'Se il tuo team lavora insieme in Otter, condivide le conversazioni nei canali e le manda a Salesforce o HubSpot, Otter è fatto per questo. nchova tiene i meeting di ognuno sul suo Mac, e nel suo iCloud se lo sceglie.',
        'Se devi registrare dal telefono, in un browser su qualsiasi computer o su Windows, Otter c’è dappertutto. nchova è un’app per Mac.',
        'Se vuoi riascoltare la registrazione, Otter conserva l’audio; nchova non lo tiene mai, solo le parole.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['Chi è nella call sa che nchova sta trascrivendo?', 'Nella call non compare niente, perché nchova non c’è. Dove la legge lo chiede, di’ alle persone con cui parli che stai trascrivendo.'],
        ['nchova può importare le mie conversazioni di Otter?', 'Le conversazioni e le loro note no. Ma una registrazione che esporti da Otter in mp3 puoi trascinarla sulla finestra **Meeting**: nchova la trascrive sul tuo Mac, fino a quattro ore.'],
        ['Funziona con Zoom, Meet e Teams?', 'Con tutti, e anche con Slack, FaceTime, Webex e le call nel browser: nchova si accorge quando uno di loro prende il microfono, e qualsiasi altra call si avvia dalla barra dei menu. Guarda [Zoom](@transcribe/zoom/), [Google Meet](@transcribe/google-meet/) e [Teams](@transcribe/teams/).'],
        ['Posso chiedere a Claude o a ChatGPT dei miei meeting?', 'Sì: il server MCP di nchova gira sul tuo Mac e si collega con un clic. Guarda [i meeting nel tuo assistente](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Prezzi di Otter', 'https://otter.ai/pricing'],
    ['Otter Notetaker', 'https://help.otter.ai/hc/en-us/articles/4425393298327-Otter-Notetaker-Overview'],
    ['App desktop di Otter', 'https://help.otter.ai/hc/en-us/articles/35973988280215-Otter-Desktop-App-Mac-Windows'],
    ['Informativa sulla privacy', 'https://otter.ai/privacy-policy'],
    ['Riconoscimento dei parlanti', 'https://help.otter.ai/hc/en-us/articles/21665587209367-Speaker-Identification-Overview'],
    ['Lingue supportate', 'https://help.otter.ai/hc/en-us/articles/360047247414-Supported-languages'],
  ],
  checked: 'l’8 ottobre 2026',
};

const granola: Guide = {
  id: 'granola',
  page: 'alternatives/granola/',
  group: 'compare',
  short: 'Granola',
  metaTitle: 'Alternativa a Granola che trascrive sul tuo Mac — nchova',
  description:
    'nchova accanto a Granola: nessuna delle due mette un bot nella call, ma nchova trascrive sul tuo Mac, non nel cloud, e lì scrive anche le note. A confronto.',
  kicker: 'nchova vs Granola',
  title: 'L’alternativa a Granola che *tiene la call sul tuo Mac*.',
  lead: 'Granola e nchova restano tutte e due fuori dalla call: nessun bot, solo il tuo Mac che ascolta. La differenza è dove va a finire la call. Granola manda la call in streaming a Deepgram o AssemblyAI e scrive le note con modelli nel cloud; nchova trascrive sul Mac e lì scrive le note, a meno che tu non lo chieda al tuo Claude Code.',
  short3: [
    ['Niente bot, *tutte e due*', 'nessuna delle due entra nella call; tutte e due ascoltano il tuo microfono e l’audio della call.'],
    ['*Dove* si trascrive', 'Granola nel cloud; nchova sul tuo Mac, anche offline.'],
    ['*Quanto* paghi', 'Granola è gratis per le note degli ultimi 30 giorni; Business costa 14 $ al mese, tutti i mesi. nchova è gratis senza niente di nascosto, o 29,99 € una volta.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Dove *va* la call',
      lead: 'Lo stesso meeting, trascritto due volte. Con Granola l’audio va in streaming a un servizio di trascrizione mentre le persone parlano; con nchova non lascia mai il Mac.',
      route: {
        meeting: true,
        title: 'Sync prodotto',
        them: { tab: 'Granola', place: 'Deepgram o AssemblyAI, poi OpenAI o Anthropic', what: 'l’audio della call, dal vivo; poi la trascrizione, per le note', back: 'testo', sent: 'secondi di call inviati' },
        us: { tab: 'nchova', place: 'Trascritto su questo Mac', sent: 'secondi di call inviati' },
        words: {
          ...routeWords,
          said: 'Giulia: il testo della pagina è pronto, manca solo l’animazione',
          written: 'Giulia: Il testo della pagina è pronto, manca solo l’animazione.',
          label: 'Un meeting trascritto con Granola va in streaming ai servizi nel cloud e torna indietro; con nchova si trascrive sul Mac e non esce niente.',
        },
      },
    },
    {
      kind: 'table',
      h: 'A confronto',
      them: 'Granola',
      rows: [
        ['Bot nella call', 'Nessuno', 'Nessuno'],
        ['Dove trascrive', 'Nel cloud: Deepgram, AssemblyAI', 'Sul tuo Mac'],
        ['Chi scrive le note', 'Modelli nel cloud, fra cui quelli di OpenAI e Anthropic', 'Il modello di Apple o Qwen sul Mac, o il tuo Claude Code o Codex'],
        ['Le tue trascrizioni', 'Conservate su AWS negli USA finché non le cancelli; cancellazione automatica facoltativa', 'Sul tuo Mac, e nel tuo iCloud se attivi la sync'],
        ['Addestramento', 'Dati anonimizzati usati di default nei piani Basic e Business, con la possibilità di rinunciare', 'Non ci arriva niente su cui addestrare'],
        ['Quando parte', 'Ti avvisa della call; parte quando fai clic, o quando apri la nota del meeting', 'Si accorge della call e chiede, o parte da sola'],
        ['Chi parla', '«Me» e «Them»; sul desktop, i nomi dei partecipanti presi dall’app della call', 'Voce 1, Voce 2…, col nome riconosciuto dalla voce fra gli invitati (Pro)'],
        ['Dettatura', 'Solo per fare una domanda alla sua Chat', 'Tieni premuto Fn, in qualsiasi app'],
        ['Senza internet', 'La trascrizione ha bisogno della connessione', 'Funziona uguale'],
        ['Piano gratuito', 'Meeting illimitati; visibili le note degli ultimi 30 giorni', 'Illimitato, coi modelli di Apple; niente di nascosto'],
        ['Piano a pagamento', 'Business: 14 $ al mese per utente, con addebito mensile', 'Pro: 29,99 € una volta, fino a 3 Mac'],
        ['Account', 'Accesso con Google o Microsoft', 'Nessuno'],
        ['Gira su', 'Mac, Windows, iPhone, Android', 'Mac con chip Apple e macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'Le note *alla Granola*, sul tuo Mac',
      lead: 'Annota due parole durante la call; quando finisce, le note crescono attorno a quelle. Poi chiedi al meeting: cosa abbiamo deciso, cosa devo fare io.',
      demo: { name: 'notes' },
    },
    {
      kind: 'bill',
      h: 'Tre anni *di ciascuno*',
      lead: 'Granola Business al prezzo USA, con addebito mensile (Granola fattura all’anno solo con Enterprise), accanto a nchova Pro.',
      bill: {
        head: 'GRANOLA BUSINESS',
        plans: [{ tab: 'Mensile', sub: 'ogni mese, 14,00 USD', every: 1, amount: 14 }],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'In tre anni Granola Business arriva a 504,00 USD; nchova Pro resta 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Voci distinte *dal loro suono*',
      lead: 'Granola sente te e «Them», e nella sua app desktop prende i nomi da Zoom, Meet e Teams. Con Pro, nchova distingue le voci degli altri dal loro suono, in qualsiasi call, e dà un nome a quelle che ha già sentito, fra le persone invitate.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quando Granola è la *scelta migliore*',
      p: [
        'Se il tuo team condivide le note negli spazi di Granola e le manda a Notion, HubSpot o Attio, Granola è fatto per questo, e gira anche su Windows, iPhone e Android. nchova tiene i meeting di ognuno sul suo Mac.',
        'Se vuoi che ogni nota la scrivano i modelli più forti del cloud, senza configurare niente, Granola lo fa da subito. In nchova le note migliori le scrive il tuo Claude Code o Codex, col tuo abbonamento: la trascrizione allora va ad Anthropic o a OpenAI, e chi scrive lo scegli tu in **Impostazioni › Note**.',
        'Se hai scelto Granola per il «niente bot», nchova lo mantiene, e in più toglie di mezzo il cloud.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['nchova funziona con Google Calendar e Outlook?', 'Sì, attraverso i calendari che il tuo Mac conosce: aggiungi l’account a macOS solo per il calendario. [Ecco come](@help/calendar/).'],
        ['Posso usare il mio Claude per le note?', 'Sì, con Pro: nchova usa il tuo Claude Code o Codex, collegato col tuo abbonamento, e le note arrivano in pochi secondi. Nessuna chiave passa da nchova.'],
        ['Parte da sola?', 'Si accorge della call appena Zoom, Meet, Teams o Slack prende il microfono, e chiede. Oppure imposta **Quando inizia una call** su **Avvia da solo la trascrizione**.'],
        ['Posso chiedere a Claude o a ChatGPT dei miei meeting?', 'Sì: il server MCP di nchova gira sul tuo Mac e si collega con un clic. Guarda [i meeting nel tuo assistente](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Prezzi di Granola', 'https://www.granola.ai/pricing'],
    ['Sicurezza', 'https://www.granola.ai/security'],
    ['Trascrizione', 'https://docs.granola.ai/help-center/taking-notes/transcription'],
    ['Addestramento dei modelli', 'https://docs.granola.ai/help-center/consent-security-privacy/model-training'],
    ['Attribuzione dei parlanti', 'https://docs.granola.ai/help-center/taking-notes/speaker-attribution'],
  ],
  checked: 'l’8 ottobre 2026',
};

const macwhisper: Guide = {
  id: 'macwhisper',
  page: 'alternatives/macwhisper/',
  group: 'compare',
  short: 'MacWhisper',
  metaTitle: 'Alternativa a MacWhisper per call e dettatura — nchova',
  description:
    'nchova accanto a MacWhisper: tutte e due trascrivono sul Mac e si pagano una volta. MacWhisper è nata per i file; nchova per le tue call e la tua dettatura.',
  kicker: 'nchova vs MacWhisper',
  title: 'L’alternativa a MacWhisper *fatta per le call*.',
  lead: 'MacWhisper e nchova sono d’accordo sulla cosa più importante: trascrizione sul tuo Mac, nessun bot, nessun abbonamento. Sono fatte per momenti diversi. MacWhisper dà il meglio con le registrazioni e i file che hai già; nchova vive nelle call che stai per fare, e in ogni campo di testo in cui detti.',
  short3: [
    ['Sul Mac, *tutte e due*', 'tutte e due trascrivono sul tuo Mac e si pagano una volta. Nessuna delle due manda un bot.'],
    ['*In blocco* o *in call*', 'MacWhisper è costruita attorno a file, elaborazioni in blocco e link di YouTube; nchova attorno alle call, dal vivo, col tuo calendario, e trascrive anche un file, quando ne hai uno.'],
    ['29,99 € *o* 64 €', 'nchova Pro costa 29,99 € una volta; MacWhisper Pro 64 € una volta sul suo sito. La versione gratuita di nchova trascrive anche i meeting.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'Parte la call. *nchova chiede*.',
      lead: 'nchova si accorge della call, le dà il nome dell’evento del calendario e scrive la trascrizione dal vivo in una scheda sul tuo schermo. Quando chiudi, le note sono scritte.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'A confronto',
      them: 'MacWhisper',
      rows: [
        ['Fatta per', 'File audio e video, elaborazioni in blocco, link di YouTube, sottotitoli', 'Le call mentre succedono, la dettatura in qualsiasi app; anche file audio e video, uno alla volta'],
        ['Dove trascrive', 'Sul tuo Mac di default; servizi nel cloud con le tue chiavi, se vuoi', 'Sul tuo Mac, sempre'],
        ['Meeting', 'Rileva la call e la registra, con una trascrizione dal vivo (Pro; per la sua documentazione il rilevamento è in beta)', 'Si accorge della call e chiede; gratis'],
        ['Calendario', 'Non descritto nella sua documentazione', 'Dà al meeting il nome dell’evento ed elenca chi era invitato'],
        ['Chi parla', 'Parlanti distinti (Pro)', 'Voce 1, Voce 2…, col nome riconosciuto dalla voce fra gli invitati (Pro)'],
        ['Note e chat', 'Con le tue chiavi API, o con un modello locale via Ollama o LM Studio (Pro)', 'Scritte quando finisce la call: il modello di Apple, gratis; Qwen sul Mac, o il tuo Claude Code o Codex (Pro)'],
        ['L’audio', 'La registrazione resta con la trascrizione', 'Mai conservato: solo il testo'],
        ['Dettatura', 'Dettatura di base gratis; qualità migliore e prompt AI con Pro', 'Tieni premuto Fn, in qualsiasi app; Parakeet con Pro'],
        ['Assistenti AI (MCP)', 'Nessun server MCP nella sua documentazione; uno strumento da riga di comando per script e agenti AI', 'Un server MCP locale per i tuoi meeting, gratis'],
        ['Lingue', 'Circa 100, con Whisper', '{nAll}: {nFree} gratis, {nPro} europee con Pro; fino a tre insieme, e cambia lingua anche a metà frase'],
        ['Prezzo', 'Gratis; Pro 64 € una volta (65 € al checkout di Gumroad)', 'Gratis; Pro 29,99 € una volta, fino a 3 Mac'],
        ['Gira su', 'macOS 15 o successivo, chip Apple o Intel; un’app separata su iPhone e iPad', 'macOS 26 o successivo, chip Apple'],
      ],
    },
    {
      kind: 'demo',
      h: 'Sa *chi* sta parlando',
      lead: 'Tutte e due le app distinguono le voci. nchova ci mette anche i nomi, fra le persone invitate, riconoscendo le voci che ha già sentito; le impronte vocali restano sul tuo Mac.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'demo',
      h: 'Le note, *senza chiavi* da incollare',
      lead: 'nchova scrive le note col modello di Apple sul Mac, o con Qwen, che scarica e fa girare per te, o col tuo Claude Code o Codex, collegato col tuo abbonamento. Nessuna chiave API da comprare o da incollare.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Quando MacWhisper è la *scelta migliore*',
      p: [
        'Se il tuo lavoro sono registrazioni, interviste, podcast, lezioni, una cartella di memo vocali, lo strumento giusto è MacWhisper: trascini dentro una serie di file, o un link di YouTube, ed escono le trascrizioni. nchova trascrive un file quando glielo dai, fino a quattro ore, ma è fatta per quello che dici e per le call in cui sei, mentre succedono.',
        'Se hai un Mac Intel o macOS 15, MacWhisper ci gira; nchova ha bisogno di un chip Apple e di macOS 26. E se vuoi riascoltare la registrazione, MacWhisper conserva l’audio; nchova tiene solo le parole.',
        'In tanti vorranno tutte e due: MacWhisper per le elaborazioni in blocco e i link di YouTube, nchova per le call, la dettatura e un file ogni tanto.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['nchova può trascrivere un file audio?', 'Sì, un file audio o video alla volta, fino a quattro ore: scegli **Trascrivi un file…** nella barra dei menu, trascinalo sulla finestra **Meeting** o usa **Apri con › nchova** nel Finder. C’è anche nella versione gratuita, coi modelli di Apple. Per tanti file in blocco o un link di YouTube, MacWhisper è fatta apposta.'],
        ['Usano tutte e due Parakeet?', 'Sì: con Pro, tutte e due possono usare Parakeet di NVIDIA sul Mac. nchova lo usa sia per la dettatura sia per i meeting, in {nPro} lingue europee.'],
        ['nchova ha bisogno di una chiave API per le note?', 'No. Il modello di Apple e Qwen girano sul Mac; Claude Code e Codex usano il tuo abbonamento, collegato una volta. Nessuna chiave passa da nchova.'],
        ['Posso provarla prima?', 'Trenta giorni con tutto, senza carta e senza account. Poi resta gratis coi modelli di Apple.'],
      ],
    },
  ],
  sources: [
    ['MacWhisper', 'https://www.macwhisper.com'],
    ['MacWhisper su Gumroad', 'https://goodsnooze.gumroad.com/l/macwhisper'],
    ['Registrare i meeting', 'https://docs.macwhisper.com/article/30-record-meetings'],
    ['Riconoscimento dei parlanti', 'https://docs.macwhisper.com/article/32-automatic-speaker-recognition-in-macwhisper'],
  ],
  checked: 'l’8 ottobre 2026',
};

/** Un bot notetaker, uno qualsiasi, accanto a nchova: per le pagine su un’app di call. */
const anyBot = (call: string): Bot => ({
  them: {
    tab: 'Un bot notetaker',
    name: 'Notetaker',
    joined: 'Notetaker è entrato nel meeting',
    banner: '',
    caption: 'Un bot notetaker entra come ospite: lo vedono tutti, e la registrazione va nel cloud della sua azienda.',
  },
  us: { tab: 'nchova', caption: 'Non entra nessuno. nchova ascolta dal tuo Mac, e la trascrizione resta lì.' },
  words: {
    switchLabel: 'Mostra',
    label: `Una call su ${call} in cui un bot notetaker entra come ospite, accanto alla stessa call con nchova, dove non entra nessuno.`,
    call: 'Sync prodotto',
    tiles: ['Giulia', 'Marco', 'Sara', 'Tommaso', 'Alessio'],
    live: 'Transcript dal vivo',
    bubbles: [
      ['Giulia', 'Il testo della pagina è pronto.', 'Voce 1'],
      ['', 'Perfetto. E le animazioni?'],
      ['Marco', 'Entro giovedì, anzi no, venerdì.', 'Voce 2'],
    ],
  },
});

/** La demo dei meeting con un’altra app di call nella domanda, come la scrive l’app quando c’è un evento in calendario. */
const callIn = (service: string) => ({ ...base.meeting.demo, promptTitle: 'Sync prodotto', promptSub: `Call in ${service}. La trascrivo?` });

/** Le note accanto alla demo dei meeting, nelle pagine su un’app di call. */
const callNotes = (service: string): [string, string][] => [
  ['Si accorge della call', `appena ${service} tiene il microfono per qualche secondo, nchova ti chiede se trascrivere.`],
  ['Col calendario', 'il meeting prende il nome dell’evento e gli invitati, e la domanda arriva due minuti prima.'],
  ['Io e gli altri', `il tuo microfono è «Io»; quello che suona il Mac, ${service} compreso, sono tutti gli altri.`],
  ['Solo sul tuo schermo', 'la pillola e la trascrizione sono sul tuo Mac, non nella call: non le vede nessuno, a meno che tu non condivida tutto lo schermo.'],
];

const zoom: Guide = {
  id: 'zoom',
  page: 'transcribe/zoom/',
  group: 'use',
  short: 'Trascrivere Zoom',
  metaTitle: 'Trascrivere le riunioni Zoom sul Mac, senza bot — nchova',
  description:
    'Trascrivi qualsiasi call su Zoom dal tuo Mac, da host o no, piano gratuito o a pagamento: nessun bot, l’audio resta sul Mac e le note arrivano quando chiudi.',
  kicker: 'trascrivere Zoom',
  title: 'Trascrivi le call su Zoom, *da host o no*.',
  lead: 'La trascrizione di Zoom richiede un piano a pagamento, e decide l’host chi la riceve. nchova trascrive qualsiasi call su Zoom dal tuo Mac: il tuo microfono sei tu, l’audio della call sono tutti gli altri. Non entra nessun bot, l’audio non lascia mai il Mac, e le note si scrivono quando chiudi.',
  short3: [
    ['*Qualsiasi* call su Zoom', 'tua o di qualcun altro, col piano gratuito o a pagamento: se la senti, nchova la trascrive.'],
    ['*Nessun* bot', 'nel meeting non entra nessuno. nchova ascolta dal tuo Mac, nell’app di Zoom o nel browser.'],
    ['Gratis', 'trascrizioni e note coi modelli di Apple sono gratis; Pro aggiunge le voci distinte, Parakeet e note migliori.'],
  ],
  blocks: [
    {
      kind: 'demo',
      flip: true,
      demo: { name: 'meeting', data: callIn('Zoom') },
      notes: callNotes('Zoom'),
    },
    {
      kind: 'prose',
      h: 'Cosa ti dà Zoom, *e chi decide*',
      p: [
        'Da maggio 2026 Zoom non permette più di salvare i sottotitoli dal vivo quando il meeting finisce. La sua trascrizione del meeting richiede un account Pro, Business o Enterprise, resta spenta finché un host o un amministratore non la accende, e un partecipante può solo chiedere all’host di avviarla. La trascrizione di una registrazione nel cloud richiede un piano a pagamento con la registrazione nel cloud attiva. Il riassunto di AI Companion lo avvia l’host o un co-host, e tutti vedono accendersi la sua icona.',
        'Così, quando non sei l’host, o l’host usa il piano gratuito di Zoom, di solito esci dalla call senza nessuna trascrizione. nchova non chiede niente a Zoom: trascrive quello che suona il tuo Mac e quello che sente il tuo microfono.',
        'Gli strumenti di Zoom fanno una cosa che nchova non fa: una trascrizione che appartiene al meeting e si può condividere con tutti i partecipanti. Quella di nchova è tua.',
      ],
    },
    {
      kind: 'bot',
      h: 'Un bot nella call, *o nessuno*',
      lead: 'I bot notetaker ottengono la trascrizione entrando nel meeting come ospiti. A nchova non serve un posto nella call.',
      bot: anyBot('Zoom'),
    },
    {
      kind: 'steps',
      h: 'Trascrivi la tua prossima call su *Zoom*',
      steps: [
        '[Scarica nchova](/download?from=zoom-steps) e aprila. Nella configurazione, sotto **Per i meeting**, collega il **Calendario** per dare ai meeting il nome dei loro eventi, e premi **Chiedi ora** accanto ad **Audio di sistema**: è così che nchova sente gli altri.',
        'Entra nella call su Zoom come sempre, nell’app di Zoom o nel browser.',
        'Quando nchova chiede, fai clic su **Trascrivi**. Fai clic sulla pillola in fondo allo schermo per guardare la trascrizione, o per prendere i tuoi appunti.',
        'Chiudi la call. nchova si accorge che è finita, scrive le note e tiene il meeting in **Meeting** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Quando *chiudi*',
      lead: 'Le note si scrivono attorno a quello che hai annotato. Poi chiedi al meeting: cosa abbiamo deciso, cosa devo fare io, scrivi il follow-up.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Domande su *Zoom*',
      items: [
        ['Zoom avvisa gli altri che nchova sta trascrivendo?', 'No: nchova non è nel meeting, quindi Zoom non ha niente da mostrare. Dove la legge lo chiede, di’ alle persone nella call che stai trascrivendo.'],
        ['Devo essere l’host, o avere un piano Zoom a pagamento?', 'No. nchova trascrive qualsiasi call in cui sei, qualunque sia il piano e chiunque sia l’host.'],
        ['Funziona con Zoom nel browser?', 'Sì. nchova distingue un meeting Zoom dalle altre schede che usano il microfono grazie al titolo della finestra, e chiede.'],
        ['Con le cuffie o senza?', 'Va bene in tutti e due i casi. Senza cuffie, nchova toglie da sola l’eco degli altoparlanti dal tuo microfono, senza toccare quello che manda Zoom.'],
        ['Può partire da sola?', 'Sì: in **Impostazioni › Meeting**, imposta **Quando inizia una call** su **Avvia da solo la trascrizione**.'],
        ['Posso chiedere a Claude delle mie call su Zoom?', 'Sì: il server MCP di nchova gira sul tuo Mac e si collega con un clic. Guarda [i meeting nel tuo assistente](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Fine del salvataggio dei sottotitoli', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085668'],
    ['Trascrizioni dei meeting', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085675'],
    ['Trascrizioni delle registrazioni nel cloud', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927'],
    ['Riassunto dei meeting di AI Companion', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013'],
    ['Avvisi di AI Companion', 'https://library.zoom.com/ai-whitepaper/user-transparency-and-notice'],
  ],
  checked: 'l’8 ottobre 2026',
};

const meet: Guide = {
  id: 'google-meet',
  page: 'transcribe/google-meet/',
  group: 'use',
  short: 'Trascrivere Google Meet',
  metaTitle: 'Trascrivere Google Meet sul Mac, senza bot — nchova',
  description:
    'Trascrivi le riunioni di Google Meet dal tuo Mac, anche con un account Gmail gratuito e da ospite: nessun bot, nessuna estensione, e l’audio resta sul Mac.',
  kicker: 'trascrivere Google Meet',
  title: 'Trascrivi Google Meet, *anche da ospite*.',
  lead: 'Le trascrizioni di Google Meet e le note di Gemini arrivano coi piani a pagamento, e possono avviarle solo le persone dell’organizzazione dell’host. nchova trascrive qualsiasi call su Meet dal tuo Mac, in Chrome, Safari, Arc o qualunque browser usi: nessun bot, nessuna estensione, e l’audio non lascia mai il Mac.',
  short3: [
    ['*Qualsiasi* Meet', 'Gmail gratuito o Workspace, host od ospite: se senti la call, nchova la trascrive.'],
    ['*Nessuna* estensione', 'nchova riconosce una call su Meet dal titolo della finestra del browser, e chiede.'],
    ['*{nAll}* lingue', '{nFree} gratis col modello di Apple, {nPro} europee con Pro; una call che passa da una tua lingua all’altra viene trascritta in tutte e due.'],
  ],
  blocks: [
    {
      kind: 'demo',
      flip: true,
      demo: { name: 'meeting', data: callIn('Google Meet'), browser: true },
      notes: callNotes('Google Meet'),
    },
    {
      kind: 'prose',
      h: 'Cosa ti dà Meet, *e a chi*',
      p: [
        'Le trascrizioni di Meet richiedono un’edizione di Workspace da Business Standard in su, o Workspace Individual, e coprono otto lingue. Le avvia l’host, o qualcuno dell’organizzazione dell’host, e vengono salvate nel Drive dell’organizzatore. «Prendi appunti per me» di Gemini richiede, dalla parte dell’organizzatore, un piano Workspace o Google AI idoneo, e una sola lingua per meeting. Mentre una delle due è attiva, tutti nella call vedono un’icona.',
        'Un account Gmail gratuito non ha né l’una né l’altra, e un ospite di un’altra azienda non può avviarle. A nchova non serve il permesso di Meet: trascrive quello che suona il tuo Mac e quello che sente il tuo microfono, in {nFree} lingue gratis, o {nPro} europee con Pro.',
      ],
    },
    {
      kind: 'demo',
      h: 'Voci distinte, *e con un nome*',
      lead: 'Con Pro, nchova distingue le voci degli altri mentre parlano, e dà un nome a quelle che ha già sentito, fra le persone nell’invito.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'steps',
      h: 'Trascrivi il tuo prossimo *Meet*',
      steps: [
        '[Scarica nchova](/download?from=google-meet-steps) e aprila. Nella configurazione, consenti l’**Accessibilità** (nchova la usa anche per leggere i titoli delle finestre del browser), collega il **Calendario** e premi **Chiedi ora** accanto ad **Audio di sistema**.',
        'Entra nel Meet dal browser come sempre.',
        'nchova vede la finestra intitolata «Meet – …» che tiene il microfono e chiede: fai clic su **Trascrivi**.',
        'Chiudi la call. Le note si scrivono, e il meeting ti aspetta in **Meeting** (Fn+M).',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande su *Meet*',
      items: [
        ['Quali browser?', 'Chrome, Safari, Arc, Dia, Edge, Firefox, Brave, Vivaldi, Opera e Zen.'],
        ['Mi serve un’estensione per Chrome?', 'No. nchova distingue una call dalle altre schede dal titolo della finestra, col permesso Accessibilità che ha già: nessuna estensione, nessun URL letto, nessuna rete.'],
        ['Salta fuori quando uso la voce in ChatGPT o in Documenti Google?', 'No, finché in primo piano c’è una scheda di ChatGPT, Claude, Gemini, Documenti Google, YouTube o simili. nchova chiede quando una finestra dice di essere una call, e anche quando non dice né una cosa né l’altra; da lì, ogni «Non ora» la tiene in silenzio più a lungo.'],
        ['Google avvisa gli altri?', 'No: nchova non è nel meeting. Dove la legge lo chiede, di’ alle persone nella call che stai trascrivendo.'],
        ['Funziona con un account Gmail gratuito?', 'Sì. nchova non dipende dal tuo piano Google, né da quello dell’host.'],
      ],
    },
  ],
  sources: [
    ['Trascrizioni di Meet', 'https://support.google.com/meet/answer/12849897?hl=en'],
    ['Prendi appunti per me', 'https://support.google.com/meet/answer/14754931?hl=en'],
    ['Funzionalità di Meet per piano', 'https://support.google.com/meet/answer/10459644?hl=en'],
  ],
  checked: 'l’8 ottobre 2026',
};

const teams: Guide = {
  id: 'teams',
  page: 'transcribe/teams/',
  group: 'use',
  short: 'Trascrivere Microsoft Teams',
  metaTitle: 'Trascrivere le riunioni Microsoft Teams sul Mac — nchova',
  description:
    'Trascrivi le riunioni di Microsoft Teams dal tuo Mac, anche da ospite o senza Copilot: nessun bot, l’audio resta sul Mac e le note arrivano quando chiudi.',
  kicker: 'trascrivere Teams',
  title: 'Trascrivi le call su Teams, *chiunque le organizzi*.',
  lead: 'In Teams la trascrizione dipende dall’azienda dell’organizzatore e dai suoi criteri; un ospite esterno non può avviarla, e il riepilogo AI richiede una licenza Teams Premium o Copilot. nchova trascrive qualsiasi call su Teams dal tuo Mac, nell’app o nel browser: nessun bot, nessuna licenza, e l’audio non lascia mai il Mac.',
  short3: [
    ['*Qualsiasi* call su Teams', 'di lavoro o personale, da organizzatore o da ospite: se la senti, nchova la trascrive.'],
    ['*Nessuna* licenza', 'né Premium né Copilot: note scritte sul Mac, gratis col modello di Apple.'],
    ['*Tua*', 'la trascrizione è sul tuo Mac, non nel OneDrive dell’organizzatore.'],
  ],
  blocks: [
    {
      kind: 'demo',
      flip: true,
      demo: { name: 'meeting', data: callIn('Teams') },
      notes: callNotes('Teams'),
    },
    {
      kind: 'prose',
      h: 'Cosa ti dà Teams, *e chi decide*',
      p: [
        'In Teams la trascrizione dipende da un criterio dell’azienda dell’organizzatore. Quando è attiva, possono avviarla l’organizzatore e le persone della stessa organizzazione; gli ospiti di altre aziende e i partecipanti anonimi no. Tutti vedono che il meeting viene trascritto, e il file va nel OneDrive dell’organizzatore, dove i colleghi possono leggerlo ma, di default, non scaricarlo. Il riepilogo intelligente, con note e attività scritte dall’AI, richiede una licenza Teams Premium o Microsoft 365 Copilot. Teams per uso personale offre i sottotitoli dal vivo, visibili solo a te.',
        'nchova sta fuori da tutto questo: trascrive quello che suona il tuo Mac e quello che sente il tuo microfono, e lo tiene sul tuo Mac.',
        'Prima di trascrivere una call di lavoro, controlla cosa permette la tua azienda, e avvisa le persone nella call dove la legge lo chiede.',
      ],
    },
    {
      kind: 'bot',
      h: 'Un bot nella call, *o nessuno*',
      lead: 'Molte aziende tengono i bot notetaker fuori dai loro meeting. nchova non chiede mai di entrare.',
      bot: anyBot('Teams'),
    },
    {
      kind: 'steps',
      h: 'Trascrivi la tua prossima call su *Teams*',
      steps: [
        '[Scarica nchova](/download?from=teams-steps) e aprila. Nella configurazione, collega il **Calendario** e premi **Chiedi ora** accanto ad **Audio di sistema**.',
        'Se il tuo calendario di Teams è un account Microsoft 365 di lavoro, aggiungilo al Mac solo per il calendario: [ecco come](@help/calendar/).',
        'Entra nella call su Teams, nell’app o nel browser. Quando nchova chiede, fai clic su **Trascrivi**.',
        'Chiudi la call. Le note si scrivono, coi prossimi passi, e il meeting ti aspetta in **Meeting** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Il riepilogo, *senza Copilot*',
      lead: 'Note e prossimi passi scritti quando finisce la call, dal modello di Apple sul Mac, da Qwen, o dal tuo Claude Code o Codex. Poi chiedi al meeting cosa devi fare.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Domande su *Teams*',
      items: [
        ['Teams avvisa gli altri che nchova sta trascrivendo?', 'No: nchova non è nel meeting, quindi Teams non ha niente da mostrare. Dove la legge, o la tua azienda, lo chiede, avvisa le persone nella call.'],
        ['Funziona con Teams nel browser?', 'Sì: nchova riconosce un meeting di Teams dal titolo della finestra del browser, e chiede.'],
        ['Funziona con Teams per uso personale?', 'Sì. nchova non dipende dal piano di Teams, né dal tuo né da quello dell’organizzatore.'],
        ['Il mio calendario Outlook non c’è in nchova. Perché?', 'nchova legge i calendari che il tuo Mac conosce. Aggiungi il tuo account di lavoro a macOS solo per il calendario: [ecco come](@help/calendar/).'],
        ['Può partire da sola?', 'Sì: in **Impostazioni › Meeting**, imposta **Quando inizia una call** su **Avvia da solo la trascrizione**.'],
      ],
    },
  ],
  sources: [
    ['Trascrizione dal vivo in Teams', 'https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings'],
    ['Criteri di trascrizione', 'https://learn.microsoft.com/en-us/microsoftteams/meeting-transcription-captions'],
    ['Riepilogo intelligente', 'https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings'],
    ['Sottotitoli in Teams per uso personale', 'https://support.microsoft.com/en-us/teams/free/meetings/live-captions-in-microsoft-teams-free'],
  ],
  checked: 'l’8 ottobre 2026',
};

const dragon: Guide = {
  id: 'dragon',
  page: 'alternatives/dragon/',
  group: 'compare',
  short: 'Dragon',
  metaTitle: 'Alternativa a Dragon per Mac, offline, in ogni app — nchova',
  description:
    'Dragon per Mac è finito nel 2018. Con nchova detti in ogni app del Mac, offline, col tuo vocabolario: gratis col modello di Apple, o Pro a 29,99 € una volta.',
  kicker: 'nchova vs Dragon',
  title: 'Dragon ha lasciato il Mac. *La dettatura no.*',
  lead: 'Nuance ha smesso di vendere Dragon per Mac il 22 ottobre 2018 e da allora non l’ha più aggiornato; il Dragon di oggi gira su Windows. nchova è un programma di dettatura per il Mac che hai adesso: tieni premuto Fn e parla in qualsiasi app, offline, con nomi e termini scritti come vuoi tu. Quello che non fa è comandare il Mac con la voce: per quello, macOS ha Controllo vocale.',
  short3: [
    ['*Qualsiasi* app', 'Word, Pages, Mail, un modulo nel browser, il terminale: il testo arriva dov’è il cursore.'],
    ['*Sul* Mac', 'la voce diventa testo sul Mac stesso, offline: nessun account, non si carica niente.'],
    ['*29,99 €* una volta', 'per Pro, fino a tre Mac; o gratis per sempre col modello vocale di Apple.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        data: {
          ...dictation,
          app: 'Microsoft Word',
          doc: 'Verbale di sopralluogo',
          scripts: [
            {
              spoken: 'il sopralluogo si è svolto martedì mattina alla presenza del proprietario',
              marks: [],
              written: 'Il sopralluogo si è svolto martedì mattina, alla presenza del proprietario.',
            },
            {
              spoken: 'l’umidità sulla parete nord viene dalla grondaia come ha fatto notare nicolo',
              marks: [{ kind: 'fix', from: 'nicolo', to: 'Nicolò' }],
              written: 'L’umidità sulla parete nord viene dalla grondaia, come ha fatto notare Nicolò.',
            },
            {
              spoken: 'manderemo il preventivo venerdì, anzi no, lunedì',
              marks: [{ kind: 'strike', from: 'venerdì, anzi no,' }],
              written: 'Manderemo il preventivo lunedì.',
            },
          ],
        },
      },
      notes: [
        ['Dov’è il cursore', 'Word, Pages, Mail, Note, un browser: qualsiasi app, senza plug-in da installare.'],
        ['Punteggiatura', 'la scrive nchova per te, da come parli: niente «virgola» o «punto» da dire.'],
        ['Il tuo vocabolario', 'nomi e termini scritti come vuoi tu, anche offline: «nicolo» diventa Nicolò.'],
        ['A mani libere', 'tenendo Fn premi Spazio e lascia: parli fino a dieci minuti, poi un tocco di Fn.'],
      ],
    },
    {
      kind: 'table',
      h: 'A confronto',
      them: 'Dragon',
      rows: [
        ['Sul Mac', 'Dragon Professional Individual for Mac: non più venduto né aggiornato dal 22 ottobre 2018. Dragon Medical One arriva su un Mac solo attraverso Citrix o una macchina virtuale Windows', 'Un’app per i Mac con chip Apple e macOS 26'],
        ['Dragon oggi', 'Professional e Legal v16 su Windows 10 e 11; Professional Anywhere nel cloud di Microsoft, per Windows; Anywhere su iPhone e Android, negli USA e in Canada', 'Sul tuo Mac, offline'],
        ['Dettatura', 'Dal vivo, e da file audio registrati', 'Dal vivo in qualsiasi app del Mac, e da file audio o video fino a quattro ore'],
        ['Comandi vocali', 'Comandi e macro personalizzati, modifica e formattazione a voce', 'Nessuno: per i comandi, Controllo vocale di macOS'],
        ['Le tue parole', 'Parole ed elenchi di parole personalizzati; Dragon Legal ha un vocabolario giuridico integrato', '**Impostazioni › Vocabolario**, e per ogni parola come la sente il motore'],
        ['Prezzo', 'Non indicato: la pagina di Nuance ti chiede di contattarli', 'Gratis col modello di Apple; Pro 29,99 € una volta, fino a 3 Mac'],
      ],
    },
    {
      kind: 'points',
      h: 'Se arrivi *da Dragon*',
      lead: 'Cosa funziona come sei abituato, e cosa funziona in un altro modo.',
      items: [
        ['Nessun addestramento', 'niente da leggere ad alta voce prima di cominciare: nchova scrive dalla prima frase, col modello di Apple o con Parakeet di NVIDIA.'],
        ['Le tue parole', 'in **Impostazioni › Vocabolario**: nomi, sigle, termini del tuo mestiere, e come li sente il motore.'],
        ['Nessun comando', 'non dici «virgola», «nuovo paragrafo» o «seleziona questo»: la punteggiatura la scrive nchova per te, e correggi con la tastiera.'],
        ['Ripensamenti', '«venerdì, anzi no, lunedì» diventa «lunedì», se attivi la pulizia in **Impostazioni › Dettatura**, con Apple Intelligence attiva. Può solo togliere parole, mai aggiungerne.'],
        ['Lingue', '{nAll}, fino a tre insieme, frase per frase: {nFree} gratis col modello di Apple, {nPro} europee con Parakeet (Pro).'],
      ],
    },
    {
      kind: 'demo',
      h: 'E i tuoi *meeting*, messi per iscritto',
      lead: 'Lo stesso motore vocale trascrive le tue call e i meeting attorno a un tavolo, senza bot e senza caricare niente, e scrive le note quando finiscono.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quando Dragon, o Controllo vocale, è la *scelta migliore*',
      p: [
        'Se ti serve usare il Mac con la voce, aprire app, fare clic, selezionare e modificare, macOS ha Controllo vocale integrato: comandi per la scrivania e per le app, dettatura e modifica a voce, offline una volta scaricato. nchova scrive e basta.',
        'Se il tuo studio lavora su Windows, con elenchi di parole, macro e comandi condivisi nel team, Dragon Professional e Dragon Legal sono fatti per questo.',
        'Per le note cliniche dentro i sistemi di un ospedale, Dragon Medical One è fatto apposta, anche se su un Mac gira solo attraverso Citrix o una macchina virtuale Windows.',
      ],
    },
    {
      kind: 'steps',
      h: 'Dettatura vocale *in due minuti*',
      steps: [
        '[Scarica nchova](/download?from=dragon-steps) e aprila. Ti chiede l’accesso al **Microfono** e all’**Accessibilità**, e di impostare **Premi il tasto 🌐 per** su **Non fare nulla**, così Fn è di nchova e non della dettatura di macOS.',
        'Scegli le tue lingue, fino a tre, e aggiungi i nomi e i termini che usi di più in **Impostazioni › Vocabolario**.',
        'Fai clic in un documento, tieni premuto **Fn**, parla, rilascia.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['Esiste ancora Dragon per Mac?', 'No. Nuance ha smesso di vendere Dragon Professional Individual for Mac il 22 ottobre 2018 e da allora non ha rilasciato aggiornamenti; chi l’ha comprato conserva una licenza perpetua. Dragon Professional gira su Windows, e Nuance non lo supporta in Parallels su un Mac.'],
        ['nchova va addestrata?', 'No: non c’è niente da leggere ad alta voce prima. Aggiungi i nomi e i termini che usi in **Impostazioni › Vocabolario**, e come li sente il motore.'],
        ['Posso dettare la punteggiatura?', 'Non serve: nchova scrive la punteggiatura da come parli. Non ci sono comandi vocali.'],
        ['Funziona in Word?', 'Sì, e in qualsiasi altra app: il testo arriva dov’è il cursore, in Word, Pages, Documenti Google nel browser, Mail o il terminale. Se non c’è dove scrivere, il testo ti aspetta negli appunti.'],
        ['È abbastanza riservata per il lavoro legale o medico?', 'La tua voce diventa testo sul Mac e non viene mai caricata: nchova non ha una modalità online per la dettatura. Se questo rispetta le regole della tua professione, lo valuti tu, o il tuo studio.'],
        ['Posso provarla prima?', 'Trenta giorni con tutto, senza carta e senza account. Poi resta gratis col modello di Apple.'],
      ],
    },
  ],
  sources: [
    ['La fine di Dragon per Mac', 'https://nuance.custhelp.com/app/answers/detail/a_id/27843'],
    ['Dragon Professional v16', 'https://dragon.nuance.com/en-us/dragon-professional'],
    ['Dragon Legal v16', 'https://dragon.nuance.com/en-us/dragon-legal'],
    ['Dragon Professional Anywhere', 'https://dragon.nuance.com/en-us/dragon-professional-anywhere'],
    ['Dragon Anywhere', 'https://dragon.nuance.com/en-us/dragon-anywhere-mobile'],
    ['Dragon Medical One su un Mac', 'https://learn.microsoft.com/en-us/industry/healthcare/dragon-medical-one/admin/using-dragon-medical-one-with-mac'],
    ['Dragon e Parallels', 'https://nuance.custhelp.com/app/answers/detail/a_id/29905'],
    ['Controllo vocale', 'https://support.apple.com/guide/mac-help/mh40719/26/mac/26'],
  ],
  checked: 'il 15 ottobre 2026',
};

const noBot: Guide = {
  id: 'ai-note-taker',
  page: 'ai-note-taker/',
  group: 'use',
  short: 'Note con l’AI, senza bot',
  metaTitle: 'Note delle riunioni con l’AI, senza bot, sul Mac — nchova',
  description:
    'Trascrizione delle riunioni con l’AI, senza bot nella call: nchova trascrive Zoom, Meet e Teams dal Mac e scrive le note quando chiudi. Gratis, niente caricato.',
  kicker: 'note dei meeting senza bot',
  title: 'Le note delle riunioni con l’AI, *senza un bot nella call*.',
  lead: 'Quasi tutti i notetaker AI arrivano al tuo meeting entrandoci: un Notetaker compare in Zoom, Meet o Teams come un partecipante in più, spesso da solo, dal tuo calendario, e la registrazione va nel cloud della sua azienda. nchova invece ascolta dal tuo Mac, come fai tu: trascrive lì, scrive le note quando chiudi, e non entra nessuno.',
  short3: [
    ['*Nessun* bot', 'nel meeting non entra niente: nchova sente quello che suona il tuo Mac e quello che sente il tuo microfono, in qualsiasi app di call.'],
    ['*Niente* da caricare', 'la trascrizione si scrive sul tuo Mac, e l’audio non viene mai conservato. Lì si scrivono anche le note, a meno che tu non scelga il tuo Claude Code o Codex.'],
    ['Gratis', 'trascrizioni e note coi modelli di Apple, senza limiti di minuti o di meeting. Pro, 29,99 € una volta, distingue le voci e scrive note migliori.'],
  ],
  blocks: [
    {
      kind: 'bot',
      h: 'Un ospite nella call, *o nessuno*',
      lead: 'Un bot notetaker ottiene il meeting entrandoci, come un partecipante che vedono tutti. A nchova non serve un posto: è sul tuo Mac, dove la call c’è già.',
      bot: {
        them: {
          tab: 'Un bot notetaker',
          name: 'Notetaker',
          joined: 'Notetaker è entrato nel meeting',
          banner: '',
          caption: 'Il bot entra come ospite: nella call lo vedono tutti, e la registrazione va nel cloud della sua azienda.',
        },
        us: { tab: 'nchova', caption: 'Non entra nessuno. nchova ascolta dal tuo Mac, e la trascrizione resta lì.' },
        words: {
          switchLabel: 'Mostra',
          label: 'Una call in cui un bot notetaker entra come ospite, accanto alla stessa call con nchova, dove non entra nessuno e la trascrizione compare sul tuo schermo.',
          call: 'Sync prodotto',
          tiles: ['Giulia', 'Marco', 'Sara', 'Tommaso', 'Alessio'],
          live: 'Transcript dal vivo',
          bubbles: [
            ['Giulia', 'Il testo della pagina è pronto.', 'Voce 1'],
            ['', 'Perfetto. E le animazioni?'],
            ['Marco', 'Entro giovedì, anzi no, venerdì.', 'Voce 2'],
          ],
        },
      },
    },
    {
      kind: 'points',
      h: 'Come gli altri *entrano* nel tuo meeting',
      lead: 'I notetaker più noti, dalle loro pagine. Ormai quasi tutti hanno anche una via senza bot, con un’app desktop; l’audio va comunque nel loro cloud.',
      items: [
        ['Otter', 'il suo Notetaker entra in Zoom, Meet e Teams come partecipante, «[tuo nome]’s Notetaker (Otter.ai)», e può entrare da solo in ogni meeting del tuo calendario. L’app desktop registra senza. Le registrazioni restano nel suo cloud, negli USA.'],
        ['Fireflies', '«Fireflies.ai Notetaker» entra come partecipante, sempre visibile nell’elenco, e può entrare partendo dal tuo calendario. La sua app desktop può prendere note dall’audio del computer, senza il bot. I dati sono conservati ed elaborati nel suo cloud, negli USA.'],
        ['Fathom', 'il Fathom Notetaker entra da solo nelle tue call su Zoom, Meet e Teams, una volta collegato il calendario. Una modalità senza bot è in beta, solo su Mac. Le registrazioni vengono conservate, negli USA.'],
        ['tl;dv', 'il suo bot entra nei meeting in calendario come partecipante, e chiede di entrare anche quando tu non ci sei. L’app desktop registra senza; le registrazioni vanno nella tua libreria di tl;dv, ospitata nell’UE.'],
        ['Read AI', 'Read Assistant entra in Zoom, Teams e Meet come partecipante, da solo una volta collegato il calendario. L’app desktop può registrare l’audio del computer; i dati sono conservati su AWS, in Virginia.'],
        ['Granola', 'nessun bot: come nchova, prende l’audio sul tuo computer. Ma lo manda al suo fornitore di trascrizione nel cloud, poi lo cancella; le trascrizioni sono conservate su AWS, negli USA.'],
        ['Zoom, Teams e Meet', 'le loro note (AI Companion, il riepilogo intelligente, «Prendi appunti per me») richiedono piani a pagamento, le avvia l’host o chi è nella sua organizzazione, e tutti nella call vedono che sono attive.'],
      ],
    },
    {
      kind: 'demo',
      h: 'Cosa succede *sul tuo Mac*',
      lead: 'La call prende il microfono, nchova chiede una volta, e la trascrizione si scrive da sola in una scheda che vedi solo tu: il tuo microfono è «Io», la call sono tutti gli altri.',
      flip: true,
      demo: { name: 'meeting' },
      notes: [
        ['Qualsiasi app di call', 'Zoom, Google Meet, Teams, Slack, FaceTime, Webex e le call nel browser: nchova si accorge quando una di loro prende il microfono.'],
        ['Col calendario', 'il meeting prende il nome dell’evento e gli invitati, e la domanda arriva due minuti prima. Oppure lascia che parta da sola.'],
        ['Solo sul tuo schermo', 'la pillola e la trascrizione sono sul tuo Mac, non nella call: non le vede nessuno, a meno che tu non condivida tutto lo schermo.'],
        ['Anche senza cuffie', 'l’eco degli altoparlanti viene tolta dal tuo microfono, senza toccare quello che manda la call.'],
      ],
    },
    {
      kind: 'demo',
      h: 'Il verbale, *quando chiudi la call*',
      lead: 'Le note si scrivono attorno a quello che hai annotato durante la call: gli argomenti, cosa si è deciso, chi fa cosa. Poi chiedi al meeting: cosa abbiamo deciso, cosa devo fare io, scrivi il follow-up.',
      demo: { name: 'notes' },
    },
    {
      kind: 'points',
      h: 'Chi scrive *le note*',
      lead: 'Lo scegli tu, in **Impostazioni › Note**. Solo l’ultimo lascia il Mac, e solo se lo scegli.',
      items: [
        ['Apple Intelligence', 'sul Mac, gratis: note brevi, gli argomenti e le decisioni.'],
        ['Qwen3.5 4B o 9B', 'anche lui sul Mac, scaricato una volta (2,7 o 5,7 GB): note migliori, e niente lascia il Mac.', 'pro'],
        ['Il tuo Claude Code o Codex', 'le note migliori, in pochi secondi, col tuo abbonamento: la trascrizione, mai l’audio, va ad Anthropic o a OpenAI.', 'pro'],
      ],
    },
    {
      kind: 'prose',
      h: 'Anche i meeting *in sala*',
      p: [
        'Un bot ha bisogno di una call in cui entrare. A nchova basta sentire: col Mac sul tavolo, un meeting in sala si trascrive come una call, offline, e le note si scrivono quando finisce. Avvialo dalla barra dei menu, con **Avvia trascrizione meeting**.',
        'Con Pro, le voci vengono distinte, Voce 1, Voce 2…, e chiamate per nome grazie alle impronte vocali degli invitati, tenute sul tuo Mac.',
      ],
    },
    {
      kind: 'prose',
      h: 'Quando un bot è la *scelta migliore*',
      p: [
        'Se vuoi le note dei meeting a cui non puoi partecipare, un bot può andarci al posto tuo: quello di tl;dv chiede di entrare anche quando tu non ci sei. nchova trascrive quello che sente il tuo Mac, quindi nella call devi esserci tu.',
        'Se la registrazione deve appartenere al team, col video, condivisa in un workspace e mandata a un CRM, Otter, Fireflies e Fathom sono fatti per questo. nchova tiene i meeting di ognuno sul suo Mac.',
        'Se non usi un Mac, o vuoi le note sul telefono, loro girano su Windows, sul web e su smartphone. nchova è un’app per Mac, per i Mac con chip Apple e macOS 26.',
      ],
    },
    {
      kind: 'steps',
      h: 'Il tuo prossimo meeting, *con le note*',
      steps: [
        '[Scarica nchova](/download?from=ai-note-taker-steps) e aprila. Nella configurazione, sotto **Per i meeting**, collega il **Calendario** e premi **Chiedi ora** accanto ad **Audio di sistema**: è così che nchova sente gli altri.',
        'Entra nella call come sempre, nella sua app o nel browser. Quando nchova chiede, fai clic su **Trascrivi**.',
        'Se vuoi, annota una parola o due nella scheda. Chiudi la call: le note si scrivono, e il meeting ti aspetta in **Meeting** (Fn+M).',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande, *a voce*',
      items: [
        ['Gli altri sanno che nchova sta trascrivendo?', 'Nella call non compare niente, perché nchova non c’è. Dove la legge, o la tua azienda, lo chiede, di’ alle persone con cui parli che stai trascrivendo.'],
        ['È davvero gratis?', 'Sì: trascrizioni e note coi modelli di Apple, in {nFree} lingue, senza limiti di minuti o di meeting. Pro, 29,99 € una volta, aggiunge le voci distinte, le {nPro} lingue europee di Parakeet e note migliori.'],
        ['Può prendere note in un meeting in cui non ci sono?', 'No. nchova trascrive quello che sente il tuo Mac, quindi nella call devi esserci tu, o il tuo Mac. Un bot può partecipare al posto tuo; nchova no.'],
        ['Con quali app di call funziona?', 'Zoom, Google Meet, Microsoft Teams, Slack, FaceTime, Webex e le call nel browser; qualsiasi altra call si avvia dalla barra dei menu. Guarda [Zoom](@transcribe/zoom/), [Google Meet](@transcribe/google-meet/) e [Teams](@transcribe/teams/).'],
        ['Posso chiedere a Claude o a ChatGPT dei miei meeting?', 'Sì: il server MCP di nchova gira sul tuo Mac e si collega con un clic. Guarda [i meeting nel tuo assistente](@mcp/).'],
        ['E una registrazione che ho già?', 'Trascinala sulla finestra **Meeting**: viene trascritta sul tuo Mac, fino a quattro ore, e riceve le sue note come una call. Guarda [i file audio](@transcribe/audio-files/).'],
      ],
    },
  ],
  sources: [
    ['Otter Notetaker', 'https://help.otter.ai/hc/en-us/articles/4425393298327-Otter-Notetaker-Overview'],
    ['App desktop di Otter', 'https://help.otter.ai/hc/en-us/articles/35973988280215-Otter-Desktop-App-Mac-Windows'],
    ['Come entra Fireflies', 'https://guide.fireflies.ai/articles/9554534786-how-fireflies-joins-and-records-your-meetings-faqs'],
    ['App desktop di Fireflies', 'https://guide.fireflies.ai/articles/1208704416-getting-started-with-the-fireflies-desktop-app'],
    ['Archiviazione dei dati di Fireflies', 'https://guide.fireflies.ai/articles/9596505232-learn-about-data-storage-and-transfer'],
    ['Fathom', 'https://www.fathom.ai/overview'],
    ['Fathom senza bot', 'https://help.fathom.video/en/articles/296576'],
    ['I dati di Fathom', 'https://help.fathom.video/en/articles/296512'],
    ['Il bot di tl;dv', 'https://intercom.help/tldv/en/articles/5946261-why-do-we-use-a-bot'],
    ['tl;dv e il calendario', 'https://intercom.help/tldv/en/articles/10256819-calendar-integration-and-why-it-matters'],
    ['tl;dv senza bot', 'https://intercom.help/tldv/en/articles/14433337-recording-without-a-bot'],
    ['Prezzi di tl;dv', 'https://tldv.io/app/pricing/'],
    ['Read Assistant', 'https://www.read.ai/assistant'],
    ['Registrazione desktop di Read', 'https://support.read.ai/hc/en-us/articles/45911611006995'],
    ['I dati di Read', 'https://support.read.ai/hc/en-us/articles/25702259763091'],
    ['Privacy di Granola', 'https://docs.granola.ai/help-center/consent-security-privacy/security-privacy-data-faqs'],
    ['Trascrizione di Granola', 'https://docs.granola.ai/help-center/taking-notes/transcription'],
    ['Riassunto dei meeting di Zoom', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013'],
    ['Riepilogo intelligente di Teams', 'https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings'],
    ['Meet: Prendi appunti per me', 'https://support.google.com/meet/answer/14754931'],
  ],
  checked: 'il 15 ottobre 2026',
};

/** Le parole della finestra Meeting, per la scena di un file trascinato lì sopra. */
const fileWords = {
  window: base.notes.demo.window,
  search: base.notes.demo.search,
  today: base.notes.demo.days[0],
  yesterday: base.notes.demo.days[1],
  earlier: base.notes.demo.list.filter(([day]) => day === 1).map(([, title, meta]) => [title, meta] as [string, string]),
  choose: 'Scegli un meeting',
  drop: 'Rilascia per trascrivere',
  progress: 'Trascrivo il file · %d%%',
  row: 'trascrivo… %d%%',
  about: 'circa %d min',
  underMinute: 'meno di un minuto',
  cancel: 'Annulla',
  transcribing: 'Trascrivo…',
  writing: base.notes.demo.writingRow,
  notes: base.notes.demo.notesH,
  chat: base.notes.demo.chat,
  transcript: base.notes.demo.transcript,
  switchLabel: 'Mostra',
};

const audioFiles: Guide = {
  id: 'audio-files',
  page: 'transcribe/audio-files/',
  group: 'use',
  short: 'Trascrivere file audio',
  metaTitle: 'Trascrivere audio e note vocali sul Mac, gratis — nchova',
  description:
    'Trascrivi audio in testo sul Mac: note vocali, audio di WhatsApp, interviste, lezioni da sbobinare e video fino a quattro ore. Gratis, offline, niente caricato.',
  kicker: 'da audio a testo',
  title: 'Trascina una registrazione. *Ecco il testo.*',
  lead: 'Un memo vocale dell’iPhone, un audio di WhatsApp, un’intervista, una lezione da sbobinare, il sonoro di un video: trascinalo su nchova e viene trascritto sul tuo Mac, poi riassunto in note. Non si carica niente, non si contano i minuti, ed è gratis col modello vocale di Apple.',
  short3: [
    ['Fino a *quattro ore*', 'audio o video, un file alla volta: se ne trascini diversi, aspettano il loro turno.'],
    ['*Gratis*, sul Mac', 'col modello vocale di Apple, in {nFree} lingue: nessun account, niente caricato, quanti file vuoi.'],
    ['Poi le *note*', 'gli argomenti e cosa si è deciso, scritti quando il file finisce, e una chat per fargli domande.'],
  ],
  blocks: [
    {
      kind: 'files',
      files: {
        files: [
          {
            tab: 'Memo vocale',
            kind: 'memo',
            file: 'Intervista ad Anna.m4a',
            title: 'Intervista ad Anna',
            time: '16:40',
            meta: 'martedì 13 ottobre alle ore 16:40 · 23 min',
            length: '23 min',
            minutes: 23,
            lines: [
              ['Voce 1 · 0:04', 'Grazie per il tempo. Partiamo da come è nato il panificio.'],
              ['Voce 2 · 0:11', 'L’ha aperto mia nonna nel 1962. Pane, e nient’altro.'],
              ['Voce 2 · 0:26', 'I dolci sono arrivati negli anni Ottanta, quando è subentrata mia madre.'],
              ['Voce 1 · 0:41', 'E da quando ci sei tu?'],
              ['Voce 2 · 0:47', 'Ordini online e un secondo forno. Le ricette non sono cambiate.'],
            ],
            notes: [
              ['Il panificio', ['Aperto nel 1962 dalla nonna di Anna, solo pane.', 'Dolci dagli anni Ottanta; oggi ordini online e un secondo forno.']],
              ['Per l’articolo', ['Le ricette sono le stesse dopo tre generazioni.']],
            ],
            caption: 'Un memo registrato sull’iPhone, preso da Memo Vocali sul Mac.',
          },
          {
            tab: 'WhatsApp',
            kind: 'whatsapp',
            file: 'WhatsApp Audio 2026-10-13 alle 19.02.11.opus',
            title: 'WhatsApp Audio 2026-10-13 alle 19.02.11',
            named: 'Cena di sabato da Marco',
            time: '19:02',
            meta: 'martedì 13 ottobre alle ore 19:02 · 1 min',
            length: '1 min',
            minutes: 1,
            lines: [
              ['Voce 1 · 0:00', 'Ciao! Allora, sabato: cena da Marco, alle otto.'],
              ['Voce 1 · 0:06', 'Cucina lui. Noi portiamo il dolce e qualcosa da bere.'],
              ['Voce 1 · 0:14', 'Riesci a prendere Giulia per strada? Ha la macchina dal meccanico.'],
            ],
            notes: [['Sabato', ['Cena da Marco alle otto; portare il dolce e da bere.', 'Passare a prendere Giulia per strada.']]],
            caption: 'Un audio di WhatsApp: il suo nome non diceva niente, così il titolo gliel’ha dato il modello del Mac.',
          },
          {
            tab: 'Video',
            kind: 'video',
            file: 'Lezione 7 – Fotosintesi.mp4',
            title: 'Lezione 7 – Fotosintesi',
            time: '09:00',
            meta: 'martedì 13 ottobre alle ore 09:00 · 1 h 32 min',
            length: '1 h 32 min',
            minutes: 92,
            lines: [
              ['Voce 1 · 0:12', 'La settimana scorsa, la cellula. Oggi: come una foglia produce il proprio nutrimento.'],
              ['Voce 1 · 0:31', 'Entrano luce, acqua e anidride carbonica. Escono zuccheri e ossigeno.'],
              ['Voce 2 · 41:05', 'L’ossigeno da dove viene, dall’acqua o dalla CO₂?'],
              ['Voce 1 · 41:12', 'Dall’acqua. Questa la trovate all’esame.'],
            ],
            notes: [
              ['Fotosintesi', ['Luce, acqua e CO₂ diventano zuccheri e ossigeno.', 'L’ossigeno viene dall’acqua, non dalla CO₂.']],
              ['Esame', ['Verrà chiesto da dove viene l’ossigeno.']],
            ],
            caption: 'Una lezione registrata: si trascrive l’audio del video, comprese le domande dall’aula.',
          },
        ],
        words: {
          ...fileWords,
          label: 'Un file trascinato dalla scrivania sulla finestra Meeting di nchova: la finestra mostra dove andrà, il meeting compare sotto Oggi e si riempie mentre il file viene letto, voce per voce, poi si scrivono le sue note.',
        },
      },
    },
    {
      kind: 'steps',
      h: 'Tre modi *per cominciare*',
      lead: 'Qualunque usi, il file resta dov’è: nchova lo legge, e non copia niente.',
      steps: [
        'Scegli **Trascrivi un file…** nel menu di nchova, nella barra dei menu, e seleziona uno o più file.',
        'Trascina i file sulla finestra **Meeting** (Fn+M). Un memo può arrivare direttamente da Memo Vocali sul Mac.',
        'Nel Finder, fai clic col tasto destro su un file e scegli **Apri con › nchova**.',
      ],
    },
    {
      kind: 'points',
      h: 'Cosa legge',
      lead: 'Tutto quello che il Mac sa riprodurre da solo, audio o video, fino a quattro ore a file.',
      items: [
        ['Audio', 'm4a, mp3, wav, aiff, flac, caf, aac: memo vocali, registratori, podcast, l’mp3 esportato da un’altra app.'],
        ['Audio di WhatsApp', 'i messaggi vocali, salvati sul Mac o mandati con AirDrop: i loro file opus si aprono così come sono.'],
        ['Video', 'mp4 e mov, una lezione registrata, una call registrata da Zoom o QuickTime: nchova trascrive l’audio.'],
        ['Non legge', 'i file WebM, i film protetti da DRM e i link: un video di YouTube deve prima diventare un file sul Mac.'],
      ],
    },
    {
      kind: 'points',
      h: 'Ogni file diventa *un meeting*',
      lead: 'Nella finestra **Meeting**, come le tue call: sotto il giorno in cui è stato registrato, con la sua trascrizione, le sue note e la sua chat.',
      items: [
        ['Il titolo', 'il nome del file. Quando il nome non dice niente, come «Nuova registrazione 12» o quello di WhatsApp, gliene dà uno il modello del Mac, da quello che è stato detto, con Apple Intelligence attiva.'],
        ['La data', 'quando è stato registrato, presa dal file stesso: un memo di martedì va sotto martedì.'],
        ['Le voci', 'distinte, Voce 1, Voce 2…, e chiamate per nome con un clic.', 'pro'],
        ['Le note', 'gli argomenti e cosa si è deciso, dal modello che scegli tu, come dopo una call. Poi chiedi: «Cosa ha detto sui prezzi?»'],
        ['Dove va dopo', 'Word, PDF o Markdown, o la trascrizione come sottotitoli. Oppure fanne domande a Claude e a ChatGPT, attraverso [il server MCP di nchova](@mcp/).'],
      ],
    },
    {
      kind: 'prose',
      h: 'Sbobinare lezioni *e interviste*',
      p: [
        'Una lezione di due ore o una lunga intervista sono solo un file più lungo: nchova lo legge sul Mac, col suo ritmo, mentre fai altro. Se nel frattempo registri un meeting o cominci una lunga dettatura, il file aspetta e riprende quando hai finito.',
        'Con Pro, le voci vengono distinte, così il docente e le domande dall’aula, o tu e la persona che hai intervistato, non sono un unico blocco di testo. Con le {nPro} lingue europee di Parakeet, si trascrive anche una lezione in polacco o in olandese.',
        'La prossima volta puoi saltare la registrazione: col Mac sul banco, nchova trascrive una lezione o un meeting in sala mentre succede, offline.',
      ],
    },
    {
      kind: 'prose',
      h: 'Quando *basta* qualcos’altro',
      p: [
        'Memo Vocali sul Mac trascrive le sue registrazioni, con macOS 15 o successivo e un chip Apple, dove Apple offre la trascrizione. Per un memo che leggerai una volta sola, basta quello; nchova aggiunge le voci distinte, le note, la chat, l’esportazione, e i file che non vengono da Memo Vocali.',
        'L’app Note registra l’audio con una trascrizione dal vivo sui Mac con M1 o successivi, in dieci lingue, e la riassume con Apple Intelligence. Va bene per quello che registri in Note; non accetta un file che hai già.',
        'WhatsApp trascrive da solo i messaggi vocali, sul dispositivo: sull’iPhone in venti lingue, su Android in quattro. Sul Mac, la sua pagina di aiuto dice che potrebbe non essere ancora disponibile.',
        'Per molti file in una volta, un link di YouTube, o una trascrizione da correggere mentre ascolti, MacWhisper è fatta apposta.',
      ],
    },
    {
      kind: 'faq',
      h: 'Domande sui *file*',
      items: [
        ['È davvero gratis?', 'Sì. La trascrizione dei file è nella versione gratuita, col modello vocale di Apple, in {nFree} lingue, senza limiti sul numero di file. Pro aggiunge le voci distinte, le {nPro} lingue europee di Parakeet e note migliori.'],
        ['La mia registrazione viene caricata da qualche parte?', 'No. Il file viene letto e trascritto sul tuo Mac, e resta dov’era: nchova non copia niente. Solo se scegli il tuo Claude Code o Codex per scrivere le note, la trascrizione, non l’audio, va ad Anthropic o a OpenAI.'],
        ['Come porto un audio di WhatsApp sul Mac?', 'Sull’iPhone, condividilo da WhatsApp con AirDrop: arriva sul Mac come file. Poi trascinalo sulla finestra **Meeting**.'],
        ['Quanto può essere lungo un file?', 'Fino a quattro ore. Se ne trascini diversi, vengono trascritti uno dopo l’altro.'],
        ['Quali lingue?', '{nAll}: {nFree} gratis col modello di Apple, {nPro} europee con Parakeet (Pro). Una registrazione che passa da una tua lingua all’altra viene trascritta in tutte e due.'],
        ['Posso riascoltare l’audio accanto alla trascrizione?', 'Non in nchova: tiene le parole, e il tuo file resta tuo, dov’era. Per una trascrizione da correggere mentre ascolti, MacWhisper è fatta apposta.'],
      ],
    },
  ],
  sources: [
    ['Trascrizioni in Memo Vocali', 'https://support.apple.com/guide/voice-memos/vm4a03609f0d/3.2/mac/26'],
    ['Audio in Note', 'https://support.apple.com/guide/notes/apdb5106e334/4.13/mac/26'],
    ['Trascrizione dei messaggi vocali di WhatsApp', 'https://faq.whatsapp.com/241617298315321'],
  ],
  checked: 'il 15 ottobre 2026',
};

// ---------- Tutto insieme ----------

const guides: Guides = {
  words: {
    compare: 'Confronti',
    use: 'Guide',
    inShort: 'In breve',
    sources: 'Fonti consultate',
    home: 'nchova',
    cta: 'Prova nchova gratis per 30 giorni',
    ctaNote: 'senza carta, senza account',
    meta: 'macOS 26 · Mac con chip Apple',
    more: 'Leggi anche',
    us: 'nchova',
    hubLink: 'Tutti i confronti',
  },
  hub: {
    page: 'alternatives/',
    metaTitle: 'nchova a confronto con Wispr Flow, Otter, Granola e altri',
    description:
      'nchova a confronto con Wispr Flow, Superwhisper, MacWhisper, Otter e Granola: dove trascrive ciascuna app, se un bot entra nella call e quanto costa.',
    kicker: 'confronti',
    title: 'nchova *accanto* agli altri.',
    lead: 'App di dettatura e notetaker per i meeting, in una tabella sola: cosa fa ognuna, dove trasforma la tua voce in testo, se un bot entra nelle tue call e come si paga. Ogni nome apre la sua pagina, coi dettagli e le fonti.',
    cols: ['App', 'Cosa fa', 'Dove trascrive', 'Bot nella call', 'Prezzo'],
    us: { does: 'Dettatura, meeting, note, MCP', where: 'Sul tuo Mac', bot: 'Mai', price: 'Gratis; Pro 29,99 € una volta' },
    rows: [
      { id: 'wispr-flow', does: 'Dettatura; meeting con Notetaker', where: 'Nel suo cloud', bot: 'Nessuno', price: 'Gratis; Pro 15 $ al mese, o 144 $ all’anno' },
      { id: 'superwhisper', does: 'Dettatura, modalità AI; una modalità meeting', where: 'Sul Mac o nel cloud, a seconda della modalità', bot: 'Nessuno', price: 'Gratis; Pro 84,99 $ all’anno, o 249,99 $ a vita' },
      { id: 'macwhisper', does: 'File; meeting e dettatura', where: 'Sul Mac; nel cloud con le tue chiavi', bot: 'Nessuno', price: 'Gratis; Pro 64 € una volta' },
      { id: 'otter', does: 'Note dei meeting', where: 'Nel suo cloud', bot: 'Il Notetaker entra come ospite; senza bot dal desktop', price: 'Gratis; Pro 16,99 $ al mese, o 99,99 $ all’anno' },
      { id: 'granola', does: 'Note dei meeting', where: 'Nel cloud', bot: 'Nessuno', price: 'Gratis; Business 14 $ al mese' },
      { id: 'dragon', does: 'Dettatura e comandi vocali', where: 'Su un PC Windows, o nel cloud di Microsoft; l’edizione per Mac è finita nel 2018', bot: 'Nessuno', price: 'Su richiesta' },
    ],
  },
  list: [wisprFlow, otter, granola, superwhisper, macwhisper, dragon, noBot, zoom, meet, teams, audioFiles, offline, multilingual, mcp],
};

export default guides;
