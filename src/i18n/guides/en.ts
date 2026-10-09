// The guides, in English. Types and markup in ./types.ts.

import base from '../en';
import type { Bot, Guide, Guides } from './types';

const dictation = base.dictation.demo;
const assistants = base.assistants.demo;
const settingsTabs = base.calendarPage.demo.app.tabs;

// ---------- Jobs done with nchova ----------

const offline: Guide = {
  id: 'offline',
  page: 'dictation/offline/',
  group: 'use',
  short: 'Offline dictation',
  metaTitle: 'Offline dictation for Mac, in any app — nchova',
  description:
    'Dictate into any Mac app with no internet: nchova turns speech into text on the Mac itself, with Apple’s model or NVIDIA’s Parakeet. Your voice never leaves it.',
  kicker: 'offline dictation',
  title: 'Dictation that works *with the Wi‑Fi off*.',
  lead: 'nchova turns your voice into text on the Mac itself, so it types into any app on a plane, on a train or behind a company firewall. Nothing is uploaded and nothing waits for a server: hold Fn, speak, let go.',
  short3: [
    ['Yes, *fully* offline', 'once its models are on the Mac, dictation needs no connection at all. Not a fallback mode: the only mode there is.'],
    ['In *any* app', 'the text lands where your cursor is: Mail, Slack, Notion, a terminal, a form in the browser.'],
    ['Free', 'with Apple’s speech model, in {nFree} languages, for good. Parakeet, NVIDIA’s model, comes with Pro: {nPro} European languages.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        offline: 'Wi‑Fi: Off',
        data: {
          ...dictation,
          doc: 'On the train',
          scripts: [
            {
              spoken: 'the train gets in at seven, so i’ll call you from the station',
              marks: [],
              written: 'The train gets in at seven, so I’ll call you from the station.',
            },
            {
              spoken: 'i pushed the fix and updated the jason config for the release',
              marks: [{ kind: 'fix', from: 'jason', to: 'JSON' }],
              written: 'I pushed the fix and updated the JSON config for the release.',
            },
            {
              spoken: 'notes for the talk: open with the demo, then the numbers, then questions',
              marks: [],
              written: 'Notes for the talk: open with the demo, then the numbers, then questions.',
            },
          ],
        },
      },
      notes: [
        ['No connection', 'the Wi‑Fi is off, and the text arrives all the same, as fast as at your desk.'],
        ['Where the cursor is', 'any app, any text field. With nowhere to type, the text waits on the clipboard: ⌘V.'],
        ['Hold, don’t click', 'hold Fn, or the right Option key, while you speak. Let go and it types.'],
        ['Your words', 'names and acronyms written your way, offline too: “jason” becomes JSON.'],
      ],
    },
    {
      kind: 'prose',
      h: 'What runs on the Mac, and what needs the internet *once*',
      p: [
        'Everything nchova does with your voice happens on your Mac: dictation, the transcription of meetings, the cleanup of second thoughts, the notes when Apple’s model or Qwen writes them. None of it calls a server, so none of it cares whether you are online.',
        'The internet is needed a few times, and never for your voice: to download a model the first time (macOS fetches each language for Apple’s engine; Parakeet is about 480 MB, once), to activate Pro, and to look for updates. After that, turn the Wi‑Fi off and forget about it.',
        'Three things are online by nature, and only if you pick them: notes written by your own Claude Code or Codex, which send the meeting’s transcript to Anthropic or OpenAI; a cloud assistant such as Claude or ChatGPT connected to your meetings, which sends what it reads to its own model; and the sync of your meetings between your Macs through iCloud (Pro).',
      ],
    },
    {
      kind: 'points',
      h: 'Two engines, *both* on the Mac',
      lead: 'Pick one in Settings › Dictation. Whichever you pick, it also transcribes your meetings.',
      items: [
        ['Apple speech recognition', 'built into macOS: nothing of ours to download, it dictates from the very first minute, in {nFree} languages. Free, for good.'],
        ['Parakeet', 'NVIDIA’s speech model, about 480 MB once, in {nPro} European languages, including those Apple lacks, like {proOnly}. While it downloads, Apple keeps dictating.', 'pro'],
        ['No time limit', 'hold the key as long as you are talking; nchova transcribes the whole thing when you let go.'],
      ],
    },
    {
      kind: 'steps',
      h: 'Set it up before you lose the signal',
      steps: [
        '[Download nchova](/download?from=offline-steps) and open it. It asks for the **Microphone** and **Accessibility**, and to set **Press 🌐 key to** to **Do Nothing**, so that Fn is nchova’s and not macOS’s own dictation.',
        'Pick your languages, up to three. Let macOS fetch them, or Parakeet, while you are still online.',
        'Turn the Wi‑Fi off and try it: hold **Fn**, speak, let go.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *offline*',
      items: [
        ['Does nchova work on a plane?', 'Yes. Dictation and meeting transcription run on the Mac: with the models downloaded, it needs no connection at all.'],
        ['Is offline dictation less accurate?', 'It is the same dictation: nchova has no online mode. The model that types on the plane is the one that types at your desk.'],
        ['Does it send anything once I am back online?', 'Never your voice. Back online, nchova looks for updates and, now and then, checks your Pro licence: the key and the Mac’s name, nothing else. Anything more is something you turned on: iCloud sync sends your meetings to your other Macs, and Claude Code or Codex, if they write your notes, get each new meeting’s transcript.'],
        ['Is there a time limit?', 'No. Hold the key as long as you are talking; nchova transcribes the whole thing when you let go.'],
        ['And meetings, offline?', 'They work the same way: a meeting around a table, with the Mac in the middle, is transcribed with no network, and its notes written on the Mac.'],
      ],
    },
  ],
};

