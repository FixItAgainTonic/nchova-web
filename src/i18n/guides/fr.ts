// Les guides, en français. Types et balisage dans ./types.ts.
//
// L’interface de nchova existe en anglais, en italien, en allemand, en français et en espagnol : les libellés de l’app
// (**Réglages › Dictée**, **Connecter**, « Appel sur Zoom. Le transcrire ? », « Voix 1 », « Moi »…) sont ceux de sa
// version française (fr.lproj/Localizable.strings, et MeetingMarkdown.Labels.french pour les voix). Ceux de macOS sont
// ceux de macOS 26 en français. Le nettoyage des changements d’avis connaît le français (« non attends » est l’un de ses
// marqueurs, CorrectionGate.frenchMarkers).

import base from '../fr';
import type { Bot, Guide, Guides } from './types';

const dictation = base.dictation.demo;
const assistants = base.assistants.demo;
const settingsTabs = base.calendarPage.demo.app.tabs;
/** La réunion des démos, avec le nom que lui donne le dictionnaire du site. */
const sync = base.meeting.demo.card;

// ---------- Ce qu’on fait avec nchova ----------

const offline: Guide = {
  id: 'offline',
  page: 'dictation/offline/',
  group: 'use',
  short: 'Dictée hors ligne',
  metaTitle: 'Dictée vocale hors ligne sur Mac, dans vos apps — nchova',
  description:
    'Dictez dans n’importe quelle app du Mac sans internet : nchova transforme votre voix en texte sur le Mac, avec le modèle d’Apple ou Parakeet, sans rien envoyer.',
  kicker: 'dictée hors ligne',
  title: 'Une dictée qui fonctionne *Wi‑Fi coupé*.',
  lead: 'nchova transforme votre voix en texte sur le Mac lui-même : elle écrit dans n’importe quelle app, dans l’avion, dans le train ou derrière le pare-feu de l’entreprise. Rien n’est envoyé, rien n’attend un serveur : maintenez Fn, parlez, relâchez.',
  short3: [
    ['Oui, *entièrement* hors ligne', 'une fois ses modèles sur le Mac, la dictée n’a besoin d’aucune connexion. Ce n’est pas un mode de secours : c’est le seul mode.'],
    ['Dans *toutes* les apps', 'le texte arrive là où se trouve votre curseur : Mail, Slack, Notion, un terminal, un formulaire dans le navigateur.'],
    ['Gratuit', 'avec le modèle vocal d’Apple, en {nFree} langues, pour toujours. Parakeet, le modèle de NVIDIA, est inclus dans Pro : {nPro} langues européennes.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        offline: 'Wi‑Fi : désactivé',
        data: {
          ...dictation,
          doc: 'Dans le train',
          scripts: [
            {
              spoken: 'le train arrive à sept heures, je t’appelle depuis la gare',
              marks: [],
              written: 'Le train arrive à sept heures, je t’appelle depuis la gare.',
            },
            {
              spoken: 'j’ai poussé le correctif et mis à jour la config jason pour la release',
              marks: [{ kind: 'fix', from: 'jason', to: 'JSON' }],
              written: 'J’ai poussé le correctif et mis à jour la config JSON pour la release.',
            },
            {
              spoken: 'notes pour la conférence : on commence par la démo, puis les chiffres, puis les questions',
              marks: [],
              written: 'Notes pour la conférence : on commence par la démo, puis les chiffres, puis les questions.',
            },
          ],
        },
      },
      notes: [
        ['Pas de connexion', 'le Wi‑Fi est coupé, et le texte arrive quand même, aussi vite qu’au bureau.'],
        ['Là où est le curseur', 'n’importe quelle app, n’importe quel champ de texte. S’il n’y a nulle part où écrire, le texte attend dans le presse-papiers : ⌘V.'],
        ['Maintenez, ne cliquez pas', 'maintenez Fn, ou la touche Option de droite, pendant que vous parlez. Relâchez, et le texte s’écrit.'],
        ['Vos mots', 'les noms et les sigles écrits à votre façon, hors ligne aussi : « jason » devient JSON.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Ce qui tourne sur le Mac, et ce qui a besoin d’internet *une fois*',
      p: [
        'Tout ce que nchova fait de votre voix se passe sur votre Mac : la dictée, la transcription des réunions, le nettoyage des changements d’avis, la distinction des voix, les notes quand c’est le modèle d’Apple ou Qwen qui les écrit. Rien de tout cela n’appelle un serveur, donc rien ne dépend de votre connexion.',
        'Internet sert quelques fois, et jamais pour votre voix : pour télécharger un modèle la première fois (macOS récupère chaque langue pour le moteur d’Apple ; Parakeet pèse environ 480 Mo, une seule fois), pour activer Pro et pour chercher les mises à jour. Ensuite, coupez le Wi‑Fi et n’y pensez plus.',
        'Trois choses passent par internet par nature, et seulement si vous les choisissez : les notes écrites par votre propre Claude Code ou Codex, qui envoient la transcription de la réunion à Anthropic ou à OpenAI ; un assistant dans le cloud comme Claude ou ChatGPT connecté à vos réunions, qui envoie ce qu’il lit à son propre modèle ; et la synchronisation de vos réunions entre vos Mac via iCloud (Pro).',
      ],
    },
    {
      kind: 'points',
      h: 'Deux moteurs, *tous deux* sur le Mac',
      lead: 'Choisissez-en un dans Réglages › Dictée. Celui que vous choisissez transcrit aussi vos réunions.',
      items: [
        ['Reconnaissance vocale d’Apple', 'intégrée à macOS : rien à télécharger de notre côté, elle dicte dès la première minute, en {nFree} langues. Gratuite, pour toujours.'],
        ['Parakeet', 'le modèle vocal de NVIDIA, environ 480 Mo une seule fois, en {nPro} langues européennes, dont certaines qu’Apple ne propose pas ({proOnly}, par exemple). Pendant le téléchargement, Apple continue de dicter.', 'pro'],
        ['Pas de limite de durée', 'maintenez la touche tant que vous parlez ; nchova transcrit tout quand vous relâchez.'],
      ],
    },
    {
      kind: 'steps',
      h: 'Préparez tout avant de perdre le réseau',
      steps: [
        '[Téléchargez nchova](/download?from=offline-steps) et ouvrez-la. Elle demande deux autorisations, **Micro** et **Accessibilité**, et vous propose de régler **Appuyer sur la touche 🌐 pour** sur **Ne rien faire**, pour que Fn serve à nchova et non à la dictée de macOS.',
        'Choisissez vos langues, trois au maximum. Laissez macOS les récupérer, ou Parakeet se télécharger, tant que vous êtes encore en ligne.',
        'Coupez le Wi‑Fi et essayez : maintenez **Fn**, parlez, relâchez.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *hors ligne*',
      items: [
        ['nchova fonctionne-t-elle en avion ?', 'Oui. La dictée et la transcription des réunions tournent sur le Mac : une fois les modèles téléchargés, aucune connexion n’est nécessaire.'],
        ['La dictée hors ligne est-elle moins précise ?', 'C’est la même dictée : nchova n’a pas de mode en ligne. Le modèle qui écrit dans l’avion est celui qui écrit à votre bureau.'],
        ['Envoie-t-elle quelque chose quand je retrouve le réseau ?', 'Jamais votre voix. De retour en ligne, nchova cherche les mises à jour et, de temps en temps, vérifie votre licence Pro : la clé et le nom du Mac, rien d’autre. Tout le reste, c’est vous qui l’avez activé : la synchronisation iCloud envoie vos réunions à vos autres Mac, et Claude Code ou Codex, s’ils écrivent vos notes, reçoivent la transcription de chaque nouvelle réunion.'],
        ['Y a-t-il une limite de durée ?', 'Non. Maintenez la touche tant que vous parlez ; nchova transcrit tout quand vous relâchez.'],
        ['Et les réunions, hors ligne ?', 'Elles fonctionnent de la même façon : une réunion autour d’une table, le Mac au milieu, est transcrite sans réseau, et ses notes sont écrites sur le Mac.'],
      ],
    },
  ],
};

const multilingual: Guide = {
  id: 'multilingual',
  page: 'dictation/multilingual/',
  group: 'use',
  short: 'Dicter en plusieurs langues',
  metaTitle: 'Dictée multilingue sur Mac, même en pleine phrase — nchova',
  description:
    'Dictez en français, anglais, allemand ou espagnol et changez de langue en pleine phrase : nchova la reconnaît et l’écrit, sur votre Mac. {nAll} langues, hors ligne.',
  kicker: 'dictée multilingue',
  title: 'Parlez *toutes* vos langues. nchova suit.',
  lead: 'Choisissez jusqu’à trois langues et parlez, tout simplement : nchova reconnaît celle que vous parlez, phrase après phrase et même en pleine phrase, et l’écrit là où se trouve votre curseur. Pas de clavier à changer, pas de réglage à toucher, rien n’est envoyé nulle part.',
  short3: [
    ['*{nAll}* langues', '{nFree} gratuites avec le modèle d’Apple, {nPro} européennes avec Parakeet (Pro), chacune comptée une fois.'],
    ['*Trois* à la fois', 'nchova écoute toutes celles que vous avez choisies, et garde celle que vous parlez.'],
    ['*En pleine phrase*', '« La réunion est demain à dix heures, so please send the deck tonight » s’écrit comme vous l’avez dit.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        data: {
          ...dictation,
          doc: 'Messages',
          scripts: [
            {
              spoken: 'la réunion est demain à dix heures, so please send the deck tonight',
              marks: [
                { kind: 'lang', from: 'la réunion est demain à dix heures,', to: 'FR' },
                { kind: 'lang', from: 'so please send the deck tonight', to: 'EN' },
              ],
              written: 'La réunion est demain à dix heures, so please send the deck tonight.',
            },
            {
              spoken: 'kannst du mir das angebot schicken? j’en ai besoin avant l’appel',
              marks: [
                { kind: 'lang', from: 'kannst du mir das angebot schicken?', to: 'DE' },
                { kind: 'lang', from: 'j’en ai besoin avant l’appel', to: 'FR' },
              ],
              written: 'Kannst du mir das Angebot schicken? J’en ai besoin avant l’appel.',
            },
            {
              spoken: 'the call with the client went well, on signe la semaine prochaine',
              marks: [
                { kind: 'lang', from: 'the call with the client went well,', to: 'EN' },
                { kind: 'lang', from: 'on signe la semaine prochaine', to: 'FR' },
              ],
              written: 'The call with the client went well, on signe la semaine prochaine.',
            },
          ],
        },
      },
      notes: [
        ['Automatique', 'nchova écoute toutes vos langues à la fois et écrit celle que vous avez parlée.'],
        ['Ou fixe', 'choisissez une langue toujours active, et changez-la dans les réglages quand il vous en faut une autre.'],
        ['Votre vocabulaire', 'les noms et les sigles écrits à votre façon : « gira » devient Jira, et vous pouvez ajouter la façon dont le moteur les entend.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Comment elle *distingue* vos langues',
      p: [
        'Avec le moteur d’Apple, nchova fait tourner un module de reconnaissance par langue choisie, tous en même temps, sur le même audio. Quand vous relâchez, elle les compare : à quel point chacun était sûr de ses mots, et à quel point son texte ressemble à sa propre langue. Le meilleur est écrit. Quand vous changez de langue en cours de route, elle fait le même choix, passage par passage.',
        'Avec Parakeet (Pro), un seul modèle connaît {nPro} langues européennes et écrit ce qu’il a entendu ; nchova lit le résultat pour savoir de laquelle des vôtres il s’agissait.',
        'Moins vous gardez de langues, plus le choix est sûr : c’est pourquoi la limite est de trois. Un long passage dans l’autre langue, ou un passage en fin de phrase, est bien reconnu ; deux mots d’anglais entre deux propositions en polonais peuvent être écrits en polonais. Les noms et les termes que vous employez dans toutes vos langues ont leur place dans le vocabulaire.',
      ],
    },
    {
      kind: 'points',
      h: 'Les langues',
      items: [
        ['Gratuites, avec le modèle d’Apple', '{free}.'],
        ['Avec Pro, Parakeet', '{pro}.', 'pro'],
        ['L’app elle-même', 'les menus et les réglages de nchova sont en anglais, en italien, en allemand, en français et en espagnol, quelles que soient les langues dans lesquelles vous dictez.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Et les réunions en *deux langues* ?',
      p: [
        'Elles fonctionnent de la même façon : nchova reconnaît chaque phrase dans la langue où elle a été dite, donc un appel qui passe du français à l’anglais est transcrit dans les deux. Une courte incise dans une autre langue est transcrite dans la langue principale de la réunion.',
        'Les notes sont écrites dans la langue de la réunion, et vous pouvez l’interroger dans une autre : en anglais, italien, français, espagnol, allemand, portugais, néerlandais, japonais, coréen ou chinois, « Qu’a-t-on décidé ? » reçoit sa réponse dans la langue de la question.',
      ],
    },
    {
      kind: 'steps',
      h: 'Choisissez vos langues',
      steps: [
        'Dans nchova, ouvrez **Réglages › Dictée** et, sous **Reconnaissance**, cliquez sur **Ajouter une langue…**. Choisissez-en trois au maximum.',
        'Laissez **Langue** sur **Automatique** : nchova les écoute toutes à la fois.',
        'Maintenez **Fn** et parlez comme vous parlez.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions dans *toutes* les langues',
      items: [
        ['Puis-je mélanger deux langues dans la même phrase ?', 'Oui, quand chaque partie fait plus de deux ou trois mots : nchova décide passage par passage. Pour un mot étranger isolé dans une phrase, mieux vaut l’ajouter au vocabulaire.'],
        ['Quelles langues sont gratuites ?', 'Avec le modèle d’Apple : {free}. Pro ajoute Parakeet et les langues que lui seul connaît ({proOnly}, par exemple).'],
        ['Pourquoi trois au maximum ?', 'Avec le moteur d’Apple, chaque langue en mode Automatique, c’est un module de reconnaissance de plus qui écoute chaque dictée ; avec Parakeet, une langue de plus à distinguer. Trois, c’est là où le choix reste sûr et le Mac reste rapide : pour dicter dans une autre langue, retirez-en une des trois.'],
        ['Est-ce que ça marche hors ligne dans toutes les langues ?', 'Oui : les deux moteurs tournent sur le Mac. La première fois, macOS récupère la langue pour le moteur d’Apple, ou nchova télécharge Parakeet, une seule fois.'],
      ],
    },
  ],
};

const mcp: Guide = {
  id: 'mcp',
  page: 'mcp/',
  group: 'use',
  short: 'Vos réunions dans Claude et ChatGPT (MCP)',
  metaTitle: 'Vos réunions dans Claude et ChatGPT, via MCP — nchova',
  description:
    'nchova inclut un serveur MCP local : Claude, ChatGPT, Cursor et d’autres assistants cherchent et lisent vos transcriptions de réunion, sur votre Mac. Gratuit.',
  kicker: 'serveur MCP',
  title: 'Interrogez votre assistant *sur vos réunions*.',
  lead: 'nchova transcrit vos appels sur le Mac et les confie à votre assistant IA via un serveur MCP local. Claude, ChatGPT, Cursor et les autres retrouvent ce qui a été dit, résument votre semaine, vous disent qui doit faire quoi, et enregistrent des notes en retour. Aucun serveur à nous entre les deux : nous n’en avons pas.',
  short3: [
    ['*Un* clic', 'Réglages › Assistants › Connecter : nchova s’ajoute à la configuration de votre assistant, et garde une copie de tout fichier qu’elle modifie.'],
    ['Les réunions, *jamais* la dictée', 'l’assistant lit les transcriptions et les notes ; ce que vous dictez reste hors de sa portée.'],
    ['Gratuit', 'le serveur MCP est inclus dans la version gratuite, pour toujours, Pro ou pas.'],
  ],
  blocks: [
    {
      kind: 'connect',
      h: 'Connectez-le *une fois*',
      lead: 'nchova trouve les assistants présents sur votre Mac et configure chacun d’un clic. Pour les apps où elle ne peut pas écrire, elle fournit une configuration à coller.',
      connect: {
        tabs: settingsTabs,
        tab: 'Assistants',
        section: 'Vos réunions dans votre assistant',
        rows: [
          { name: 'Claude', after: 'Quittez et rouvrez Claude pour voir les outils de Nchova.', click: true },
          { name: 'Claude Code', after: 'Claude Code verra les outils de Nchova dès sa prochaine session.' },
          { name: 'ChatGPT / Codex', after: 'Dans l’app ChatGPT, appuyez sur Restart dans Settings → MCP servers ; Codex verra les outils dès sa prochaine session.' },
          { name: 'Cursor', after: 'Cursor le détecte tout seul : vérifiez dans Settings → MCP.', click: true },
        ],
        others: 'Autres apps que Nchova peut connecter',
        button: 'Connecter',
        again: 'Reconnecter',
        connected: 'Connecté',
        footer:
          'Permet à l’assistant de lister, chercher et lire les transcriptions de vos réunions, de suivre une réunion en cours et d’enregistrer ses résumés, grâce à un serveur MCP local. Seules les réunions sont partagées, jamais vos dictées, et rien ne passe par les serveurs de Nchova : il n’y en a pas.',
        label: 'Les réglages de nchova, onglet Assistants : on clique sur Connecter à côté de Claude, puis à côté de Cursor, et chacun affiche Connecté.',
      },
    },
    {
      kind: 'demo',
      h: 'Ensuite, *demandez*',
      lead: 'L’assistant choisit les outils tout seul : le résumé de la semaine, les tâches que chacun a prises, tout sur une personne, les mots exacts de quelqu’un.',
      demo: {
        name: 'assistants',
        data: {
          ...assistants,
          q1: 'Qu’est-ce que j’ai promis de faire cette semaine ?',
          calls1: [['digest', '{ "from": "2026-10-05" }', '6 réunions · 9 tâches']],
          a1: `Trois choses : répondre aux testeurs (*${sync}*, mardi), envoyer au client le devis révisé (mercredi), et la présentation pour la revue de jeudi.`,
          cite: `${sync} · 1:06`,
          q2: 'J’appelle Sophie dans cinq minutes. Qu’est-ce qu’elle a pris en charge ?',
          calls2: [['find_person', '{ "name": "Sophie" }', '4 réunions · 2 tâches']],
          a2: 'Deux choses : la newsletter, qu’elle a dit qu’elle enverrait lundi à 10 h, et la page des tarifs que vous lui avez demandé de relire.',
        },
      },
      notes: [
        ['Chercher', 'ce que quelqu’un a dit, mot pour mot, dans toutes les réunions.'],
        ['Résumer', 'la semaine, ou le mois : réunions, personnes, sujets et tâches.'],
        ['En direct', 'la réunion en cours aussi : « qu’est-ce qu’ils viennent de décider ? »'],
        ['Enregistrer', 'les notes et les actions écrites par l’assistant apparaissent dans nchova.'],
      ],
    },
    {
      kind: 'points',
      h: 'Les *dix* outils',
      lead: 'Ce que propose le serveur MCP de nchova. L’assistant lit leurs descriptions et choisit.',
      items: base.assistants.tools.list.map(([name, what]) => [name, `${what}.`]),
    },
    {
      kind: 'prose',
      h: 'Comment ça marche, et *ce qui va où*',
      p: [
        'Le serveur MCP est un petit programme à l’intérieur de nchova. Votre assistant le lance sur votre Mac et lui parle par un tube (stdio) : pas de réseau, pas de port, pas de jeton qui puisse fuiter. Il lit la même base de données que celle où l’app écrit, il répond donc même quand nchova est fermée.',
        'Il ne partage que les réunions : transcriptions, notes, actions, titres et noms des voix. Vos dictées n’y sont jamais, pas plus que l’audio, que nchova ne conserve pas.',
        'La suite dépend de l’assistant. Claude, ChatGPT et les autres assistants dans le cloud envoient ce qu’ils lisent à leurs propres modèles, comme pour tout ce que vous collez dans une conversation. Un modèle local, dans LM Studio par exemple, garde tout sur le Mac.',
      ],
    },
    {
      kind: 'steps',
      h: 'Connectez votre assistant',
      steps: [
        '[Téléchargez nchova](/download?from=mcp-steps) et laissez-la transcrire une réunion ou deux.',
        'Ouvrez **Réglages › Assistants**. Les assistants présents sur votre Mac apparaissent en premier.',
        'Cliquez sur **Connecter** à côté du vôtre. nchova s’ajoute à la configuration de l’assistant : elle enregistre une copie du fichier avant de le modifier ou, pour Claude Code et Codex, lance leur propre commande.',
        'Faites ce que nchova indique ensuite (pour Claude : le quitter et le rouvrir), puis posez vos questions sur vos réunions.',
        'Pour Perplexity, Raycast, Zed, Goose et toute autre app qui parle MCP, **Copier la configuration** met dans le presse-papiers ce qu’il faut coller.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions sur *MCP*',
      items: [
        ['Qu’est-ce que MCP ?', 'Le Model Context Protocol : un standard ouvert qui permet aux assistants IA d’utiliser des outils et des données de votre ordinateur. nchova le parle, donc tout assistant qui le parle aussi peut lire vos réunions.'],
        ['Quels assistants fonctionnent ?', 'Claude, Claude Code, ChatGPT et Codex, Cursor, VS Code, Windsurf, Gemini CLI et LM Studio se connectent d’un clic ; Perplexity, Raycast, Zed et Goose avec une configuration à coller ; et toute app qui lance un serveur MCP local (stdio).'],
        ['Faut-il Pro ?', 'Non. Le serveur MCP est gratuit, pour toujours.'],
        ['L’assistant peut-il modifier ou supprimer mes réunions ?', 'Il peut enregistrer des notes et des actions, qui remplacent celles de la réunion, même des notes que vous avez retouchées, et corriger le titre d’une réunion, ses participants ou les noms de ses voix. Il ne peut ni supprimer une réunion ni toucher à sa transcription, et un titre ou un nom de voix que vous avez choisi vous-même n’est jamais écrasé.'],
        ['Ça marche pendant une réunion ?', 'Oui : l’assistant peut lire ce qui a été dit jusque-là, ou seulement les dernières minutes.'],
        ['Mes réunions sont-elles envoyées à nchova ?', 'Elles n’ont nulle part où aller : nchova n’a pas de serveurs. L’assistant parle à nchova sur votre Mac.'],
      ],
    },
  ],
};


// ---------- nchova à côté des autres ----------

/** Les mots de tous les tickets : les mois, les lignes du ticket. */
const billWords = {
  month: 'mois',
  months: 'mois',
  total: 'Total',
  once: 'nchova Pro, une fois',
  year: 'Année {n}, mises à jour',
  nothing: '0,00 €',
  switchLabel: 'Facturation',
};

const routeWords = { mac: 'Votre Mac', switchLabel: 'Afficher' };

/** « Vérifié le … » : le composant écrit les deux-points juste après, d’où l’espace insécable à la fin. */
const checked = 'le 8 octobre 2026 ';

const wisprFlow: Guide = {
  id: 'wispr-flow',
  page: 'alternatives/wispr-flow/',
  group: 'compare',
  short: 'Wispr Flow',
  metaTitle: 'Alternative à Wispr Flow qui tourne sur votre Mac — nchova',
  description:
    'nchova face à Wispr Flow : une dictée vocale qui tourne sur votre Mac, hors ligne, sans compte ni abonnement. Où va votre voix, et les prix, côte à côte.',
  kicker: 'nchova vs Wispr Flow',
  title: 'Une alternative à Wispr Flow qui *reste sur votre Mac*.',
  lead: 'Wispr Flow est un clavier vocal soigné, et il fonctionne en envoyant ce que vous dites à son cloud. nchova fait le même travail (maintenir une touche, parler, voir le texte apparaître dans n’importe quelle app) avec le modèle vocal sur votre Mac : hors ligne, sans compte, et payée une seule fois, si vous payez.',
  short3: [
    ['*Où* il écoute', 'Wispr Flow transcrit dans son cloud, toujours. nchova transcrit sur votre Mac, toujours.'],
    ['*Ce qu’il* garde', 'Wispr Flow stocke les dictées et s’en sert par défaut pour entraîner ses modèles, en Free comme en Pro, sauf si vous le désactivez. nchova les garde sur votre Mac seulement : elle n’a pas de serveurs où les envoyer.'],
    ['*Ce que* vous payez', 'Wispr Flow Pro coûte 15 $ par mois, ou 144 $ par an. nchova est gratuite, ou 29,99 € une seule fois pour Pro.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Où va *votre voix*',
      lead: 'La même phrase, dictée deux fois. Wispr Flow l’envoie à ses serveurs, avec l’app où vous êtes et le texte autour de votre curseur, et écrit ce qui revient. nchova la confie à un modèle vocal sur le Mac.',
      route: {
        them: { tab: 'Wispr Flow', place: 'Le cloud de Wispr, aux États-Unis', what: 'votre voix, le nom de l’app, le texte autour du curseur', back: 'texte', sent: 'secondes de votre voix envoyées' },
        us: { tab: 'nchova', place: 'Modèle vocal, sur ce Mac', sent: 'seconde de votre voix envoyée' },
        words: {
          ...routeWords,
          said: 'on décale le lancement à vendredi dix heures',
          written: 'On décale le lancement à vendredi dix heures.',
          label: 'Une phrase dictée avec Wispr Flow part vers ses serveurs et revient ; avec nchova, elle va à un modèle sur le Mac, et rien ne sort.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Côte à côte',
      them: 'Wispr Flow',
      rows: [
        ['Où il transcrit', 'Dans le cloud de Wispr : « transcription always occurs on the cloud »', 'Sur votre Mac'],
        ['Sans internet', 'Pas de dictée : « an internet connection is required for transcription » ; l’audio est gardé pour réessayer', 'Fonctionne de la même façon'],
        ['Envoyé avec votre voix', 'Avec Context Awareness, activé par défaut : l’app, le champ de texte, du texte à l’écran', 'Rien n’est envoyé'],
        ['Vos dictées', 'Stockage dans le cloud et entraînement des modèles activés par défaut en Free et en Pro ; les deux peuvent être désactivés', 'Sur votre Mac seulement : nous n’avons pas de serveurs'],
        ['Compte', 'Obligatoire', 'Aucun'],
        ['Langues', 'Plus de 100, une par dictée : « the dominant language wins »', '{nAll}, dont {nFree} gratuites ; jusqu’à trois à la fois, avec changement en pleine phrase'],
        ['Réunions', 'Notetaker : pas de bot ; intervenants nommés d’après l’invitation, en Free aussi ; transcrites et stockées dans le cloud de Wispr', 'Pas de bot ; transcrites sur votre Mac, voix distinguées (Pro)'],
        ['Assistants IA (MCP)', 'Serveur hébergé, pour les réunions et les notes', 'Serveur local, pour les réunions ; jamais votre dictée'],
        ['Offre gratuite', '2 000 mots par semaine sur ordinateur', 'Pas de limite de mots, avec le modèle d’Apple'],
        ['Offre payante', 'Pro : 15 $ par mois, ou 144 $ par an', 'Pro : 29,99 € une seule fois, jusqu’à 3 Mac'],
        ['Plateformes', 'Mac, Windows, iPhone, Android', 'Mac avec puce Apple et macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Trois ans, *de chaque côté*',
      lead: 'Wispr Flow Pro à ses prix américains, facturé à l’année ou au mois, à côté de nchova Pro. Choisissez une façon de payer et regardez les mois passer.',
      bill: {
        head: 'WISPR FLOW PRO',
        plans: [
          { tab: 'Annuel', sub: 'facturé à l’année, 144 $', every: 12, amount: 144 },
          { tab: 'Mensuel', sub: 'facturé au mois, 15 $', every: 1, amount: 15 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Sur trois ans, Wispr Flow Pro revient à 432 $ en facturation annuelle, ou 540 $ au mois ; nchova Pro reste à 29,99 €, payé une seule fois.' },
      },
    },
    {
      kind: 'demo',
      h: 'Même geste. *Essayez*.',
      lead: 'Maintenez une touche, parlez, relâchez : comme vous dictez déjà avec Wispr Flow. Maintenez la touche sous la fenêtre, et la phrase suivante, c’est vous qui la dictez.',
      demo: { name: 'dictation' },
      notes: base.dictation.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quand Wispr Flow est le *meilleur choix*',
      p: [
        'Si vous dictez sur Windows, sur iPhone ou sur Android en plus du Mac, Wispr Flow vous suit partout. nchova est une app Mac, pour les Mac avec puce Apple et macOS 26 ou version ultérieure.',
        'Si vous écrivez dans une langue que ni Apple ni Parakeet ne connaissent, les plus de cent langues de Wispr Flow couvrent plus de terrain. Et ses commandes, qui réécrivent à la voix le texte sélectionné, n’ont pas d’équivalent dans nchova, qui écrit ce que vous avez dit et n’ajoute jamais un mot.',
        'Si rien de tout cela ne vous concerne, l’échange est simple : le même geste, sans que votre voix quitte le Mac, sans compte, sans abonnement.',
      ],
    },
    {
      kind: 'steps',
      h: 'Passer de Wispr Flow à nchova',
      steps: [
        'Quittez Wispr Flow, pour que deux apps n’écoutent pas la même touche.',
        '[Téléchargez nchova](/download?from=wispr-flow-steps) et suivez sa configuration : **Micro**, **Accessibilité**, et **Appuyer sur la touche 🌐 pour** réglé sur **Ne rien faire**.',
        'Choisissez vos langues, trois au maximum, et ajoutez les noms et les sigles que vous employez dans **Réglages › Vocabulaire**.',
        'Maintenez **Fn**, ou la touche Option de droite, et parlez.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *à voix haute*',
      items: [
        ['nchova est-elle aussi précise que Wispr Flow ?', 'Essayez avec votre propre voix : l’essai inclut tout pendant 30 jours. nchova fait tourner le modèle vocal d’Apple ou Parakeet de NVIDIA sur votre Mac ; Wispr Flow fait tourner son propre modèle dans son cloud.'],
        ['Faut-il un compte ?', 'Non. Téléchargez nchova et elle fonctionne. Pro, c’est une clé de licence qui arrive par e-mail.'],
        ['nchova fonctionne-t-elle sur Windows ou sur iPhone ?', 'Non : elle est faite pour les Mac avec puce Apple et macOS 26 ou version ultérieure.'],
        ['Fonctionne-t-elle aussi en réunion ?', 'Oui, et sans bot : nchova repère l’appel, le transcrit sur le Mac, distingue les voix (Pro) et écrit les notes quand vous raccrochez. Voir [comment elle transcrit un appel Zoom](@transcribe/zoom/).'],
        ['Que se passe-t-il après l’essai ?', 'nchova reste gratuite avec les modèles d’Apple : dictée, réunions, notes. Pro ajoute Parakeet, les voix distinguées et nommées, de meilleures notes et la synchronisation iCloud, pour 29,99 € une seule fois.'],
      ],
    },
  ],
  sources: [
    ['Tarifs de Wispr Flow', 'https://wisprflow.ai/pricing'],
    ['Contrôle des données', 'https://wisprflow.ai/data-controls'],
    ['FAQ sécurité et conformité', 'https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq'],
    ['Context Awareness', 'https://docs.wisprflow.ai/articles/4678293671-feature-context-awareness'],
    ['Plusieurs langues', 'https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages'],
    ['Présentation de Flow', 'https://docs.wisprflow.ai/articles/2772472373-what-is-flow'],
    ['Précision et limites connues', 'https://docs.wisprflow.ai/articles/4048537120-what-to-expect-from-flow-accuracy-and-known-limitations'],
    ['Notetaker', 'https://wisprflow.ai/notetaker'],
  ],
  checked,
};

const superwhisper: Guide = {
  id: 'superwhisper',
  page: 'alternatives/superwhisper/',
  group: 'compare',
  short: 'Superwhisper',
  metaTitle: 'Alternative à Superwhisper pour appels et dictée — nchova',
  description:
    'nchova face à Superwhisper : les deux dictent sur votre Mac. nchova repère aussi vos appels, lit votre calendrier et rédige les notes. Pro : 29,99 € une fois.',
  kicker: 'nchova vs Superwhisper',
  title: 'Une alternative à Superwhisper, *pour vos réunions aussi*.',
  lead: 'Superwhisper et nchova installent tous deux un modèle vocal sur votre Mac, et tous deux écrivent là où se trouve votre curseur. La différence, c’est ce qui se passe autour d’un appel : nchova le repère et propose de le transcrire, suit votre calendrier, entend les deux côtés même en version gratuite, et écrit les notes quand vous raccrochez. Et Pro coûte 29,99 €, une seule fois.',
  short3: [
    ['La dictée, *tous les deux*', 'Superwhisper utilise des modèles locaux ou dans le cloud, selon le mode ; nchova tourne uniquement sur le Mac.'],
    ['Les réunions, *toute seule*', 'Superwhisper a un mode réunion que vous lancez ; nchova repère l’appel, lit votre calendrier et écrit les notes toute seule. Avec Pro, elle nomme aussi les voix.'],
    ['*Une seule* fois', 'Superwhisper Pro coûte 84,99 $ par an, ou 249,99 $ à vie. nchova Pro coûte 29,99 €, une seule fois.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'L’appel commence. *nchova demande*.',
      lead: 'Dès que Zoom, Meet, Teams ou Slack prend le micro, nchova propose de transcrire ; avec votre calendrier, elle donne à la réunion le nom de l’événement. La documentation de Superwhisper décrit un mode réunion que vous lancez vous-même.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Côte à côte',
      them: 'Superwhisper',
      rows: [
        ['Où il transcrit', 'Sur le Mac avec des modèles locaux, ou dans le cloud (son propre S1, ou les modèles de Deepgram et d’ElevenLabs), au choix selon le mode', 'Sur votre Mac, toujours'],
        ['Offre gratuite', 'Modèles Whisper locaux, deux modes sans traitement IA', 'Dictée, réunions et notes avec les modèles d’Apple'],
        ['Réunions', 'Un mode réunion que vous lancez ; l’autre côté de l’appel demande Pro', 'Repère l’appel, demande, suit votre calendrier'],
        ['Qui parle', 'Séparation des intervenants (Pro), non utilisée dans les résumés IA', 'Voix 1, Voix 2…, nommées parmi les invités grâce à leur voix (Pro)'],
        ['Notes', 'Via un mode IA, local ou dans le cloud', 'Écrites à la fin de l’appel, autour de vos propres notes'],
        ['Assistants IA (MCP)', 'Serveur local pour l’historique de dictée (macOS)', 'Serveur local pour vos réunions ; jamais votre dictée'],
        ['Langues', 'Plus de 100, selon le modèle', '{nAll}, dont {nFree} gratuites ; jusqu’à trois à la fois, avec changement en pleine phrase'],
        ['Réécriture', 'Des modes IA qui mettent en forme et réécrivent ce que vous avez dit', 'Écrit ce que vous avez dit ; le nettoyage peut seulement retirer des mots'],
        ['Offre payante', 'Pro : 8,49 $ par mois, 84,99 $ par an, ou 249,99 $ à vie', 'Pro : 29,99 € une seule fois, jusqu’à 3 Mac'],
        ['Plateformes', 'Mac (Intel aussi), Windows, iPhone, Android', 'Mac avec puce Apple et macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Trois ans, *de chaque côté*',
      lead: 'Superwhisper Pro à ses prix américains, à l’année, au mois ou à vie, à côté de nchova Pro.',
      bill: {
        head: 'SUPERWHISPER PRO',
        plans: [
          { tab: 'Annuel', sub: 'facturé à l’année, 84,99 $', every: 12, amount: 84.99 },
          { tab: 'Mensuel', sub: 'facturé au mois, 8,49 $', every: 1, amount: 8.49 },
          { tab: 'À vie', sub: 'une seule fois, 249,99 $', every: 1000, amount: 249.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Sur trois ans, Superwhisper Pro revient à 254,97 $ en facturation annuelle, 305,64 $ au mois, ou 249,99 $ à vie ; nchova Pro reste à 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Elle sait *qui* parle',
      lead: 'Avec Pro, nchova distingue les autres voix pendant qu’elles parlent et nomme celles qu’elle a déjà entendues, parmi les personnes invitées. Les noms se retrouvent dans la transcription, dans les notes et dans ce que lit votre assistant.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quand Superwhisper est le *meilleur choix*',
      p: [
        'Si vous dictez sur Windows, sur iPhone ou sur Android, ou sur un Mac Intel, Superwhisper les couvre, avec une seule licence. nchova demande un Mac avec puce Apple et macOS 26.',
        'Si vous voulez que vos mots soient réécrits pendant que vous dictez, sur le ton d’un e-mail ou dans la forme d’une note, les modes IA de Superwhisper le font, et il transcrit aussi des fichiers audio et vidéo. nchova écrit ce que vous avez dit et transcrit ce que vous entendez, en direct.',
        'Si vos journées sont faites d’appels, nchova s’occupe toute seule de ce qui les entoure : elle repère l’appel, sait qui était invité et écrit les notes quand vous raccrochez ; avec Pro, elle nomme aussi les voix.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *à voix haute*',
      items: [
        ['nchova utilise-t-elle aussi Parakeet ?', 'Oui : avec Pro, Parakeet de NVIDIA tourne sur votre Mac en {nPro} langues européennes. Sans Pro, c’est le modèle vocal d’Apple qui travaille, en {nFree} langues.'],
        ['nchova fonctionne-t-elle hors ligne ?', 'Oui : la dictée, les réunions et les notes écrites sur le Mac fonctionnent sans connexion. Internet sert à télécharger les modèles la première fois, à activer Pro et aux mises à jour. Voir [la dictée hors ligne](@dictation/offline/).'],
        ['Puis-je essayer avant de payer ?', 'Trente jours avec tout inclus, sans carte et sans compte. Ensuite, elle reste gratuite avec les modèles d’Apple.'],
        ['Existe-t-il une licence à vie ?', 'Pro est à vie : 29,99 € une seule fois, pour 3 Mac maximum, avec toutes les mises à jour incluses tant que nchova en reçoit.'],
      ],
    },
  ],
  sources: [
    ['Offres de Superwhisper', 'https://superwhisper.com/docs/billing/plans'],
    ['Modèles vocaux', 'https://superwhisper.com/docs/models/voice'],
    ['Choisir un modèle', 'https://superwhisper.com/docs/get-started/choose-your-model'],
    ['Modes intégrés', 'https://superwhisper.com/docs/modes/built-in'],
    ['Réunions avec séparation des intervenants', 'https://superwhisper.com/docs/modes/speaker-separated-meetings'],
    ['CLI et serveur MCP', 'https://superwhisper.com/docs/get-started/cli'],
    ['Introduction', 'https://superwhisper.com/docs/get-started/introduction'],
  ],
  checked,
};

const otter: Guide = {
  id: 'otter',
  page: 'alternatives/otter/',
  group: 'compare',
  short: 'Otter',
  metaTitle: 'Alternative à Otter.ai sans bot, sur votre Mac — nchova',
  description:
    'nchova face à Otter.ai : la transcription de réunion sur votre Mac, sans bot dans l’appel ni audio envoyé. Notes, intervenants, prix et confidentialité.',
  kicker: 'nchova vs Otter',
  title: 'Une alternative à Otter qui *ne rejoint jamais l’appel*.',
  lead: 'Le Notetaker d’Otter rejoint vos appels Zoom, Meet et Teams comme invité, et chaque enregistrement, avec ou sans le bot, est transcrit et conservé dans le cloud d’Otter. nchova transcrit les mêmes appels depuis votre Mac : personne ne rejoint l’appel, l’audio n’est jamais envoyé, et les notes s’écrivent quand vous raccrochez.',
  short3: [
    ['*Aucun* invité', 'le Notetaker d’Otter rejoint l’appel comme un participant que tout le monde voit. nchova écoute depuis votre Mac, comme vous.'],
    ['*Aucun* envoi', 'Otter garde l’audio et peut s’en servir pour entraîner ses modèles, après désidentification. nchova ne garde aucun audio, et n’a nulle part où l’envoyer.'],
    ['*Aucun* compteur', 'Otter Basic s’arrête à 300 minutes par mois, et n’affiche que les 30 premières minutes de chaque appel. nchova n’a pas de limite, et Pro coûte 29,99 € une seule fois.'],
  ],
  blocks: [
    {
      kind: 'bot',
      h: 'Un invité dans l’appel, *ou aucun*',
      lead: 'Avec Otter, un Notetaker rejoint la réunion en votre nom, et peut la rejoindre tout seul depuis votre calendrier. Avec nchova, l’appel réunit les personnes invitées, et personne d’autre.',
      bot: {
        them: {
          tab: 'Otter Notetaker',
          name: 'Alex’s Notetaker',
          joined: 'Alex’s Notetaker (Otter.ai) a rejoint la réunion',
          banner: '',
          caption: 'Le Notetaker rejoint l’appel comme invité : tout le monde le voit, et l’enregistrement part dans le cloud d’Otter.',
        },
        us: { tab: 'nchova', caption: 'Personne ne rejoint l’appel. nchova écoute depuis votre Mac, et la transcription y reste.' },
        words: {
          switchLabel: 'Afficher',
          label: 'Un appel où le Notetaker d’Otter entre comme invité, à côté du même appel avec nchova, où personne n’entre et où la transcription s’affiche sur votre propre écran.',
          call: sync,
          tiles: ['Julie', 'Marc', 'Sophie', 'Thomas', 'Alex'],
          live: 'Transcription',
          bubbles: [
            ['Julie', 'Le texte de la page est prêt.', 'Voix 1'],
            ['', 'Parfait. Et les animations ?'],
            ['Marc', 'Pour jeudi, non, attends, vendredi.', 'Voix 2'],
          ],
        },
      },
    },
    {
      kind: 'table',
      h: 'Côte à côte',
      them: 'Otter',
      rows: [
        ['Comment il entend l’appel', 'Otter Notetaker rejoint Zoom, Meet et Teams comme invité ; l’app de bureau peut aussi enregistrer sans lui', 'Depuis votre Mac : votre micro et le son de l’appel, sans invité'],
        ['Où il transcrit', 'Dans le cloud d’Otter, aux États-Unis', 'Sur votre Mac'],
        ['L’audio', 'Conservé avec la conversation, exportable en mp3', 'Jamais conservé : seulement le texte'],
        ['Entraînement', 'Sa politique de confidentialité autorise l’entraînement sur l’audio et les transcriptions désidentifiés', 'Rien ne nous parvient, donc rien ne peut servir à entraîner un modèle'],
        ['Qui parle', 'Noms tirés d’empreintes vocales stockées par Otter, partagées dans un espace de travail', 'Avec Pro, Voix 1, Voix 2…, nommées grâce à des empreintes vocales gardées sur votre Mac ; en version gratuite, « Moi » et « Autres »'],
        ['Langues', '6, une par conversation (le français peut basculer vers l’anglais)', '{nAll}, dont {nFree} gratuites ; jusqu’à trois à la fois, phrase après phrase'],
        ['Dictée', 'Aucune', 'Maintenez Fn, dans n’importe quelle app'],
        ['Sans internet', 'Enregistre, et transcrit après l’envoi', 'Transcrit comme d’habitude'],
        ['Assistants IA (MCP)', 'Un serveur dans le cloud d’Otter', 'Un serveur local, sur votre Mac'],
        ['Offre gratuite', '300 minutes par mois ; les 30 premières minutes de chaque conversation ; les 25 dernières conversations', 'Pas de limite, avec les modèles d’Apple'],
        ['Offre payante', 'Pro : 16,99 $ par mois, ou 8,33 $ par mois en facturation annuelle', 'Pro : 29,99 € une seule fois, jusqu’à 3 Mac'],
        ['Plateformes', 'Web, Mac, Windows, iPhone, Android', 'Mac avec puce Apple et macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'La transcription, *en direct*, sur votre écran',
      lead: 'L’appel commence, nchova demande une fois, et la transcription s’écrit dans un panneau que vous seul voyez : votre micro, c’est « Moi » ; l’appel, ce sont tous les autres.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'bill',
      h: 'Trois ans, *de chaque côté*',
      lead: 'Otter Pro à ses prix américains, facturé à l’année ou au mois, à côté de nchova Pro.',
      bill: {
        head: 'OTTER PRO',
        plans: [
          { tab: 'Annuel', sub: 'facturé à l’année, 99,99 $', every: 12, amount: 99.99 },
          { tab: 'Mensuel', sub: 'facturé au mois, 16,99 $', every: 1, amount: 16.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Sur trois ans, Otter Pro revient à 299,97 $ en facturation annuelle, ou 611,64 $ au mois ; nchova Pro reste à 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Les notes, *à la fin de l’appel*',
      lead: 'Écrites autour de ce que vous avez noté, par le modèle de votre choix : celui d’Apple ou Qwen sur le Mac, ou votre propre Claude Code ou Codex. Ensuite, demandez à la réunion ce qui a été décidé.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Quand Otter est le *meilleur choix*',
      p: [
        'Si votre équipe travaille ensemble dans Otter, partage des conversations dans des canaux et les envoie vers Salesforce ou HubSpot, Otter est fait pour ça. nchova garde les réunions de chacun sur son propre Mac, et dans son propre iCloud s’il le souhaite.',
        'S’il vous faut enregistrer sur un téléphone, dans un navigateur sur n’importe quel ordinateur, ou sous Windows, Otter est partout. nchova est une app Mac.',
        'Si vous voulez réécouter l’enregistrement, Otter garde l’audio ; nchova ne le garde jamais, seulement les mots.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *à voix haute*',
      items: [
        ['Les participants savent-ils que nchova transcrit ?', 'Rien n’apparaît dans l’appel, puisque nchova n’y est pas. Là où la loi l’exige, prévenez vos interlocuteurs que vous transcrivez.'],
        ['nchova peut-elle importer mes conversations Otter ?', 'Non. nchova part de votre prochaine réunion ; vos exports Otter restent à vous.'],
        ['Fonctionne-t-elle avec Zoom, Meet et Teams ?', 'Avec les trois, ainsi qu’avec Slack, FaceTime, Webex et les appels dans le navigateur : nchova remarque quand l’un d’eux prend le micro, et tout autre appel se lance depuis la barre des menus. Voir [Zoom](@transcribe/zoom/), [Google Meet](@transcribe/google-meet/) et [Teams](@transcribe/teams/).'],
        ['Puis-je interroger Claude ou ChatGPT sur mes réunions ?', 'Oui : le serveur MCP de nchova tourne sur votre Mac et se connecte d’un clic. Voir [vos réunions dans votre assistant](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Tarifs d’Otter', 'https://otter.ai/pricing'],
    ['Otter Notetaker', 'https://help.otter.ai/hc/en-us/articles/4425393298327-Otter-Notetaker-Overview'],
    ['App de bureau d’Otter', 'https://help.otter.ai/hc/en-us/articles/35973988280215-Otter-Desktop-App-Mac-Windows'],
    ['Politique de confidentialité', 'https://otter.ai/privacy-policy'],
    ['Identification des intervenants', 'https://help.otter.ai/hc/en-us/articles/21665587209367-Speaker-Identification-Overview'],
    ['Langues prises en charge', 'https://help.otter.ai/hc/en-us/articles/360047247414-Supported-languages'],
  ],
  checked,
};

const granola: Guide = {
  id: 'granola',
  page: 'alternatives/granola/',
  group: 'compare',
  short: 'Granola',
  metaTitle: 'Alternative à Granola qui transcrit sur votre Mac — nchova',
  description:
    'nchova face à Granola : ni l’un ni l’autre ne met de bot dans l’appel, mais nchova transcrit sur votre Mac, pas dans le cloud, et y écrit aussi les notes.',
  kicker: 'nchova vs Granola',
  title: 'Une alternative à Granola qui *garde l’appel sur votre Mac*.',
  lead: 'Granola et nchova restent tous deux en dehors de l’appel : pas de bot, juste votre Mac qui écoute. La différence, c’est ce qui se passe ensuite. Granola envoie l’appel en continu à Deepgram ou à AssemblyAI et écrit les notes avec des modèles dans le cloud ; nchova transcrit sur le Mac et y écrit les notes, sauf si vous demandez à votre propre Claude Code de le faire.',
  short3: [
    ['Pas de bot, *ni l’un ni l’autre*', 'aucun des deux ne rejoint l’appel ; tous deux écoutent votre micro et le son de l’appel.'],
    ['*Où* c’est transcrit', 'Granola, dans le cloud ; nchova, sur votre Mac, hors ligne aussi.'],
    ['*Ce que* vous payez', 'Granola est gratuit pour les notes des 30 derniers jours ; Business coûte 14 $ par mois, tous les mois. nchova est gratuite sans rien de caché, ou 29,99 € une seule fois.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Où va *l’appel*',
      lead: 'La même réunion, transcrite deux fois. Avec Granola, l’audio part en continu vers un service de transcription pendant que les gens parlent ; avec nchova, il ne quitte jamais le Mac.',
      route: {
        meeting: true,
        title: sync,
        them: { tab: 'Granola', place: 'Deepgram ou AssemblyAI, puis OpenAI ou Anthropic', what: 'le son de l’appel, en direct ; puis la transcription, pour les notes', back: 'texte', sent: 'secondes de l’appel envoyées' },
        us: { tab: 'nchova', place: 'Transcrit sur ce Mac', sent: 'seconde de l’appel envoyée' },
        words: {
          ...routeWords,
          said: 'Julie : le texte de la page est prêt, il ne manque que l’animation',
          written: 'Julie : Le texte de la page est prêt, il ne manque que l’animation.',
          label: 'Une réunion transcrite avec Granola part vers des services dans le cloud et revient ; avec nchova, elle est transcrite sur le Mac et rien ne sort.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Côte à côte',
      them: 'Granola',
      rows: [
        ['Bot dans l’appel', 'Aucun', 'Aucun'],
        ['Où il transcrit', 'Dans le cloud : Deepgram, AssemblyAI', 'Sur votre Mac'],
        ['Qui écrit les notes', 'Des modèles dans le cloud, d’OpenAI et d’Anthropic entre autres', 'Le modèle d’Apple ou Qwen sur le Mac, ou votre propre Claude Code ou Codex'],
        ['Vos transcriptions', 'Conservées sur AWS aux États-Unis jusqu’à ce que vous les supprimiez ; suppression automatique en option', 'Sur votre Mac, et dans votre propre iCloud si vous activez la synchronisation'],
        ['Entraînement', 'Données anonymisées utilisées par défaut en Basic et en Business, avec possibilité de refuser', 'Rien ne nous parvient, donc rien ne peut servir à entraîner un modèle'],
        ['Démarrage', 'Il vous signale l’appel ; il démarre quand vous cliquez, ou quand vous ouvrez la note de la réunion', 'Repère l’appel et demande, ou démarre toute seule'],
        ['Qui parle', '« Me » et « Them » ; sur ordinateur, noms tirés des participants de l’app d’appel', 'Voix 1, Voix 2…, nommées parmi les invités grâce à leur voix (Pro)'],
        ['Dictée', 'Seulement pour poser une question à son Chat', 'Maintenez Fn, dans n’importe quelle app'],
        ['Sans internet', 'La transcription demande une connexion', 'Fonctionne de la même façon'],
        ['Offre gratuite', 'Réunions illimitées ; notes des 30 derniers jours visibles', 'Illimitée, avec les modèles d’Apple ; rien de caché'],
        ['Offre payante', 'Business : 14 $ par utilisateur et par mois, facturé au mois', 'Pro : 29,99 € une seule fois, jusqu’à 3 Mac'],
        ['Compte', 'Connexion Google ou Microsoft', 'Aucun'],
        ['Plateformes', 'Mac, Windows, iPhone, Android', 'Mac avec puce Apple et macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'Des notes *à la Granola*, sur votre Mac',
      lead: 'Notez quelques mots pendant l’appel ; à la fin, les notes se construisent autour. Ensuite, interrogez la réunion : qu’a-t-on décidé, qu’est-ce que je dois faire.',
      demo: { name: 'notes' },
    },
    {
      kind: 'bill',
      h: 'Trois ans, *de chaque côté*',
      lead: 'Granola Business à son prix américain, facturé au mois (Granola ne facture à l’année que l’offre Enterprise), à côté de nchova Pro.',
      bill: {
        head: 'GRANOLA BUSINESS',
        plans: [{ tab: 'Mensuel', sub: 'facturé au mois, 14 $', every: 1, amount: 14 }],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Sur trois ans, Granola Business revient à 504 $ ; nchova Pro reste à 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Des voix distinguées *à leur son*',
      lead: 'Granola sépare votre voix de celle des autres et, sur son app de bureau, prend les noms dans Zoom, Meet et Teams. Avec Pro, nchova distingue les autres voix à leur son, dans n’importe quel appel, et nomme celles qu’elle a déjà entendues, parmi les personnes invitées.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Quand Granola est le *meilleur choix*',
      p: [
        'Si votre équipe partage ses notes dans les espaces de Granola et les envoie vers Notion, HubSpot ou Attio, Granola est fait pour ça, et il tourne aussi sur Windows, iPhone et Android. nchova garde les réunions de chacun sur son propre Mac.',
        'Si vous voulez que les modèles cloud les plus puissants écrivent chaque note, sans rien configurer, Granola le fait d’emblée. Dans nchova, les meilleures notes viennent de votre propre Claude Code ou Codex, avec votre abonnement : la transcription part alors chez Anthropic ou OpenAI, et vous choisissez qui écrit dans **Réglages › Notes**.',
        'Si vous avez choisi Granola parce qu’il se passe de bot, nchova garde cet avantage, et se passe aussi du cloud.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *à voix haute*',
      items: [
        ['nchova fonctionne-t-elle avec Google Agenda et Outlook ?', 'Oui, via les calendriers que votre Mac connaît : ajoutez le compte à macOS pour son calendrier seulement. [Voici comment](@help/calendar/).'],
        ['Puis-je utiliser mon propre Claude pour les notes ?', 'Oui, avec Pro : nchova lance votre propre Claude Code ou Codex, connecté avec votre abonnement, et les notes prennent quelques secondes. Aucune clé ne passe par nchova.'],
        ['Démarre-t-elle toute seule ?', 'Elle repère l’appel dès que Zoom, Meet, Teams ou Slack prend le micro, et demande. Ou réglez **Quand un appel commence** sur **Transcrire automatiquement**.'],
        ['Puis-je interroger Claude ou ChatGPT sur mes réunions ?', 'Oui : le serveur MCP de nchova tourne sur votre Mac et se connecte d’un clic. Voir [vos réunions dans votre assistant](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Tarifs de Granola', 'https://www.granola.ai/pricing'],
    ['Sécurité', 'https://www.granola.ai/security'],
    ['Transcription', 'https://docs.granola.ai/help-center/taking-notes/transcription'],
    ['Entraînement des modèles', 'https://docs.granola.ai/help-center/consent-security-privacy/model-training'],
    ['Attribution des intervenants', 'https://docs.granola.ai/help-center/taking-notes/speaker-attribution'],
  ],
  checked,
};

const macwhisper: Guide = {
  id: 'macwhisper',
  page: 'alternatives/macwhisper/',
  group: 'compare',
  short: 'MacWhisper',
  metaTitle: 'Alternative à MacWhisper pour appels et dictée — nchova',
  description:
    'nchova face à MacWhisper : les deux transcrivent sur votre Mac et se paient une fois. MacWhisper part des fichiers ; nchova, de vos appels et de la dictée.',
  kicker: 'nchova vs MacWhisper',
  title: 'Une alternative à MacWhisper *faite pour les appels*.',
  lead: 'MacWhisper et nchova sont d’accord sur l’essentiel : la transcription sur votre Mac, pas de bot, pas d’abonnement. Ils sont faits pour des moments différents. MacWhisper brille avec les enregistrements et les fichiers que vous avez déjà ; nchova vit dans les appels que vous allez passer, et dans chaque champ de texte où vous dictez.',
  short3: [
    ['Sur le Mac, *tous les deux*', 'les deux transcrivent sur votre Mac et se paient une seule fois. Aucun n’envoie de bot.'],
    ['*Fichiers* ou *appels*', 'MacWhisper est pensé pour les fichiers, les lots et les liens YouTube ; nchova pour les appels, en direct, avec votre calendrier.'],
    ['29,99 € *ou* 64 €', 'nchova Pro coûte 29,99 € une seule fois ; MacWhisper Pro, 64 € une seule fois sur son site. La version gratuite de nchova transcrit aussi les réunions.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'L’appel commence. *nchova demande*.',
      lead: 'nchova repère l’appel, lui donne le nom de l’événement du calendrier, et écrit la transcription en direct dans un panneau sur votre écran. Quand vous raccrochez, les notes s’écrivent.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Côte à côte',
      them: 'MacWhisper',
      rows: [
        ['Fait pour', 'Fichiers audio et vidéo, traitement par lots, liens YouTube, sous-titres', 'Les appels en direct, et la dictée dans n’importe quelle app'],
        ['Où il transcrit', 'Sur votre Mac par défaut ; des services cloud avec vos propres clés, si vous le souhaitez', 'Sur votre Mac, toujours'],
        ['Réunions', 'Détecte l’appel et l’enregistre, avec une transcription en direct (Pro ; sa documentation qualifie la détection de bêta)', 'Repère l’appel et demande ; gratuit'],
        ['Calendrier', 'Non décrit dans sa documentation', 'Donne à la réunion le nom de l’événement et la liste des invités'],
        ['Qui parle', 'Intervenants distingués (Pro)', 'Voix 1, Voix 2…, nommées parmi les invités grâce à leur voix (Pro)'],
        ['Notes et chat', 'Avec vos propres clés d’API, ou un modèle local via Ollama ou LM Studio (Pro)', 'Écrites à la fin de l’appel : le modèle d’Apple, gratuit ; Qwen sur le Mac, ou votre propre Claude Code ou Codex (Pro)'],
        ['L’audio', 'L’enregistrement est conservé avec la transcription', 'Jamais conservé : seulement le texte'],
        ['Dictée', 'Dictée de base gratuite ; meilleure qualité et prompts IA en Pro', 'Maintenez Fn, dans n’importe quelle app ; Parakeet avec Pro'],
        ['Assistants IA (MCP)', 'Pas de serveur MCP dans sa documentation ; un outil en ligne de commande pour les scripts et les agents IA', 'Un serveur MCP local pour vos réunions, gratuit'],
        ['Langues', 'Une centaine, avec Whisper', '{nAll} : {nFree} gratuites, {nPro} européennes avec Pro ; jusqu’à trois à la fois, avec changement en pleine phrase'],
        ['Prix', 'Gratuit ; Pro 64 € une seule fois (65 € sur sa page de paiement Gumroad)', 'Gratuit ; Pro 29,99 € une seule fois, jusqu’à 3 Mac'],
        ['Plateformes', 'macOS 15 ou version ultérieure, puce Apple ou Intel ; une app séparée sur iPhone et iPad', 'macOS 26 ou version ultérieure, puce Apple'],
      ],
    },
    {
      kind: 'demo',
      h: 'Elle sait *qui* parle',
      lead: 'Les deux apps distinguent les voix. nchova y met aussi des noms, parmi les personnes invitées, grâce aux voix qu’elle a déjà entendues ; les empreintes vocales restent sur votre Mac.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'demo',
      h: 'Des notes *sans clé* à coller',
      lead: 'nchova écrit les notes avec le modèle d’Apple sur le Mac, ou avec Qwen, qu’elle télécharge et fait tourner pour vous, ou avec votre propre Claude Code ou Codex, connecté avec votre abonnement. Pas de clé d’API à acheter ni à coller.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Quand MacWhisper est le *meilleur choix*',
      p: [
        'Si votre travail, ce sont des enregistrements (interviews, podcasts, cours, un dossier de mémos vocaux), MacWhisper est l’outil qu’il vous faut : déposez les fichiers, récupérez transcriptions et sous-titres. nchova ne transcrit pas de fichiers ; elle transcrit ce que vous dites et les appels auxquels vous participez, en direct.',
        'Si vous êtes sur un Mac Intel ou sous macOS 15, MacWhisper y fonctionne ; nchova demande une puce Apple et macOS 26. Et si vous voulez réécouter l’enregistrement, MacWhisper garde l’audio ; nchova ne garde que les mots.',
        'Beaucoup voudront les deux : MacWhisper pour les fichiers, nchova pour les appels et la dictée.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *à voix haute*',
      items: [
        ['nchova peut-elle transcrire un fichier audio ?', 'Non. nchova transcrit en direct : votre dictée, et les appels et réunions qu’elle entend. Pour les fichiers que vous avez déjà, MacWhisper est fait pour ça.'],
        ['Les deux utilisent-ils Parakeet ?', 'Oui : les deux peuvent faire tourner Parakeet de NVIDIA sur le Mac avec Pro. nchova s’en sert pour la dictée comme pour les réunions, en {nPro} langues européennes.'],
        ['nchova a-t-elle besoin d’une clé d’API pour les notes ?', 'Non. Le modèle d’Apple et Qwen tournent sur le Mac ; Claude Code et Codex utilisent votre propre abonnement, connecté une fois. Aucune clé ne passe par nchova.'],
        ['Puis-je l’essayer d’abord ?', 'Trente jours avec tout inclus, sans carte et sans compte. Ensuite, elle reste gratuite avec les modèles d’Apple.'],
      ],
    },
  ],
  sources: [
    ['MacWhisper', 'https://www.macwhisper.com'],
    ['MacWhisper sur Gumroad', 'https://goodsnooze.gumroad.com/l/macwhisper'],
    ['Enregistrer des réunions', 'https://docs.macwhisper.com/article/30-record-meetings'],
    ['Reconnaissance des intervenants', 'https://docs.macwhisper.com/article/32-automatic-speaker-recognition-in-macwhisper'],
  ],
  checked,
};

/** Un bot de prise de notes, n’importe lequel, à côté de nchova : pour les pages sur une app d’appel. */
const anyBot = (call: string): Bot => ({
  them: {
    tab: 'Un bot de prise de notes',
    name: 'Notetaker',
    joined: 'Notetaker a rejoint la réunion',
    banner: '',
    caption: 'Un bot de prise de notes rejoint l’appel comme invité : tout le monde le voit, et l’enregistrement part dans le cloud de son éditeur.',
  },
  us: { tab: 'nchova', caption: 'Personne ne rejoint l’appel. nchova écoute depuis votre Mac, et la transcription y reste.' },
  words: {
    switchLabel: 'Afficher',
    label: `Un appel ${call} où un bot de prise de notes entre comme invité, à côté du même appel avec nchova, où personne n’entre.`,
    call: sync,
    tiles: ['Julie', 'Marc', 'Sophie', 'Thomas', 'Alex'],
    live: 'Transcription',
    bubbles: [
      ['Julie', 'Le texte de la page est prêt.', 'Voix 1'],
      ['', 'Parfait. Et les animations ?'],
      ['Marc', 'Pour jeudi, non, attends, vendredi.', 'Voix 2'],
    ],
  },
});

/** La démo de la réunion avec une autre app d’appel dans la question, telle que l’app l’écrit avec un événement d’agenda
 *  (« Call in %@. Transcribe it? » dans fr.lproj). */
const callIn = (service: string) => ({ ...base.meeting.demo, promptTitle: sync, promptSub: `Appel sur ${service}. Le transcrire ?` });

/** Ce que disent les notes de la démo de la réunion sur les pages consacrées à une app d’appel. */
const callNotes = (service: string): [string, string][] => [
  ['Elle repère l’appel', `dès que ${service} garde le micro quelques secondes, nchova demande s’il faut transcrire.`],
  ['Avec votre calendrier', 'la réunion prend le nom de l’événement et la liste de ses invités, et la question arrive deux minutes avant.'],
  ['Vous et les autres', `votre micro, c’est « Moi » ; ce que diffuse votre Mac, ${service} compris, ce sont tous les autres.`],
  ['Sur votre écran seulement', 'la pastille et la transcription sont sur votre Mac, pas dans l’appel : personne ne les voit, sauf si vous partagez tout votre écran.'],
];

const zoom: Guide = {
  id: 'zoom',
  page: 'transcribe/zoom/',
  group: 'use',
  short: 'Transcrire Zoom',
  metaTitle: 'Transcrire vos réunions Zoom sur Mac, sans bot — nchova',
  description:
    'Transcrivez tout appel Zoom sur votre Mac, hôte ou pas, offre gratuite ou payante : aucun bot, l’audio ne quitte pas le Mac, et les notes arrivent à la fin.',
  kicker: 'transcrire Zoom',
  title: 'Transcrivez vos appels Zoom, *hôte ou pas*.',
  lead: 'La transcription de Zoom demande une offre payante, et c’est l’hôte qui décide qui y a droit. nchova transcrit n’importe quel appel Zoom depuis votre Mac : votre micro, c’est vous ; le son de l’appel, ce sont tous les autres. Aucun bot ne rejoint l’appel, l’audio ne quitte jamais votre Mac, et les notes s’écrivent quand vous raccrochez.',
  short3: [
    ['*N’importe quel* appel Zoom', 'le vôtre ou celui de quelqu’un d’autre, en offre gratuite ou payante : si vous l’entendez, nchova peut le transcrire.'],
    ['*Aucun* bot', 'personne ne rejoint la réunion. nchova écoute depuis votre Mac, dans l’app Zoom ou dans le navigateur.'],
    ['Gratuit', 'les transcriptions et les notes avec les modèles d’Apple sont gratuites ; Pro ajoute les voix distinguées, Parakeet et de meilleures notes.'],
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
      h: 'Ce que Zoom vous donne, *et qui décide*',
      p: [
        'Depuis mai 2026, Zoom ne permet plus d’enregistrer les sous-titres en direct une fois la réunion terminée. Sa transcription de réunion demande un compte Pro, Business ou Enterprise, reste désactivée tant qu’un hôte ou un administrateur ne l’a pas activée, et un participant peut seulement demander à l’hôte de la lancer. La transcription d’un enregistrement dans le cloud demande une offre payante avec l’enregistrement cloud activé. Le résumé d’AI Companion est lancé par l’hôte ou un co-hôte, et tout le monde voit son icône s’allumer.',
        'Donc, quand vous n’êtes pas l’hôte, ou que l’hôte est sur l’offre gratuite de Zoom, vous repartez en général sans aucune transcription. nchova ne demande rien à Zoom : elle transcrit ce que diffuse votre Mac et ce qu’entend votre micro.',
        'Les outils de Zoom font une chose que nchova ne fait pas : une transcription qui appartient à la réunion et peut être partagée avec tous ses participants. Celle de nchova vous appartient.',
      ],
    },
    {
      kind: 'bot',
      h: 'Un bot dans l’appel, *ou personne*',
      lead: 'Les bots de prise de notes obtiennent une transcription en rejoignant la réunion comme invités. nchova n’a pas besoin d’une place dans l’appel.',
      bot: anyBot('Zoom'),
    },
    {
      kind: 'steps',
      h: 'Transcrivez votre prochain appel *Zoom*',
      steps: [
        '[Téléchargez nchova](/download?from=zoom-steps) et ouvrez-la. Dans la configuration, sous **Pour les réunions**, connectez **Calendrier** pour nommer les réunions d’après leurs événements, et cliquez sur **Demander maintenant** à côté de **Son du système** : c’est ainsi que nchova entend les autres.',
        'Rejoignez votre appel Zoom comme d’habitude, dans l’app Zoom ou dans le navigateur.',
        'Quand nchova demande, cliquez sur **Transcrire**. Cliquez sur la pastille en bas de l’écran pour suivre la transcription, ou pour prendre vos propres notes.',
        'Raccrochez. nchova remarque que l’appel est terminé, écrit les notes et garde la réunion dans **Réunions** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Quand vous *raccrochez*',
      lead: 'Les notes s’écrivent autour de ce que vous avez noté. Ensuite, interrogez la réunion : ce qui a été décidé, ce que vous avez à faire, ou le message de suivi à envoyer.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Questions sur *Zoom*',
      items: [
        ['Zoom prévient-il les autres que nchova transcrit ?', 'Non : nchova n’est pas dans la réunion, Zoom n’a donc rien à afficher. Là où la loi l’exige, prévenez les participants que vous transcrivez.'],
        ['Faut-il être l’hôte, ou avoir une offre Zoom payante ?', 'Non. nchova transcrit tout appel auquel vous participez, quelle que soit l’offre et quel que soit l’hôte.'],
        ['Ça marche avec Zoom dans le navigateur ?', 'Oui. nchova distingue une réunion Zoom des autres onglets qui utilisent le micro grâce au titre de la fenêtre, et demande.'],
        ['Avec ou sans casque ?', 'Les deux. Sans casque, nchova retire d’elle-même de votre micro l’écho des haut-parleurs, sans toucher à ce que Zoom envoie.'],
        ['Peut-elle démarrer toute seule ?', 'Oui : dans **Réglages › Réunions**, réglez **Quand un appel commence** sur **Transcrire automatiquement**.'],
        ['Puis-je interroger Claude sur mes appels Zoom ?', 'Oui : le serveur MCP de nchova tourne sur votre Mac et se connecte d’un clic. Voir [vos réunions dans votre assistant](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Fin de l’enregistrement des sous-titres', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085668'],
    ['Transcriptions de réunion', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085675'],
    ['Transcriptions des enregistrements cloud', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927'],
    ['Résumé de réunion d’AI Companion', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013'],
    ['Avertissement d’AI Companion', 'https://library.zoom.com/ai-whitepaper/user-transparency-and-notice'],
  ],
  checked,
};

const meet: Guide = {
  id: 'google-meet',
  page: 'transcribe/google-meet/',
  group: 'use',
  short: 'Transcrire Google Meet',
  metaTitle: 'Transcrire Google Meet sur Mac, sans bot — nchova',
  description:
    'Transcrivez vos appels Google Meet sur votre Mac, avec un compte Gmail gratuit et même en invité : pas de bot, pas d’extension, l’audio reste sur le Mac.',
  kicker: 'transcrire Google Meet',
  title: 'Transcrivez Google Meet, *même en invité*.',
  lead: 'Les transcriptions de Google Meet et les notes de Gemini sont réservées aux offres payantes, et seules les personnes de l’organisation de l’hôte peuvent les lancer. nchova transcrit n’importe quel appel Meet depuis votre Mac, dans Chrome, Safari, Arc ou le navigateur de votre choix : pas de bot, pas d’extension, et l’audio ne quitte jamais votre Mac.',
  short3: [
    ['*N’importe quel* Meet', 'Gmail gratuit ou Workspace, hôte ou invité : si vous entendez l’appel, nchova le transcrit.'],
    ['*Aucune* extension', 'nchova reconnaît un appel Meet au titre de la fenêtre du navigateur, et demande.'],
    ['*{nAll}* langues', '{nFree} gratuites avec le modèle d’Apple, {nPro} européennes avec Pro ; un appel qui passe de l’une à l’autre de vos langues est transcrit dans les deux.'],
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
      h: 'Ce que Meet vous donne, *et à qui*',
      p: [
        'Les transcriptions de Meet demandent une édition Workspace à partir de Business Standard, ou Workspace Individual, et couvrent huit langues. Elles sont lancées par l’hôte, ou par une personne de l’organisation de l’hôte, et enregistrées dans le Drive de l’organisateur. « Prendre des notes pour moi », la fonction de Gemini, demande côté organisateur une offre Workspace ou Google AI éligible, et une seule langue par réunion. Tout le monde dans l’appel voit une icône pendant que l’une ou l’autre fonctionne.',
        'Un compte Gmail gratuit n’a droit ni à l’une ni à l’autre, et un invité d’une autre entreprise ne peut pas les lancer. nchova n’a pas besoin de la permission de Meet : elle transcrit ce que diffuse votre Mac et ce qu’entend votre micro, en {nFree} langues gratuitement, ou en {nPro} langues européennes avec Pro.',
      ],
    },
    {
      kind: 'demo',
      h: 'Des voix distinguées, *et nommées*',
      lead: 'Avec Pro, nchova distingue les autres voix pendant qu’elles parlent, et nomme celles qu’elle a déjà entendues, parmi les personnes invitées.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'steps',
      h: 'Transcrivez votre prochain *Meet*',
      steps: [
        '[Téléchargez nchova](/download?from=google-meet-steps) et ouvrez-la. Dans la configuration, autorisez **Accessibilité** (nchova s’en sert aussi pour lire les titres des fenêtres du navigateur), connectez **Calendrier** et cliquez sur **Demander maintenant** à côté de **Son du système**.',
        'Rejoignez le Meet dans votre navigateur, comme d’habitude.',
        'nchova voit la fenêtre intitulée « Meet – … » qui utilise le micro, et demande : cliquez sur **Transcrire**.',
        'Raccrochez. Les notes s’écrivent, et la réunion vous attend dans **Réunions** (Fn+M).',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions sur *Meet*',
      items: [
        ['Quels navigateurs ?', 'Chrome, Safari, Arc, Dia, Edge, Firefox, Brave, Vivaldi, Opera et Zen.'],
        ['Faut-il une extension Chrome ?', 'Non. nchova distingue un appel des autres onglets grâce au titre de la fenêtre, via l’autorisation d’accessibilité qu’elle a déjà : pas d’extension, pas d’URL lue, pas de réseau.'],
        ['nchova va-t-elle s’afficher quand j’utilise la voix dans ChatGPT ou Google Docs ?', 'Pas tant que ChatGPT, Claude, Gemini, Google Docs, YouTube ou un site du même genre est l’onglet au premier plan. nchova demande quand une fenêtre indique qu’il s’agit d’un appel, et aussi quand rien n’indique ni l’un ni l’autre ; chaque « Plus tard » la fait ensuite attendre plus longtemps avant de redemander.'],
        ['Google prévient-il les autres ?', 'Non : nchova n’est pas dans la réunion. Là où la loi l’exige, prévenez les participants que vous transcrivez.'],
        ['Ça marche avec un compte Gmail gratuit ?', 'Oui. nchova ne dépend pas de votre offre Google, ni de celle de l’hôte.'],
      ],
    },
  ],
  sources: [
    ['Transcriptions Meet', 'https://support.google.com/meet/answer/12849897?hl=en'],
    ['Prendre des notes pour moi', 'https://support.google.com/meet/answer/14754931?hl=en'],
    ['Fonctionnalités de Meet par offre', 'https://support.google.com/meet/answer/10459644?hl=en'],
  ],
  checked,
};

const teams: Guide = {
  id: 'teams',
  page: 'transcribe/teams/',
  group: 'use',
  short: 'Transcrire Microsoft Teams',
  metaTitle: 'Transcrire vos réunions Microsoft Teams sur Mac — nchova',
  description:
    'Transcrivez vos réunions Microsoft Teams sur votre Mac, en invité ou sans Copilot : aucun bot, l’audio reste sur le Mac, et les notes arrivent à la fin.',
  kicker: 'transcrire Teams',
  title: 'Transcrivez vos appels Teams, *quel que soit l’organisateur*.',
  lead: 'Dans Teams, la transcription dépend de l’entreprise de l’organisateur et de ses stratégies ; un invité extérieur ne peut pas la lancer, et le récapitulatif IA demande une licence Teams Premium ou Copilot. nchova transcrit n’importe quel appel Teams depuis votre Mac, dans l’app ou dans le navigateur : pas de bot, pas de licence, et l’audio ne quitte jamais votre Mac.',
  short3: [
    ['*N’importe quel* appel Teams', 'pro ou perso, organisateur ou invité : si vous l’entendez, nchova le transcrit.'],
    ['*Aucune* licence', 'ni Premium, ni Copilot : des notes écrites sur le Mac, gratuites avec le modèle d’Apple.'],
    ['*À vous*', 'la transcription est sur votre Mac, pas dans le OneDrive de l’organisateur.'],
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
      h: 'Ce que Teams vous donne, *et qui décide*',
      p: [
        'Dans Teams, la transcription relève d’une stratégie de l’entreprise de l’organisateur. Quand elle est activée, l’organisateur et les personnes de la même organisation peuvent la lancer ; les invités d’autres entreprises et les participants anonymes ne le peuvent pas. Tout le monde voit que la réunion est transcrite, et le fichier part dans le OneDrive de l’organisateur, où les collègues peuvent le lire mais, par défaut, pas le télécharger. Le récapitulatif intelligent, avec notes et tâches générées par IA, demande une licence Teams Premium ou Microsoft 365 Copilot. Teams personnel propose des sous-titres en direct, visibles par vous seul.',
        'nchova est en dehors de tout cela : elle transcrit ce que diffuse votre Mac et ce qu’entend votre micro, et le garde sur votre Mac.',
        'Avant de transcrire un appel professionnel, vérifiez ce que votre entreprise autorise, et prévenez les participants là où la loi l’exige.',
      ],
    },
    {
      kind: 'bot',
      h: 'Un bot dans l’appel, *ou personne*',
      lead: 'Beaucoup d’entreprises tiennent les bots de prise de notes à l’écart de leurs réunions. nchova ne demande jamais à entrer.',
      bot: anyBot('Teams'),
    },
    {
      kind: 'steps',
      h: 'Transcrivez votre prochain appel *Teams*',
      steps: [
        '[Téléchargez nchova](/download?from=teams-steps) et ouvrez-la. Dans la configuration, connectez **Calendrier** et cliquez sur **Demander maintenant** à côté de **Son du système**.',
        'Si votre calendrier Teams est un compte Microsoft 365 professionnel, ajoutez-le à votre Mac pour son calendrier seulement : [voici comment](@help/calendar/).',
        'Rejoignez l’appel Teams, dans l’app ou dans le navigateur. Quand nchova demande, cliquez sur **Transcrire**.',
        'Raccrochez. Les notes s’écrivent, avec les prochaines étapes, et la réunion vous attend dans **Réunions** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Le récapitulatif, *sans Copilot*',
      lead: 'Notes et prochaines étapes écrites à la fin de l’appel, par le modèle d’Apple sur le Mac, par Qwen, ou par votre propre Claude Code ou Codex. Ensuite, demandez à la réunion ce que vous avez à faire.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Questions sur *Teams*',
      items: [
        ['Teams prévient-il les autres que nchova transcrit ?', 'Non : nchova n’est pas dans la réunion, Teams n’a donc rien à afficher. Là où la loi, ou votre entreprise, l’exige, prévenez les participants.'],
        ['Ça marche avec Teams dans le navigateur ?', 'Oui : nchova reconnaît une réunion Teams au titre de la fenêtre du navigateur, et demande.'],
        ['Ça marche avec Teams personnel ?', 'Oui. nchova ne dépend pas de l’offre Teams, ni de la vôtre ni de celle de l’organisateur.'],
        ['Mon calendrier Outlook n’apparaît pas dans nchova. Pourquoi ?', 'nchova lit les calendriers que votre Mac connaît. Ajoutez votre compte professionnel à macOS pour son calendrier seulement : [voici comment](@help/calendar/).'],
        ['Peut-elle démarrer toute seule ?', 'Oui : dans **Réglages › Réunions**, réglez **Quand un appel commence** sur **Transcrire automatiquement**.'],
      ],
    },
  ],
  sources: [
    ['Transcription en direct dans Teams', 'https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings'],
    ['Stratégies de transcription', 'https://learn.microsoft.com/en-us/microsoftteams/meeting-transcription-captions'],
    ['Récapitulatif intelligent', 'https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings'],
    ['Sous-titres dans Teams personnel', 'https://support.microsoft.com/en-us/teams/free/meetings/live-captions-in-microsoft-teams-free'],
  ],
  checked,
};

// ---------- Tout ensemble ----------

const guides: Guides = {
  words: {
    compare: 'Comparatifs',
    use: 'Guides',
    inShort: 'En bref',
    sources: 'Sources vérifiées',
    home: 'nchova',
    cta: 'Essayez nchova gratuitement pendant 30 jours',
    ctaNote: 'sans carte, sans compte',
    meta: 'macOS 26 · Mac avec puce Apple',
    more: 'À lire ensuite',
    us: 'nchova',
    hubLink: 'Tous les comparatifs',
  },
  hub: {
    page: 'alternatives/',
    metaTitle: 'nchova face à Wispr Flow, Otter, Granola et les autres',
    description:
      'nchova comparée à Wispr Flow, Superwhisper, MacWhisper, Otter et Granola : où chaque app transcrit votre voix, si un bot rejoint l’appel, et combien elle coûte.',
    kicker: 'comparatifs',
    title: 'nchova *à côté* des autres.',
    lead: 'Les apps de dictée et de prise de notes en réunion, dans un seul tableau : ce que fait chacune, où elle transforme votre voix en texte, si un bot rejoint vos appels, et comment vous payez. Chaque nom ouvre sa propre page, avec les détails et leurs sources.',
    cols: ['App', 'Ce qu’elle fait', 'Où elle transcrit', 'Bot dans l’appel', 'Prix'],
    us: { does: 'Dictée, réunions, notes, MCP', where: 'Sur votre Mac', bot: 'Jamais', price: 'Gratuit ; Pro 29,99 € une seule fois' },
    rows: [
      { id: 'wispr-flow', does: 'Dictée ; réunions avec Notetaker', where: 'Dans son cloud', bot: 'Aucun', price: 'Gratuit ; Pro 15 $ par mois, ou 144 $ par an' },
      { id: 'superwhisper', does: 'Dictée, modes IA ; un mode réunion', where: 'Sur le Mac ou dans le cloud, selon le mode', bot: 'Aucun', price: 'Gratuit ; Pro 84,99 $ par an, ou 249,99 $ à vie' },
      { id: 'macwhisper', does: 'Fichiers ; réunions et dictée', where: 'Sur le Mac ; dans le cloud avec vos propres clés', bot: 'Aucun', price: 'Gratuit ; Pro 64 € une seule fois' },
      { id: 'otter', does: 'Notes de réunion', where: 'Dans son cloud', bot: 'Notetaker rejoint l’appel comme invité ; sans bot sur ordinateur', price: 'Gratuit ; Pro 16,99 $ par mois, ou 99,99 $ par an' },
      { id: 'granola', does: 'Notes de réunion', where: 'Dans le cloud', bot: 'Aucun', price: 'Gratuit ; Business 14 $ par mois' },
    ],
  },
  list: [wisprFlow, otter, granola, superwhisper, macwhisper, zoom, meet, teams, offline, multilingual, mcp],
};

export default guides;
