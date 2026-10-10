// The guides, in German. Types and markup in ./types.ts.
// nchova's own labels on screen are the app's German ones (de.lproj/Localizable.strings, and the meeting labels of
// MeetingExporter.swift); macOS's labels are written as macOS 26 shows them in German.

import base from '../de';
import type { Bot, Guide, Guides } from './types';

const dictation = base.dictation.demo;
const assistants = base.assistants.demo;
const settingsTabs = base.calendarPage.demo.app.tabs;
/** The meeting every demo shows, named as the home page names it. */
const sync = base.meeting.demo.promptTitle;

// ---------- Jobs done with nchova ----------

const offline: Guide = {
  id: 'offline',
  page: 'dictation/offline/',
  group: 'use',
  short: 'Offline diktieren',
  metaTitle: 'Offline diktieren auf dem Mac, in jeder App — nchova',
  description:
    'Offline diktieren in jeder Mac-App: nchova wandelt Sprache direkt auf dem Mac in Text um, mit Apples Spracherkennung oder Parakeet. Deine Stimme bleibt dort.',
  kicker: 'offline diktieren',
  title: 'Diktieren, auch wenn *das WLAN aus ist*.',
  lead: 'nchova macht aus deiner Stimme Text, direkt auf dem Mac. Deshalb schreibt es in jeder App, im Flugzeug, im Zug oder hinter einer Firmen-Firewall. Nichts wird hochgeladen, nichts wartet auf einen Server: Fn halten, sprechen, loslassen.',
  short3: [
    ['Ja, *komplett* offline', 'sind die Modelle einmal auf dem Mac, braucht das Diktieren überhaupt keine Verbindung. Kein Notfallmodus: der einzige Modus, den es gibt.'],
    ['In *jeder* App', 'der Text landet da, wo dein Cursor ist: in Mail, Slack, Notion, einem Terminal, einem Formular im Browser.'],
    ['Kostenlos', 'mit Apples Spracherkennung, in {nFree} Sprachen, dauerhaft. Parakeet, das Modell von NVIDIA, gehört zu Pro: {nPro} europäische Sprachen.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        offline: 'WLAN: Aus',
        data: {
          ...dictation,
          doc: 'Im Zug',
          scripts: [
            {
              spoken: 'der zug kommt um sieben an, ich ruf dich dann vom bahnhof aus an',
              marks: [],
              written: 'Der Zug kommt um sieben an, ich ruf dich dann vom Bahnhof aus an.',
            },
            {
              spoken: 'ich hab den fix gepusht und das jason fürs release angepasst',
              marks: [{ kind: 'fix', from: 'jason', to: 'JSON' }],
              written: 'Ich hab den Fix gepusht und das JSON fürs Release angepasst.',
            },
            {
              spoken: 'notizen für den vortrag: mit der demo anfangen, dann die zahlen, dann fragen',
              marks: [],
              written: 'Notizen für den Vortrag: mit der Demo anfangen, dann die Zahlen, dann Fragen.',
            },
          ],
        },
      },
      notes: [
        ['Keine Verbindung', 'das WLAN ist aus, und der Text kommt trotzdem, so schnell wie am Schreibtisch.'],
        ['Wo der Cursor ist', 'jede App, jedes Textfeld. Gibt es kein Textfeld, wartet der Text in der Zwischenablage: ⌘V.'],
        ['Halten, nicht klicken', 'halt Fn oder die rechte Wahltaste gedrückt, solange du sprichst. Loslassen, und der Text steht da.'],
        ['Deine Wörter', 'Namen und Abkürzungen so geschrieben, wie du willst, auch offline: Aus „jason“ wird JSON.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Was auf dem Mac läuft, und wofür es *einmal* Internet braucht',
      p: [
        'Alles, was nchova mit deiner Stimme macht, passiert auf deinem Mac: das Diktieren, die Transkription von Meetings, das Bereinigen von Selbstkorrekturen, die Notizen, wenn Apples Modell oder Qwen sie schreibt. Nichts davon ruft einen Server auf, also ist es egal, ob du online bist.',
        'Internet brauchst du nur ein paar Mal, und nie für deine Stimme: um ein Modell beim ersten Mal zu laden (macOS holt jede Sprache für Apples Spracherkennung; Parakeet hat rund 480 MB, einmalig), um Pro zu aktivieren und um nach Updates zu suchen. Danach: WLAN aus, und nicht mehr dran denken.',
        'Drei Dinge sind von Natur aus online, und nur, wenn du sie wählst: Notizen von deinem eigenen Claude Code oder Codex, für die das Transkript des Meetings an Anthropic oder OpenAI geht; ein Cloud-Assistent wie Claude oder ChatGPT, mit deinen Meetings verbunden, der das Gelesene an sein eigenes Modell schickt; und die Synchronisierung deiner Meetings zwischen deinen Macs über iCloud (Pro).',
      ],
    },
    {
      kind: 'points',
      h: 'Zwei Engines, *beide* auf dem Mac',
      lead: 'Wähl eine unter Einstellungen › Diktieren. Die gewählte transkribiert auch deine Meetings.',
      items: [
        ['Spracherkennung von Apple', 'in macOS eingebaut: Von uns musst du nichts laden, sie diktiert ab der ersten Minute, in {nFree} Sprachen. Kostenlos, dauerhaft.'],
        ['Parakeet', 'das Spracherkennungsmodell von NVIDIA, einmalig rund 480 MB, in {nPro} europäischen Sprachen, auch in solchen, die Apple fehlen, etwa {proOnly}. Während es lädt, diktiert Apple weiter.', 'pro'],
        ['Kein Zeitlimit', 'halt die Taste, solange du redest; nchova transkribiert alles, wenn du loslässt.'],
      ],
    },
    {
      kind: 'steps',
      h: 'Richte es ein, bevor das Netz weg ist',
      steps: [
        '[Lade nchova herunter](/download?from=offline-steps) und öffne es. Es fragt nach dem **Mikrofon** und nach **Bedienungshilfen** und bittet dich, **Beim Drücken der 🌐-Taste** auf **Keine Aktion** zu stellen, damit Fn zu nchova gehört und nicht zur Diktierfunktion von macOS.',
        'Wähl deine Sprachen, bis zu drei. Lass macOS sie laden, oder lade Parakeet, solange du noch online bist.',
        'Schalt das WLAN aus und probier es: **Fn** halten, sprechen, loslassen.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen, *offline*',
      items: [
        ['Funktioniert nchova im Flugzeug?', 'Ja. Diktieren und die Transkription von Meetings laufen auf dem Mac: Sind die Modelle geladen, braucht nchova überhaupt keine Verbindung.'],
        ['Ist das Diktieren offline ungenauer?', 'Es ist dasselbe Diktieren: nchova hat keinen Online-Modus. Das Modell, das im Flugzeug schreibt, ist das, das auch am Schreibtisch schreibt.'],
        ['Schickt es etwas, sobald ich wieder online bin?', 'Nie deine Stimme. Bist du wieder online, sucht nchova nach Updates und prüft ab und zu deine Pro-Lizenz: Dafür gehen der Lizenzschlüssel und der Name des Macs raus, sonst nichts. Alles Weitere hast du selbst eingeschaltet: Die iCloud-Synchronisierung schickt deine Meetings an deine anderen Macs, und Claude Code oder Codex bekommen, wenn sie deine Notizen schreiben, das Transkript jedes neuen Meetings.'],
        ['Gibt es ein Zeitlimit?', 'Nein. Halt die Taste, solange du redest; nchova transkribiert alles, wenn du loslässt.'],
        ['Und Meetings, offline?', 'Funktionieren genauso: Ein Meeting am Tisch, der Mac in der Mitte, wird ohne Netz transkribiert, und die Notizen entstehen auf dem Mac.'],
      ],
    },
  ],
};

const multilingual: Guide = {
  id: 'multilingual',
  page: 'dictation/multilingual/',
  group: 'use',
  short: 'Diktieren in mehreren Sprachen',
  metaTitle: 'Mehrsprachig diktieren auf dem Mac, mitten im Satz — nchova',
  description:
    'Diktiere auf Deutsch, Englisch oder Französisch und wechsle mitten im Satz: nchova erkennt die Sprache und tippt mit, direkt auf dem Mac. {nAll} Sprachen, offline.',
  kicker: 'mehrsprachig diktieren',
  title: 'Sprich *alle* deine Sprachen. nchova kommt mit.',
  lead: 'Wähl bis zu drei Sprachen und sprich einfach: nchova erkennt, welche du gerade sprichst, Satz für Satz und sogar mitten im Satz, und schreibt den Text dorthin, wo dein Cursor ist. Keine Tastatur umstellen, keine Einstellung ändern, nichts wird irgendwohin geschickt.',
  short3: [
    ['*{nAll}* Sprachen', '{nFree} kostenlos mit Apples Modell, {nPro} europäische mit Parakeet (Pro), jede nur einmal gezählt.'],
    ['*Drei* gleichzeitig', 'nchova hört auf alle, die du gewählt hast, und nimmt die, die du sprichst.'],
    ['*Mitten im Satz*', '„Das Meeting ist morgen um zehn, so please send the deck tonight“ kommt so heraus, wie du es gesagt hast.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        data: {
          ...dictation,
          doc: 'Nachrichten',
          scripts: [
            {
              spoken: 'das meeting ist morgen um zehn, so please send the deck tonight',
              marks: [
                { kind: 'lang', from: 'das meeting ist morgen um zehn,', to: 'DE' },
                { kind: 'lang', from: 'so please send the deck tonight', to: 'EN' },
              ],
              written: 'Das Meeting ist morgen um zehn, so please send the deck tonight.',
            },
            {
              spoken: 'can you send me the slides? ich brauche sie vor dem call',
              marks: [
                { kind: 'lang', from: 'can you send me the slides?', to: 'EN' },
                { kind: 'lang', from: 'ich brauche sie vor dem call', to: 'DE' },
              ],
              written: 'Can you send me the slides? Ich brauche sie vor dem Call.',
            },
            {
              spoken: 'on se voit à midi devant la gare, dann nehmen wir zusammen den zug',
              marks: [
                { kind: 'lang', from: 'on se voit à midi devant la gare,', to: 'FR' },
                { kind: 'lang', from: 'dann nehmen wir zusammen den zug', to: 'DE' },
              ],
              written: 'On se voit à midi devant la gare, dann nehmen wir zusammen den Zug.',
            },
          ],
        },
      },
      notes: [
        ['Automatisch', 'nchova hört auf alle deine Sprachen gleichzeitig und schreibt die, die du gesprochen hast.'],
        ['Oder fest', 'leg eine Sprache fest und wechsle sie in den Einstellungen, wenn du eine andere brauchst.'],
        ['Dein Vokabular', 'Namen und Abkürzungen so geschrieben, wie du willst: Aus „Gira“ wird Jira, und du kannst hinzufügen, wie die Engine sie hört.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Wie nchova deine Sprachen *auseinanderhält*',
      p: [
        'Mit Apples Engine lässt nchova für jede gewählte Sprache eine eigene Erkennung laufen, alle gleichzeitig, auf demselben Audio. Wenn du loslässt, wägt nchova ab: wie sicher sich jede Erkennung ihrer Wörter war und wie sehr ihr Text nach ihrer eigenen Sprache klingt. Das beste Ergebnis wird geschrieben. Wechselst du zwischendurch die Sprache, trifft nchova dieselbe Wahl Abschnitt für Abschnitt.',
        'Mit Parakeet (Pro) kennt ein einziges Modell {nPro} europäische Sprachen und schreibt, was es gehört hat; nchova liest das Ergebnis, um zu erkennen, welche deiner Sprachen es war.',
        'Je weniger Sprachen du behältst, desto sicherer die Wahl: Deshalb ist bei drei Schluss. Ein längeres Stück in der anderen Sprache, oder eines am Satzende, kommt richtig heraus; zwei Wörter Englisch zwischen zwei polnischen Satzteilen kommen vielleicht als Polnisch heraus. Namen und Begriffe, die du in jeder Sprache benutzt, gehören ins Vokabular.',
      ],
    },
    {
      kind: 'points',
      h: 'Die Sprachen',
      items: [
        ['Kostenlos, mit Apples Modell', '{free}.'],
        ['Mit Pro, Parakeet', '{pro}.', 'pro'],
        ['Die App selbst', 'Menüs und Einstellungen von nchova gibt es auf Englisch, Italienisch, Deutsch, Französisch und Spanisch, egal, in welchen Sprachen du diktierst.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Und Meetings in *zwei Sprachen*?',
      p: [
        'Funktionieren genauso: nchova erkennt jeden Satz in der Sprache, in der er gesprochen wurde, also wird ein Call, der zwischen Deutsch und Englisch wechselt, in beiden transkribiert. Ein kurzer Einschub in einer anderen Sprache wird so erkannt, als wäre er in der Hauptsprache des Meetings.',
        'Die Notizen werden in der Sprache des Meetings geschrieben, und du kannst in einer anderen danach fragen: Auf Englisch, Italienisch, Französisch, Spanisch, Deutsch, Portugiesisch, Niederländisch, Japanisch, Koreanisch oder Chinesisch bekommt „Was haben wir entschieden?“ die Antwort in der Sprache der Frage.',
      ],
    },
    {
      kind: 'steps',
      h: 'Deine Sprachen einstellen',
      steps: [
        'Öffne in nchova **Einstellungen › Diktieren** und klick unter **Erkennung** auf **Sprache hinzufügen …**. Wähl bis zu drei.',
        'Lass **Sprache** auf **Automatisch**: nchova hört auf alle gleichzeitig.',
        'Halt **Fn** gedrückt und sprich, wie du eben sprichst.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen in *jeder* Sprache',
      items: [
        ['Kann ich zwei Sprachen im selben Satz mischen?', 'Ja, wenn jeder Teil mehr als ein paar Wörter hat: nchova entscheidet Abschnitt für Abschnitt. Ein einzelnes fremdes Wort mitten im Satz bringst du besser dem Vokabular bei.'],
        ['Welche Sprachen sind kostenlos?', '{free}, mit Apples Modell. Pro bringt Parakeet und die Sprachen, die nur Parakeet kennt, etwa {proOnly}.'],
        ['Warum höchstens drei?', 'Mit Apples Engine ist jede Sprache bei „Automatisch“ eine Erkennung mehr, die bei jedem Diktat mithört; mit Parakeet eine Sprache mehr, die auseinandergehalten werden muss. Bei drei bleibt die Wahl sicher und der Mac schnell: Für eine andere Sprache entfernst du eine der drei.'],
        ['Funktioniert es offline in jeder Sprache?', 'Ja: Beide Engines laufen auf dem Mac. Beim ersten Mal lädt macOS eine Sprache für Apples Engine, oder nchova lädt Parakeet einmalig herunter.'],
      ],
    },
  ],
};

const mcp: Guide = {
  id: 'mcp',
  page: 'mcp/',
  group: 'use',
  short: 'Meetings in Claude und ChatGPT (MCP)',
  metaTitle: 'Meeting-Transkripte in Claude und ChatGPT, per MCP — nchova',
  description:
    'nchova bringt einen lokalen MCP-Server mit: Claude, ChatGPT, Cursor und andere Assistenten durchsuchen deine Meeting-Transkripte auf dem Mac. Kostenlos.',
  kicker: 'MCP-Server',
  title: 'Frag deinen Assistenten *nach deinen Meetings*.',
  lead: 'nchova transkribiert deine Calls auf dem Mac und gibt sie über einen lokalen MCP-Server an deinen KI-Assistenten weiter. Claude, ChatGPT, Cursor und die anderen durchsuchen, was gesagt wurde, fassen deine Woche zusammen, sagen dir, wer was zu erledigen hat, und speichern Notizen zurück. Dazwischen steht kein Server von uns: Wir haben keine.',
  short3: [
    ['*Ein* Klick', 'Einstellungen › Assistenten › Verbinden: nchova trägt sich in die Konfiguration deines Assistenten ein und sichert jede Datei, die es ändert.'],
    ['Meetings, *nie* Diktate', 'der Assistent liest Transkripte und Notizen; was du diktierst, bleibt außer Reichweite.'],
    ['Kostenlos', 'der MCP-Server gehört zur kostenlosen Version, für immer, mit oder ohne Pro.'],
  ],
  blocks: [
    {
      kind: 'connect',
      h: '*Einmal* verbinden',
      lead: 'nchova findet die Assistenten auf deinem Mac und richtet jeden mit einem Klick ein. Wo es nicht selbst schreiben kann, bekommst du eine Konfiguration zum Einfügen.',
      connect: {
        tabs: settingsTabs,
        tab: 'Assistenten',
        section: 'Deine Meetings in deinem Assistenten',
        rows: [
          { name: 'Claude', after: 'Beende Claude und öffne es erneut, um die Nchova-Tools zu sehen.', click: true },
          { name: 'Claude Code', after: 'Claude Code sieht die Nchova-Tools ab der nächsten Sitzung.' },
          { name: 'ChatGPT / Codex', after: 'Klicke in der ChatGPT-App unter Settings → MCP servers auf „Restart“; Codex sieht die Tools ab der nächsten Sitzung.' },
          { name: 'Cursor', after: 'Cursor übernimmt es von selbst: Sieh unter Settings → MCP nach.', click: true },
        ],
        others: 'Weitere, die Nchova verbinden kann',
        button: 'Verbinden',
        again: 'Neu verbinden',
        connected: 'Verbunden',
        footer:
          'Damit kann der Assistent über einen lokalen MCP-Server deine Meeting-Transkripte auflisten, durchsuchen und lesen, ein laufendes Meeting verfolgen und Zusammenfassungen in Nchova speichern. Geteilt werden nur Meetings, nie deine Diktate, und nichts läuft über Server von Nchova: Es gibt keine.',
        label: 'Einstellungen › Assistenten in nchova: Neben Claude wird auf „Verbinden“ geklickt, dann neben Cursor, und bei beiden steht danach „Verbunden“.',
      },
    },
    {
      kind: 'demo',
      h: 'Dann *frag*',
      lead: 'Der Assistent wählt die Tools selbst: ein Rückblick auf die Woche, die Aufgaben, die Leute übernommen haben, alles über eine Person, die Worte, die jemand gesagt hat.',
      demo: {
        name: 'assistants',
        data: {
          ...assistants,
          q1: 'Was habe ich diese Woche versprochen?',
          calls1: [['digest', '{ "from": "2026-10-05" }', '6 Meetings · 9 Aufgaben']],
          a1: `Drei Dinge: den Testern antworten (*${sync}*, Dienstag), dem Kunden das überarbeitete Angebot schicken (Mittwoch) und die Präsentation für das Review am Donnerstag.`,
          cite: `${sync} · 1:06`,
          q2: 'Ich rufe Sarah in fünf Minuten an. Was hat sie übernommen?',
          calls2: [['find_person', '{ "name": "Sarah" }', '4 Meetings · 2 Aufgaben']],
          a2: 'Zwei Dinge: den Newsletter, den sie Montag um 10 verschicken wollte, und die Preisseite, die sie sich auf deine Bitte hin ansehen sollte.',
        },
      },
      notes: [
        ['Suchen', 'was jemand gesagt hat, Wort für Wort, über alle Meetings hinweg.'],
        ['Zusammenfassen', 'die Woche oder den Monat: Meetings, Leute, Themen und Aufgaben.'],
        ['Live', 'auch das laufende Meeting: „Was haben sie gerade entschieden?“'],
        ['Zurückspeichern', 'Notizen und Aufgaben, die der Assistent schreibt, erscheinen in nchova.'],
      ],
    },
    {
      kind: 'points',
      h: 'Die *zehn* Tools',
      lead: 'Was der MCP-Server von nchova anbietet. Der Assistent liest ihre Beschreibungen und wählt.',
      items: base.assistants.tools.list.map(([name, what]) => [name, `${what}.`]),
    },
    {
      kind: 'prose',
      h: 'Wie es funktioniert, und *was wohin geht*',
      p: [
        'Der MCP-Server ist ein kleines Programm in nchova. Dein Assistent startet ihn auf deinem Mac und spricht über eine Pipe (stdio) mit ihm: kein Netzwerk, kein Port, kein Token, das durchsickern könnte. Er liest dieselbe Datenbank, in die die App schreibt, und antwortet deshalb auch, wenn nchova geschlossen ist.',
        'Er teilt nur Meetings: Transkripte, Notizen, Aufgaben, Titel und die Namen der Stimmen. Deine Diktate sind nie dabei, und auch nicht das Audio, das nchova gar nicht aufbewahrt.',
        'Was danach passiert, liegt beim Assistenten. Claude, ChatGPT und die anderen Cloud-Assistenten schicken, was sie lesen, an ihre eigenen Modelle, so wie alles, was du in einen Chat einfügst. Ein lokales Modell, zum Beispiel in LM Studio, behält alles auf dem Mac.',
      ],
    },
    {
      kind: 'steps',
      h: 'Verbinde deinen Assistenten',
      steps: [
        '[Lade nchova herunter](/download?from=mcp-steps) und lass es ein, zwei Meetings transkribieren.',
        'Öffne **Einstellungen › Assistenten**. Die Assistenten auf deinem Mac stehen oben.',
        'Klick neben deinem auf **Verbinden**. nchova trägt sich in die Konfiguration des Assistenten ein: Es sichert eine Datei, bevor es sie ändert, oder führt bei Claude Code und Codex deren eigenen Befehl aus.',
        'Mach, was nchova dir als Nächstes sagt (bei Claude: beenden und neu öffnen), dann frag nach deinen Meetings.',
        'Für Perplexity, Raycast, Zed, Goose und jede andere App, die MCP spricht, legt **Konfiguration kopieren** in die Zwischenablage, was du einfügen musst.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen zu *MCP*',
      items: [
        ['Was ist MCP?', 'Das Model Context Protocol: ein offener Standard, mit dem KI-Assistenten Tools und Daten auf deinem Computer nutzen. nchova spricht ihn, also kann jeder Assistent, der ihn auch spricht, deine Meetings lesen.'],
        ['Welche Assistenten funktionieren?', 'Claude, Claude Code, ChatGPT und Codex, Cursor, VS Code, Windsurf, Gemini CLI und LM Studio verbinden sich mit einem Klick; Perplexity, Raycast, Zed und Goose mit einer Konfiguration zum Einfügen; dazu jede App, die einen lokalen MCP-Server (stdio) startet.'],
        ['Brauche ich Pro?', 'Nein. Der MCP-Server ist kostenlos, für immer.'],
        ['Kann der Assistent meine Meetings ändern oder löschen?', 'Er kann Notizen und Aufgaben speichern, die dann die bisherigen des Meetings ersetzen, auch Notizen, die du bearbeitet hast, und den Titel eines Meetings, seine Teilnehmenden oder die Namen seiner Stimmen korrigieren. Ein Meeting löschen oder sein Transkript anfassen kann er nicht, und einen Titel oder Stimmennamen, den du selbst gesetzt hast, überschreibt er nie.'],
        ['Funktioniert es während eines Meetings?', 'Ja: Der Assistent kann lesen, was bisher gesagt wurde, oder nur die letzten paar Minuten.'],
        ['Landen meine Meetings bei nchova?', 'Es gibt keinen Ort, an dem sie landen könnten: nchova hat keine Server. Der Assistent spricht mit nchova auf deinem Mac.'],
      ],
    },
  ],
};


// ---------- nchova next to the others ----------

/** The words every bill shares: the months, the receipt's lines. */
const billWords = {
  month: 'Monat',
  months: 'Monate',
  total: 'Summe',
  once: 'nchova Pro, einmalig',
  year: 'Jahr {n}, Updates',
  nothing: '0,00 €',
  switchLabel: 'Abrechnung',
};

const routeWords = { mac: 'Dein Mac', switchLabel: 'Ansicht' };

const wisprFlow: Guide = {
  id: 'wispr-flow',
  page: 'alternatives/wispr-flow/',
  group: 'compare',
  short: 'Wispr Flow',
  metaTitle: 'Wispr-Flow-Alternative, die auf dem Mac läuft — nchova',
  description:
    'nchova im Vergleich mit Wispr Flow: Diktieren direkt auf dem Mac, offline, ohne Konto und ohne Abo. Wohin deine Stimme geht und was es kostet, nebeneinander.',
  kicker: 'nchova vs. Wispr Flow',
  title: 'Eine Wispr-Flow-Alternative, die *auf deinem Mac bleibt*.',
  lead: 'Wispr Flow ist eine ausgefeilte Sprachtastatur, und sie funktioniert, indem sie das, was du sagst, in ihre Cloud schickt. nchova macht denselben Job (Taste halten, sprechen, der Text erscheint in jeder App), aber mit dem Spracherkennungsmodell auf deinem Mac: offline, ohne Konto, und einmal bezahlt, wenn überhaupt.',
  short3: [
    ['*Wo* es zuhört', 'Wispr Flow transkribiert in seiner Cloud, immer. nchova transkribiert auf deinem Mac, immer.'],
    ['*Was* es behält', 'Wispr Flow speichert Diktate und trainiert in Free und Pro standardmäßig damit, solange du es nicht ausschaltest. nchova behält sie nur auf deinem Mac: Es hat keine Server, an die es sie schicken könnte.'],
    ['*Was* du zahlst', 'Wispr Flow Pro kostet 15 $ im Monat oder 144 $ im Jahr. nchova ist kostenlos, oder 29,99 € einmalig für Pro.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Wohin deine Stimme *geht*',
      lead: 'Derselbe Satz, zweimal diktiert. Wispr Flow schickt ihn an seine Server, zusammen mit der App, in der du bist, und dem Text um deinen Cursor, und schreibt, was zurückkommt. nchova gibt ihn an ein Spracherkennungsmodell auf dem Mac.',
      route: {
        title: 'Notizen',
        them: { tab: 'Wispr Flow', place: 'Wisprs Cloud, in den USA', what: 'deine Stimme, der Name der App, der Text um deinen Cursor', back: 'Text', sent: 'Sekunden deiner Stimme gesendet' },
        us: { tab: 'nchova', place: 'Spracherkennung, auf diesem Mac', sent: 'Sekunden deiner Stimme gesendet' },
        words: {
          ...routeWords,
          said: 'verschieben wir den launch auf freitag um zehn',
          written: 'Verschieben wir den Launch auf Freitag um zehn.',
          label: 'Ein mit Wispr Flow diktierter Satz reist zu dessen Servern und zurück; mit nchova geht er an ein Modell auf dem Mac, und nichts geht nach draußen.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Im direkten Vergleich',
      them: 'Wispr Flow',
      rows: [
        ['Wo transkribiert wird', 'In Wisprs Cloud: „transcription always occurs on the cloud“', 'Auf deinem Mac'],
        ['Ohne Internet', 'Kein Diktat: „an internet connection is required for transcription“; das Audio wird für einen neuen Versuch aufbewahrt', 'Funktioniert genauso'],
        ['Mit deiner Stimme gesendet', 'Mit Context Awareness, standardmäßig an: die App, das Textfeld, Text auf dem Bildschirm', 'Nichts wird gesendet'],
        ['Deine Diktate', 'Speicherung in der Cloud und Modelltraining in Free und Pro standardmäßig an; beides lässt sich ausschalten', 'Nur auf deinem Mac: Wir haben keine Server'],
        ['Konto', 'Erforderlich', 'Keins'],
        ['Sprachen', 'Über 100, eine pro Diktat: „the dominant language wins“', '{nAll}, davon {nFree} kostenlos; bis zu drei gleichzeitig, Wechsel mitten im Satz'],
        ['Meetings', 'Notetaker: kein Bot; Sprecher aus der Einladung benannt, auch in Free; transkribiert und gespeichert in Wisprs Cloud', 'Kein Bot; auf deinem Mac transkribiert, Stimmen unterschieden (Pro)'],
        ['KI-Assistenten (MCP)', 'Gehosteter Server, für Meetings und Notizen', 'Lokaler Server, für Meetings; nie deine Diktate'],
        ['Kostenloser Plan', '2.000 Wörter pro Woche auf dem Desktop', 'Kein Wortlimit, mit Apples Modell'],
        ['Bezahlplan', 'Pro: 15 $ im Monat oder 144 $ im Jahr', 'Pro: 29,99 € einmalig, bis zu 3 Macs'],
        ['Läuft auf', 'Mac, Windows, iPhone, Android', 'Mac mit Apple Chip und macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Drei Jahre, *nebeneinander*',
      lead: 'Wispr Flow Pro zu den US-Preisen, jährlich oder monatlich abgerechnet, neben nchova Pro. Wähl eine Zahlweise und sieh zu, wie die Monate vergehen.',
      bill: {
        head: 'WISPR FLOW PRO',
        plans: [
          { tab: 'Jährlich', sub: 'jährlich abgerechnet, 144 $', every: 12, amount: 144 },
          { tab: 'Monatlich', sub: 'monatlich abgerechnet, 15 $', every: 1, amount: 15 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Über drei Jahre kostet Wispr Flow Pro 432 $ bei jährlicher Abrechnung oder 540 $ bei monatlicher; nchova Pro bleibt bei 29,99 €, einmal bezahlt.' },
      },
    },
    {
      kind: 'demo',
      h: 'Dieselbe Geste. *Probier’s aus*.',
      lead: 'Taste halten, sprechen, loslassen: so, wie du schon mit Wispr Flow diktierst. Halt die Taste unter dem Fenster gedrückt, und der nächste Satz gehört dir.',
      demo: { name: 'dictation' },
      notes: base.dictation.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Wann Wispr Flow *die bessere Wahl* ist',
      p: [
        'Wenn du nicht nur auf dem Mac diktierst, sondern auch unter Windows, auf dem iPhone oder unter Android, begleitet dich Wispr Flow überallhin. nchova ist eine Mac-App, für Macs mit Apple Chip und macOS 26 oder neuer.',
        'Wenn du in einer Sprache schreibst, die weder Apple noch Parakeet kennt, decken die über hundert Sprachen von Wispr Flow mehr ab. Und seine Befehle, die markierten Text per Stimme umschreiben, haben in nchova kein Gegenstück: nchova schreibt, was du gesagt hast, und fügt nie ein Wort hinzu.',
        'Wenn nichts davon auf dich zutrifft, ist der Tausch einfach: dieselbe Geste, ohne dass deine Stimme den Mac verlässt, ohne Konto, ohne Abo.',
      ],
    },
    {
      kind: 'steps',
      h: 'Von Wispr Flow umsteigen',
      steps: [
        'Beende Wispr Flow, damit nicht zwei Apps auf dieselbe Taste hören.',
        '[Lade nchova herunter](/download?from=wispr-flow-steps) und folge der Einrichtung: **Mikrofon**, **Bedienungshilfen** und **Beim Drücken der 🌐-Taste** auf **Keine Aktion**.',
        'Wähl deine Sprachen, bis zu drei, und trag die Namen und Abkürzungen, die du benutzt, unter **Einstellungen › Vokabular** ein.',
        'Halt **Fn** oder die rechte Wahltaste gedrückt und sprich.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen, *laut gestellt*',
      items: [
        ['Ist nchova so genau wie Wispr Flow?', 'Probier es mit deiner eigenen Stimme: Die Testphase bietet 30 Tage lang alles. nchova lässt Apples Spracherkennung oder NVIDIAs Parakeet auf deinem Mac laufen; Wispr Flow nutzt sein eigenes Modell in seiner Cloud.'],
        ['Brauche ich ein Konto?', 'Nein. nchova herunterladen, und es funktioniert. Pro ist ein Lizenzschlüssel, der per E-Mail kommt.'],
        ['Läuft nchova unter Windows oder auf dem iPhone?', 'Nein: Es ist für Macs mit Apple Chip und macOS 26 oder neuer gemacht.'],
        ['Funktioniert es auch in Meetings?', 'Ja, und ohne Bot: nchova bemerkt den Call, transkribiert ihn auf dem Mac, unterscheidet die Stimmen (Pro) und schreibt die Notizen, wenn du auflegst. Sieh dir an, [wie es einen Zoom-Call transkribiert](@transcribe/zoom/).'],
        ['Was passiert nach der Testphase?', 'nchova bleibt kostenlos mit Apples Modellen: Diktieren, Meetings, Notizen. Pro bringt Parakeet, unterscheidet und benennt die Stimmen, schreibt die besseren Notizen und synchronisiert über iCloud, für 29,99 € einmalig.'],
      ],
    },
  ],
  sources: [
    ['Preise von Wispr Flow', 'https://wisprflow.ai/pricing'],
    ['Datenkontrolle', 'https://wisprflow.ai/data-controls'],
    ['FAQ zu Sicherheit und Compliance', 'https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq'],
    ['Context Awareness', 'https://docs.wisprflow.ai/articles/4678293671-feature-context-awareness'],
    ['Mehrere Sprachen', 'https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages'],
    ['Was ist Flow', 'https://docs.wisprflow.ai/articles/2772472373-what-is-flow'],
    ['Genauigkeit und bekannte Grenzen', 'https://docs.wisprflow.ai/articles/4048537120-what-to-expect-from-flow-accuracy-and-known-limitations'],
    ['Notetaker', 'https://wisprflow.ai/notetaker'],
  ],
  checked: 'am 8. Oktober 2026',
};

const superwhisper: Guide = {
  id: 'superwhisper',
  page: 'alternatives/superwhisper/',
  group: 'compare',
  short: 'Superwhisper',
  metaTitle: 'Superwhisper-Alternative für Meetings und Diktat — nchova',
  description:
    'nchova im Vergleich mit Superwhisper: Beide diktieren auf dem Mac. nchova erkennt auch Calls, liest den Kalender und schreibt Notizen. Pro: 29,99 € einmalig.',
  kicker: 'nchova vs. Superwhisper',
  title: 'Eine Superwhisper-Alternative, *auch für deine Meetings*.',
  lead: 'Superwhisper und nchova bringen beide ein Spracherkennungsmodell auf deinen Mac, und beide schreiben dorthin, wo dein Cursor ist. Der Unterschied ist, was rund um einen Call passiert: nchova bemerkt ihn und bietet an, ihn zu transkribieren, liest deinen Kalender mit, hört auch im kostenlosen Plan beide Seiten und schreibt die Notizen, wenn du auflegst. Und Pro kostet 29,99 € einmalig.',
  short3: [
    ['Diktieren, *beide*', 'Superwhisper nutzt lokale Modelle oder Cloud-Modelle, je nach Modus; nchova läuft nur auf dem Mac.'],
    ['Meetings, *von selbst*', 'Superwhisper hat einen Meeting-Modus, den du startest; nchova bemerkt den Call, liest deinen Kalender und schreibt die Notizen von selbst. Mit Pro benennt es auch die Stimmen.'],
    ['*Einmalig*', 'Superwhisper Pro kostet 84,99 $ im Jahr oder 249,99 $ auf Lebenszeit. nchova Pro kostet 29,99 €, einmalig.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'Der Call beginnt. *nchova fragt*.',
      lead: 'Sobald Zoom, Meet, Teams oder Slack das Mikrofon übernimmt, bietet nchova an zu transkribieren; mit deinem Kalender bekommt das Meeting den Namen des Termins. Superwhispers Doku beschreibt einen Meeting-Modus, den du selbst startest.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Im direkten Vergleich',
      them: 'Superwhisper',
      rows: [
        ['Wo transkribiert wird', 'Auf dem Mac mit lokalen Modellen oder in der Cloud (das eigene S1 oder Modelle von Deepgram und ElevenLabs), je nach Modus', 'Auf deinem Mac, immer'],
        ['Kostenloser Plan', 'Lokale Whisper-Modelle, zwei Modi ohne KI-Verarbeitung', 'Diktieren, Meetings und Notizen mit Apples Modellen'],
        ['Meetings', 'Ein Meeting-Modus, den du startest; die andere Seite des Calls braucht Pro', 'Bemerkt den Call, fragt, kennt deinen Kalender'],
        ['Wer spricht', 'Sprechertrennung (Pro), nicht genutzt in den KI-Zusammenfassungen', 'Stimme 1, Stimme 2 …, am Klang unter den Eingeladenen benannt (Pro)'],
        ['Notizen', 'Aus einem KI-Modus, lokal oder in der Cloud', 'Geschrieben, wenn der Call endet, rund um deine eigenen Notizen'],
        ['KI-Assistenten (MCP)', 'Lokaler Server für deinen Diktatverlauf (macOS)', 'Lokaler Server für deine Meetings; nie deine Diktate'],
        ['Sprachen', 'Über 100, je nach Modell', '{nAll}, davon {nFree} kostenlos; bis zu drei gleichzeitig, Wechsel mitten im Satz'],
        ['Umschreiben', 'KI-Modi, die formatieren und umschreiben, was du gesagt hast', 'Schreibt, was du gesagt hast; die Bereinigung kann nur Wörter entfernen'],
        ['Bezahlplan', 'Pro: 8,49 $ im Monat, 84,99 $ im Jahr oder 249,99 $ auf Lebenszeit', 'Pro: 29,99 € einmalig, bis zu 3 Macs'],
        ['Läuft auf', 'Mac (auch Intel), Windows, iPhone, Android', 'Mac mit Apple Chip und macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Drei Jahre, *nebeneinander*',
      lead: 'Superwhisper Pro zu den US-Preisen, jährlich, monatlich oder auf Lebenszeit, neben nchova Pro.',
      bill: {
        head: 'SUPERWHISPER PRO',
        plans: [
          { tab: 'Jährlich', sub: 'jährlich abgerechnet, 84,99 $', every: 12, amount: 84.99 },
          { tab: 'Monatlich', sub: 'monatlich abgerechnet, 8,49 $', every: 1, amount: 8.49 },
          { tab: 'Auf Lebenszeit', sub: 'einmalig, 249,99 $', every: 1000, amount: 249.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Über drei Jahre kostet Superwhisper Pro 254,97 $ bei jährlicher Abrechnung, 305,64 $ bei monatlicher oder 249,99 $ auf Lebenszeit; nchova Pro bleibt bei 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'nchova weiß, *wer* spricht',
      lead: 'Mit Pro unterscheidet nchova die anderen Stimmen, während sie sprechen; wen es unter den Eingeladenen schon einmal gehört hat, nennt es beim Namen. Die Namen landen im Transkript, in den Notizen und in dem, was dein Assistent liest.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Wann Superwhisper *die bessere Wahl* ist',
      p: [
        'Wenn du unter Windows, auf dem iPhone, unter Android oder auf einem Intel-Mac diktierst, deckt Superwhisper das ab, mit einer Lizenz. nchova braucht einen Mac mit Apple Chip und macOS 26.',
        'Wenn du willst, dass deine Worte beim Diktieren umgeschrieben werden, im Ton einer E-Mail oder in der Form einer Notiz, erledigen das Superwhispers KI-Modi, und es transkribiert auch Audio- und Videodateien. nchova schreibt, was du gesagt hast, und transkribiert, was du live hörst.',
        'Wenn deine Tage aus Calls bestehen, erledigt nchova den Teil drumherum von selbst: Es bemerkt den Call, weiß, wer eingeladen war, und schreibt die Notizen, wenn du auflegst; mit Pro benennt es auch die Stimmen.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen, *laut gestellt*',
      items: [
        ['Nutzt nchova auch Parakeet?', 'Ja: Mit Pro läuft NVIDIAs Parakeet auf deinem Mac, in {nPro} europäischen Sprachen. Ohne Pro übernimmt Apples Spracherkennung, in {nFree} Sprachen.'],
        ['Funktioniert nchova offline?', 'Ja: Diktieren, Meetings und die auf dem Mac geschriebenen Notizen funktionieren ohne Verbindung. Internet braucht es, um die Modelle beim ersten Mal zu laden, um Pro zu aktivieren und für Updates. Mehr dazu: [offline diktieren](@dictation/offline/).'],
        ['Kann ich es testen, bevor ich zahle?', 'Dreißig Tage mit allem, ohne Karte und ohne Konto. Danach bleibt es kostenlos mit Apples Modellen.'],
        ['Gibt es eine Lizenz auf Lebenszeit?', 'Pro ist auf Lebenszeit: 29,99 € einmalig, für bis zu 3 Macs, mit allen Updates, solange nchova Updates bekommt.'],
      ],
    },
  ],
  sources: [
    ['Superwhisper-Pläne', 'https://superwhisper.com/docs/billing/plans'],
    ['Sprachmodelle', 'https://superwhisper.com/docs/models/voice'],
    ['Ein Modell wählen', 'https://superwhisper.com/docs/get-started/choose-your-model'],
    ['Eingebaute Modi', 'https://superwhisper.com/docs/modes/built-in'],
    ['Meetings mit Sprechertrennung', 'https://superwhisper.com/docs/modes/speaker-separated-meetings'],
    ['CLI und MCP-Server', 'https://superwhisper.com/docs/get-started/cli'],
    ['Einführung', 'https://superwhisper.com/docs/get-started/introduction'],
  ],
  checked: 'am 8. Oktober 2026',
};

const otter: Guide = {
  id: 'otter',
  page: 'alternatives/otter/',
  group: 'compare',
  short: 'Otter',
  metaTitle: 'Otter.ai-Alternative ohne Bot, auf dem Mac — nchova',
  description:
    'nchova im Vergleich mit Otter.ai: Meetings auf dem Mac transkribieren, ohne Bot im Call und ohne Audio-Upload. Notizen, Sprecher, Preise und Datenschutz.',
  kicker: 'nchova vs. Otter',
  title: 'Eine Otter-Alternative, die *nie in den Call kommt*.',
  lead: 'Otters Notetaker kommt als Gast in deine Zoom-, Meet- und Teams-Calls, und jede Aufnahme, mit oder ohne Bot, wird in Otters Cloud transkribiert und gespeichert. nchova transkribiert dieselben Calls von deinem Mac aus: Niemand kommt dazu, das Audio wird nie hochgeladen, und die Notizen entstehen, wenn du auflegst.',
  short3: [
    ['*Kein* Gast', 'Otters Notetaker kommt als Teilnehmer dazu, den alle sehen. nchova hört von deinem Mac aus zu, so wie du.'],
    ['*Kein* Upload', 'Otter behält das Audio und darf es de-identifiziert fürs Training nutzen. nchova behält kein Audio, und es gibt keinen Ort, an den es gehen könnte.'],
    ['*Keine* Minuten', 'Otter Basic hört bei 300 Minuten im Monat auf und zeigt nur die ersten 30 Minuten jedes Calls. nchova hat kein Limit, und Pro kostet 29,99 € einmalig.'],
  ],
  blocks: [
    {
      kind: 'bot',
      h: 'Ein Gast im Call, *oder keiner*',
      lead: 'Mit Otter kommt ein Notetaker in deinem Namen ins Meeting und kann auch von selbst über deinen Kalender beitreten. Mit nchova sind im Call die Leute, die eingeladen wurden, und sonst niemand.',
      bot: {
        them: {
          tab: 'Otter Notetaker',
          name: 'Alex’s Notetaker',
          joined: 'Alex’s Notetaker (Otter.ai) ist dem Meeting beigetreten',
          banner: '',
          caption: 'Der Notetaker kommt als Gast: Alle im Call sehen ihn, und die Aufnahme geht in Otters Cloud.',
        },
        us: { tab: 'nchova', caption: 'Niemand kommt dazu. nchova hört von deinem Mac aus zu, und das Transkript bleibt dort.' },
        words: {
          switchLabel: 'Ansicht',
          label: 'Ein Call, in den Otters Notetaker als Gast kommt, neben demselben Call mit nchova: Niemand kommt dazu, und das Transkript erscheint auf deinem eigenen Bildschirm.',
          call: sync,
          tiles: ['Julia', 'Markus', 'Sarah', 'Tobias', 'Alex'],
          live: 'Live-Transkript',
          bubbles: [
            ['Julia', 'Der Text für die Seite steht.', 'Stimme 1'],
            ['', 'Super. Und die Animationen?'],
            ['Markus', 'Bis Donnerstag, nein, Moment, Freitag.', 'Stimme 2'],
          ],
        },
      },
    },
    {
      kind: 'table',
      h: 'Im direkten Vergleich',
      them: 'Otter',
      rows: [
        ['Wie es den Call hört', 'Otter Notetaker kommt als Gast in Zoom, Meet und Teams; die Desktop-App kann auch ohne ihn aufnehmen', 'Von deinem Mac aus: dein Mikrofon und der Ton des Calls, kein Gast'],
        ['Wo transkribiert wird', 'In Otters Cloud, in den USA', 'Auf deinem Mac'],
        ['Das Audio', 'Wird mit dem Gespräch gespeichert, als MP3 exportierbar', 'Nie gespeichert: nur der Text'],
        ['Training', 'Die Datenschutzerklärung erlaubt Training mit de-identifiziertem Audio und Transkripten', 'Bei uns kommt nichts an, womit man trainieren könnte'],
        ['Wer spricht', 'Benannt über Stimmprofile, die Otter speichert, geteilt in einem Workspace', 'Mit Pro Stimme 1, Stimme 2 …, benannt über Stimmprofile auf deinem Mac; kostenlos „Ich“ und „Andere“'],
        ['Sprachen', '6, eine pro Gespräch (Französisch kann zu Englisch wechseln)', '{nAll}, davon {nFree} kostenlos; bis zu drei gleichzeitig, Satz für Satz'],
        ['Diktieren', 'Keins', 'Fn halten, in jeder App'],
        ['Ohne Internet', 'Nimmt auf und transkribiert nach dem Hochladen', 'Transkribiert wie immer'],
        ['KI-Assistenten (MCP)', 'Ein Server in Otters Cloud', 'Ein lokaler Server, auf deinem Mac'],
        ['Kostenloser Plan', '300 Minuten im Monat; die ersten 30 Minuten jedes Gesprächs; die letzten 25 Gespräche', 'Kein Limit, mit Apples Modellen'],
        ['Bezahlplan', 'Pro: 16,99 $ im Monat oder 8,33 $ im Monat bei jährlicher Abrechnung', 'Pro: 29,99 € einmalig, bis zu 3 Macs'],
        ['Läuft auf', 'Web, Mac, Windows, iPhone, Android', 'Mac mit Apple Chip und macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'Das Transkript, *live*, auf deinem Bildschirm',
      lead: 'Der Call taucht auf, nchova fragt einmal, und das Transkript schreibt sich in einer Karte, die nur du siehst: Dein Mikrofon ist „Ich“, der Call sind alle anderen.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'bill',
      h: 'Drei Jahre, *nebeneinander*',
      lead: 'Otter Pro zu den US-Preisen, jährlich oder monatlich abgerechnet, neben nchova Pro.',
      bill: {
        head: 'OTTER PRO',
        plans: [
          { tab: 'Jährlich', sub: 'jährlich abgerechnet, 99,99 $', every: 12, amount: 99.99 },
          { tab: 'Monatlich', sub: 'monatlich abgerechnet, 16,99 $', every: 1, amount: 16.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Über drei Jahre kostet Otter Pro 299,97 $ bei jährlicher Abrechnung oder 611,64 $ bei monatlicher; nchova Pro bleibt bei 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Notizen, *wenn der Call endet*',
      lead: 'Geschrieben rund um das, was du notiert hast, von dem Modell, das du wählst: Apples Modell oder Qwen auf dem Mac, oder dein eigenes Claude Code oder Codex. Dann frag das Meeting, was entschieden wurde.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Wann Otter *die bessere Wahl* ist',
      p: [
        'Wenn dein Team gemeinsam in Otter arbeitet, Gespräche in Channels teilt und an Salesforce oder HubSpot schickt, ist Otter dafür gebaut. nchova behält die Meetings jeder Person auf ihrem eigenen Mac, und in ihrer eigenen iCloud, wenn sie das möchte.',
        'Wenn du auf dem Smartphone, in einem Browser auf irgendeinem Computer oder unter Windows aufnehmen musst: Otter ist überall. nchova ist eine Mac-App.',
        'Wenn du die Aufnahme noch einmal anhören willst: Otter behält das Audio; nchova behält es nie, nur die Worte.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen, *laut gestellt*',
      items: [
        ['Merkt jemand im Call, dass nchova transkribiert?', 'Im Call erscheint nichts, weil nchova nicht drin ist. Wo das Gesetz es verlangt, sag den Leuten, mit denen du sprichst, dass du transkribierst.'],
        ['Kann nchova meine Otter-Gespräche importieren?', 'Nein. nchova beginnt mit deinem nächsten Meeting; deine Otter-Exporte gehören weiter dir.'],
        ['Funktioniert es mit Zoom, Meet und Teams?', 'Mit allen, und mit Slack, FaceTime, Webex und Calls im Browser: nchova bemerkt, wenn eine dieser Apps das Mikrofon übernimmt, und jeden anderen Call startest du über die Menüleiste. Siehe [Zoom](@transcribe/zoom/), [Google Meet](@transcribe/google-meet/) und [Teams](@transcribe/teams/).'],
        ['Kann ich Claude oder ChatGPT nach meinen Meetings fragen?', 'Ja: Der MCP-Server von nchova läuft auf deinem Mac und verbindet sich mit einem Klick. Siehe [Meetings in deinem Assistenten](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Preise von Otter', 'https://otter.ai/pricing'],
    ['Otter Notetaker', 'https://help.otter.ai/hc/en-us/articles/4425393298327-Otter-Notetaker-Overview'],
    ['Otter-Desktop-App', 'https://help.otter.ai/hc/en-us/articles/35973988280215-Otter-Desktop-App-Mac-Windows'],
    ['Datenschutzerklärung', 'https://otter.ai/privacy-policy'],
    ['Sprechererkennung', 'https://help.otter.ai/hc/en-us/articles/21665587209367-Speaker-Identification-Overview'],
    ['Unterstützte Sprachen', 'https://help.otter.ai/hc/en-us/articles/360047247414-Supported-languages'],
  ],
  checked: 'am 8. Oktober 2026',
};

const granola: Guide = {
  id: 'granola',
  page: 'alternatives/granola/',
  group: 'compare',
  short: 'Granola',
  metaTitle: 'Granola-Alternative, die auf dem Mac transkribiert — nchova',
  description:
    'nchova im Vergleich mit Granola: Beide kommen ohne Bot im Call aus, aber nchova transkribiert auf dem Mac statt in der Cloud und schreibt dort die Notizen.',
  kicker: 'nchova vs. Granola',
  title: 'Eine Granola-Alternative, die *den Call auf deinem Mac lässt*.',
  lead: 'Granola und nchova halten sich beide aus dem Call heraus: kein Bot, nur dein Mac, der zuhört. Der Unterschied ist, wohin es danach geht. Granola streamt den Call zu Deepgram oder AssemblyAI und schreibt die Notizen mit Cloud-Modellen; nchova transkribiert auf dem Mac und schreibt die Notizen dort, außer du lässt sie von deinem eigenen Claude Code schreiben.',
  short3: [
    ['Kein Bot, *bei beiden*', 'keins von beiden kommt in den Call; beide hören dein Mikrofon und den Ton des Calls.'],
    ['*Wo* transkribiert wird', 'bei Granola in der Cloud; bei nchova auf deinem Mac, auch offline.'],
    ['*Was* du zahlst', 'Granola ist kostenlos für die Notizen der letzten 30 Tage; Business kostet 14 $ im Monat, jeden Monat. nchova ist kostenlos, ohne dass etwas ausgeblendet wird, oder 29,99 € einmalig.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Wohin der Call *geht*',
      lead: 'Dasselbe Meeting, zweimal transkribiert. Mit Granola streamt das Audio zu einem Transkriptionsdienst, während die Leute sprechen; mit nchova verlässt es nie den Mac.',
      route: {
        meeting: true,
        title: sync,
        them: { tab: 'Granola', place: 'Deepgram oder AssemblyAI, dann OpenAI oder Anthropic', what: 'der Ton des Calls, live; dann das Transkript, für die Notizen', back: 'Text', sent: 'Sekunden des Calls gesendet' },
        us: { tab: 'nchova', place: 'Transkribiert auf diesem Mac', sent: 'Sekunden des Calls gesendet' },
        words: {
          ...routeWords,
          said: 'Julia: der text für die seite steht, nur die animation fehlt noch',
          written: 'Julia: Der Text für die Seite steht, nur die Animation fehlt noch.',
          label: 'Ein mit Granola transkribiertes Meeting streamt zu Cloud-Diensten und zurück; mit nchova wird es auf dem Mac transkribiert, und nichts geht nach draußen.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Im direkten Vergleich',
      them: 'Granola',
      rows: [
        ['Bot im Call', 'Keiner', 'Keiner'],
        ['Wo transkribiert wird', 'In der Cloud: Deepgram, AssemblyAI', 'Auf deinem Mac'],
        ['Wer die Notizen schreibt', 'Cloud-Modelle, unter anderem von OpenAI und Anthropic', 'Apples Modell oder Qwen auf dem Mac, oder dein eigenes Claude Code oder Codex'],
        ['Deine Transkripte', 'Auf AWS in den USA gespeichert, bis du sie löschst; automatisches Löschen optional', 'Auf deinem Mac, und in deiner eigenen iCloud, wenn du die Synchronisierung einschaltest'],
        ['Training', 'Anonymisierte Daten werden in Basic und Business standardmäßig genutzt, mit Opt-out', 'Bei uns kommt nichts an, womit man trainieren könnte'],
        ['Wann es startet', 'Es meldet den Call; es startet, wenn du klickst oder die Notiz zum Meeting öffnest', 'Es bemerkt den Call und fragt, oder startet von selbst'],
        ['Wer spricht', '„Me“ und „Them“; auf dem Desktop Namen aus den Teilnehmenden der Call-App', 'Stimme 1, Stimme 2 …, am Klang unter den Eingeladenen benannt (Pro)'],
        ['Diktieren', 'Nur, um seinem Chat eine Frage zu stellen', 'Fn halten, in jeder App'],
        ['Ohne Internet', 'Die Transkription braucht eine Verbindung', 'Funktioniert genauso'],
        ['Kostenloser Plan', 'Unbegrenzt viele Meetings; Notizen der letzten 30 Tage sichtbar', 'Unbegrenzt, mit Apples Modellen; nichts wird ausgeblendet'],
        ['Bezahlplan', 'Business: 14 $ pro Person im Monat, monatlich abgerechnet', 'Pro: 29,99 € einmalig, bis zu 3 Macs'],
        ['Konto', 'Anmeldung mit Google oder Microsoft', 'Keins'],
        ['Läuft auf', 'Mac, Windows, iPhone, Android', 'Mac mit Apple Chip und macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'Notizen *wie bei Granola*, auf deinem Mac',
      lead: 'Notier während des Calls ein paar Wörter; wenn er endet, wachsen die Notizen darum herum. Dann frag das Meeting: Was haben wir entschieden, was muss ich tun?',
      demo: { name: 'notes' },
    },
    {
      kind: 'bill',
      h: 'Drei Jahre, *nebeneinander*',
      lead: 'Granola Business zum US-Preis, monatlich abgerechnet (jährlich rechnet Granola nur bei Enterprise ab), neben nchova Pro.',
      bill: {
        head: 'GRANOLA BUSINESS',
        plans: [{ tab: 'Monatlich', sub: 'monatlich abgerechnet, 14 $', every: 1, amount: 14 }],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Über drei Jahre kostet Granola Business 504 $; nchova Pro bleibt bei 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Stimmen, *am Klang* unterschieden',
      lead: 'Granola hört dich und „Them“ und übernimmt in der Desktop-App Namen aus Zoom, Meet und Teams. Mit Pro unterscheidet nchova die anderen Stimmen an ihrem Klang, in jedem Call; wen es unter den Eingeladenen schon einmal gehört hat, nennt es beim Namen.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Wann Granola *die bessere Wahl* ist',
      p: [
        'Wenn dein Team Notizen in Granolas Spaces teilt und an Notion, HubSpot oder Attio weiterschickt, ist Granola dafür gemacht, und es läuft auch unter Windows, auf dem iPhone und unter Android. nchova behält die Meetings jeder Person auf ihrem eigenen Mac.',
        'Wenn du willst, dass die stärksten Cloud-Modelle jede Notiz schreiben, ohne dass du etwas einrichten musst, macht Granola das ab Werk. In nchova kommen die besten Notizen von deinem eigenen Claude Code oder Codex, mit deinem Abo: Das Transkript geht dann an Anthropic oder OpenAI, und wer schreibt, wählst du unter **Einstellungen › Notizen**.',
        'Wenn du Granola wegen „kein Bot“ gewählt hast: Das bleibt bei nchova so, und die Cloud fällt auch noch weg.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen, *laut gestellt*',
      items: [
        ['Funktioniert nchova mit Google Kalender und Outlook?', 'Ja, über die Kalender, die dein Mac kennt: Füg den Account nur für seinen Kalender zu macOS hinzu. [So geht’s](@help/calendar/).'],
        ['Kann ich mein eigenes Claude für die Notizen nutzen?', 'Ja, mit Pro: nchova startet dein eigenes Claude Code oder Codex, angemeldet mit deinem Abo, und die Notizen dauern Sekunden. Kein Schlüssel geht durch nchova.'],
        ['Startet es von selbst?', 'Es bemerkt den Call, sobald Zoom, Meet, Teams oder Slack das Mikrofon übernimmt, und fragt. Oder stell **Wenn ein Call beginnt** auf **Automatisch transkribieren**.'],
        ['Kann ich Claude oder ChatGPT nach meinen Meetings fragen?', 'Ja: Der MCP-Server von nchova läuft auf deinem Mac und verbindet sich mit einem Klick. Siehe [Meetings in deinem Assistenten](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Preise von Granola', 'https://www.granola.ai/pricing'],
    ['Sicherheit', 'https://www.granola.ai/security'],
    ['Transkription', 'https://docs.granola.ai/help-center/taking-notes/transcription'],
    ['Modelltraining', 'https://docs.granola.ai/help-center/consent-security-privacy/model-training'],
    ['Sprecherzuordnung', 'https://docs.granola.ai/help-center/taking-notes/speaker-attribution'],
  ],
  checked: 'am 8. Oktober 2026',
};

const macwhisper: Guide = {
  id: 'macwhisper',
  page: 'alternatives/macwhisper/',
  group: 'compare',
  short: 'MacWhisper',
  metaTitle: 'MacWhisper-Alternative für Meetings und Diktat — nchova',
  description:
    'nchova im Vergleich mit MacWhisper: Beide transkribieren auf dem Mac und kosten nur einmal. MacWhisper kommt von Dateien, nchova lebt in Calls und Diktat.',
  kicker: 'nchova vs. MacWhisper',
  title: 'Eine MacWhisper-Alternative, *gemacht für Calls*.',
  lead: 'MacWhisper und nchova sind sich im Wichtigsten einig: Transkription auf deinem Mac, kein Bot, kein Abo. Gemacht sind sie für verschiedene Momente. MacWhisper glänzt bei den Aufnahmen und Dateien, die du schon hast; nchova lebt in den Calls, die gleich anstehen, und in jedem Textfeld, in das du diktierst.',
  short3: [
    ['Auf dem Mac, *beide*', 'beide transkribieren auf deinem Mac und kosten nur einmal. Keins von beiden schickt einen Bot.'],
    ['*Dateien* oder *Calls*', 'MacWhisper dreht sich um Dateien, Stapelverarbeitung und YouTube-Links; nchova um Calls, live, mit deinem Kalender.'],
    ['29,99 € *oder* 64 €', 'nchova Pro kostet 29,99 € einmalig; MacWhisper Pro auf seiner Website 64 € einmalig. Die kostenlose Version von nchova transkribiert auch Meetings.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'Der Call beginnt. *nchova fragt*.',
      lead: 'nchova bemerkt den Call, benennt ihn nach dem Kalendertermin und schreibt das Transkript live in eine Karte auf deinem Bildschirm. Wenn du auflegst, entstehen die Notizen.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Im direkten Vergleich',
      them: 'MacWhisper',
      rows: [
        ['Gemacht für', 'Audio- und Videodateien, Stapelverarbeitung, YouTube-Links, Untertitel', 'Calls, während sie laufen, und Diktieren in jeder App'],
        ['Wo transkribiert wird', 'Standardmäßig auf deinem Mac; Cloud-Dienste mit deinen eigenen Schlüsseln, wenn du willst', 'Auf deinem Mac, immer'],
        ['Meetings', 'Erkennt den Call und nimmt ihn auf, mit Live-Transkript (Pro; laut Doku ist die Erkennung noch in der Beta)', 'Bemerkt den Call und fragt; kostenlos'],
        ['Kalender', 'In der Doku nicht beschrieben', 'Benennt das Meeting nach dem Termin und listet, wer eingeladen war'],
        ['Wer spricht', 'Sprecher werden unterschieden (Pro)', 'Stimme 1, Stimme 2 …, am Klang unter den Eingeladenen benannt (Pro)'],
        ['Notizen und Chat', 'Mit deinen eigenen API-Schlüsseln oder einem lokalen Modell über Ollama oder LM Studio (Pro)', 'Geschrieben, wenn der Call endet: Apples Modell, kostenlos; Qwen auf dem Mac oder dein eigenes Claude Code oder Codex (Pro)'],
        ['Das Audio', 'Die Aufnahme wird mit dem Transkript gespeichert', 'Nie gespeichert: nur der Text'],
        ['Diktieren', 'Einfaches Diktieren kostenlos; bessere Qualität und KI-Prompts in Pro', 'Fn halten, in jeder App; Parakeet mit Pro'],
        ['KI-Assistenten (MCP)', 'Kein MCP-Server in der Doku; ein Kommandozeilen-Tool für Skripte und KI-Agenten', 'Ein lokaler MCP-Server für deine Meetings, kostenlos'],
        ['Sprachen', 'Rund 100, mit Whisper', '{nAll}: {nFree} kostenlos, {nPro} europäische mit Pro; bis zu drei gleichzeitig, Wechsel mitten im Satz'],
        ['Preis', 'Kostenlos; Pro 64 € einmalig (65 € im Gumroad-Checkout)', 'Kostenlos; Pro 29,99 € einmalig, bis zu 3 Macs'],
        ['Läuft auf', 'macOS 15 oder neuer, Apple Chip oder Intel; eine eigene App auf iPhone und iPad', 'macOS 26 oder neuer, Apple Chip'],
      ],
    },
    {
      kind: 'demo',
      h: 'nchova weiß, *wer* spricht',
      lead: 'Beide Apps unterscheiden die Stimmen. nchova gibt ihnen außerdem Namen, aus den Eingeladenen, anhand der Stimmen, die es schon gehört hat; die Stimmprofile bleiben auf deinem Mac.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'demo',
      h: 'Notizen, *ohne Schlüssel* zum Einfügen',
      lead: 'nchova schreibt die Notizen mit Apples Modell auf dem Mac, oder mit Qwen, das es für dich lädt und ausführt, oder mit deinem eigenen Claude Code oder Codex, angemeldet mit deinem Abo. Kein API-Schlüssel, den du kaufen oder einfügen musst.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Wann MacWhisper *die bessere Wahl* ist',
      p: [
        'Wenn deine Arbeit aus Aufnahmen besteht – Interviews, Podcasts, Vorlesungen, ein Ordner voller Sprachmemos –, dann ist MacWhisper das Werkzeug: Dateien rein, Transkripte und Untertitel raus. nchova transkribiert keine Dateien; es transkribiert, was du sagst, und die Calls, in denen du bist, während sie laufen.',
        'Wenn du einen Intel-Mac oder macOS 15 hast, läuft MacWhisper dort; nchova braucht einen Mac mit Apple Chip und macOS 26. Und wenn du die Aufnahme noch einmal anhören willst: MacWhisper behält das Audio; nchova behält nur die Worte.',
        'Viele werden beides wollen: MacWhisper für die Dateien, nchova für die Calls und das Diktieren.',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen, *laut gestellt*',
      items: [
        ['Kann nchova eine Audiodatei transkribieren?', 'Nein. nchova transkribiert live: dein Diktat und die Calls und Meetings, die es hört. Für Dateien, die du schon hast, ist MacWhisper gemacht.'],
        ['Nutzen beide Parakeet?', 'Ja: Beide können mit Pro NVIDIAs Parakeet auf dem Mac laufen lassen. nchova nutzt es fürs Diktieren und für Meetings gleichermaßen, in {nPro} europäischen Sprachen.'],
        ['Braucht nchova einen API-Schlüssel für die Notizen?', 'Nein. Apples Modell und Qwen laufen auf dem Mac; Claude Code und Codex nutzen dein eigenes Abo, einmal angemeldet. Kein Schlüssel geht durch nchova.'],
        ['Kann ich es erst testen?', 'Dreißig Tage mit allem, ohne Karte und ohne Konto. Danach bleibt es kostenlos mit Apples Modellen.'],
      ],
    },
  ],
  sources: [
    ['MacWhisper', 'https://www.macwhisper.com'],
    ['MacWhisper auf Gumroad', 'https://goodsnooze.gumroad.com/l/macwhisper'],
    ['Meetings aufnehmen', 'https://docs.macwhisper.com/article/30-record-meetings'],
    ['Sprechererkennung', 'https://docs.macwhisper.com/article/32-automatic-speaker-recognition-in-macwhisper'],
  ],
  checked: 'am 8. Oktober 2026',
};

/** A notetaker bot, any of them, next to nchova: for the pages about one call app. */
const anyBot = (call: string): Bot => ({
  them: {
    tab: 'Ein Notetaker-Bot',
    name: 'Notetaker',
    joined: 'Notetaker ist dem Meeting beigetreten',
    banner: '',
    caption: 'Ein Notetaker-Bot kommt als Gast: Alle sehen ihn, und die Aufnahme geht in die Cloud seines Anbieters.',
  },
  us: { tab: 'nchova', caption: 'Niemand kommt dazu. nchova hört von deinem Mac aus zu, und das Transkript bleibt dort.' },
  words: {
    switchLabel: 'Ansicht',
    label: `Ein ${call}-Call, in den ein Notetaker-Bot als Gast kommt, neben demselben Call mit nchova, in den niemand kommt.`,
    call: sync,
    tiles: ['Julia', 'Markus', 'Sarah', 'Tobias', 'Alex'],
    live: 'Live-Transkript',
    bubbles: [
      ['Julia', 'Der Text für die Seite steht.', 'Stimme 1'],
      ['', 'Super. Und die Animationen?'],
      ['Markus', 'Bis Donnerstag, nein, Moment, Freitag.', 'Stimme 2'],
    ],
  },
});

/** The meeting demo with another call app in the prompt, as the app writes it with a calendar event ("Call in %@.
 *  Transkribieren?"). */
const callIn = (service: string) => ({ ...base.meeting.demo, promptTitle: sync, promptSub: `Call in ${service}. Transkribieren?` });

/** What the meeting demo's notes say on the pages about one call app. */
const callNotes = (service: string): [string, string][] => [
  ['Es bemerkt den Call', `sobald ${service} ein paar Sekunden lang das Mikrofon nutzt, fragt nchova, ob es transkribieren soll.`],
  ['Mit deinem Kalender', 'das Meeting bekommt den Namen des Termins und seine Eingeladenen, und die Frage kommt zwei Minuten vorher.'],
  ['Du und die anderen', `dein Mikrofon ist „Ich“; was dein Mac abspielt, ${service} inklusive, sind alle anderen.`],
  ['Nur auf deinem Bildschirm', 'die Kapsel und das Transkript sind auf deinem Mac, nicht im Call: Niemand sieht sie, außer du teilst deinen ganzen Bildschirm.'],
];

const zoom: Guide = {
  id: 'zoom',
  page: 'transcribe/zoom/',
  group: 'use',
  short: 'Zoom transkribieren',
  metaTitle: 'Zoom-Meetings auf dem Mac transkribieren, ohne Bot — nchova',
  description:
    'Jeden Zoom-Call auf dem Mac transkribieren, als Host oder Gast, auch im kostenlosen Plan: kein Bot, das Audio bleibt auf dem Mac, Notizen nach dem Call.',
  kicker: 'Zoom transkribieren',
  title: 'Zoom-Calls transkribieren, *ob Host oder nicht*.',
  lead: 'Zooms eigenes Transkript braucht einen bezahlten Plan, und der Host entscheidet, wer es bekommt. nchova transkribiert jeden Zoom-Call von deinem Mac aus: dein Mikrofon als du, der Ton des Calls als alle anderen. Kein Bot kommt dazu, das Audio verlässt nie deinen Mac, und die Notizen entstehen, wenn du auflegst.',
  short3: [
    ['*Jeder* Zoom-Call', 'deiner oder der von jemand anderem, im kostenlosen oder im bezahlten Plan: Wenn du ihn hörst, kann nchova ihn transkribieren.'],
    ['*Kein* Bot', 'niemand kommt ins Meeting. nchova hört von deinem Mac aus zu, in der Zoom-App oder im Browser.'],
    ['Kostenlos', 'Transkripte und Notizen mit Apples Modellen sind kostenlos; Pro unterscheidet dazu die Stimmen und bringt Parakeet und bessere Notizen.'],
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
      h: 'Was Zoom dir gibt, *und wer entscheidet*',
      p: [
        'Seit Mai 2026 lässt Zoom dich Live-Untertitel nach dem Meeting nicht mehr speichern. Das Meeting-Transkript braucht ein Pro-, Business- oder Enterprise-Konto, bleibt aus, bis ein Host oder Admin es einschaltet, und Teilnehmende können den Host nur bitten, es zu starten. Das Transkript einer Cloud-Aufnahme braucht einen bezahlten Plan mit aktivierter Cloud-Aufnahme. Die Zusammenfassung von AI Companion startet der Host oder ein Co-Host, und alle sehen ihr Symbol aufleuchten.',
        'Wenn du also nicht der Host bist oder der Host Zooms kostenlosen Plan nutzt, gehst du meistens ganz ohne Transkript raus. nchova fragt Zoom nach nichts: Es transkribiert, was dein Mac abspielt und was dein Mikrofon hört.',
        'Zooms Tools können etwas, das nchova nicht kann: ein Transkript, das zum Meeting gehört und mit allen Teilnehmenden geteilt werden kann. Das von nchova gehört dir.',
      ],
    },
    {
      kind: 'bot',
      h: 'Ein Bot im Call, *oder niemand*',
      lead: 'Notetaker-Bots bekommen ein Transkript, indem sie dem Meeting als Gast beitreten. nchova braucht keinen Platz im Call.',
      bot: anyBot('Zoom'),
    },
    {
      kind: 'steps',
      h: 'Transkribiere deinen nächsten *Zoom*-Call',
      steps: [
        '[Lade nchova herunter](/download?from=zoom-steps) und öffne es. Verbinde bei der Einrichtung unter **Für Meetings** den **Kalender**, damit Meetings nach ihren Terminen benannt werden, und klick neben **Systemaudio** auf **Jetzt fragen**: So hört nchova die anderen.',
        'Tritt dem Zoom-Call wie gewohnt bei, in der Zoom-App oder im Browser.',
        'Wenn nchova fragt, klick auf **Transkribieren**. Klick auf die Kapsel unten am Bildschirm, um das Transkript mitzulesen oder eigene Notizen zu machen.',
        'Leg auf. nchova merkt, dass der Call vorbei ist, schreibt die Notizen und legt das Meeting unter **Meetings** ab (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Wenn du *auflegst*',
      lead: 'Die Notizen entstehen rund um das, was du notiert hast. Dann frag das Meeting: Was haben wir entschieden, was muss ich tun, schreib das Follow-up.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Fragen zu *Zoom*',
      items: [
        ['Zeigt Zoom den anderen, dass nchova transkribiert?', 'Nein: nchova ist nicht im Meeting, also hat Zoom nichts anzuzeigen. Wo das Gesetz es verlangt, sag den Leuten im Call, dass du transkribierst.'],
        ['Muss ich Host sein oder einen bezahlten Zoom-Plan haben?', 'Nein. nchova transkribiert jeden Call, in dem du bist, egal welcher Plan und wer der Host ist.'],
        ['Funktioniert es mit Zoom im Browser?', 'Ja. nchova unterscheidet ein Zoom-Meeting am Fenstertitel von anderen Tabs, die das Mikrofon nutzen, und fragt.'],
        ['Mit Kopfhörern oder ohne?', 'Beides. Ohne Kopfhörer entfernt nchova das Echo der Lautsprecher selbst aus deinem Mikrofon, ohne anzufassen, was Zoom sendet.'],
        ['Kann es von selbst starten?', 'Ja: Stell unter **Einstellungen › Meetings** die Option **Wenn ein Call beginnt** auf **Automatisch transkribieren**.'],
        ['Kann ich Claude nach meinen Zoom-Calls fragen?', 'Ja: Der MCP-Server von nchova läuft auf deinem Mac und verbindet sich mit einem Klick. Siehe [Meetings in deinem Assistenten](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Speichern von Untertiteln endet', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085668'],
    ['Meeting-Transkripte', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085675'],
    ['Transkripte von Cloud-Aufnahmen', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927'],
    ['Zusammenfassung von AI Companion', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013'],
    ['Hinweis zu AI Companion', 'https://library.zoom.com/ai-whitepaper/user-transparency-and-notice'],
  ],
  checked: 'am 8. Oktober 2026',
};

const meet: Guide = {
  id: 'google-meet',
  page: 'transcribe/google-meet/',
  group: 'use',
  short: 'Google Meet transkribieren',
  metaTitle: 'Google Meet auf dem Mac transkribieren, ohne Bot — nchova',
  description:
    'Google-Meet-Calls auf dem Mac transkribieren, auch mit kostenlosem Gmail-Konto und als Gast: kein Bot, keine Erweiterung, und das Audio bleibt auf dem Mac.',
  kicker: 'Google Meet transkribieren',
  title: 'Google Meet transkribieren, *auch als Gast*.',
  lead: 'Transkripte in Google Meet und Notizen von Gemini gibt es nur in bezahlten Plänen, und starten können sie nur Leute aus der Organisation des Hosts. nchova transkribiert jeden Meet-Call von deinem Mac aus, in Chrome, Safari, Arc oder welchem Browser auch immer: kein Bot, keine Erweiterung, und das Audio verlässt nie deinen Mac.',
  short3: [
    ['*Jedes* Meet', 'kostenloses Gmail oder Workspace, Host oder Gast: Wenn du den Call hörst, transkribiert nchova ihn.'],
    ['*Keine* Erweiterung', 'nchova erkennt einen Meet-Call am Titel des Browserfensters und fragt.'],
    ['*{nAll}* Sprachen', '{nFree} kostenlos mit Apples Modell, {nPro} europäische mit Pro; ein Call, der zwischen zwei deiner Sprachen wechselt, wird in beiden transkribiert.'],
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
      h: 'Was Meet dir gibt, *und wem*',
      p: [
        'Transkripte in Meet brauchen eine Workspace-Edition ab Business Standard oder Workspace Individual und decken acht Sprachen ab. Gestartet werden sie vom Host oder von jemandem aus der Organisation des Hosts, gespeichert im Drive des Organisators. Die Notizen von Gemini („Mach Notizen für mich“) brauchen auf der Seite des Organisators einen passenden Workspace- oder Google-AI-Plan, und eine Sprache pro Meeting. Alle im Call sehen ein Symbol, solange eins von beiden läuft.',
        'Ein kostenloses Gmail-Konto bekommt keins von beiden, und ein Gast aus einer anderen Firma kann sie nicht starten. nchova braucht keine Erlaubnis von Meet: Es transkribiert, was dein Mac abspielt und was dein Mikrofon hört, in {nFree} Sprachen kostenlos oder in {nPro} europäischen mit Pro.',
      ],
    },
    {
      kind: 'demo',
      h: 'Stimmen unterschieden, *und benannt*',
      lead: 'Mit Pro unterscheidet nchova die anderen Stimmen, während sie sprechen; wen es unter den Leuten auf der Einladung schon einmal gehört hat, nennt es beim Namen.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'steps',
      h: 'Transkribiere dein nächstes *Meet*',
      steps: [
        '[Lade nchova herunter](/download?from=google-meet-steps) und öffne es. Erlaube bei der Einrichtung **Bedienungshilfen** (nchova liest damit auch die Fenstertitel des Browsers), verbinde den **Kalender** und klick neben **Systemaudio** auf **Jetzt fragen**.',
        'Tritt dem Meet wie gewohnt in deinem Browser bei.',
        'nchova sieht, dass das Fenster mit dem Titel „Meet – …“ das Mikrofon nutzt, und fragt: Klick auf **Transkribieren**.',
        'Leg auf. Die Notizen werden geschrieben, und das Meeting wartet unter **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'faq',
      h: 'Fragen zu *Meet*',
      items: [
        ['Welche Browser?', 'Chrome, Safari, Arc, Dia, Edge, Firefox, Brave, Vivaldi, Opera und Zen.'],
        ['Brauche ich eine Chrome-Erweiterung?', 'Nein. nchova unterscheidet einen Call am Fenstertitel von den anderen Tabs, über die Berechtigung für Bedienungshilfen, die es schon hat: keine Erweiterung, keine URL gelesen, kein Netzwerk.'],
        ['Meldet es sich, wenn ich in ChatGPT oder Google Docs die Spracheingabe nutze?', 'Nicht, solange ChatGPT, Claude, Gemini, Google Docs, YouTube oder Ähnliches der aktive Tab ist. nchova fragt, wenn ein Fenster sagt, dass es ein Call ist, und auch, wenn nichts in die eine oder andere Richtung deutet; jedes „Nicht jetzt“ hält es danach länger ruhig.'],
        ['Sagt Google den anderen Bescheid?', 'Nein: nchova ist nicht im Meeting. Wo das Gesetz es verlangt, sag den Leuten im Call, dass du transkribierst.'],
        ['Funktioniert es mit einem kostenlosen Gmail-Konto?', 'Ja. nchova hängt nicht von deinem Google-Plan ab, und nicht von dem des Hosts.'],
      ],
    },
  ],
  sources: [
    ['Transkripte in Meet', 'https://support.google.com/meet/answer/12849897?hl=en'],
    ['Notizen von Gemini', 'https://support.google.com/meet/answer/14754931?hl=en'],
    ['Meet-Funktionen nach Plan', 'https://support.google.com/meet/answer/10459644?hl=en'],
  ],
  checked: 'am 8. Oktober 2026',
};

const teams: Guide = {
  id: 'teams',
  page: 'transcribe/teams/',
  group: 'use',
  short: 'Microsoft Teams transkribieren',
  metaTitle: 'Microsoft-Teams-Calls auf dem Mac transkribieren — nchova',
  description:
    'Microsoft-Teams-Calls auf dem Mac transkribieren, als Gast oder ohne Copilot: kein Bot, das Audio bleibt auf dem Mac, die Notizen kommen nach dem Auflegen.',
  kicker: 'Teams transkribieren',
  title: 'Teams-Calls transkribieren, *egal, wer sie organisiert*.',
  lead: 'In Teams hängt die Transkription von der Firma des Organisators und ihren Richtlinien ab; ein externer Gast kann sie nicht starten, und die KI-Zusammenfassung braucht eine Lizenz für Teams Premium oder Copilot. nchova transkribiert jeden Teams-Call von deinem Mac aus, in der App oder im Browser: kein Bot, keine Lizenz, und das Audio verlässt nie deinen Mac.',
  short3: [
    ['*Jeder* Teams-Call', 'beruflich oder privat, Organisator oder Gast: Wenn du ihn hörst, transkribiert nchova ihn.'],
    ['*Keine* Lizenz', 'kein Premium, kein Copilot: Notizen auf dem Mac geschrieben, kostenlos mit Apples Modell.'],
    ['*Deins*', 'das Transkript liegt auf deinem Mac, nicht im OneDrive des Organisators.'],
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
      h: 'Was Teams dir gibt, *und wer entscheidet*',
      p: [
        'Ob in Teams transkribiert wird, legt die Firma des Organisators per Richtlinie fest. Ist sie an, können der Organisator und Leute aus derselben Organisation sie starten; Gäste aus anderen Firmen und anonyme Teilnehmende nicht. Alle sehen, dass das Meeting transkribiert wird, und die Datei landet im OneDrive des Organisators, wo Kolleginnen und Kollegen sie lesen, aber standardmäßig nicht herunterladen können. Die intelligente Zusammenfassung, mit KI-Notizen und Aufgaben, braucht eine Lizenz für Teams Premium oder Microsoft 365 Copilot. Teams für den privaten Gebrauch bietet Live-Untertitel, die nur du siehst.',
        'nchova steht außerhalb von all dem: Es transkribiert, was dein Mac abspielt und was dein Mikrofon hört, und behält es auf deinem Mac.',
        'Bevor du einen beruflichen Call transkribierst, prüf, was deine Firma erlaubt, und sag den Leuten im Call Bescheid, wo das Gesetz es verlangt.',
      ],
    },
    {
      kind: 'bot',
      h: 'Ein Bot im Call, *oder niemand*',
      lead: 'Viele Firmen halten Notetaker-Bots aus ihren Meetings fern. nchova bittet nie um Einlass.',
      bot: anyBot('Teams'),
    },
    {
      kind: 'steps',
      h: 'Transkribiere deinen nächsten *Teams*-Call',
      steps: [
        '[Lade nchova herunter](/download?from=teams-steps) und öffne es. Verbinde bei der Einrichtung den **Kalender** und klick neben **Systemaudio** auf **Jetzt fragen**.',
        'Wenn dein Teams-Kalender zu einem beruflichen Microsoft-365-Account gehört, füg den Account nur für seinen Kalender zu deinem Mac hinzu: [So geht’s](@help/calendar/).',
        'Tritt dem Teams-Call bei, in der App oder im Browser. Wenn nchova fragt, klick auf **Transkribieren**.',
        'Leg auf. Die Notizen werden geschrieben, mit den nächsten Schritten, und das Meeting wartet unter **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Die Zusammenfassung, *ohne Copilot*',
      lead: 'Notizen und nächste Schritte, geschrieben, wenn der Call endet, von Apples Modell auf dem Mac, von Qwen oder von deinem eigenen Claude Code oder Codex. Dann frag das Meeting, was du zu tun hast.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Fragen zu *Teams*',
      items: [
        ['Zeigt Teams den anderen, dass nchova transkribiert?', 'Nein: nchova ist nicht im Meeting, also hat Teams nichts anzuzeigen. Wo das Gesetz oder deine Firma es verlangt, sag den Leuten im Call Bescheid.'],
        ['Funktioniert es mit Teams im Browser?', 'Ja: nchova erkennt ein Teams-Meeting am Titel des Browserfensters und fragt.'],
        ['Funktioniert es mit Teams für den privaten Gebrauch?', 'Ja. nchova hängt nicht vom Teams-Plan ab, weder von deinem noch von dem des Organisators.'],
        ['Mein Outlook-Kalender ist nicht in nchova. Warum?', 'nchova liest die Kalender, die dein Mac kennt. Füg deinen Arbeitsaccount nur für seinen Kalender zu macOS hinzu: [So geht’s](@help/calendar/).'],
        ['Kann es von selbst starten?', 'Ja: Stell unter **Einstellungen › Meetings** die Option **Wenn ein Call beginnt** auf **Automatisch transkribieren**.'],
      ],
    },
  ],
  sources: [
    ['Live-Transkription in Teams', 'https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings'],
    ['Richtlinien für Transkription', 'https://learn.microsoft.com/en-us/microsoftteams/meeting-transcription-captions'],
    ['Intelligente Zusammenfassung', 'https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings'],
    ['Untertitel in Teams für den privaten Gebrauch', 'https://support.microsoft.com/en-us/teams/free/meetings/live-captions-in-microsoft-teams-free'],
  ],
  checked: 'am 8. Oktober 2026',
};

// ---------- All together ----------

const guides: Guides = {
  words: {
    compare: 'Vergleiche',
    use: 'Anleitungen',
    inShort: 'Kurz gesagt',
    sources: 'Geprüft',
    home: 'nchova',
    cta: 'nchova 30 Tage kostenlos testen',
    ctaNote: 'ohne Karte, ohne Konto',
    meta: 'macOS 26 · Mac mit Apple Chip',
    more: 'Weiterlesen',
    us: 'nchova',
    hubLink: 'Alle Vergleiche',
  },
  hub: {
    page: 'alternatives/',
    metaTitle: 'nchova im Vergleich: Wispr Flow, Otter, Granola und mehr',
    description:
      'Wie sich nchova von Wispr Flow, Superwhisper, MacWhisper, Otter und Granola unterscheidet: wo transkribiert wird, ob ein Bot in den Call kommt, was es kostet.',
    kicker: 'im Vergleich',
    title: 'nchova *neben* den anderen.',
    lead: 'Diktier-Apps und Meeting-Notetaker in einer Tabelle: was jede App macht, wo sie deine Stimme in Text verwandelt, ob ein Bot in deine Calls kommt und wie du bezahlst. Jeder Name öffnet eine eigene Seite, mit den Details und ihren Quellen.',
    cols: ['App', 'Was sie macht', 'Wo sie transkribiert', 'Bot im Call', 'Preis'],
    us: { does: 'Diktieren, Meetings, Notizen, MCP', where: 'Auf deinem Mac', bot: 'Nie', price: 'Kostenlos; Pro 29,99 € einmalig' },
    rows: [
      { id: 'wispr-flow', does: 'Diktieren; Meetings mit Notetaker', where: 'In der eigenen Cloud', bot: 'Keiner', price: 'Kostenlos; Pro 15 $ im Monat oder 144 $ im Jahr' },
      { id: 'superwhisper', does: 'Diktieren, KI-Modi; ein Meeting-Modus', where: 'Auf dem Mac oder in der Cloud, je nach Modus', bot: 'Keiner', price: 'Kostenlos; Pro 84,99 $ im Jahr oder 249,99 $ auf Lebenszeit' },
      { id: 'macwhisper', does: 'Dateien; Meetings und Diktieren', where: 'Auf dem Mac; Cloud mit eigenen Schlüsseln', bot: 'Keiner', price: 'Kostenlos; Pro 64 € einmalig' },
      { id: 'otter', does: 'Meeting-Notizen', where: 'In der eigenen Cloud', bot: 'Notetaker kommt als Gast; auf dem Desktop ohne Bot', price: 'Kostenlos; Pro 16,99 $ im Monat oder 99,99 $ im Jahr' },
      { id: 'granola', does: 'Meeting-Notizen', where: 'In der Cloud', bot: 'Keiner', price: 'Kostenlos; Business 14 $ im Monat' },
    ],
  },
  list: [wisprFlow, otter, granola, superwhisper, macwhisper, zoom, meet, teams, offline, multilingual, mcp],
};

export default guides;
