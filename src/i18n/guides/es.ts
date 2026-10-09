// Las guías, en español. Tipos y marcado en ./types.ts.
// Las etiquetas de la app nchova se quedan en inglés, como las muestra la app; las de macOS, como las muestra macOS en español.

import base from '../es';
import type { Bot, Guide, Guides } from './types';

const dictation = base.dictation.demo;
const assistants = base.assistants.demo;
const settingsTabs = base.calendarPage.demo.app.tabs;

// ---------- Lo que se hace con nchova ----------

const offline: Guide = {
  id: 'offline',
  page: 'dictation/offline/',
  group: 'use',
  short: 'Dictado sin conexión',
  metaTitle: 'Dictado sin conexión en Mac, en cualquier app — nchova',
  description:
    'Dicta sin internet en cualquier app del Mac: nchova pasa la voz a texto en el propio Mac, con el modelo de Apple o Parakeet de NVIDIA. Tu voz nunca sale de él.',
  kicker: 'dictado sin conexión',
  title: 'Un dictado que funciona *con el Wi‑Fi apagado*.',
  lead: 'nchova convierte tu voz en texto en el propio Mac, así que escribe en cualquier app en un avión, en un tren o detrás del cortafuegos de tu empresa. No se sube nada y nada espera a un servidor: mantén pulsada Fn, habla, suelta.',
  short3: [
    ['Sí, *totalmente* sin conexión', 'cuando sus modelos ya están en el Mac, el dictado no necesita ninguna conexión. No es un modo de emergencia: es el único modo que hay.'],
    ['En *cualquier* app', 'el texto aparece donde está el cursor: Mail, Slack, Notion, la terminal, un formulario en el navegador.'],
    ['Gratis', 'con el modelo de voz de Apple, en {nFree} idiomas, para siempre. Parakeet, el modelo de NVIDIA, viene con Pro: {nPro} idiomas europeos.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        offline: 'Wi‑Fi: desactivado',
        data: {
          ...dictation,
          doc: 'En el tren',
          scripts: [
            {
              spoken: 'el tren llega a las siete, así que te llamo desde la estación',
              marks: [],
              written: 'El tren llega a las siete, así que te llamo desde la estación.',
            },
            {
              spoken: 'he subido la corrección y actualizado la configuración jason para la nueva versión',
              marks: [{ kind: 'fix', from: 'jason', to: 'JSON' }],
              written: 'He subido la corrección y actualizado la configuración JSON para la nueva versión.',
            },
            {
              spoken: 'notas para la charla: empiezo con la demo, luego las cifras y al final las preguntas',
              marks: [],
              written: 'Notas para la charla: empiezo con la demo, luego las cifras y al final las preguntas.',
            },
          ],
        },
      },
      notes: [
        ['Sin conexión', 'el Wi‑Fi está apagado y el texto llega igual, tan rápido como en casa.'],
        ['Donde está el cursor', 'cualquier app, cualquier campo de texto. Si no hay dónde escribir, el texto te espera en el portapapeles: ⌘V.'],
        ['Mantén pulsado, sin clics', 'mantén pulsada Fn, o la tecla Opción de la derecha, mientras hablas. Sueltas y nchova escribe.'],
        ['Tus palabras', 'nombres y siglas escritos a tu manera, también sin conexión: «jason» se convierte en JSON.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Qué funciona en el Mac, y qué necesita internet *una vez*',
      p: [
        'Todo lo que nchova hace con tu voz ocurre en tu Mac: el dictado, la transcripción de las reuniones y las notas, cuando las escribe el modelo de Apple o Qwen. Nada de eso llama a un servidor, así que le da igual si tienes conexión o no.',
        'Internet hace falta unas pocas veces, y nunca para tu voz: para descargar un modelo la primera vez (macOS descarga cada idioma para el motor de Apple; Parakeet ocupa unos 480 MB, una sola vez), para activar Pro y para buscar actualizaciones. Después, apaga el Wi‑Fi y olvídate.',
        'Tres cosas van por internet por naturaleza, y solo si tú las eliges: las notas que escribe tu propio Claude Code o Codex, que envían la transcripción de la reunión a Anthropic o a OpenAI; un asistente en la nube, como Claude o ChatGPT, conectado a tus reuniones, que envía lo que lee a su propio modelo; y la sincronización de tus reuniones entre tus Mac a través de iCloud (Pro).',
      ],
    },
    {
      kind: 'points',
      h: 'Dos motores, *los dos* en el Mac',
      lead: 'Elige uno en Settings › Dictation. El que elijas también transcribe tus reuniones.',
      items: [
        ['Reconocimiento de voz de Apple', 'integrado en macOS: nada nuestro que descargar, dicta desde el primer minuto, en {nFree} idiomas. Gratis, para siempre.'],
        ['Parakeet', 'el modelo de voz de NVIDIA, unos 480 MB una sola vez, en {nPro} idiomas europeos, incluidos algunos que Apple no tiene, como {proOnly}. Mientras se descarga, sigue dictando Apple.', 'pro'],
        ['Sin límite de tiempo', 'mantén pulsada la tecla mientras hablas; nchova lo transcribe todo cuando la sueltas.'],
      ],
    },
    {
      kind: 'steps',
      h: 'Prepáralo antes de quedarte sin cobertura',
      steps: [
        '[Descarga nchova](/download?from=offline-steps) y ábrelo. Te pide los permisos de **Microphone** y **Accessibility**, y que pongas **Pulsar la tecla 🌐 para** en **No hacer nada**, para que Fn sea de nchova y no del dictado de macOS.',
        'Elige tus idiomas, hasta tres. Deja que macOS los descargue, o que nchova descargue Parakeet, mientras todavía tienes conexión.',
        'Apaga el Wi‑Fi y pruébalo: mantén pulsada **Fn**, habla, suelta.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas, *sin conexión*',
      items: [
        ['¿nchova funciona en un avión?', 'Sí. El dictado y la transcripción de reuniones funcionan en el Mac: con los modelos descargados, no necesita ninguna conexión.'],
        ['¿El dictado sin conexión es menos preciso?', 'Es el mismo dictado: nchova no tiene modo en línea. El modelo que escribe en el avión es el mismo que escribe en tu mesa.'],
        ['¿Envía algo cuando vuelvo a tener conexión?', 'Nunca tu voz. Con conexión, nchova busca actualizaciones y, de vez en cuando, comprueba tu licencia Pro: la clave y el nombre del Mac, nada más. Todo lo demás lo has activado tú: la sincronización con iCloud envía tus reuniones a tus otros Mac, y Claude Code o Codex, si escriben tus notas, reciben la transcripción de cada reunión nueva.'],
        ['¿Hay límite de tiempo?', 'No. Mantén pulsada la tecla mientras hablas; nchova lo transcribe todo cuando la sueltas.'],
        ['¿Y las reuniones, sin conexión?', 'Funcionan igual: una reunión alrededor de una mesa, con el Mac en el centro, se transcribe sin red, y sus notas se escriben en el Mac.'],
      ],
    },
  ],
};

const multilingual: Guide = {
  id: 'multilingual',
  page: 'dictation/multilingual/',
  group: 'use',
  short: 'Dictado en varios idiomas',
  metaTitle: 'Dictado multilingüe en Mac, a mitad de frase — nchova',
  description:
    'Dicta en español, inglés, francés o alemán y cambia de idioma a mitad de frase: nchova reconoce cuál hablas y lo escribe en tu Mac. {nAll} idiomas, sin conexión.',
  kicker: 'dictado multilingüe',
  title: 'Habla *todos* tus idiomas. nchova te sigue.',
  lead: 'Elige hasta tres idiomas y habla sin más: nchova reconoce cuál estás usando, frase a frase e incluso a mitad de frase, y lo escribe donde está el cursor. Sin cambiar de teclado, sin tocar ningún ajuste, sin enviar nada a ninguna parte.',
  short3: [
    ['*{nAll}* idiomas', '{nFree} gratis con el modelo de Apple, {nPro} europeos con Parakeet (Pro), cada uno contado una vez.'],
    ['*Tres* a la vez', 'nchova escucha todos los que has elegido y se queda con el que estás hablando.'],
    ['*A mitad de frase*', '«La reunión es mañana a las diez, so please send the deck tonight» sale tal como lo has dicho.'],
  ],
  blocks: [
    {
      kind: 'demo',
      demo: {
        name: 'dictation',
        data: {
          ...dictation,
          doc: 'Mensajes',
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
              spoken: 'kannst du mir das angebot schicken? lo necesito antes de la llamada',
              marks: [
                { kind: 'lang', from: 'kannst du mir das angebot schicken?', to: 'DE' },
                { kind: 'lang', from: 'lo necesito antes de la llamada', to: 'ES' },
              ],
              written: 'Kannst du mir das Angebot schicken? Lo necesito antes de la llamada.',
            },
            {
              spoken: 'on se voit à midi devant la gare, y luego tomamos el tren juntos',
              marks: [
                { kind: 'lang', from: 'on se voit à midi devant la gare,', to: 'FR' },
                { kind: 'lang', from: 'y luego tomamos el tren juntos', to: 'ES' },
              ],
              written: 'On se voit à midi devant la gare, y luego tomamos el tren juntos.',
            },
          ],
        },
      },
      notes: [
        ['Automático', 'nchova escucha todos tus idiomas a la vez y escribe el que has hablado.'],
        ['O fijo', 'deja un solo idioma siempre activo y cámbialo en los ajustes cuando necesites otro.'],
        ['Tu vocabulario', 'nombres y siglas escritos a tu manera: «gira» se convierte en Jira, y puedes añadir cómo los oye el motor.'],
      ],
    },
    {
      kind: 'prose',
      h: 'Cómo distingue *tus idiomas*',
      p: [
        'Con el motor de Apple, nchova ejecuta un reconocedor por cada idioma que has elegido, todos a la vez, sobre el mismo audio. Cuando sueltas la tecla, los compara: lo seguro que estaba cada uno de sus palabras y cuánto se parece su texto a su propio idioma. Escribe el mejor. Si cambias de idioma por el camino, hace la misma elección tramo a tramo.',
        'Con Parakeet (Pro), un solo modelo conoce {nPro} idiomas europeos y escribe lo que ha oído; nchova lee el resultado para saber cuál de los tuyos era.',
        'Cuantos menos idiomas tengas, más segura es la elección: por eso el límite es tres. Un tramo largo en el otro idioma, o uno al final de la frase, sale bien; dos palabras en inglés entre dos frases en polaco pueden salir en polaco. Los nombres y los términos que usas en todos tus idiomas van en el vocabulario.',
      ],
    },
    {
      kind: 'points',
      h: 'Los idiomas',
      items: [
        ['Gratis, con el modelo de Apple', '{free}.'],
        ['Con Pro, Parakeet', '{pro}.', 'pro'],
        ['La app', 'los menús y los ajustes de nchova, igual que nuestro soporte, están en inglés y en italiano, dictes en el idioma que dictes.'],
      ],
    },
    {
      kind: 'prose',
      h: '¿Y las reuniones en *dos idiomas*?',
      p: [
        'Funcionan igual: nchova reconoce cada frase en el idioma en que se dijo, así que una llamada que alterna entre el español y el inglés se transcribe en los dos. Un comentario breve en otro idioma se reconoce como si fuera del idioma principal de la reunión.',
        'Las notas se escriben en el idioma de la reunión, y puedes preguntarle en otro: en español, inglés, italiano, francés, alemán, portugués, neerlandés, japonés, coreano o chino, «¿Qué decidimos?» recibe la respuesta en el idioma de la pregunta.',
      ],
    },
    {
      kind: 'steps',
      h: 'Elige tus idiomas',
      steps: [
        'En nchova, abre **Settings › Dictation** y, en **Recognition**, haz clic en **Add a language…**. Elige hasta tres.',
        'Deja **Language** en **Automatic**: nchova los escucha todos a la vez.',
        'Mantén pulsada **Fn** y habla como hablas siempre.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas en *todos* los idiomas',
      items: [
        ['¿Puedo mezclar dos idiomas en la misma frase?', 'Sí, cuando cada parte tiene más de un par de palabras: nchova decide tramo a tramo. Si es una sola palabra extranjera dentro de una frase, mejor añádela al vocabulario.'],
        ['¿Qué idiomas son gratis?', 'Con el modelo de Apple: {free}. Pro añade Parakeet y los idiomas que solo conoce él, como {proOnly}.'],
        ['¿Por qué tres como máximo?', 'Con el motor de Apple, cada idioma en Automatic es un reconocedor más que escucha cada dictado; con Parakeet, un idioma más que distinguir. Con tres, la elección sigue siendo segura y el Mac sigue yendo rápido: para dictar en otro, quita uno de los tres.'],
        ['¿Funciona sin conexión en todos los idiomas?', 'Sí: los dos motores funcionan en el Mac. La primera vez, macOS descarga el idioma para el motor de Apple, o nchova descarga Parakeet, una sola vez.'],
      ],
    },
  ],
};

const mcp: Guide = {
  id: 'mcp',
  page: 'mcp/',
  group: 'use',
  short: 'Reuniones en Claude y ChatGPT (MCP)',
  metaTitle: 'Tus reuniones en Claude y ChatGPT, vía MCP — nchova',
  description:
    'Servidor MCP local de nchova: Claude, ChatGPT, Cursor y otros asistentes buscan y leen las transcripciones de tus reuniones, en tu Mac. Gratis, con un clic.',
  kicker: 'servidor MCP',
  title: 'Pregúntale a tu asistente *por tus reuniones*.',
  lead: 'nchova transcribe tus llamadas en el Mac y se las pasa a tu asistente de IA mediante un servidor MCP local. Claude, ChatGPT, Cursor y los demás buscan lo que se dijo, resumen tu semana, te dicen quién tiene que hacer qué y guardan notas en nchova. No hay ningún servidor nuestro en medio: no tenemos ninguno.',
  short3: [
    ['*Un* clic', 'Settings › Assistants › Connect: nchova se añade a la configuración de tu asistente y guarda una copia de cada archivo que cambia.'],
    ['Las reuniones, *nunca* el dictado', 'el asistente lee transcripciones y notas; lo que dictas queda fuera de su alcance.'],
    ['Gratis', 'el servidor MCP viene con la versión gratuita, para siempre, con Pro o sin él.'],
  ],
  blocks: [
    {
      kind: 'connect',
      h: 'Conéctalo *una vez*',
      lead: 'nchova encuentra los asistentes que tienes en el Mac y configura cada uno con un clic. A las apps en las que no puede escribir les da una configuración para pegar.',
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
        label: 'Settings › Assistants de nchova: se hace clic en Connect junto a Claude y luego junto a Cursor, y cada uno muestra Connected.',
      },
    },
    {
      kind: 'demo',
      h: 'Luego, *pregunta*',
      lead: 'El asistente elige las herramientas por su cuenta: el resumen de la semana, las tareas que cada uno se ha comprometido a hacer, todo sobre una persona, las palabras exactas de alguien.',
      demo: {
        name: 'assistants',
        data: {
          ...assistants,
          q1: '¿Qué prometí hacer esta semana?',
          calls1: [['digest', '{ "from": "2026-10-05" }', '6 reuniones · 9 tareas']],
          a1: 'Tres cosas: responder a los testers (*Reunión de producto*, martes), enviar al cliente el presupuesto revisado (miércoles) y la presentación para la revisión del jueves.',
          cite: 'Reunión de producto · 1:06',
          q2: 'Llamo a Sara dentro de cinco minutos. ¿De qué se encargó?',
          calls2: [['find_person', '{ "name": "Sara" }', '4 reuniones · 2 tareas']],
          a2: 'De dos cosas: la newsletter, que dijo que enviaría el lunes a las 10, y la página de precios, que le pediste que revisara.',
        },
      },
      notes: [
        ['Busca', 'lo que alguien dijo, palabra por palabra, en todas las reuniones.'],
        ['Resume', 'la semana, o el mes: reuniones, personas, temas y tareas.'],
        ['En directo', 'también la reunión en curso: «¿qué acaban de decidir?»'],
        ['Guarda', 'las notas y las tareas que escribe el asistente aparecen en nchova.'],
      ],
    },
    {
      kind: 'points',
      h: 'Las *diez* herramientas',
      lead: 'Lo que ofrece el servidor MCP de nchova. El asistente lee sus descripciones y elige.',
      items: base.assistants.tools.list.map(([name, what]) => [name, `${what}.`]),
    },
    {
      kind: 'prose',
      h: 'Cómo funciona, y *qué va adónde*',
      p: [
        'El servidor MCP es un pequeño programa dentro de nchova. Tu asistente lo arranca en tu Mac y habla con él a través de una tubería (stdio): sin red, sin puertos, sin ningún token que se pueda filtrar. Lee la misma base de datos en la que escribe la app, así que responde incluso con nchova cerrado.',
        'Solo comparte reuniones: transcripciones, notas, tareas, títulos y los nombres de las voces. Tus dictados nunca están ahí, y el audio tampoco, porque nchova no lo guarda.',
        'Lo que pase después depende del asistente. Claude, ChatGPT y los demás asistentes en la nube envían lo que leen a sus propios modelos, igual que con cualquier cosa que pegues en un chat. Un modelo local, en LM Studio por ejemplo, lo deja todo en el Mac.',
      ],
    },
    {
      kind: 'steps',
      h: 'Conecta tu asistente',
      steps: [
        '[Descarga nchova](/download?from=mcp-steps) y deja que transcriba una o dos reuniones.',
        'Abre **Settings › Assistants**. Arriba aparecen los asistentes que tienes en el Mac.',
        'Haz clic en **Connect** junto al tuyo. nchova se añade a la configuración del asistente: guarda una copia del archivo antes de cambiarlo o, con Claude Code y Codex, usa su propio comando.',
        'Haz lo que nchova te indique a continuación (con Claude: ciérralo y vuelve a abrirlo) y luego pregunta por tus reuniones.',
        'Para Perplexity, Raycast, Zed, Goose y cualquier otra app que hable MCP, **Copy setup** pone en el portapapeles lo que hay que pegar.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas sobre *MCP*',
      items: [
        ['¿Qué es MCP?', 'El Model Context Protocol: un estándar abierto que permite a los asistentes de IA usar herramientas y datos de tu equipo. nchova lo habla, así que cualquier asistente que también lo hable puede leer tus reuniones.'],
        ['¿Qué asistentes funcionan?', 'Claude, Claude Code, ChatGPT y Codex, Cursor, VS Code, Windsurf, Gemini CLI y LM Studio se conectan con un clic; Perplexity, Raycast, Zed y Goose, con una configuración para pegar; y cualquier app que ejecute un servidor MCP local (stdio).'],
        ['¿Necesito Pro?', 'No. El servidor MCP es gratis, para siempre.'],
        ['¿Puede el asistente cambiar o borrar mis reuniones?', 'Puede guardar notas y tareas, que sustituyen a las que tenía la reunión, incluso a notas que hayas editado tú, y corregir el título de una reunión, sus invitados o los nombres de sus voces. No puede borrar una reunión ni tocar su transcripción, y un título o un nombre de voz que hayas puesto tú nunca se sobrescribe.'],
        ['¿Funciona durante una reunión?', 'Sí: el asistente puede leer lo que se ha dicho hasta ahora, o solo los últimos minutos.'],
        ['¿Mis reuniones llegan a nchova?', 'No tienen adónde llegar: nchova no tiene servidores. El asistente habla con nchova en tu Mac.'],
      ],
    },
  ],
};


// ---------- nchova junto a los demás ----------

/** Las palabras de todos los tiques: los meses, las líneas. */
const billWords = {
  month: 'mes',
  months: 'meses',
  total: 'Total',
  once: 'nchova Pro, pago único',
  year: 'Año {n}, actualizaciones',
  nothing: '0,00 €',
  switchLabel: 'Facturación',
};

const routeWords = { mac: 'Tu Mac', switchLabel: 'Mostrar' };

const wisprFlow: Guide = {
  id: 'wispr-flow',
  page: 'alternatives/wispr-flow/',
  group: 'compare',
  short: 'Wispr Flow',
  metaTitle: 'Alternativa a Wispr Flow que funciona en tu Mac — nchova',
  description:
    'nchova frente a Wispr Flow: dictado por voz en tu Mac, sin conexión, sin cuenta y sin suscripción. Comparamos adónde va tu voz y cuánto cuesta cada uno.',
  kicker: 'nchova vs Wispr Flow',
  title: 'Una alternativa a Wispr Flow que *se queda en tu Mac*.',
  lead: 'Wispr Flow es un teclado por voz muy cuidado, y funciona enviando lo que dices a su nube. nchova hace el mismo trabajo (mantienes pulsada una tecla, hablas y el texto aparece en cualquier app) con el modelo de voz en tu Mac: sin conexión, sin cuenta y, si pagas, pagas una sola vez.',
  short3: [
    ['*Dónde* escucha', 'Wispr Flow transcribe en su nube, siempre. nchova transcribe en tu Mac, siempre.'],
    ['*Qué* guarda', 'En Free y Pro, Wispr Flow guarda los dictados y entrena con ellos por defecto, salvo que lo desactives. nchova solo los guarda en tu Mac: no tiene servidores adonde enviarlos.'],
    ['*Cuánto* pagas', 'Wispr Flow Pro cuesta 15 US$ al mes, o 144 US$ al año. nchova es gratis, o 29,99 € una sola vez por Pro.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Adónde *va* tu voz',
      lead: 'La misma frase, dictada dos veces. Wispr Flow la envía a sus servidores, junto con la app en la que estás y el texto que rodea el cursor, y escribe lo que vuelve. nchova se la pasa a un modelo de voz en el Mac.',
      route: {
        title: 'Notas',
        them: { tab: 'Wispr Flow', place: 'La nube de Wispr, en EE. UU.', what: 'tu voz, el nombre de la app, el texto alrededor del cursor', back: 'texto', sent: 'segundos de tu voz enviados' },
        us: { tab: 'nchova', place: 'Modelo de voz, en este Mac', sent: 'segundos de tu voz enviados' },
        words: {
          ...routeWords,
          said: 'movamos el lanzamiento al viernes a las diez',
          written: 'Movamos el lanzamiento al viernes a las diez.',
          label: 'Una frase dictada con Wispr Flow viaja a sus servidores y vuelve; con nchova va a un modelo en el Mac y no sale nada.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Frente a frente',
      them: 'Wispr Flow',
      rows: [
        ['Dónde transcribe', 'En la nube de Wispr: «transcription always occurs on the cloud»', 'En tu Mac'],
        ['Sin internet', 'Sin dictado: «an internet connection is required for transcription»; guarda el audio para reintentarlo', 'Funciona igual'],
        ['Qué se envía con tu voz', 'Con Context Awareness, activado por defecto: la app, el cuadro de texto, el texto en pantalla', 'No se envía nada'],
        ['Tus dictados', 'Almacenamiento en la nube y entrenamiento de modelos activados por defecto en Free y Pro; los dos se pueden desactivar', 'Solo en tu Mac: no tenemos servidores'],
        ['Cuenta', 'Obligatoria', 'Ninguna'],
        ['Idiomas', 'Más de 100, uno por dictado: «the dominant language wins»', '{nAll}, {nFree} de ellos gratis; hasta tres a la vez, cambiando a mitad de frase'],
        ['Reuniones', 'Notetaker: sin bot; los nombres de quien habla salen de la invitación, también en Free; transcritas y guardadas en la nube de Wispr', 'Sin bot; transcritas en tu Mac, con las voces distinguidas (Pro)'],
        ['Asistentes de IA (MCP)', 'Servidor alojado por ellos, para reuniones y notas', 'Servidor local, para las reuniones; nunca tu dictado'],
        ['Plan gratuito', '2000 palabras a la semana en las apps de escritorio', 'Sin límite de palabras, con el modelo de Apple'],
        ['Plan de pago', 'Pro: 15 US$ al mes, o 144 US$ al año', 'Pro: 29,99 € una sola vez, hasta 3 Mac'],
        ['Funciona en', 'Mac, Windows, iPhone, Android', 'Mac con chip de Apple y macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Tres años de *cada uno*',
      lead: 'Wispr Flow Pro a sus precios de EE. UU., con facturación anual o mensual, junto a nchova Pro. Elige cómo pagar y mira pasar los meses.',
      bill: {
        head: 'WISPR FLOW PRO',
        plans: [
          { tab: 'Anual', sub: 'facturado cada año, 144 US$', every: 12, amount: 144 },
          { tab: 'Mensual', sub: 'facturado cada mes, 15 US$', every: 1, amount: 15 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'En tres años, Wispr Flow Pro suma 432 US$ con facturación anual, o 540 US$ con la mensual; nchova Pro se queda en 29,99 €, pagados una sola vez.' },
      },
    },
    {
      kind: 'demo',
      h: 'El mismo gesto. *Pruébalo*.',
      lead: 'Mantén pulsada una tecla, habla, suelta: como ya dictas con Wispr Flow. Mantén pulsada la tecla que hay bajo la ventana y la siguiente frase es tuya.',
      demo: { name: 'dictation' },
      notes: base.dictation.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Cuándo Wispr Flow es la *mejor opción*',
      p: [
        'Si dictas en Windows, en un iPhone o en Android además de en el Mac, Wispr Flow te sigue a todas partes. nchova es solo para Mac: Mac con chip de Apple y macOS 26 o posterior.',
        'Si escribes en un idioma que no conocen ni Apple ni Parakeet, los más de cien idiomas de Wispr Flow cubren más terreno. Y sus comandos, que reescriben por voz el texto seleccionado, no tienen equivalente en nchova, que escribe lo que has dicho y nunca añade una palabra.',
        'Si nada de eso va contigo, el cambio es sencillo: el mismo gesto, sin que tu voz salga del Mac, sin cuenta, sin suscripción.',
      ],
    },
    {
      kind: 'steps',
      h: 'Si vienes de Wispr Flow',
      steps: [
        'Cierra Wispr Flow, para que no haya dos apps escuchando la misma tecla.',
        '[Descarga nchova](/download?from=wispr-flow-steps) y sigue su configuración: **Microphone**, **Accessibility** y **Pulsar la tecla 🌐 para** en **No hacer nada**.',
        'Elige tus idiomas, hasta tres, y añade los nombres y las siglas que usas en **Settings › Vocabulary**.',
        'Mantén pulsada **Fn**, o la tecla Opción de la derecha, y habla.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas, *en voz alta*',
      items: [
        ['¿nchova es tan preciso como Wispr Flow?', 'Pruébalo con tu propia voz: la prueba lo incluye todo durante 30 días. nchova usa el modelo de voz de Apple o Parakeet de NVIDIA en tu Mac; Wispr Flow usa su propio modelo en su nube.'],
        ['¿Necesito una cuenta?', 'No. Descargas nchova y funciona. Pro es una clave de licencia que te llega por correo electrónico.'],
        ['¿nchova funciona en Windows o en un iPhone?', 'No: está hecho para Mac con chip de Apple y macOS 26 o posterior.'],
        ['¿Funciona también en reuniones?', 'Sí, y sin bot: nchova detecta la llamada, la transcribe en el Mac, distingue las voces (Pro) y escribe las notas cuando cuelgas. Mira [cómo transcribe una llamada de Zoom](@transcribe/zoom/).'],
        ['¿Qué pasa después de la prueba?', 'nchova sigue siendo gratis con los modelos de Apple: dictado, reuniones, notas. Pro añade Parakeet, las voces distinguidas y con nombre, las mejores notas y la sincronización con iCloud, por 29,99 € una sola vez.'],
      ],
    },
  ],
  sources: [
    ['Precios de Wispr Flow', 'https://wisprflow.ai/pricing'],
    ['Control de datos', 'https://wisprflow.ai/data-controls'],
    ['Preguntas frecuentes sobre seguridad y cumplimiento', 'https://docs.wisprflow.ai/articles/3467817258-security-and-compliance-faq'],
    ['Context Awareness', 'https://docs.wisprflow.ai/articles/4678293671-feature-context-awareness'],
    ['Varios idiomas', 'https://docs.wisprflow.ai/articles/3191899797-use-flow-with-multiple-languages'],
    ['Qué es Flow', 'https://docs.wisprflow.ai/articles/2772472373-what-is-flow'],
    ['Precisión y limitaciones conocidas', 'https://docs.wisprflow.ai/articles/4048537120-what-to-expect-from-flow-accuracy-and-known-limitations'],
    ['Notetaker', 'https://wisprflow.ai/notetaker'],
  ],
  checked: 'el 8 de octubre de 2026',
};

const superwhisper: Guide = {
  id: 'superwhisper',
  page: 'alternatives/superwhisper/',
  group: 'compare',
  short: 'Superwhisper',
  metaTitle: 'Alternativa a Superwhisper para llamadas y dictado — nchova',
  description:
    'nchova frente a Superwhisper: los dos dictan en tu Mac. nchova además detecta tus llamadas, sigue tu calendario y escribe las notas. Pro: 29,99 € una sola vez.',
  kicker: 'nchova vs Superwhisper',
  title: 'Una alternativa a Superwhisper, *también para tus reuniones*.',
  lead: 'Superwhisper y nchova ponen un modelo de voz en tu Mac, y los dos escriben donde está el cursor. La diferencia es lo que pasa alrededor de una llamada: nchova la detecta y te ofrece transcribirla, sigue tu calendario, oye a las dos partes incluso en el plan gratuito y escribe las notas cuando cuelgas. Y Pro cuesta 29,99 €, una sola vez.',
  short3: [
    ['Dictado, *los dos*', 'Superwhisper usa modelos locales o en la nube, según el modo; nchova funciona solo en el Mac.'],
    ['Reuniones, *por su cuenta*', 'Superwhisper tiene un modo reunión que inicias tú; nchova detecta la llamada, lee tu calendario y escribe las notas sin que hagas nada. Con Pro, también pone nombre a las voces.'],
    ['*Una vez*', 'Superwhisper Pro cuesta 84,99 US$ al año, o 249,99 US$ de por vida. nchova Pro cuesta 29,99 €, una sola vez.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'Empieza la llamada. *nchova pregunta*.',
      lead: 'En cuanto Zoom, Meet, Teams o Slack usa el micrófono, nchova te ofrece transcribir; con tu calendario, pone a la reunión el nombre del evento. La documentación de Superwhisper describe un modo reunión que inicias tú.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Frente a frente',
      them: 'Superwhisper',
      rows: [
        ['Dónde transcribe', 'En el Mac con modelos locales, o en la nube (su propio S1, o los modelos de Deepgram y ElevenLabs), a elegir modo a modo', 'En tu Mac, siempre'],
        ['Plan gratuito', 'Modelos Whisper locales, dos modos sin procesamiento con IA', 'Dictado, reuniones y notas con los modelos de Apple'],
        ['Reuniones', 'Un modo reunión que inicias tú; la otra parte de la llamada requiere Pro', 'Detecta la llamada, pregunta, sigue tu calendario'],
        ['Quién habla', 'Separación de hablantes (Pro), que no se usa en los resúmenes de IA', 'Voice 1, Voice 2…; los nombres, reconocidos por la voz entre los invitados (Pro)'],
        ['Notas', 'Desde un modo de IA, local o en la nube', 'Escritas al terminar la llamada, a partir de tus propios apuntes'],
        ['Asistentes de IA (MCP)', 'Servidor local para tu historial de dictados (macOS)', 'Servidor local para tus reuniones; nunca tu dictado'],
        ['Idiomas', 'Más de 100, según el modelo', '{nAll}, {nFree} de ellos gratis; hasta tres a la vez, cambiando a mitad de frase'],
        ['Reescritura', 'Modos de IA que dan formato a lo que has dicho y lo reescriben', 'Escribe lo que has dicho, sin añadir ni una palabra'],
        ['Plan de pago', 'Pro: 8,49 US$ al mes, 84,99 US$ al año o 249,99 US$ de por vida', 'Pro: 29,99 € una sola vez, hasta 3 Mac'],
        ['Funciona en', 'Mac (también Intel), Windows, iPhone, Android', 'Mac con chip de Apple y macOS 26'],
      ],
    },
    {
      kind: 'bill',
      h: 'Tres años de *cada uno*',
      lead: 'Superwhisper Pro a sus precios de EE. UU., anual, mensual o de por vida, junto a nchova Pro.',
      bill: {
        head: 'SUPERWHISPER PRO',
        plans: [
          { tab: 'Anual', sub: 'facturado cada año, 84,99 US$', every: 12, amount: 84.99 },
          { tab: 'Mensual', sub: 'facturado cada mes, 8,49 US$', every: 1, amount: 8.49 },
          { tab: 'De por vida', sub: 'una sola vez, 249,99 US$', every: 1000, amount: 249.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'En tres años, Superwhisper Pro suma 254,97 US$ con facturación anual, 305,64 US$ con la mensual o 249,99 US$ de por vida; nchova Pro se queda en 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Sabe *quién* habla',
      lead: 'Con Pro, nchova distingue las otras voces mientras hablan y pone nombre a las que ya ha oído, entre las personas invitadas. Los nombres acaban en la transcripción, en las notas y en lo que lee tu asistente.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Cuándo Superwhisper es la *mejor opción*',
      p: [
        'Si dictas en Windows, en un iPhone o en Android, o en un Mac con Intel, Superwhisper los cubre, con una sola licencia. nchova necesita un Mac con chip de Apple y macOS 26.',
        'Si quieres que tus palabras se reescriban mientras dictas, con el tono de un correo o la forma de una nota, los modos de IA de Superwhisper lo hacen, y además transcribe archivos de audio y vídeo. nchova escribe lo que has dicho y transcribe en directo lo que oyes.',
        'Si tus días están hechos de llamadas, nchova se encarga por su cuenta de lo que pasa alrededor: detecta la llamada, sabe quién estaba invitado y escribe las notas cuando cuelgas; con Pro, también pone nombre a las voces.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas, *en voz alta*',
      items: [
        ['¿nchova también usa Parakeet?', 'Sí: con Pro, Parakeet de NVIDIA funciona en tu Mac en {nPro} idiomas europeos. Sin Pro, el trabajo lo hace el modelo de voz de Apple, en {nFree} idiomas.'],
        ['¿nchova funciona sin conexión?', 'Sí: el dictado, las reuniones y las notas escritas en el Mac funcionan sin conexión. Internet hace falta para descargar los modelos la primera vez, para activar Pro y para las actualizaciones. Mira el [dictado sin conexión](@dictation/offline/).'],
        ['¿Puedo probarlo antes de pagar?', 'Treinta días con todo, sin tarjeta y sin cuenta. Después sigue siendo gratis con los modelos de Apple.'],
        ['¿Hay una licencia de por vida?', 'Pro es de por vida: 29,99 € una sola vez, para hasta 3 Mac, con todas las actualizaciones incluidas mientras nchova siga recibiendo actualizaciones.'],
      ],
    },
  ],
  sources: [
    ['Planes de Superwhisper', 'https://superwhisper.com/docs/billing/plans'],
    ['Modelos de voz', 'https://superwhisper.com/docs/models/voice'],
    ['Elegir un modelo', 'https://superwhisper.com/docs/get-started/choose-your-model'],
    ['Modos integrados', 'https://superwhisper.com/docs/modes/built-in'],
    ['Reuniones con hablantes separados', 'https://superwhisper.com/docs/modes/speaker-separated-meetings'],
    ['CLI y servidor MCP', 'https://superwhisper.com/docs/get-started/cli'],
    ['Introducción', 'https://superwhisper.com/docs/get-started/introduction'],
  ],
  checked: 'el 8 de octubre de 2026',
};

const otter: Guide = {
  id: 'otter',
  page: 'alternatives/otter/',
  group: 'compare',
  short: 'Otter',
  metaTitle: 'Alternativa a Otter.ai sin bots, en tu Mac — nchova',
  description:
    'nchova frente a Otter.ai: transcripción de reuniones en tu Mac, sin bots en la llamada y sin subir el audio. Notas, hablantes, precios y privacidad, comparados.',
  kicker: 'nchova vs Otter',
  title: 'Una alternativa a Otter que *nunca entra en la llamada*.',
  lead: 'El Notetaker de Otter entra en tus llamadas de Zoom, Meet y Teams como invitado, y cada grabación, con bot o sin él, se transcribe y se guarda en la nube de Otter. nchova transcribe esas mismas llamadas desde tu Mac: no entra nadie, el audio nunca se sube y las notas se escriben cuando cuelgas.',
  short3: [
    ['*Ningún* invitado', 'el Notetaker de Otter entra como un participante que todos ven. nchova escucha desde tu Mac, como tú.'],
    ['*Nada* que subir', 'Otter guarda el audio y puede entrenar con él, desidentificado. nchova no guarda audio, y no tiene adónde enviarlo.'],
    ['*Sin* límite de minutos', 'Otter Basic se queda en 300 minutos al mes, y de cada llamada solo muestra los primeros 30 minutos. nchova no tiene límite, y Pro cuesta 29,99 € una sola vez.'],
  ],
  blocks: [
    {
      kind: 'bot',
      h: 'Un invitado en la llamada, *o ninguno*',
      lead: 'Con Otter, un Notetaker entra en la reunión en tu nombre, y puede entrar por su cuenta a partir de tu calendario. Con nchova, en la llamada están las personas invitadas, y nadie más.',
      bot: {
        them: {
          tab: 'Otter Notetaker',
          name: 'Álex’s Notetaker',
          joined: 'Álex’s Notetaker (Otter.ai) se ha unido a la reunión',
          banner: '',
          caption: 'El Notetaker entra como invitado: todos en la llamada lo ven, y la grabación va a la nube de Otter.',
        },
        us: { tab: 'nchova', caption: 'No entra nadie. nchova escucha desde tu Mac, y la transcripción se queda en él.' },
        words: {
          switchLabel: 'Mostrar',
          label: 'Una llamada en la que el Notetaker de Otter entra como invitado, junto a la misma llamada con nchova, donde no entra nadie y la transcripción aparece en tu propia pantalla.',
          call: 'Reunión de producto',
          tiles: ['Julia', 'Marcos', 'Sara', 'Tomás', 'Álex'],
          live: 'Live transcript',
          bubbles: [
            ['Julia', 'Los textos de la página están listos.', 'Voice 1'],
            ['', 'Genial. ¿Y las animaciones?'],
            ['Marcos', 'Para el jueves, no, espera, para el viernes.', 'Voice 2'],
          ],
        },
      },
    },
    {
      kind: 'table',
      h: 'Frente a frente',
      them: 'Otter',
      rows: [
        ['Cómo oye la llamada', 'Otter Notetaker entra en Zoom, Meet y Teams como invitado; la app de escritorio también puede grabar sin él', 'Desde tu Mac: tu micrófono y el audio de la llamada, sin invitados'],
        ['Dónde transcribe', 'En la nube de Otter, en EE. UU.', 'En tu Mac'],
        ['El audio', 'Se guarda con la conversación, exportable en mp3', 'Nunca se guarda: solo el texto'],
        ['Entrenamiento', 'Su política de privacidad permite entrenar con audio y transcripciones desidentificados', 'No nos llega nada con lo que entrenar'],
        ['Quién habla', 'Con nombre a partir de huellas de voz guardadas por Otter, compartidas en un espacio de trabajo', 'Con Pro, Voice 1, Voice 2…, con nombre gracias a huellas de voz guardadas en tu Mac; gratis, «Me» y «Others»'],
        ['Idiomas', '6, uno por conversación (el francés puede cambiar al inglés)', '{nAll}, {nFree} de ellos gratis; hasta tres a la vez, frase a frase'],
        ['Dictado', 'No tiene', 'Mantén pulsada Fn, en cualquier app'],
        ['Sin internet', 'Graba, y transcribe después de subir el audio', 'Transcribe como siempre'],
        ['Asistentes de IA (MCP)', 'Un servidor en la nube de Otter', 'Un servidor local, en tu Mac'],
        ['Plan gratuito', '300 minutos al mes; los primeros 30 minutos de cada conversación; las 25 conversaciones más recientes', 'Sin límite, con los modelos de Apple'],
        ['Plan de pago', 'Pro: 16,99 US$ al mes, o 8,33 US$ al mes con facturación anual', 'Pro: 29,99 € una sola vez, hasta 3 Mac'],
        ['Funciona en', 'Web, Mac, Windows, iPhone, Android', 'Mac con chip de Apple y macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'La transcripción, *en directo*, en tu pantalla',
      lead: 'Llega la llamada, nchova pregunta una vez y la transcripción se escribe sola en una tarjeta que solo ves tú: tu micrófono es «Me»; la llamada, todos los demás.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'bill',
      h: 'Tres años de *cada uno*',
      lead: 'Otter Pro a sus precios de EE. UU., con facturación anual o mensual, junto a nchova Pro.',
      bill: {
        head: 'OTTER PRO',
        plans: [
          { tab: 'Anual', sub: 'facturado cada año, 99,99 US$', every: 12, amount: 99.99 },
          { tab: 'Mensual', sub: 'facturado cada mes, 16,99 US$', every: 1, amount: 16.99 },
        ],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'En tres años, Otter Pro suma 299,97 US$ con facturación anual, o 611,64 US$ con la mensual; nchova Pro se queda en 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Notas, *cuando termina la llamada*',
      lead: 'Escritas a partir de lo que apuntaste, con el modelo que elijas: el de Apple o Qwen en el Mac, o tu propio Claude Code o Codex. Luego pregúntale a la reunión qué se decidió.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Cuándo Otter es la *mejor opción*',
      p: [
        'Si tu equipo colabora en Otter, comparte conversaciones en canales y las envía a Salesforce o HubSpot, Otter está hecho para eso. nchova guarda las reuniones de cada persona en su propio Mac, y en su propio iCloud si así lo elige.',
        'Si necesitas grabar desde el móvil, en un navegador en cualquier equipo o en Windows, Otter está en todas partes. nchova es una app para Mac.',
        'Si quieres volver a escuchar la grabación, Otter guarda el audio; nchova no lo guarda nunca, solo las palabras.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas, *en voz alta*',
      items: [
        ['¿Saben los demás en la llamada que nchova está transcribiendo?', 'En la llamada no aparece nada, porque nchova no está en ella. Donde la ley lo exija, avisa a las personas con las que hablas de que estás transcribiendo.'],
        ['¿Puede nchova importar mis conversaciones de Otter?', 'No. nchova empieza a partir de tu próxima reunión; tus exportaciones de Otter siguen siendo tuyas.'],
        ['¿Funciona con Zoom, Meet y Teams?', 'Con todos, y también con Slack, FaceTime, Webex y las llamadas en el navegador: nchova se da cuenta cuando uno de ellos usa el micrófono, y cualquier otra llamada se inicia desde la barra de menús. Mira [Zoom](@transcribe/zoom/), [Google Meet](@transcribe/google-meet/) y [Teams](@transcribe/teams/).'],
        ['¿Puedo preguntarle a Claude o a ChatGPT por mis reuniones?', 'Sí: el servidor MCP de nchova funciona en tu Mac y se conecta con un clic. Mira [tus reuniones en tu asistente](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Precios de Otter', 'https://otter.ai/pricing'],
    ['Otter Notetaker', 'https://help.otter.ai/hc/en-us/articles/4425393298327-Otter-Notetaker-Overview'],
    ['App de escritorio de Otter', 'https://help.otter.ai/hc/en-us/articles/35973988280215-Otter-Desktop-App-Mac-Windows'],
    ['Política de privacidad', 'https://otter.ai/privacy-policy'],
    ['Identificación de hablantes', 'https://help.otter.ai/hc/en-us/articles/21665587209367-Speaker-Identification-Overview'],
    ['Idiomas disponibles', 'https://help.otter.ai/hc/en-us/articles/360047247414-Supported-languages'],
  ],
  checked: 'el 8 de octubre de 2026',
};

const granola: Guide = {
  id: 'granola',
  page: 'alternatives/granola/',
  group: 'compare',
  short: 'Granola',
  metaTitle: 'Alternativa a Granola que transcribe en tu Mac — nchova',
  description:
    'nchova frente a Granola: ninguno mete un bot en la llamada, pero nchova transcribe tus reuniones en tu Mac, no en la nube, y escribe ahí también las notas.',
  kicker: 'nchova vs Granola',
  title: 'Una alternativa a Granola que *deja la llamada en tu Mac*.',
  lead: 'Granola y nchova se quedan fuera de la llamada: ningún bot, solo tu Mac escuchando. La diferencia es adónde va después. Granola envía la llamada en streaming a Deepgram o AssemblyAI y escribe las notas con modelos en la nube; nchova transcribe en el Mac y escribe ahí las notas, salvo que se lo pidas a tu propio Claude Code.',
  short3: [
    ['Sin bot, *los dos*', 'ninguno entra en la llamada; los dos escuchan tu micrófono y el audio de la llamada.'],
    ['*Dónde* se transcribe', 'Granola, en la nube; nchova, en tu Mac, también sin conexión.'],
    ['*Cuánto* pagas', 'Granola es gratis para las notas de los últimos 30 días; Business cuesta 14 US$ al mes, todos los meses. nchova es gratis sin nada oculto, o 29,99 € una sola vez.'],
  ],
  blocks: [
    {
      kind: 'route',
      h: 'Adónde *va* la llamada',
      lead: 'La misma reunión, transcrita dos veces. Con Granola, el audio va en streaming a un servicio de transcripción mientras la gente habla; con nchova nunca sale del Mac.',
      route: {
        meeting: true,
        title: 'Reunión de producto',
        them: { tab: 'Granola', place: 'Deepgram o AssemblyAI, y luego OpenAI o Anthropic', what: 'el audio de la llamada, en directo; luego la transcripción, para las notas', back: 'texto', sent: 'segundos de la llamada enviados' },
        us: { tab: 'nchova', place: 'Se transcribe en este Mac', sent: 'segundos de la llamada enviados' },
        words: {
          ...routeWords,
          said: 'Julia: los textos de la página están listos, solo falta la animación',
          written: 'Julia: Los textos de la página están listos, solo falta la animación.',
          label: 'Una reunión transcrita con Granola va en streaming a servicios en la nube y vuelve; con nchova se transcribe en el Mac y no sale nada.',
        },
      },
    },
    {
      kind: 'table',
      h: 'Frente a frente',
      them: 'Granola',
      rows: [
        ['Bot en la llamada', 'Ninguno', 'Ninguno'],
        ['Dónde transcribe', 'En la nube: Deepgram, AssemblyAI', 'En tu Mac'],
        ['Quién escribe las notas', 'Modelos en la nube, de OpenAI y Anthropic, entre otros', 'El modelo de Apple o Qwen en el Mac, o tu propio Claude Code o Codex'],
        ['Tus transcripciones', 'Guardadas en AWS, en EE. UU., hasta que las borres; borrado automático opcional', 'En tu Mac, y en tu propio iCloud si activas la sincronización'],
        ['Entrenamiento', 'Datos anonimizados, usados por defecto en Basic y Business, con opción de excluirse', 'No nos llega nada con lo que entrenar'],
        ['Cuándo empieza', 'Te avisa de la llamada; empieza cuando haces clic o abres la nota de la reunión', 'Detecta la llamada y pregunta, o empieza por su cuenta'],
        ['Quién habla', '«Me» y «Them»; en escritorio, nombres sacados de los participantes de la app de la llamada', 'Voice 1, Voice 2…; los nombres, reconocidos por la voz entre los invitados (Pro)'],
        ['Dictado', 'Solo para hacerle una pregunta a su Chat', 'Mantén pulsada Fn, en cualquier app'],
        ['Sin internet', 'La transcripción necesita conexión', 'Funciona igual'],
        ['Plan gratuito', 'Reuniones ilimitadas; visibles las notas de los últimos 30 días', 'Ilimitado, con los modelos de Apple; nada oculto'],
        ['Plan de pago', 'Business: 14 US$ por usuario al mes, con facturación mensual', 'Pro: 29,99 € una sola vez, hasta 3 Mac'],
        ['Cuenta', 'Inicio de sesión con Google o Microsoft', 'Ninguna'],
        ['Funciona en', 'Mac, Windows, iPhone, Android', 'Mac con chip de Apple y macOS 26'],
      ],
    },
    {
      kind: 'demo',
      h: 'Notas *al estilo Granola*, en tu Mac',
      lead: 'Apunta unas palabras durante la llamada; cuando termina, las notas crecen a partir de ellas. Luego pregúntale a la reunión: qué decidimos, qué tengo que hacer yo.',
      demo: { name: 'notes' },
    },
    {
      kind: 'bill',
      h: 'Tres años de *cada uno*',
      lead: 'Granola Business a su precio de EE. UU., con facturación mensual (Granola solo factura por años en Enterprise), junto a nchova Pro.',
      bill: {
        head: 'GRANOLA BUSINESS',
        plans: [{ tab: 'Mensual', sub: 'facturado cada mes, 14 US$', every: 1, amount: 14 }],
        currency: 'USD',
        months: 36,
        words: { ...billWords, label: 'En tres años, Granola Business suma 504 US$; nchova Pro se queda en 29,99 €.' },
      },
    },
    {
      kind: 'demo',
      h: 'Voces distinguidas *por cómo suenan*',
      lead: 'Granola distingue entre tú y «Them», y en su app de escritorio toma los nombres de Zoom, Meet y Teams. Con Pro, nchova distingue las otras voces por cómo suenan, en cualquier llamada, y pone nombre a las que ya ha oído, entre las personas invitadas.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'prose',
      h: 'Cuándo Granola es la *mejor opción*',
      p: [
        'Si tu equipo comparte notas en los espacios de Granola y las envía a Notion, HubSpot o Attio, Granola está hecho para eso, y además funciona en Windows, iPhone y Android. nchova guarda las reuniones de cada persona en su propio Mac.',
        'Si quieres que los modelos en la nube más potentes escriban cada nota sin configurar nada, Granola lo hace de serie. En nchova, las mejores notas las escribe tu propio Claude Code o Codex, con tu suscripción: la transcripción va entonces a Anthropic o a OpenAI, y tú eliges quién escribe en **Settings › Notes**.',
        'Si elegiste Granola por lo de «sin bot», nchova lo mantiene, y además quita la nube.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas, *en voz alta*',
      items: [
        ['¿nchova funciona con Google Calendar y Outlook?', 'Sí, a través de los calendarios que conoce tu Mac: añade la cuenta a macOS solo para el calendario. [Así se hace](@help/calendar/).'],
        ['¿Puedo usar mi propio Claude para las notas?', 'Sí, con Pro: nchova ejecuta tu propio Claude Code o Codex, con la sesión iniciada con tu suscripción, y las notas tardan segundos. Ninguna clave pasa por nchova.'],
        ['¿Empieza por su cuenta?', 'Detecta la llamada en cuanto Zoom, Meet, Teams o Slack usa el micrófono, y te pregunta. O pon **When a call starts** en **Start transcribing by itself**.'],
        ['¿Puedo preguntarle a Claude o a ChatGPT por mis reuniones?', 'Sí: el servidor MCP de nchova funciona en tu Mac y se conecta con un clic. Mira [tus reuniones en tu asistente](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Precios de Granola', 'https://www.granola.ai/pricing'],
    ['Seguridad', 'https://www.granola.ai/security'],
    ['Transcripción', 'https://docs.granola.ai/help-center/taking-notes/transcription'],
    ['Entrenamiento de modelos', 'https://docs.granola.ai/help-center/consent-security-privacy/model-training'],
    ['Atribución de hablantes', 'https://docs.granola.ai/help-center/taking-notes/speaker-attribution'],
  ],
  checked: 'el 8 de octubre de 2026',
};

const macwhisper: Guide = {
  id: 'macwhisper',
  page: 'alternatives/macwhisper/',
  group: 'compare',
  short: 'MacWhisper',
  metaTitle: 'Alternativa a MacWhisper para llamadas y dictado — nchova',
  description:
    'nchova frente a MacWhisper: los dos transcriben en tu Mac y se pagan una sola vez. MacWhisper nació para archivos; nchova, para tus llamadas y tu dictado.',
  kicker: 'nchova vs MacWhisper',
  title: 'Una alternativa a MacWhisper *hecha para las llamadas*.',
  lead: 'MacWhisper y nchova coinciden en lo importante: transcripción en tu Mac, sin bots, sin suscripción. Están hechos para momentos distintos. MacWhisper brilla con las grabaciones y los archivos que ya tienes; nchova vive en las llamadas que estás a punto de tener, y en cada campo de texto en el que dictas.',
  short3: [
    ['En el Mac, *los dos*', 'los dos transcriben en tu Mac y se pagan una sola vez. Ninguno envía un bot.'],
    ['*Archivos* o *llamadas*', 'MacWhisper gira en torno a archivos, lotes y enlaces de YouTube; nchova, en torno a las llamadas, en directo, con tu calendario.'],
    ['29,99 € *o* 64 €', 'nchova Pro cuesta 29,99 € una sola vez; MacWhisper Pro, 64 € una sola vez en su web. La versión gratuita de nchova también transcribe reuniones.'],
  ],
  blocks: [
    {
      kind: 'demo',
      h: 'Empieza la llamada. *nchova pregunta*.',
      lead: 'nchova detecta la llamada, le pone el nombre del evento del calendario y escribe la transcripción en directo en una tarjeta en tu pantalla. Cuando cuelgas, se escriben las notas.',
      flip: true,
      demo: { name: 'meeting' },
      notes: base.meeting.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'table',
      h: 'Frente a frente',
      them: 'MacWhisper',
      rows: [
        ['Pensada para', 'Archivos de audio y vídeo, lotes, enlaces de YouTube, subtítulos', 'Las llamadas mientras ocurren, y el dictado en cualquier app'],
        ['Dónde transcribe', 'En tu Mac por defecto; servicios en la nube con tus propias claves, si quieres', 'En tu Mac, siempre'],
        ['Reuniones', 'Detecta la llamada y la graba, con transcripción en directo (Pro; su documentación dice que la detección está en beta)', 'Detecta la llamada y pregunta; gratis'],
        ['Calendario', 'No aparece en su documentación', 'Pone a la reunión el nombre del evento y lista a los invitados'],
        ['Quién habla', 'Hablantes distinguidos (Pro)', 'Voice 1, Voice 2…; los nombres, reconocidos por la voz entre los invitados (Pro)'],
        ['Notas y chat', 'Con tus propias claves de API, o con un modelo local mediante Ollama o LM Studio (Pro)', 'Escritas al terminar la llamada: el modelo de Apple, gratis; Qwen en el Mac, o tu propio Claude Code o Codex (Pro)'],
        ['El audio', 'La grabación se guarda con la transcripción', 'Nunca se guarda: solo el texto'],
        ['Dictado', 'Dictado básico gratis; mejor calidad y prompts de IA en Pro', 'Mantén pulsada Fn, en cualquier app; Parakeet con Pro'],
        ['Asistentes de IA (MCP)', 'Sin servidor MCP en su documentación; una herramienta de línea de comandos para scripts y agentes de IA', 'Un servidor MCP local para tus reuniones, gratis'],
        ['Idiomas', 'Unos 100, con Whisper', '{nAll}: {nFree} gratis, {nPro} europeos con Pro; hasta tres a la vez, cambiando a mitad de frase'],
        ['Precio', 'Gratis; Pro 64 € una sola vez (65 € al pagar en Gumroad)', 'Gratis; Pro 29,99 € una sola vez, hasta 3 Mac'],
        ['Funciona en', 'macOS 15 o posterior, chip de Apple o Intel; una app aparte en iPhone y iPad', 'macOS 26 o posterior, chip de Apple'],
      ],
    },
    {
      kind: 'demo',
      h: 'Sabe *quién* habla',
      lead: 'Las dos apps distinguen las voces. nchova además les pone nombre, entre las personas invitadas, por las voces que ya ha oído; las huellas de voz se quedan en tu Mac.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'demo',
      h: 'Notas, *sin claves* que pegar',
      lead: 'nchova escribe las notas con el modelo de Apple en el Mac, o con Qwen, que descarga y ejecuta por ti, o con tu propio Claude Code o Codex, con la sesión iniciada con tu suscripción. Sin claves de API que comprar ni pegar.',
      demo: { name: 'notes' },
    },
    {
      kind: 'prose',
      h: 'Cuándo MacWhisper es la *mejor opción*',
      p: [
        'Si trabajas con grabaciones (entrevistas, pódcasts, clases, una carpeta de notas de voz), MacWhisper es la herramienta: sueltas los archivos y salen transcripciones y subtítulos. nchova no transcribe archivos; transcribe lo que dices y las llamadas en las que estás, mientras ocurren.',
        'Si tienes un Mac con Intel o con macOS 15, MacWhisper funciona ahí; nchova necesita chip de Apple y macOS 26. Y si quieres volver a escuchar la grabación, MacWhisper guarda el audio; nchova solo guarda las palabras.',
        'Mucha gente querrá los dos: MacWhisper para los archivos, nchova para las llamadas y el dictado.',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas, *en voz alta*',
      items: [
        ['¿nchova puede transcribir un archivo de audio?', 'No. nchova transcribe en directo: tu dictado, y las llamadas y reuniones que oye. Para los archivos que ya tienes, la herramienta es MacWhisper.'],
        ['¿Los dos usan Parakeet?', 'Sí: los dos pueden ejecutar Parakeet de NVIDIA en el Mac con Pro. nchova lo usa tanto para el dictado como para las reuniones, en {nPro} idiomas europeos.'],
        ['¿nchova necesita una clave de API para las notas?', 'No. El modelo de Apple y Qwen funcionan en el Mac; Claude Code y Codex usan tu propia suscripción, con la sesión iniciada una vez. Ninguna clave pasa por nchova.'],
        ['¿Puedo probarlo primero?', 'Treinta días con todo, sin tarjeta y sin cuenta. Después sigue siendo gratis con los modelos de Apple.'],
      ],
    },
  ],
  sources: [
    ['MacWhisper', 'https://www.macwhisper.com'],
    ['MacWhisper en Gumroad', 'https://goodsnooze.gumroad.com/l/macwhisper'],
    ['Grabar reuniones', 'https://docs.macwhisper.com/article/30-record-meetings'],
    ['Reconocimiento de hablantes', 'https://docs.macwhisper.com/article/32-automatic-speaker-recognition-in-macwhisper'],
  ],
  checked: 'el 8 de octubre de 2026',
};

/** Un bot de notas, cualquiera, junto a nchova: para las páginas sobre una app de llamadas. */
const anyBot = (call: string): Bot => ({
  them: {
    tab: 'Un bot de notas',
    name: 'Notetaker',
    joined: 'Notetaker se ha unido a la reunión',
    banner: '',
    caption: 'Un bot de notas entra como invitado: todos lo ven, y la grabación va a la nube de su empresa.',
  },
  us: { tab: 'nchova', caption: 'No entra nadie. nchova escucha desde tu Mac, y la transcripción se queda en él.' },
  words: {
    switchLabel: 'Mostrar',
    label: `Una llamada de ${call} en la que un bot de notas entra como invitado, junto a la misma llamada con nchova, donde no entra nadie.`,
    call: 'Reunión de producto',
    tiles: ['Julia', 'Marcos', 'Sara', 'Tomás', 'Álex'],
    live: 'Live transcript',
    bubbles: [
      ['Julia', 'Los textos de la página están listos.', 'Voice 1'],
      ['', 'Genial. ¿Y las animaciones?'],
      ['Marcos', 'Para el jueves, no, espera, para el viernes.', 'Voice 2'],
    ],
  },
});

/** La demo de la reunión con otra app de llamadas en el aviso, como lo escribe la app con un evento del calendario. */
const callIn = (service: string) => ({ ...base.meeting.demo, promptTitle: 'Reunión de producto', promptSub: `Call in ${service}. Transcribe it?` });

/** Lo que dicen las notas de la demo de la reunión en las páginas sobre una app de llamadas. */
const callNotes = (service: string): [string, string][] => [
  ['Detecta la llamada', `en cuanto ${service} usa el micrófono unos segundos, nchova te pregunta si quieres transcribir.`],
  ['Con tu calendario', 'la reunión toma el nombre del evento y sus invitados, y la pregunta llega dos minutos antes.'],
  ['«Me» y «Others»', `tu micrófono es «Me»; lo que suena en tu Mac, ${service} incluido, es «Others»: todos los demás.`],
  ['Solo en tu pantalla', 'la píldora y la transcripción están en tu Mac, no en la llamada: nadie las ve, salvo que compartas toda la pantalla.'],
];

const zoom: Guide = {
  id: 'zoom',
  page: 'transcribe/zoom/',
  group: 'use',
  short: 'Transcribir Zoom',
  metaTitle: 'Transcribir reuniones de Zoom en Mac, sin bots — nchova',
  description:
    'Transcribe cualquier llamada de Zoom en tu Mac, seas o no el anfitrión y con cualquier plan: sin bots, el audio no sale de tu Mac y las notas llegan al colgar.',
  kicker: 'transcribir Zoom',
  title: 'Transcribe llamadas de Zoom, *seas o no el anfitrión*.',
  lead: 'La transcripción de Zoom necesita un plan de pago, y es el anfitrión quien decide quién la recibe. nchova transcribe cualquier llamada de Zoom desde tu Mac: tu micrófono eres tú; el audio de la llamada, todos los demás. No entra ningún bot, el audio nunca sale de tu Mac y las notas se escriben cuando cuelgas.',
  short3: [
    ['*Cualquier* llamada de Zoom', 'tuya o de otra persona, con plan gratis o de pago: si la oyes, nchova puede transcribirla.'],
    ['*Sin* bot', 'nadie entra en la reunión. nchova escucha desde tu Mac, en la app de Zoom o en el navegador.'],
    ['Gratis', 'las transcripciones y las notas con los modelos de Apple son gratis; Pro añade las voces distinguidas, Parakeet y mejores notas.'],
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
      h: 'Lo que te da Zoom, *y quién decide*',
      p: [
        'Desde mayo de 2026, Zoom ya no permite guardar los subtítulos en directo cuando termina una reunión. Su transcripción de reuniones necesita una cuenta Pro, Business o Enterprise, está desactivada hasta que un anfitrión o un administrador la activa, y un participante solo puede pedirle al anfitrión que la inicie. La transcripción de una grabación en la nube necesita un plan de pago con la grabación en la nube activada. El resumen de AI Companion lo inicia el anfitrión o un coanfitrión, y todos ven cómo se enciende su icono.',
        'Así que, cuando no eres el anfitrión, o el anfitrión tiene el plan gratuito de Zoom, lo normal es que te quedes sin ninguna transcripción. nchova no le pide nada a Zoom: transcribe lo que reproduce tu Mac y lo que oye tu micrófono.',
        'Las herramientas de Zoom hacen algo que nchova no hace: una transcripción que pertenece a la reunión y que se puede compartir con todos los que estaban en ella. La de nchova es tuya.',
      ],
    },
    {
      kind: 'bot',
      h: 'Un bot en la llamada, *o nadie*',
      lead: 'Los bots de notas consiguen la transcripción entrando en la reunión como invitados. nchova no necesita un sitio en la llamada.',
      bot: anyBot('Zoom'),
    },
    {
      kind: 'steps',
      h: 'Transcribe tu próxima llamada de *Zoom*',
      steps: [
        '[Descarga nchova](/download?from=zoom-steps) y ábrelo. En la configuración inicial, en **For meetings**, conecta **Calendar** para que las reuniones tomen el nombre de sus eventos, y pulsa **Ask now** junto a **System audio**: así es como nchova oye a los demás.',
        'Entra en tu llamada de Zoom como siempre, en la app de Zoom o en el navegador.',
        'Cuando nchova te pregunte, haz clic en **Transcribe**. Haz clic en la píldora de la parte inferior de la pantalla para ver la transcripción o para tomar tus propios apuntes.',
        'Cuelga. nchova se da cuenta de que la llamada ha terminado, escribe las notas y guarda la reunión en **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'Cuando *cuelgas*',
      lead: 'Las notas se escriben a partir de lo que apuntaste. Luego pregúntale a la reunión: qué decidimos, qué tengo que hacer yo, escribe el correo de seguimiento.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Preguntas sobre *Zoom*',
      items: [
        ['¿Zoom avisa a los demás de que nchova está transcribiendo?', 'No: nchova no está en la reunión, así que Zoom no tiene nada que mostrar. Donde la ley lo exija, avisa a las personas de la llamada de que estás transcribiendo.'],
        ['¿Tengo que ser el anfitrión, o tener un plan de pago de Zoom?', 'No. nchova transcribe cualquier llamada en la que estés, sea cual sea el plan y sea quien sea el anfitrión.'],
        ['¿Funciona con Zoom en el navegador?', 'Sí. nchova distingue una reunión de Zoom de otras pestañas que usan el micrófono por el título de la ventana, y te pregunta.'],
        ['¿Con auriculares o sin ellos?', 'Como prefieras. Sin auriculares, nchova quita por su cuenta de tu micrófono el eco de los altavoces, sin tocar lo que envía Zoom.'],
        ['¿Puede empezar por su cuenta?', 'Sí: en **Settings › Meetings**, pon **When a call starts** en **Start transcribing by itself**.'],
        ['¿Puedo preguntarle a Claude por mis llamadas de Zoom?', 'Sí: el servidor MCP de nchova funciona en tu Mac y se conecta con un clic. Mira [tus reuniones en tu asistente](@mcp/).'],
      ],
    },
  ],
  sources: [
    ['Fin del guardado de subtítulos', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085668'],
    ['Transcripciones de reuniones', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0085675'],
    ['Transcripciones de grabaciones en la nube', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927'],
    ['Resumen de reuniones de AI Companion', 'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058013'],
    ['Aviso de AI Companion', 'https://library.zoom.com/ai-whitepaper/user-transparency-and-notice'],
  ],
  checked: 'el 8 de octubre de 2026',
};

const meet: Guide = {
  id: 'google-meet',
  page: 'transcribe/google-meet/',
  group: 'use',
  short: 'Transcribir Google Meet',
  metaTitle: 'Transcribir Google Meet en Mac, sin bots — nchova',
  description:
    'Transcribe las llamadas de Google Meet en tu Mac, también con una cuenta gratis de Gmail y como invitado: sin bots, sin extensiones y con el audio en tu Mac.',
  kicker: 'transcribir Google Meet',
  title: 'Transcribe Google Meet, *incluso como invitado*.',
  lead: 'Las transcripciones de Google Meet y las notas de Gemini vienen con los planes de pago, y solo pueden iniciarlas las personas de la organización del anfitrión. nchova transcribe cualquier llamada de Meet desde tu Mac, en Chrome, Safari, Arc o el navegador que uses: sin bots, sin extensiones, y el audio nunca sale de tu Mac.',
  short3: [
    ['*Cualquier* Meet', 'Gmail gratis o Workspace, anfitrión o invitado: si oyes la llamada, nchova la transcribe.'],
    ['*Sin* extensiones', 'nchova reconoce una llamada de Meet por el título de la ventana del navegador, y te pregunta.'],
    ['*{nAll}* idiomas', '{nFree} gratis con el modelo de Apple, {nPro} europeos con Pro; una llamada que cambia entre dos de tus idiomas se transcribe en los dos.'],
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
      h: 'Lo que te da Meet, *y a quién*',
      p: [
        'Las transcripciones de Meet necesitan una edición de Workspace a partir de Business Standard, o Workspace Individual, y cubren ocho idiomas. Las inicia el anfitrión, o alguien de su organización, y se guardan en el Drive del organizador. Las notas de Gemini («Toma notas por mí») necesitan, por parte del organizador, un plan de Workspace o de Google AI que las incluya, y un solo idioma por reunión. Mientras cualquiera de las dos funciona, todos en la llamada ven un icono.',
        'Una cuenta gratis de Gmail no tiene ninguna de las dos, y un invitado de otra empresa no puede iniciarlas. nchova no necesita el permiso de Meet: transcribe lo que reproduce tu Mac y lo que oye tu micrófono, en {nFree} idiomas gratis, o {nPro} europeos con Pro.',
      ],
    },
    {
      kind: 'demo',
      h: 'Voces distinguidas, *y con nombre*',
      lead: 'Con Pro, nchova distingue las otras voces mientras hablan, y pone nombre a las que ya ha oído, entre las personas de la invitación.',
      demo: { name: 'voices' },
      notes: base.voices.notes as [string, string, 'pro'?][],
    },
    {
      kind: 'steps',
      h: 'Transcribe tu próxima llamada de *Meet*',
      steps: [
        '[Descarga nchova](/download?from=google-meet-steps) y ábrelo. En la configuración inicial, permite **Accessibility** (nchova también lo usa para leer los títulos de las ventanas del navegador), conecta **Calendar** y pulsa **Ask now** junto a **System audio**.',
        'Entra en la llamada de Meet desde tu navegador, como siempre.',
        'nchova ve que la ventana titulada «Meet – …» está usando el micrófono y te pregunta: haz clic en **Transcribe**.',
        'Cuelga. Las notas se escriben y la reunión te espera en **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'faq',
      h: 'Preguntas sobre *Meet*',
      items: [
        ['¿Qué navegadores?', 'Chrome, Safari, Arc, Dia, Edge, Firefox, Brave, Vivaldi, Opera y Zen.'],
        ['¿Necesito una extensión de Chrome?', 'No. nchova distingue una llamada de las demás pestañas por el título de la ventana, gracias al permiso de Accesibilidad que ya tiene: sin extensiones, sin leer URL, sin red.'],
        ['¿Me saltará el aviso cuando use la voz en ChatGPT o en Google Docs?', 'No mientras ChatGPT, Claude, Gemini, Google Docs, YouTube o similares sean la pestaña activa. nchova pregunta cuando una ventana dice que es una llamada, y también cuando no dice ni una cosa ni otra; después, cada «Not now» lo mantiene callado durante más tiempo.'],
        ['¿Google avisa a los demás?', 'No: nchova no está en la reunión. Donde la ley lo exija, avisa a las personas de la llamada de que estás transcribiendo.'],
        ['¿Funciona con una cuenta gratis de Gmail?', 'Sí. nchova no depende de tu plan de Google ni del del anfitrión.'],
      ],
    },
  ],
  sources: [
    ['Transcripciones de Meet', 'https://support.google.com/meet/answer/12849897?hl=en'],
    ['Take notes for me', 'https://support.google.com/meet/answer/14754931?hl=en'],
    ['Funciones de Meet por plan', 'https://support.google.com/meet/answer/10459644?hl=en'],
  ],
  checked: 'el 8 de octubre de 2026',
};

const teams: Guide = {
  id: 'teams',
  page: 'transcribe/teams/',
  group: 'use',
  short: 'Transcribir Microsoft Teams',
  metaTitle: 'Transcribir llamadas de Microsoft Teams en Mac — nchova',
  description:
    'Transcribe llamadas de Microsoft Teams en tu Mac, como invitado o sin Copilot: no entra ningún bot, el audio no sale de tu Mac y las notas llegan al colgar.',
  kicker: 'transcribir Teams',
  title: 'Transcribe llamadas de Teams, *las organice quien las organice*.',
  lead: 'En Teams, la transcripción depende de la empresa del organizador y de sus directivas; un invitado de fuera no puede iniciarla, y el resumen con IA necesita una licencia de Teams Premium o de Copilot. nchova transcribe cualquier llamada de Teams desde tu Mac, en la app o en el navegador: sin bots, sin licencias, y el audio nunca sale de tu Mac.',
  short3: [
    ['*Cualquier* llamada de Teams', 'de trabajo o personal, como organizador o como invitado: si la oyes, nchova la transcribe.'],
    ['*Sin* licencias', 'ni Premium ni Copilot: notas escritas en el Mac, gratis con el modelo de Apple.'],
    ['*Tuya*', 'la transcripción está en tu Mac, no en el OneDrive del organizador.'],
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
      h: 'Lo que te da Teams, *y quién decide*',
      p: [
        'La transcripción en Teams es una directiva de la empresa del organizador. Cuando está activada, pueden iniciarla el organizador y las personas de su misma organización; los invitados de otras empresas y los participantes anónimos, no. Todos ven que la reunión se está transcribiendo, y el archivo va al OneDrive del organizador, donde los compañeros pueden leerlo pero, por defecto, no descargarlo. El resumen inteligente, con notas y tareas hechas por IA, necesita una licencia de Teams Premium o de Microsoft 365 Copilot. Teams personal ofrece subtítulos en directo, que solo ves tú.',
        'nchova está fuera de todo eso: transcribe lo que reproduce tu Mac y lo que oye tu micrófono, y lo guarda en tu Mac.',
        'Antes de transcribir una llamada de trabajo, comprueba lo que permite tu empresa, y avisa a las personas de la llamada donde la ley lo exija.',
      ],
    },
    {
      kind: 'bot',
      h: 'Un bot en la llamada, *o nadie*',
      lead: 'Muchas empresas no dejan entrar bots de notas en sus reuniones. nchova nunca pide entrar.',
      bot: anyBot('Teams'),
    },
    {
      kind: 'steps',
      h: 'Transcribe tu próxima llamada de *Teams*',
      steps: [
        '[Descarga nchova](/download?from=teams-steps) y ábrelo. En la configuración inicial, conecta **Calendar** y pulsa **Ask now** junto a **System audio**.',
        'Si tu calendario de Teams es una cuenta de Microsoft 365 del trabajo, añádela a tu Mac solo para el calendario: [así se hace](@help/calendar/).',
        'Entra en la llamada de Teams, en la app o en el navegador. Cuando nchova te pregunte, haz clic en **Transcribe**.',
        'Cuelga. Las notas se escriben, con los próximos pasos, y la reunión te espera en **Meetings** (Fn+M).',
      ],
    },
    {
      kind: 'demo',
      h: 'El resumen, *sin Copilot*',
      lead: 'Notas y próximos pasos escritos al terminar la llamada, por el modelo de Apple en el Mac, por Qwen o por tu propio Claude Code o Codex. Luego pregúntale a la reunión qué tienes que hacer.',
      demo: { name: 'notes' },
    },
    {
      kind: 'faq',
      h: 'Preguntas sobre *Teams*',
      items: [
        ['¿Teams avisa a los demás de que nchova está transcribiendo?', 'No: nchova no está en la reunión, así que Teams no tiene nada que mostrar. Donde la ley, o tu empresa, lo exija, avisa a las personas de la llamada.'],
        ['¿Funciona con Teams en el navegador?', 'Sí: nchova reconoce una reunión de Teams por el título de la ventana del navegador, y te pregunta.'],
        ['¿Funciona con Teams personal?', 'Sí. nchova no depende del plan de Teams, ni del tuyo ni del del organizador.'],
        ['Mi calendario de Outlook no aparece en nchova. ¿Por qué?', 'nchova lee los calendarios que conoce tu Mac. Añade tu cuenta del trabajo a macOS solo para el calendario: [así se hace](@help/calendar/).'],
        ['¿Puede empezar por su cuenta?', 'Sí: en **Settings › Meetings**, pon **When a call starts** en **Start transcribing by itself**.'],
      ],
    },
  ],
  sources: [
    ['Transcripción en directo en Teams', 'https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings'],
    ['Directivas de transcripción', 'https://learn.microsoft.com/en-us/microsoftteams/meeting-transcription-captions'],
    ['Resumen inteligente', 'https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings'],
    ['Subtítulos en Teams personal', 'https://support.microsoft.com/en-us/teams/free/meetings/live-captions-in-microsoft-teams-free'],
  ],
  checked: 'el 8 de octubre de 2026',
};

// ---------- Todo junto ----------

const guides: Guides = {
  words: {
    compare: 'Comparativas',
    use: 'Guías',
    inShort: 'En resumen',
    sources: 'Comprobado',
    home: 'nchova',
    cta: 'Prueba nchova gratis durante 30 días',
    ctaNote: 'sin tarjeta, sin cuenta',
    meta: 'macOS 26 · Mac con chip de Apple',
    more: 'Sigue leyendo',
    us: 'nchova',
    hubLink: 'Todas las comparativas',
  },
  hub: {
    page: 'alternatives/',
    metaTitle: 'nchova frente a Wispr Flow, Otter, Granola y más',
    description:
      'Cómo se compara nchova con Wispr Flow, Superwhisper, MacWhisper, Otter y Granola: dónde transcribe cada una, si mete un bot en la llamada y cuánto cuesta.',
    kicker: 'comparativas',
    title: 'nchova *junto a* las demás.',
    lead: 'Apps de dictado y apps que toman notas de reuniones, en una sola tabla: qué hace cada una, dónde convierte tu voz en texto, si mete un bot en tus llamadas y cómo se paga. Cada nombre abre su propia página, con los detalles y de dónde salen.',
    cols: ['App', 'Qué hace', 'Dónde transcribe', 'Bot en la llamada', 'Precio'],
    us: { does: 'Dictado, reuniones, notas, MCP', where: 'En tu Mac', bot: 'Nunca', price: 'Gratis; Pro 29,99 € una sola vez' },
    rows: [
      { id: 'wispr-flow', does: 'Dictado; reuniones con Notetaker', where: 'En su nube', bot: 'Ninguno', price: 'Gratis; Pro 15 US$ al mes, o 144 US$ al año' },
      { id: 'superwhisper', does: 'Dictado, modos de IA; un modo reunión', where: 'En el Mac o en la nube, según el modo', bot: 'Ninguno', price: 'Gratis; Pro 84,99 US$ al año, o 249,99 US$ de por vida' },
      { id: 'macwhisper', does: 'Archivos; reuniones y dictado', where: 'En el Mac; en la nube con tus propias claves', bot: 'Ninguno', price: 'Gratis; Pro 64 € una sola vez' },
      { id: 'otter', does: 'Notas de reuniones', where: 'En su nube', bot: 'Notetaker entra como invitado; sin bot en la app de escritorio', price: 'Gratis; Pro 16,99 US$ al mes, o 99,99 US$ al año' },
      { id: 'granola', does: 'Notas de reuniones', where: 'En la nube', bot: 'Ninguno', price: 'Gratis; Business 14 US$ al mes' },
    ],
  },
  list: [wisprFlow, otter, granola, superwhisper, macwhisper, zoom, meet, teams, offline, multilingual, mcp],
};

export default guides;