const multilingual: Guide = {
  id: 'multilingual',
  page: 'dictation/multilingual/',
  group: 'use',
  short: 'Dictation in more than one language',
  metaTitle: 'Multilingual dictation on Mac, mid-sentence — nchova',
  description:
    'Dictate in Spanish, German, French or English and switch mid-sentence: nchova hears which language you speak and types it, on your Mac. {nAll} languages, offline.',
  kicker: 'multilingual dictation',
  title: 'Speak *all* your languages. It keeps up.',
  lead: 'Pick up to three languages and just talk: nchova works out which one you are speaking, sentence by sentence and even mid-sentence, and types it where your cursor is. No keyboard to switch, no setting to change, nothing sent anywhere.',
  short3: [
    ['*{nAll}* languages', '{nFree} free with Apple’s model, {nPro} European ones with Parakeet (Pro), each counted once.'],
    ['*Three* at once', 'nchova listens for all the ones you picked, and keeps the one you are speaking.'],
    ['*Mid-sentence*', '“La reunión es mañana a las diez, so please send the deck tonight” comes out as you said it.'],
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
              spoken: 'la reunión es mañana a las diez, so please send the deck tonight',
              marks: [
                { kind: 'lang', from: 'la reunión es mañana a las diez,', to: 'ES' },
                { kind: 'lang', from: 'so please send the deck tonight', to: 'EN' },
              ],
              written: 'La reunión es mañana a las diez, so please send the deck tonight.',
            },
            {
              spoken: 'kannst du mir das angebot schicken? i need it before the call',
              marks: [
                { kind: 'lang', from: 'kannst du mir das angebot schicken?', to: 'DE' },
                { kind: 'lang', from: 'i need it before the call', to: 'EN' },
              ],
              written: 'Kannst du mir das Angebot schicken? I need it before the call.',
            },
            {
              spoken: 'on se voit à midi devant la gare, then we take the train together',
              marks: [
                { kind: 'lang', from: 'on se voit à midi devant la gare,', to: 'FR' },
                { kind: 'lang', from: 'then we take the train together', to: 'EN' },
              ],
              written: 'On se voit à midi devant la gare, then we take the train together.',
            },
          ],
        },
      },
      notes: [
        ['Automatic', 'nchova listens for all your languages at once and types the one you spoke.'],
        ['Or fixed', 'set one language as always on, and switch it from Settings when you need another.'],
        ['Your vocabulary', 'names and acronyms written your way: “jeera” becomes Jira, and you can add how the engine hears them.'],
      ],
    },
    {
      kind: 'prose',
      h: 'How it tells your languages *apart*',
      p: [
        'With Apple’s engine, nchova runs one recogniser for each language you picked, all at once, on the same audio. When you let go, it weighs them: how sure each one was of its words, and how much its text reads like its own language. The best one is typed. When you change language partway, it makes the same choice stretch by stretch.',
        'With Parakeet (Pro), one model knows {nPro} European languages and writes whatever it heard; nchova reads the result to tell which of yours it was.',
        'The fewer languages you keep, the surer the choice: that is why three is the limit. A long stretch in the other language, or one at the end of a sentence, comes out right; two words of English between two clauses of Polish may come out as Polish. Names and terms you use in every language belong in the vocabulary.',
      ],
    },
    {
      kind: 'points',
      h: 'The languages',
      items: [
        ['Free, with Apple’s model', '{free}.'],
        ['With Pro, Parakeet', '{pro}.', 'pro'],
        ['The app itself', 'nchova’s menus and settings are in English and Italian, whichever languages you dictate in.'],
      ],
    },
    {
      kind: 'prose',
      h: 'And meetings in *two languages*?',
      p: [
        'They work the same way: nchova recognises every sentence in the language it was spoken in, so a call that moves between French and English is transcribed in both. A short aside in another language is read in the meeting’s main one.',
        'The notes are written in the language of the meeting, and you can ask about it in another: in English, Italian, French, Spanish, German, Portuguese, Dutch, Japanese, Korean or Chinese, “What did we decide?” gets its answer in the language of the question.',
      ],
    },
    {
      kind: 'steps',
      h: 'Set your languages',
      steps: [
        'In nchova, open **Settings › Dictation** and, under **Recognition**, click **Add a language…**. Pick up to three.',
        'Leave **Language** on **Automatic**: nchova listens for all of them at once.',
        'Hold **Fn** and talk the way you talk.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions in *every* language',
      items: [
        ['Can I mix two languages in the same sentence?', 'Yes, when each part is more than a couple of words: nchova decides stretch by stretch. A single foreign word inside a sentence is better taught to the vocabulary.'],
        ['Which languages are free?', '{free}, with Apple’s model. Pro adds Parakeet and the languages only it knows, like {proOnly}.'],
        ['Why at most three?', 'With Apple’s engine, every language on Automatic is one more recogniser listening to every dictation; with Parakeet, one more to tell apart. Three is where the choice stays sure and the Mac stays quick: to dictate in another, remove one of the three.'],
        ['Does it work offline in every language?', 'Yes: both engines run on the Mac. The first time, macOS fetches a language for Apple’s engine, or nchova downloads Parakeet once.'],
      ],
    },
  ],
};

const mcp: Guide = {
  id: 'mcp',
  page: 'mcp/',
  group: 'use',
  short: 'Meetings in Claude and ChatGPT (MCP)',
  metaTitle: 'Meeting transcripts in Claude and ChatGPT, via MCP — nchova',
  description:
    'nchova runs a local MCP server: Claude, ChatGPT, Cursor and other assistants search and read your meeting transcripts, on your Mac. Free, one click.',
  kicker: 'MCP server',
  title: 'Ask your assistant *about your meetings*.',
  lead: 'nchova transcribes your calls on the Mac and hands them to your AI assistant through a local MCP server. Claude, ChatGPT, Cursor and the rest search what was said, recap your week, tell you who owes what, and save notes back. There is no server of ours in between: there are none.',
  short3: [
    ['*One* click', 'Settings › Assistants › Connect: nchova adds itself to your assistant’s configuration, and backs up any file it changes.'],
    ['Meetings, *never* dictation', 'the assistant reads transcripts and notes; what you dictate stays out of its reach.'],
    ['Free', 'the MCP server comes with the free version, forever, Pro or not.'],
  ],
  blocks: [
    {
      kind: 'connect',
      h: 'Connect it *once*',
      lead: 'nchova finds the assistants on your Mac and sets each one up with a click. Apps it cannot write to get a setup to paste.',
      connect: {
        tabs: settingsTabs,
        tab: 'Assistants',
        section: 'Your meetings in your assistant',
        rows: [
          { name: 'Claude', after: 'Quit and reopen Claude to see the Nchova tools.', click: true },
          { name: 'Claude Code', after: 'Claude Code sees the Nchova tools from its next session.' },
          { name: 'ChatGPT / Codex', after: 'In the ChatGPT app press Restart under Settings → MCP servers; Codex sees the tools from its next session.' },
          { name: 'Cursor', after: 'Cursor picks it up by itself: check Settings → MCP.', click: true },
        ],
        others: 'Others Nchova can connect',
        button: 'Connect',
        again: 'Reconnect',
        connected: 'Connected',
        footer:
          'Lets the assistant list, search and read your meeting transcripts, follow a meeting in progress and save summaries back, through a local MCP server. Only meetings are shared, never your dictations, and nothing goes through Nchova’s servers: there are none.',
        label: 'nchova’s Settings › Assistants: Connect is clicked next to Claude, then next to Cursor, and each one shows Connected.',
      },
    },
    {
      kind: 'demo',
      h: 'Then *ask*',
      lead: 'The assistant picks the tools by itself: a recap of the week, the tasks people took on, everything about one person, the words someone said.',
      demo: {
        name: 'assistants',
        data: {
          ...assistants,
          q1: 'What did I promise to do this week?',
          calls1: [['digest', '{ "from": "2026-10-05" }', '6 meetings · 9 tasks']],
          a1: 'Three things: reply to the testers (*Product sync*, Tuesday), send the customer the revised quote (Wednesday), and the deck for Thursday’s review.',
          cite: 'Product sync · 1:06',
          q2: 'I’m calling Sarah in five minutes. What did she take on?',
          calls2: [['find_person', '{ "name": "Sarah" }', '4 meetings · 2 tasks']],
          a2: 'Two things: the newsletter, which she said she would send Monday at 10, and the pricing page you asked her to look over.',
        },
      },
      notes: [
        ['Search', 'what someone said, word for word, across every meeting.'],
        ['Recap', 'the week, or the month: meetings, people, topics and tasks.'],
        ['Live', 'the meeting in progress too: “what did they just decide?”'],
        ['Save back', 'notes and action items written by the assistant appear in nchova.'],
      ],
    },
    {
      kind: 'points',
      h: 'The *ten* tools',
      lead: 'What nchova’s MCP server offers. The assistant reads their descriptions and chooses.',
      items: base.assistants.tools.list.map(([name, what]) => [name, `${what}.`]),
    },
    {
      kind: 'prose',
      h: 'How it works, and *what goes where*',
      p: [
        'The MCP server is a small program inside nchova. Your assistant starts it on your Mac and talks to it through a pipe (stdio): no network, no port, no token to leak. It reads the same database the app writes, so it answers even with nchova closed.',
        'It shares meetings only: transcripts, notes, action items, titles and the names of voices. Your dictations are never in it, and neither is the audio, which nchova does not keep.',
        'What happens next is up to the assistant. Claude, ChatGPT and the other cloud assistants send what they read to their own models, as they do with anything you paste into a chat. A local model, in LM Studio for example, keeps it all on the Mac.',
      ],
    },
    {
      kind: 'steps',
      h: 'Connect your assistant',
      steps: [
        '[Download nchova](/download?from=mcp-steps) and let it transcribe a meeting or two.',
        'Open **Settings › Assistants**. The assistants on your Mac come first.',
        'Click **Connect** next to yours. nchova adds itself to the assistant’s configuration: it saves a copy of a file before changing it, or, for Claude Code and Codex, runs their own command.',
        'Do what nchova says next (for Claude: quit and reopen it), then ask about your meetings.',
        'For Perplexity, Raycast, Zed, Goose and any other app that speaks MCP, **Copy setup** puts on the clipboard what to paste.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions about *MCP*',
      items: [
        ['What is MCP?', 'The Model Context Protocol: an open standard that lets AI assistants use tools and data on your computer. nchova speaks it, so any assistant that does can read your meetings.'],
        ['Which assistants work?', 'Claude, Claude Code, ChatGPT and Codex, Cursor, VS Code, Windsurf, Gemini CLI and LM Studio connect with a click; Perplexity, Raycast, Zed and Goose with a setup to paste; and any app that runs a local (stdio) MCP server.'],
        ['Do I need Pro?', 'No. The MCP server is free, forever.'],
        ['Can the assistant change or delete my meetings?', 'It can save notes and action items, which take the place of the ones the meeting had, even notes you edited, and fix a meeting’s title, its attendees or the names of its voices. It cannot delete a meeting or touch its transcript, and a title or a voice’s name you set yourself is never overwritten.'],
        ['Does it work during a meeting?', 'Yes: the assistant can read what has been said so far, or only the last few minutes.'],
        ['Do my meetings go to nchova?', 'There is nowhere for them to go: nchova has no servers. The assistant talks to nchova on your Mac.'],
      ],
    },
  ],
};


// ---------- nchova next to the others ----------

/** The words every bill shares: the months, the receipt's lines. */
const billWords = {
  month: 'month',
  months: 'months',
  total: 'Total',
  once: 'nchova Pro, once',
  year: 'Year {n}, updates',
  nothing: '€0.00',
  switchLabel: 'Billed',
};

const routeWords = { mac: 'Your Mac', switchLabel: 'Show' };

const wisprFlow: Guide = {
  id: 'wispr-flow',
  page: 'alternatives/wispr-flow/',
  group: 'compare',
  short: 'Wispr Flow',
  metaTitle: 'A Wispr Flow alternative that runs on your Mac — nchova',
  description:
    'nchova next to Wispr Flow: dictation that runs on your Mac, offline, with no account and no subscription. Where your voice goes, and the prices, side by side.',
  kicker: 'nchova vs Wispr Flow',
  title: 'A Wispr Flow alternative that *stays on your Mac*.',
  lead: 'Wispr Flow is a polished voice keyboard, and it works by sending what you say to its cloud. nchova does the same job, hold a key, speak, the text appears in any app, with the speech model on your Mac: offline, with no account, and paid once if you pay at all.',
  short3: [
    ['*Where* it listens', 'Wispr Flow transcribes in its cloud, always. nchova transcribes on your Mac, always.'],
    ['*What* it keeps', 'Wispr Flow stores dictations and trains on them by default on Free and Pro, unless you turn it off. nchova keeps them on your Mac only: it has no servers to send them to.'],
    ['*What* you pay', 'Wispr Flow Pro is $15 a month, or $144 a year. nchova is free, or €29.99 once for Pro.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Where your voice *goes*',
      lead: 'The same sentence, dictated twice. Wispr Flow sends it to its servers, with the app you are in and the text around your cursor, and types what comes back. nchova hands it to a speech model on the Mac.',
      route: {
        them: { tab: 'Wispr Flow', place: 'Wispr’s cloud, in the US', what: 'your voice, the app’s name, the text around your cursor', back: 'text', sent: 'seconds of your voice sent' },
        us: { tab: 'nchova', place: 'Speech model, on this Mac', sent: 'seconds of your voice sent' },
        words: {
          ...routeWords,
          said: 'let’s move the launch to friday at ten',
          written: 'Let’s move the launch to Friday at ten.',
          label: 'A sentence dictated with Wispr Flow travels to its servers and back; with nchova it goes to a model on the Mac, and nothing leaves.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Side by side',
      them: 'Wispr Flow',
      rows: [
        ['Where it transcribes', 'In Wispr’s cloud: “transcription always occurs on the cloud”', 'On your Mac'],
        ['Without internet', 'No dictation: “an internet connection is required for transcription”; the audio is kept to retry', 'Works the same'],
        ['Sent with your voice', 'With Context Awareness, on by default: the app, the text box, text on screen', 'Nothing is sent'],
        ['Your dictations', 'Cloud storage and model training on by default for Free and Pro; both can be turned off', 'On your Mac only: we have no servers'],
        ['Account', 'Required', 'None'],
        ['Languages', '100+, one per dictation: “the dominant language wins”', '{nAll}, {nFree} of them free; up to three at once, switching mid-sentence'],
        ['Meetings', 'Notetaker: no bot; speakers named from the invite, on Free too; transcribed and stored in Wispr’s cloud', 'No bot; transcribed on your Mac, voices told apart (Pro)'],
        ['AI assistants (MCP)', 'Hosted server, for meetings and notes', 'Local server, for meetings; never your dictation'],
        ['Free plan', '2,000 words a week on the desktop', 'No word limit, with Apple’s model'],
        ['Paid plan', 'Pro: $15 a month, or $144 a year', 'Pro: €29.99 once, up to 3 Macs'],
        ['Runs on', 'Mac, Windows, iPhone, Android', 'Mac, with Apple silicon and macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Three years of *each*',
      lead: 'Wispr Flow Pro at its US prices, billed yearly or monthly, next to nchova Pro. Pick a way to pay and watch the months go by.',
      bill: {
        head: 'WISPR FLOW PRO',
        plans: [
          { tab: 'Yearly', sub: 'billed yearly, $144', every: 12, amount: 144 },
          { tab: 'Monthly', sub: 'billed monthly, $15', every: 1, amount: 15 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Over three years Wispr Flow Pro comes to $432 billed yearly, or $540 monthly; nchova Pro stays at €29.99, paid once.' },
      },
    },
    {
      kind: 'demo',
      h: 'Same gesture. *Try it*.',
      lead: 'Hold a key, talk, let go: the way you already dictate with Wispr Flow. Hold the key under the window and the next sentence is yours.',
      demo: { name: 'dictation' },
      notes: base.dictation.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'When Wispr Flow is the *better choice*',
      p: [
        'If you dictate on Windows, an iPhone or Android as well as on the Mac, Wispr Flow follows you everywhere. nchova is a Mac app, for Macs with Apple silicon and macOS 26 or later.',
        'If you write in a language that neither Apple nor Parakeet knows, Wispr Flow’s hundred-plus languages cover more ground. And its commands, which rewrite selected text by voice, have no counterpart in nchova, which writes what you said and never adds a word.',
        'If none of that is you, the trade is simple: the same gesture, without your voice leaving the Mac, without an account, without a subscription.',
      ],
    },
    {
      kind: 'steps',
      h: 'Moving from Wispr Flow',
      steps: [
        'Quit Wispr Flow, so that two apps are not listening to the same key.',
        '[Download nchova](/download?from=wispr-flow-steps) and follow its setup: the **Microphone**, **Accessibility**, and **Press 🌐 key to** set to **Do Nothing**.',
        'Pick your languages, up to three, and add the names and acronyms you use under **Settings › Vocabulary**.',
        'Hold **Fn**, or the right Option key, and talk.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *out loud*',
      items: [
        ['Is nchova as accurate as Wispr Flow?', 'Try it on your own voice: the trial has everything for 30 days. nchova runs Apple’s speech model or NVIDIA’s Parakeet on your Mac; Wispr Flow runs its own model in its cloud.'],
        ['Do I need an account?', 'No. Download nchova and it works. Pro is a licence key that arrives by email.'],
        ['Does nchova work on Windows or an iPhone?', 'No: it is made for Macs with Apple silicon and macOS 26 or later.'],
        ['Does it work in meetings too?', 'Yes, and with no bot: nchova notices the call, transcribes it on the Mac, tells the voices apart (Pro) and writes the notes when you hang up. See [how it transcribes a Zoom call](@transcribe/zoom/).'],
        ['What happens after the trial?', 'nchova stays free with Apple’s models: dictation, meetings, notes. Pro adds Parakeet, the voices told apart and named, the better notes and iCloud sync, for €29.99 once.'],
      ],
    },
  ],
  sources: [
    ['Wispr Flow pricing', 'https://wisprflow.ai/pricing'],
    ['Data controls', 'https://wisprflow.ai/data-controls'],
    ['Security and compliance FAQ', 'https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq'],
    ['Context Awareness', 'https://docs.wisprflow.ai/articles/4678293671-feature-context-awareness'],
    ['Multiple languages', 'https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages'],
    ['What is Flow', 'https://docs.wisprflow.ai/articles/2772472373-what-is-flow'],
    ['Accuracy and known limitations', 'https://docs.wisprflow.ai/articles/4048537120-what-to-expect-from-flow-accuracy-and-known-limitations'],
    ['Notetaker', 'https://wisprflow.ai/notetaker'],
  ],
  checked: 'on 8 October 2026',
};

const superwhisper: Guide = {
  id: 'superwhisper',
  page: 'alternatives/superwhisper/',
  group: 'compare',
  short: 'Superwhisper',
  metaTitle: 'A Superwhisper alternative for calls and dictation — nchova',
  description:
    'nchova next to Superwhisper: both dictate on your Mac. nchova also notices your calls, follows your calendar and writes the notes. Pro is €29.99 once.',
  kicker: 'nchova vs Superwhisper',
  title: 'A Superwhisper alternative, *for your meetings too*.',
  lead: 'Superwhisper and nchova both put a speech model on your Mac, and both type where your cursor is. The difference is what happens around a call: nchova notices it and offers to transcribe, follows your calendar, hears both sides even on the free plan, and writes the notes when you hang up. And Pro costs €29.99 once.',
  short3: [
    ['Dictation, *both*', 'Superwhisper runs local models or cloud ones, mode by mode; nchova runs on the Mac only.'],
    ['Meetings, *by itself*', 'Superwhisper has a meeting mode you start; nchova notices the call, reads your calendar and writes the notes by itself. With Pro it names the voices too.'],
    ['*Once*', 'Superwhisper Pro is $84.99 a year, or $249.99 for life. nchova Pro is €29.99, once.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'The call starts. *nchova asks*.',
      lead: 'As soon as Zoom, Meet, Teams or Slack takes the microphone, nchova offers to transcribe; with your calendar, it names the meeting after the event. Superwhisper’s docs describe a meeting mode that you start yourself.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Side by side',
      them: 'Superwhisper',
      rows: [
        ['Where it transcribes', 'On the Mac with local models, or in the cloud (its own S1, or Deepgram’s and ElevenLabs’ models), chosen mode by mode', 'On your Mac, always'],
        ['Free plan', 'Local Whisper models, two modes with no AI processing', 'Dictation, meetings and notes with Apple’s models'],
        ['Meetings', 'A meeting mode you start; the other side of the call needs Pro', 'Notices the call, asks, follows your calendar'],
        ['Who is speaking', 'Speaker separation (Pro), not used in the AI summaries', 'Voice 1, Voice 2…, named from the invitees by voice (Pro)'],
        ['Notes', 'From an AI mode, local or in the cloud', 'Written when the call ends, around your own notes'],
        ['AI assistants (MCP)', 'Local server for your dictation history (macOS)', 'Local server for your meetings; never your dictation'],
        ['Languages', '100+, depending on the model', '{nAll}, {nFree} of them free; up to three at once, switching mid-sentence'],
        ['Rewriting', 'AI modes that format and rewrite what you said', 'Writes what you said; the cleanup can only take words out'],
        ['Paid plan', 'Pro: $8.49 a month, $84.99 a year, or $249.99 for life', 'Pro: €29.99 once, up to 3 Macs'],
        ['Runs on', 'Mac (also Intel), Windows, iPhone, Android', 'Mac, with Apple silicon and macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Three years of *each*',
      lead: 'Superwhisper Pro at its US prices, yearly, monthly or for life, next to nchova Pro.',
      bill: {
        head: 'SUPERWHISPER PRO',
        plans: [
          { tab: 'Yearly', sub: 'billed yearly, $84.99', every: 12, amount: 84.99 },
          { tab: 'Monthly', sub: 'billed monthly, $8.49', every: 1, amount: 8.49 },
          { tab: 'Lifetime', sub: 'once, $249.99', every: 1000, amount: 249.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Over three years Superwhisper Pro comes to $254.97 billed yearly, $305.64 monthly, or $249.99 for life; nchova Pro stays at €29.99.' },
      },
    },
    {
      kind: 'demo',
      h: 'It knows *who* is speaking',
      lead: 'With Pro, nchova tells the other voices apart as they speak and names the ones it has heard before, among the people invited. The names end up in the transcript, in the notes and in what your assistant reads.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'When Superwhisper is the *better choice*',
      p: [
        'If you dictate on Windows, an iPhone or Android, or on an Intel Mac, Superwhisper covers them, with one licence. nchova needs a Mac with Apple silicon and macOS 26.',
        'If you want your words rewritten as you dictate, in an email’s tone or a note’s shape, Superwhisper’s AI modes do that, and it transcribes audio and video files too. nchova writes what you said and transcribes what you hear live.',
        'If your days are made of calls, nchova does the part around them by itself: it notices the call, knows who was invited and writes the notes when you hang up; with Pro, it names the voices too.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *out loud*',
      items: [
        ['Does nchova use Parakeet too?', 'Yes: with Pro, NVIDIA’s Parakeet runs on your Mac in {nPro} European languages. Without Pro, Apple’s speech model does the work, in {nFree} languages.'],
        ['Does nchova work offline?', 'Yes: dictation, meetings and the notes written on the Mac work without a connection. The internet is needed to download the models the first time, to activate Pro and for updates. See [offline dictation](@dictation/offline/).'],
        ['Can I try it before paying?', 'Thirty days with everything, no card and no account. After that it stays free with Apple’s models.'],
        ['Is there a lifetime licence?', 'Pro is lifetime: €29.99 once, for up to 3 Macs, with every update included for as long as nchova gets updates.'],
      ],
    },
  ],
  sources: [
    ['Superwhisper plans', 'https://superwhisper.com/docs/billing/plans'],
    ['Voice models', 'https://superwhisper.com/docs/models/voice'],
    ['Choosing a model', 'https://superwhisper.com/docs/get-started/choose-your-model'],
    ['Built-in modes', 'https://superwhisper.com/docs/modes/built-in'],
    ['Speaker-separated meetings', 'https://superwhisper.com/docs/modes/speaker-separated-meetings'],
    ['CLI and MCP server', 'https://superwhisper.com/docs/get-started/cli'],
    ['Introduction', 'https://superwhisper.com/docs/get-started/introduction'],
  ],
  checked: 'on 8 October 2026',
};

const otter: Guide = {
  id: 'otter',
  page: 'alternatives/otter/',
  group: 'compare',
  short: 'Otter',
  metaTitle: 'An Otter.ai alternative with no bot, on your Mac — nchova',
  description:
    'nchova next to Otter.ai: meeting transcription on your Mac, with no bot in the call and no audio uploaded. Notes, speakers, prices and privacy, side by side.',
  kicker: 'nchova vs Otter',
  title: 'An Otter alternative that *never joins the call*.',
  lead: 'Otter’s Notetaker joins your Zoom, Meet and Teams calls as a guest, and every recording, with or without the bot, is transcribed and kept in Otter’s cloud. nchova transcribes the same calls from your Mac: nobody joins, the audio is never uploaded, and the notes are written when you hang up.',
  short3: [
    ['*No* guest', 'Otter’s Notetaker joins as a participant everyone sees. nchova listens from your Mac, the way you do.'],
    ['*No* upload', 'Otter keeps the audio and may train on it, de-identified. nchova keeps no audio, and there is nowhere to send it.'],
    ['*No* minutes', 'Otter Basic stops at 300 minutes a month, and shows only the first 30 minutes of each call. nchova has no limit, and Pro is €29.99 once.'],
  ],
  blocks: [
    {
      kind: 'bot',
      h: 'A guest in the call, *or none*',
      lead: 'With Otter, a Notetaker joins the meeting in your name, and can join on its own from your calendar. With nchova, the call has the people who were invited, and nobody else.',
      bot: {
        them: {
          tab: 'Otter Notetaker',
          name: 'Alex’s Notetaker',
          joined: 'Alex’s Notetaker (Otter.ai) joined the meeting',
          banner: '',
          caption: 'The Notetaker joins as a guest: everyone in the call sees it, and the recording goes to Otter’s cloud.',
        },
        us: { tab: 'nchova', caption: 'Nobody joins. nchova listens from your Mac, and the transcript stays on it.' },
        words: {
          switchLabel: 'Show',
          label: 'A call with Otter’s Notetaker joining as a guest, next to the same call with nchova, where nobody joins and the transcript appears on your own screen.',
          call: 'Product sync',
          tiles: ['Julia', 'Mark', 'Sarah', 'Tom', 'Alex'],
          live: 'Live transcript',
          bubbles: [
            ['Julia', 'The page copy is done.', 'Voice 1'],
            ['', 'Great. And the animations?'],
            ['Mark', 'By Thursday, no wait, Friday.', 'Voice 2'],
          ],
        },
      },
    },
    {
      kind: 'table',
      h: 'Side by side',
      them: 'Otter',
      rows: [
        ['How it hears the call', 'Otter Notetaker joins Zoom, Meet and Teams as a guest; the desktop app can also record without it', 'From your Mac: your microphone and the call’s audio, no guest'],
        ['Where it transcribes', 'In Otter’s cloud, in the US', 'On your Mac'],
        ['The audio', 'Kept with the conversation, exportable as mp3', 'Never kept: only the text'],
        ['Training', 'Its privacy policy allows training on de-identified audio and transcripts', 'Nothing reaches us to train on'],
        ['Who is speaking', 'Named from voiceprints stored by Otter, shared in a workspace', 'With Pro, Voice 1, Voice 2…, named by voiceprints kept on your Mac; free, “Me” and “Others”'],
        ['Languages', '6, one per conversation (French can switch to English)', '{nAll}, {nFree} of them free; up to three at once, sentence by sentence'],
        ['Dictation', 'None', 'Hold Fn, in any app'],
        ['Without internet', 'Records, and transcribes after uploading', 'Transcribes as usual'],
        ['AI assistants (MCP)', 'A server in Otter’s cloud', 'A local server, on your Mac'],
        ['Free plan', '300 minutes a month; the first 30 minutes of each conversation; the latest 25 conversations', 'No limit, with Apple’s models'],
        ['Paid plan', 'Pro: $16.99 a month, or $8.33 a month billed yearly', 'Pro: €29.99 once, up to 3 Macs'],
        ['Runs on', 'Web, Mac, Windows, iPhone, Android', 'Mac, with Apple silicon and macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'The transcript, *live*, on your screen',
      lead: 'The call shows up, nchova asks once, and the transcript writes itself in a card only you can see: your microphone is “Me”, the call is everyone else.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'bill',
      h: 'Three years of *each*',
      lead: 'Otter Pro at its US prices, billed yearly or monthly, next to nchova Pro.',
      bill: {
        head: 'OTTER PRO',
        plans: [
          { tab: 'Yearly', sub: 'billed yearly, $99.99', every: 12, amount: 99.99 },
          { tab: 'Monthly', sub: 'billed monthly, $16.99', every: 1, amount: 16.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Over three years Otter Pro comes to $299.97 billed yearly, or $611.64 monthly; nchova Pro stays at €29.99.' },
      },
    },
    {
      kind: 'demo',
      h: 'Notes, *when the call ends*',
      lead: 'Written around what you jotted down, by the model you choose: Apple’s or Qwen on the Mac, or your own Claude Code or Codex. Then ask the meeting what was decided.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'When Otter is the *better choice*',
      p: [
        'If your team works in Otter together, shares conversations in channels and sends them to Salesforce or HubSpot, Otter is built for that. nchova keeps each person’s meetings on their own Mac, and in their own iCloud if they choose.',
        'If you need to record on a phone, in a browser on any computer, or on Windows, Otter is everywhere. nchova is a Mac app.',
        'If you want to play the recording back, Otter keeps the audio; nchova never keeps it, only the words.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *out loud*',
      items: [
        ['Does anyone in the call know nchova is transcribing?', 'Nothing appears in the call, because nchova is not in it. Where the law asks you to, tell the people you are talking to that you are transcribing.'],
        ['Can nchova import my Otter conversations?', 'No. nchova starts from your next meeting; your Otter exports stay yours.'],
        ['Does it work with Zoom, Meet and Teams?', 'With all of them, and with Slack, FaceTime, Webex and calls in the browser: nchova notices when one of them takes the microphone, and any other call starts from the menu bar. See [Zoom](@transcribe/zoom/), [Google Meet](@transcribe/google-meet/) and [Teams](@transcribe/teams/).'],
        ['Can I ask Claude or ChatGPT about my meetings?', 'Yes: nchova’s MCP server runs on your Mac and connects with one click. See [meetings in your assistant](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Otter pricing', 'https://otter.ai/pricing'],
    ['Otter Notetaker', 'https://help.otter.ai/hc/en-us/articles/4425393298327-Otter-Notetaker-Overview'],
    ['Otter desktop app', 'https://help.otter.ai/hc/en-us/articles/35973988280215-Otter-Desktop-App-Mac-Windows'],
    ['Privacy policy', 'https://otter.ai/privacy-policy'],
    ['Speaker identification', 'https://help.otter.ai/hc/en-us/articles/21665587209367-Speaker-Identification-Overview'],
    ['Supported languages', 'https://help.otter.ai/hc/en-us/articles/360047247414-Supported-languages'],
  ],
  checked: 'on 8 October 2026',
};

const granola: Guide = {
  id: 'granola',
  page: 'alternatives/granola/',
  group: 'compare',
  short: 'Granola',
  metaTitle: 'A Granola alternative that transcribes on your Mac — nchova',
  description:
    'nchova next to Granola: neither puts a bot in the call, but nchova transcribes on your Mac, not in the cloud, and writes the notes there too. Side by side.',
  kicker: 'nchova vs Granola',
  title: 'A Granola alternative that *keeps the call on your Mac*.',
  lead: 'Granola and nchova both stay out of the call: no bot, just your Mac listening. The difference is where it goes next. Granola streams the call to Deepgram or AssemblyAI and writes the notes with cloud models; nchova transcribes on the Mac and writes the notes there, unless you ask your own Claude Code to.',
  short3: [
    ['No bot, *both*', 'neither joins the call; both listen to your microphone and to the call’s audio.'],
    ['*Where* it is transcribed', 'Granola, in the cloud; nchova, on your Mac, offline too.'],
    ['*What* you pay', 'Granola is free for the last 30 days of notes; Business is $14 a month, every month. nchova is free with nothing hidden, or €29.99 once.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Where the call *goes*',
      lead: 'The same meeting, transcribed twice. With Granola the audio streams to a transcription service as people speak; with nchova it never leaves the Mac.',
      route: {
        meeting: true,
        title: 'Product sync',
        them: { tab: 'Granola', place: 'Deepgram or AssemblyAI, then OpenAI or Anthropic', what: 'the call’s audio, live; then the transcript, for the notes', back: 'text', sent: 'seconds of the call sent' },
        us: { tab: 'nchova', place: 'Transcribed on this Mac', sent: 'seconds of the call sent' },
        words: {
          ...routeWords,
          said: 'Julia: the page copy is done, only the animation is missing',
          written: 'Julia: The page copy is done, only the animation is missing.',
          label: 'A meeting transcribed with Granola streams to cloud services and back; with nchova it is transcribed on the Mac and nothing leaves.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Side by side',
      them: 'Granola',
      rows: [
        ['Bot in the call', 'None', 'None'],
        ['Where it transcribes', 'In the cloud: Deepgram, AssemblyAI', 'On your Mac'],
        ['Who writes the notes', 'Cloud models, from OpenAI and Anthropic among others', 'Apple’s model or Qwen on the Mac, or your own Claude Code or Codex'],
        ['Your transcripts', 'Kept on AWS in the US until you delete them; auto-delete optional', 'On your Mac, and in your own iCloud if you turn on sync'],
        ['Training', 'Anonymised data used by default on Basic and Business, with an opt-out', 'Nothing reaches us to train on'],
        ['When it starts', 'It notifies you of the call; it starts when you click, or open the meeting’s note', 'It notices the call and asks, or starts by itself'],
        ['Who is speaking', '“Me” and “Them”; names from the call app’s participants on desktop', 'Voice 1, Voice 2…, named by voice among the invitees (Pro)'],
        ['Dictation', 'Only to ask its Chat a question', 'Hold Fn, in any app'],
        ['Without internet', 'Transcription needs a connection', 'Works the same'],
        ['Free plan', 'Unlimited meetings; notes from the last 30 days visible', 'Unlimited, with Apple’s models; nothing hidden'],
        ['Paid plan', 'Business: $14 per user a month, billed monthly', 'Pro: €29.99 once, up to 3 Macs'],
        ['Account', 'Google or Microsoft sign-in', 'None'],
        ['Runs on', 'Mac, Windows, iPhone, Android', 'Mac, with Apple silicon and macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'Notes, *the Granola way*, on your Mac',
      lead: 'Jot a few words during the call; when it ends, the notes grow around them. Then ask the meeting: what did we decide, what do I have to do.',
      demo: { name: 'notes' },
    },
    {
      kind: 'bill',
      h: 'Three years of *each*',
      lead: 'Granola Business at its US price, billed monthly (Granola bills yearly only on Enterprise), next to nchova Pro.',
      bill: {
        head: 'GRANOLA BUSINESS',
        plans: [{ tab: 'Monthly', sub: 'billed monthly, $14', every: 1, amount: 14 }],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'Over three years Granola Business comes to $504; nchova Pro stays at €29.99.' },
      },
    },
    {
      kind: 'demo',
      h: 'Voices told apart *by their sound*',
      lead: 'Granola hears you and “them”, and on its desktop app takes names from Zoom, Meet and Teams. With Pro, nchova tells the other voices apart by their sound, in any call, and names the ones it has heard before, among the people invited.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'When Granola is the *better choice*',
      p: [
        'If your team shares notes in Granola’s spaces and sends them on to Notion, HubSpot or Attio, Granola is made for that, and it runs on Windows, iPhone and Android too. nchova keeps each person’s meetings on their own Mac.',
        'If you want the strongest cloud models writing every note, without setting anything up, Granola does it out of the box. In nchova the best notes come from your own Claude Code or Codex, with your subscription: the transcript then goes to Anthropic or OpenAI, and you choose who writes in **Settings › Notes**.',
        'If the reason you picked Granola was “no bot”, nchova keeps that, and takes the cloud out too.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *out loud*',
      items: [
        ['Does nchova work with Google Calendar and Outlook?', 'Yes, through the calendars your Mac knows: add the account to macOS for its calendar alone. [Here’s how](@help/calendar/).'],
        ['Can I use my own Claude for the notes?', 'Yes, with Pro: nchova runs your own Claude Code or Codex, signed in with your subscription, and the notes take seconds. No key passes through nchova.'],
        ['Does it start by itself?', 'It notices the call as soon as Zoom, Meet, Teams or Slack takes the microphone, and asks. Or set **When a call starts** to start transcribing by itself.'],
        ['Can I ask Claude or ChatGPT about my meetings?', 'Yes: nchova’s MCP server runs on your Mac and connects with one click. See [meetings in your assistant](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Granola pricing', 'https://www.granola.ai/pricing'],
    ['Security', 'https://www.granola.ai/security'],
    ['Transcription', 'https://docs.granola.ai/help-center/taking-notes/transcription'],
    ['Model training', 'https://docs.granola.ai/help-center/consent-security-privacy/model-training'],
    ['Speaker attribution', 'https://docs.granola.ai/help-center/taking-notes/speaker-attribution'],
  ],
  checked: 'on 8 October 2026',
};

const macwhisper: Guide = {
  id: 'macwhisper',
  page: 'alternatives/macwhisper/',
  group: 'compare',
  short: 'MacWhisper',
  metaTitle: 'A MacWhisper alternative for calls and dictation — nchova',
  description:
    'nchova next to MacWhisper: both transcribe on your Mac and are paid once. MacWhisper grew from files; nchova is built around your calls and your dictation.',
  kicker: 'nchova vs MacWhisper',
  title: 'A MacWhisper alternative *made for calls*.',
  lead: 'MacWhisper and nchova agree on the important part: transcription on your Mac, no bot, no subscription. They are made for different moments. MacWhisper shines with the recordings and files you already have; nchova lives in the calls you are about to have, and in every text field you dictate into.',
  short3: [
    ['On the Mac, *both*', 'both transcribe on your Mac and are paid once. Neither sends a bot.'],
    ['*Files* or *calls*', 'MacWhisper is built around files, batches and YouTube links; nchova around calls, live, with your calendar.'],
    ['€29.99 *or* €64', 'nchova Pro is €29.99 once; MacWhisper Pro is €64 once on its site. nchova’s free version transcribes meetings too.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'The call starts. *nchova asks*.',
      lead: 'nchova notices the call, names it after the calendar event, and writes the transcript live in a card on your screen. When you hang up, the notes are written.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Side by side',
      them: 'MacWhisper',
      rows: [
        ['Made for', 'Audio and video files, batches, YouTube links, subtitles', 'Calls as they happen, and dictation in any app'],
        ['Where it transcribes', 'On your Mac by default; cloud services with your own keys, if you want', 'On your Mac, always'],
        ['Meetings', 'Detects the call and records it, with a live transcript (Pro; its docs call detection beta)', 'Notices the call and asks; free'],
        ['Calendar', 'Not described in its docs', 'Names the meeting after the event and lists who was invited'],
        ['Who is speaking', 'Speakers told apart (Pro)', 'Voice 1, Voice 2…, named by voice among the invitees (Pro)'],
        ['Notes and chat', 'With your own API keys, or a local model through Ollama or LM Studio (Pro)', 'Written when the call ends: Apple’s model, free; Qwen on the Mac, or your own Claude Code or Codex (Pro)'],
        ['The audio', 'The recording is kept with the transcript', 'Never kept: only the text'],
        ['Dictation', 'Basic dictation free; better quality and AI prompts in Pro', 'Hold Fn, in any app; Parakeet with Pro'],
        ['AI assistants (MCP)', 'No MCP server in its docs; a command-line tool for scripts and AI agents', 'A local MCP server for your meetings, free'],
        ['Languages', 'About 100, with Whisper', '{nAll}: {nFree} free, {nPro} European ones with Pro; up to three at once, switching mid-sentence'],
        ['Price', 'Free; Pro €64 once (€65 at its Gumroad checkout)', 'Free; Pro €29.99 once, up to 3 Macs'],
        ['Runs on', 'macOS 15 or later, Apple silicon or Intel; a separate app on iPhone and iPad', 'macOS 26 or later, Apple silicon'],
      ],
    },
    {
      kind: 'demo',
      h: 'It knows *who* is speaking',
      lead: 'Both apps tell the voices apart. nchova also puts names on them, from the people invited, by the voices it has heard before; the voiceprints stay on your Mac.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'demo',
      h: 'Notes, *with no keys* to paste',
      lead: 'nchova writes the notes with Apple’s model on the Mac, or with Qwen, which it downloads and runs for you, or with your own Claude Code or Codex, signed in with your subscription. No API key to buy or paste.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'When MacWhisper is the *better choice*',
      p: [
        'If your work is recordings, interviews, podcasts, lectures, a folder of voice memos, MacWhisper is the tool: drop the files in, get transcripts and subtitles out. nchova does not transcribe files; it transcribes what you say and the calls you are in, as they happen.',
        'If you are on an Intel Mac or on macOS 15, MacWhisper runs there; nchova needs Apple silicon and macOS 26. And if you want to play the recording back, MacWhisper keeps the audio; nchova keeps only the words.',
        'Plenty of people will want both: MacWhisper for the files, nchova for the calls and the dictation.',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions, *out loud*',
      items: [
        ['Can nchova transcribe an audio file?', 'No. nchova transcribes live: your dictation, and the calls and meetings it hears. For files you already have, MacWhisper is made for it.'],
        ['Do both use Parakeet?', 'Yes: both can run NVIDIA’s Parakeet on the Mac with Pro. nchova uses it for dictation and meetings alike, in {nPro} European languages.'],
        ['Does nchova need an API key for the notes?', 'No. Apple’s model and Qwen run on the Mac; Claude Code and Codex use your own subscription, signed in once. No key passes through nchova.'],
        ['Can I try it first?', 'Thirty days with everything, no card and no account. Then it stays free with Apple’s models.'],
      ],
    },
  ],
  sources: [
    ['MacWhisper', 'https://www.macwhisper.com'],
    ['MacWhisper on Gumroad', 'https://goodsnooze.gumroad.com/l/macwhisper'],
    ['Recording meetings', 'https://docs.macwhisper.com/article/30-record-meetings'],
    ['Speaker recognition', 'https://docs.macwhisper.com/article/32-automatic-speaker-recognition-in-macwhisper'],
  ],
  checked: 'on 8 October 2026',
};

/** A notetaker bot, any of them, next to nchova: for the pages about one call app. */
const anyBot = (call: string): Bot => ({
  them: {
    tab: 'A notetaker bot',
    name: 'Notetaker',
    joined: 'Notetaker joined the meeting',
    banner: '',
    caption: 'A notetaker bot joins as a guest: everyone sees it, and the recording goes to its company’s cloud.',
  },
  us: { tab: 'nchova', caption: 'Nobody joins. nchova listens from your Mac, and the transcript stays on it.' },
  words: {
    switchLabel: 'Show',
    label: `A ${call} call with a notetaker bot joining as a guest, next to the same call with nchova, where nobody joins.`,
    call: 'Product sync',
    tiles: ['Julia', 'Mark', 'Sarah', 'Tom', 'Alex'],
    live: 'Live transcript',
    bubbles: [
      ['Julia', 'The page copy is done.', 'Voice 1'],
      ['', 'Great. And the animations?'],
      ['Mark', 'By Thursday, no wait, Friday.', 'Voice 2'],
    ],
  },
});

/** The meeting demo with another call app in the prompt, as the app writes it with a calendar event. */
const callIn = (service: string) => ({ ...base.meeting.demo, promptTitle: 'Product sync', promptSub: `Call in ${service}. Transcribe it?` });

/** What the meeting demo's notes say on the pages about one call app. */
const callNotes = (service: string): [string, string][] => [
  ['It notices the call', `as soon as ${service} holds the microphone for a few seconds, nchova asks whether to transcribe.`],
  ['With your calendar', 'the meeting takes the event’s name and its invitees, and the question comes two minutes early.'],
  ['Me and the others', `your microphone is “Me”; what your Mac plays, ${service} included, is everyone else.`],
  ['On your screen only', 'the pill and the transcript are on your Mac, not in the call: nobody sees them unless you share your whole screen.'],
];

const zoom: Guide = {
  id: 'zoom',
  page: 'transcribe/zoom/',
  group: 'use',
  short: 'Transcribe Zoom',
  metaTitle: 'Transcribe Zoom meetings on your Mac, without a bot — nchova',
  description:
    'Transcribe any Zoom call on your Mac, host or not, free plan or paid: no bot joins, the audio never leaves your Mac, and the notes are written when you hang up.',
  kicker: 'transcribe Zoom',
  title: 'Transcribe Zoom calls, *host or not*.',
  lead: 'Zoom’s own transcript needs a paid plan, and the host decides who gets it. nchova transcribes any Zoom call from your Mac: your microphone as you, the call’s audio as everyone else. No bot joins, the audio never leaves your Mac, and the notes are written when you hang up.',
  short3: [
    ['*Any* Zoom call', 'yours or someone else’s, on a free plan or a paid one: if you can hear it, nchova can transcribe it.'],
    ['*No* bot', 'nobody joins the meeting. nchova listens from your Mac, in the Zoom app or in the browser.'],
    ['Free', 'transcripts and notes with Apple’s models are free; Pro adds the voices told apart, Parakeet and better notes.'],
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
      h: 'What Zoom gives you, *and who decides*',
      p: [
        'Since May 2026 Zoom no longer lets you save live captions once a meeting ends. Its meeting transcript needs a Pro, Business or Enterprise account, stays off until a host or an admin turns it on, and a participant can only ask the host to start it. The transcript of a cloud recording needs a paid plan with cloud recording on. AI Companion’s summary is started by the host or a co-host, and everyone sees its icon light up.',
        'So when you are not the host, or the host is on Zoom’s free plan, you usually leave with no transcript at all. nchova does not ask Zoom for anything: it transcribes what your Mac plays and what your microphone hears.',
        'Zoom’s tools do one thing nchova does not: a transcript that belongs to the meeting and can be shared with everyone in it. nchova’s belongs to you.',
      ],
    },
    {
      kind: 'bot',
      h: 'A bot in the call, *or nobody*',
      lead: 'Notetaker bots get a transcript by joining the meeting as a guest. nchova needs no seat in the call.',
      bot: anyBot('Zoom'),
    },
    {
      kind: 'steps',
      h: 'Transcribe your next *Zoom* call',
      steps: [
        '[Download nchova](/download?from=zoom-steps) and open it. In the setup, under **For meetings**, connect the **Calendar** to name meetings after their events, and press **Ask now** next to **System audio**: that is how nchova hears the others.',
        'Join your Zoom call as usual, in the Zoom app or in the browser.',
        'When nchova asks, click **Transcribe**. Click the pill at the bottom of the screen to watch the transcript, or to jot your own notes.',
        'Hang up. nchova notices the call has ended, writes the notes, and keeps the meeting in **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'When you *hang up*',
      lead: 'The notes are written around what you jotted down. Then ask the meeting: what did we decide, what do I have to do, write the follow-up.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Questions about *Zoom*',
      items: [
        ['Does Zoom tell the others that nchova is transcribing?', 'No: nchova is not in the meeting, so Zoom has nothing to show. Where the law asks you to, tell the people in the call that you are transcribing.'],
        ['Do I need to be the host, or a paid Zoom plan?', 'No. nchova transcribes any call you are in, whatever the plan and whoever the host.'],
        ['Does it work with Zoom in the browser?', 'Yes. nchova tells a Zoom meeting from other tabs that use the microphone by the window’s title, and asks.'],
        ['With headphones or without?', 'Either. Without headphones, nchova takes the loudspeakers’ echo out of your microphone by itself, without touching what Zoom sends.'],
        ['Can it start by itself?', 'Yes: in **Settings › Meetings**, set **When a call starts** to **Start transcribing by itself**.'],
        ['Can I ask Claude about my Zoom calls?', 'Yes: nchova’s MCP server runs on your Mac and connects with one click. See [meetings in your assistant](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Saving captions ends', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085668'],
    ['Meeting transcripts', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085675'],
    ['Cloud recording transcripts', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927'],
    ['AI Companion meeting summary', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013'],
    ['AI Companion notice', 'https://library.zoom.com/ai-whitepaper/user-transparency-and-notice'],
  ],
  checked: 'on 8 October 2026',
};

const meet: Guide = {
  id: 'google-meet',
  page: 'transcribe/google-meet/',
  group: 'use',
  short: 'Transcribe Google Meet',
  metaTitle: 'Transcribe Google Meet on your Mac, with no bot — nchova',
  description:
    'Transcribe Google Meet calls on your Mac, on a free Gmail account and as a guest too: no bot, no extension, and the audio stays on the Mac.',
  kicker: 'transcribe Google Meet',
  title: 'Transcribe Google Meet, *even as a guest*.',
  lead: 'Google Meet’s transcripts and Gemini’s notes come with paid plans, and only people in the host’s organisation can start them. nchova transcribes any Meet call from your Mac, in Chrome, Safari, Arc or whichever browser you use: no bot, no extension, and the audio never leaves your Mac.',
  short3: [
    ['*Any* Meet', 'free Gmail or Workspace, host or guest: if you can hear the call, nchova transcribes it.'],
    ['*No* extension', 'nchova recognises a Meet call by the browser window’s title, and asks.'],
    ['*{nAll}* languages', '{nFree} free with Apple’s model, {nPro} European ones with Pro; a call that switches between two of yours is transcribed in both.'],
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
      h: 'What Meet gives you, *and to whom*',
      p: [
        'Meet’s transcripts need a Workspace edition from Business Standard up, or Workspace Individual, and cover eight languages. They are started by the host, or by someone in the host’s organisation, and saved to the organiser’s Drive. Gemini’s “Take notes for me” needs an eligible Workspace or Google AI plan on the organiser’s side, and one language per meeting. Everyone in the call sees an icon while either runs.',
        'A free Gmail account gets neither, and a guest from another company cannot start them. nchova does not need Meet’s permission: it transcribes what your Mac plays and what your microphone hears, in {nFree} languages free, or {nPro} European ones with Pro.',
      ],
    },
    {
      kind: 'demo',
      h: 'Voices told apart, *and named*',
      lead: 'With Pro, nchova tells the other voices apart as they speak, and names the ones it has heard before, among the people on the invitation.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'steps',
      h: 'Transcribe your next *Meet*',
      steps: [
        '[Download nchova](/download?from=google-meet-steps) and open it. In the setup, allow **Accessibility** (nchova also uses it to read the browser’s window titles), connect the **Calendar**, and press **Ask now** next to **System audio**.',
        'Join the Meet in your browser as usual.',
        'nchova sees the window titled “Meet – …” holding the microphone and asks: click **Transcribe**.',
        'Hang up. The notes are written, and the meeting waits in **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'faq',
      h: 'Questions about *Meet*',
      items: [
        ['Which browsers?', 'Chrome, Safari, Arc, Dia, Edge, Firefox, Brave, Vivaldi, Opera and Zen.'],
        ['Do I need a Chrome extension?', 'No. nchova tells a call from the other tabs by the window’s title, through the Accessibility permission it already has: no extension, no URL read, no network.'],
        ['Will it pop up when I use voice in ChatGPT or Google Docs?', 'Not while ChatGPT, Claude, Gemini, Google Docs, YouTube or the like is the tab in front. nchova asks when a window says it is a call, and also when nothing says either way; each “Not now” then keeps it quiet for longer.'],
        ['Does Google tell the others?', 'No: nchova is not in the meeting. Where the law asks you to, tell the people in the call that you are transcribing.'],
        ['Does it work on a free Gmail account?', 'Yes. nchova does not depend on your Google plan, or on the host’s.'],
      ],
    },
  ],
  sources: [
    ['Meet transcripts', 'https://support.google.com/meet/answer/12849897?hl=en'],
    ['Take notes for me', 'https://support.google.com/meet/answer/14754931?hl=en'],
    ['Meet features by plan', 'https://support.google.com/meet/answer/10459644?hl=en'],
  ],
  checked: 'on 8 October 2026',
};

const teams: Guide = {
  id: 'teams',
  page: 'transcribe/teams/',
  group: 'use',
  short: 'Transcribe Microsoft Teams',
  metaTitle: 'Transcribe Microsoft Teams calls on your Mac — nchova',
  description:
    'Transcribe Microsoft Teams calls on your Mac, as a guest or without Copilot: no bot joins, the audio never leaves your Mac, and the notes come when you hang up.',
  kicker: 'transcribe Teams',
  title: 'Transcribe Teams calls, *whoever organises them*.',
  lead: 'In Teams, transcription depends on the organiser’s company and its policies; a guest from outside cannot start it, and the AI recap needs a Teams Premium or Copilot licence. nchova transcribes any Teams call from your Mac, in the app or in the browser: no bot, no licence, and the audio never leaves your Mac.',
  short3: [
    ['*Any* Teams call', 'work or personal, organiser or guest: if you can hear it, nchova transcribes it.'],
    ['*No* licence', 'no Premium, no Copilot: notes written on the Mac, free with Apple’s model.'],
    ['*Yours*', 'the transcript is on your Mac, not in the organiser’s OneDrive.'],
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
      h: 'What Teams gives you, *and who decides*',
      p: [
        'Teams transcription is a policy of the organiser’s company. When it is on, the organiser and people from the same organisation can start it; guests from other companies and anonymous participants cannot. Everyone sees that the meeting is being transcribed, and the file goes to the organiser’s OneDrive, where colleagues can read it but, by default, not download it. The intelligent recap, with AI notes and tasks, needs a Teams Premium or Microsoft 365 Copilot licence. Personal Teams offers live captions, visible only to you.',
        'nchova is outside all of that: it transcribes what your Mac plays and what your microphone hears, and keeps it on your Mac.',
        'Before you transcribe a work call, check what your company allows, and tell the people in the call where the law asks you to.',
      ],
    },
    {
      kind: 'bot',
      h: 'A bot in the call, *or nobody*',
      lead: 'Many companies keep notetaker bots out of their meetings. nchova never asks to come in.',
      bot: anyBot('Teams'),
    },
    {
      kind: 'steps',
      h: 'Transcribe your next *Teams* call',
      steps: [
        '[Download nchova](/download?from=teams-steps) and open it. In the setup, connect the **Calendar** and press **Ask now** next to **System audio**.',
        'If your Teams calendar is a work Microsoft 365 account, add it to your Mac for its calendar alone: [here’s how](@help/calendar/).',
        'Join the Teams call, in the app or in the browser. When nchova asks, click **Transcribe**.',
        'Hang up. The notes are written, with the next steps, and the meeting waits in **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'The recap, *without Copilot*',
      lead: 'Notes and next steps written when the call ends, by Apple’s model on the Mac, by Qwen, or by your own Claude Code or Codex. Then ask the meeting what you have to do.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Questions about *Teams*',
      items: [
        ['Does Teams tell the others that nchova is transcribing?', 'No: nchova is not in the meeting, so Teams has nothing to show. Where the law, or your company, asks you to, tell the people in the call.'],
        ['Does it work with Teams in the browser?', 'Yes: nchova recognises a Teams meeting by the browser window’s title, and asks.'],
        ['Does it work with personal Teams?', 'Yes. nchova does not depend on the Teams plan, yours or the organiser’s.'],
        ['My Outlook calendar is not in nchova. Why?', 'nchova reads the calendars your Mac knows. Add your work account to macOS for its calendar alone: [here’s how](@help/calendar/).'],
        ['Can it start by itself?', 'Yes: in **Settings › Meetings**, set **When a call starts** to **Start transcribing by itself**.'],
      ],
    },
  ],
  sources: [
    ['Live transcription in Teams', 'https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings'],
    ['Transcription policies', 'https://learn.microsoft.com/en-us/microsoftteams/meeting-transcription-captions'],
    ['Intelligent recap', 'https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings'],
    ['Captions in personal Teams', 'https://support.microsoft.com/en-us/teams/free/meetings/live-captions-in-microsoft-teams-free'],
  ],
  checked: 'on 8 October 2026',
};

// ---------- All together ----------

const guides: Guides = {
  words: {
    compare: 'Compare',
    use: 'Guides',
    inShort: 'In short',
    sources: 'Checked',
    home: 'nchova',
    cta: 'Try nchova free for 30 days',
    ctaNote: 'no card, no account',
    meta: 'macOS 26 · Apple silicon Mac',
    more: 'Read next',
    us: 'nchova',
    hubLink: 'All comparisons',
  },
  hub: {
    page: 'alternatives/',
    metaTitle: 'nchova compared with Wispr Flow, Otter, Granola and more',
    description:
      'How nchova compares with Wispr Flow, Superwhisper, MacWhisper, Otter and Granola: where each one transcribes, whether a bot joins the call, and what it costs.',
    kicker: 'compare',
    title: 'nchova *next to* the others.',
    lead: 'Dictation apps and meeting notetakers, on one table: what each one does, where it turns your voice into text, whether a bot joins your calls, and how you pay. Every name opens its own page, with the details and where they come from.',
    cols: ['App', 'What it does', 'Where it transcribes', 'Bot in the call', 'Price'],
    us: { does: 'Dictation, meetings, notes, MCP', where: 'On your Mac', bot: 'Never', price: 'Free; Pro €29.99 once' },
    rows: [
      { id: 'wispr-flow', does: 'Dictation; meetings with Notetaker', where: 'In its cloud', bot: 'None', price: 'Free; Pro $15 a month, or $144 a year' },
      { id: 'superwhisper', does: 'Dictation, AI modes; a meeting mode', where: 'On the Mac or in the cloud, per mode', bot: 'None', price: 'Free; Pro $84.99 a year, or $249.99 for life' },
      { id: 'macwhisper', does: 'Files; meetings and dictation', where: 'On the Mac; cloud with your own keys', bot: 'None', price: 'Free; Pro €64 once' },
      { id: 'otter', does: 'Meeting notes', where: 'In its cloud', bot: 'Notetaker joins as a guest; botless on desktop', price: 'Free; Pro $16.99 a month, or $99.99 a year' },
      { id: 'granola', does: 'Meeting notes', where: 'In the cloud', bot: 'None', price: 'Free; Business $14 a month' },
    ],
  },
  list: [wisprFlow, otter, granola, superwhisper, macwhisper, zoom, meet, teams, offline, multilingual, mcp],
};

export default guides;
