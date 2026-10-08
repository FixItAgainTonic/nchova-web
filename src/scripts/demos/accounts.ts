// Adding a Google or Outlook account to macOS for its calendar alone, then ticking it in nchova: Internet Accounts in
// the sidebar, Add Account, the list of providers, the sign-in, Mail, Contacts and the rest switched off one by one,
// Done; the account appears with "Calendars" under it, and nchova's Settings › Meetings ticks the new calendar. The
// step written on the page that the film is showing lights up. The switch above picks Google or Outlook and starts over.

import { film, type Run } from './run';

type Provider = 'google' | 'outlook';

/** Which row of the provider list to pick, and the address typed in the sign-in. */
type Data = Record<Provider, { pick: number; address: string }>;

/** The name typed in Exchange's sheet: the same in every language, like the addresses. */
const NAME = 'Your Name';

for (const root of document.querySelectorAll<HTMLElement>('[data-accounts]')) setup(root);

function setup(root: HTMLElement) {
  const data: Data = JSON.parse(root.querySelector('[data-script]')!.textContent!);
  const $ = <T extends Element = HTMLElement>(s: string) => root.querySelector<T>(s)!;
  const $$ = <T extends Element = HTMLElement>(s: string) => [...root.querySelectorAll<T>(s)];
  const stage = $('.stage__in'), cursor = $('[data-cursor]'), title = $('[data-title]'), sheet = $('[data-sheet]');
  const sideBefore = $('[data-side="before"]'), sideAccounts = $('[data-side="accounts"]');
  const add = $('[data-add]'), fromList = $('[data-from-list]'), cont = $('[data-continue]');
  const newRow = $('[data-new]'), appWin = $('[data-app-win]'), newCal = $('[data-new-cal]'), toggle = $('[data-toggle]');
  const panes = $$('[data-pane]'), views = $$('[data-view]'), rows = $$('[data-provider-row]');
  const picks = $$<HTMLButtonElement>('[data-pick]');

  let provider: Provider = 'google';
  const mine = <T extends Element = HTMLElement>(s: string) =>
    $$<T>(s).filter((el) => !el.closest('[data-only]') || el.closest('[data-only]')!.getAttribute('data-only') === provider);

  // The written steps on the page: one list per provider, then "Then, in nchova".
  const stepLists = new Map([...document.querySelectorAll<HTMLElement>('[data-steps]')].map((ol) => [ol.dataset.steps, ol]));
  const inApp = document.querySelector<HTMLElement>('[data-step-app]');
  const lit = () => document.querySelectorAll('.help__now');
  const step = (n: number | 'app') => {
    lit().forEach((el) => el.classList.remove('help__now'));
    const el = n === 'app' ? inApp : stepLists.get(provider)?.querySelectorAll('li')[n];
    el?.classList.add('help__now');
  };

  /** Moves the pointer to the middle of `target`, as a fraction of the stage. */
  const point = async (run: Run, target: Element, ms = 800) => {
    const s = stage.getBoundingClientRect(), r = target.getBoundingClientRect();
    cursor.style.left = `${((r.left + r.width / 2 - s.left) / s.width) * 100}%`;
    cursor.style.top = `${((r.top + r.height / 2 - s.top) / s.height) * 100}%`;
    cursor.classList.add('show');
    await run.wait(ms);
  };
  const click = async (run: Run, target: Element) => {
    cursor.classList.add('press');
    target.classList.add('pressed');
    await run.wait(170);
    cursor.classList.remove('press');
    target.classList.remove('pressed');
  };
  const press = async (run: Run, target: Element, ms?: number) => {
    await point(run, target, ms);
    await click(run, target);
  };

  /** Opens the sheet on `view`; null slides it away with its last view still in it. */
  const show = (view: string | null) => {
    sheet.classList.toggle('show', view !== null);
    if (view === null) return;
    for (const v of views) v.classList.toggle('show', v.dataset.view === view && (v.dataset.only ?? provider) === provider);
  };
  const pane = (which: 'before' | 'accounts') => {
    for (const p of panes) p.classList.toggle('show', p.dataset.pane === which);
    sideBefore.classList.toggle('on', which === 'before');
    sideAccounts.classList.toggle('on', which === 'accounts');
    title.textContent = (which === 'accounts' ? sideAccounts : sideBefore).textContent!.trim();
  };

  const controls = film(root, {
    reset() {
      root.dataset.provider = provider;
      pane('before');
      show(null);
      views.forEach((v) => v.classList.remove('show'));
      rows.forEach((r) => r.classList.remove('on'));
      for (const f of $$('[data-type-name], [data-type-address]')) f.textContent = '';
      $$('[data-spin]').forEach((s) => s.classList.remove('show'));
      $$('[data-app]').forEach((a) => a.classList.remove('off'));
      for (const el of [newRow, appWin, newCal, toggle, cursor]) el.classList.remove('show', 'on');
      cursor.style.left = '58%';
      cursor.style.top = '62%';
      step(0);
    },
    async play(run) {
      const d = data[provider];

      // 1. Internet Accounts, in the sidebar.
      step(0);
      await press(run, sideAccounts, 1000);
      pane('accounts');
      await run.wait(900);

      // 2. Add Account, then the list, then the provider.
      step(1);
      await press(run, add);
      show('email');
      await run.wait(1000);
      await press(run, fromList);
      show('list');
      await run.wait(600);
      await point(run, rows[d.pick]);
      rows[d.pick].classList.add('on');
      await run.wait(400);
      await press(run, cont, 700);

      // 3. Signing in.
      step(2);
      show('signin');
      await run.wait(500);
      const name = mine('[data-type-name]')[0];
      if (name) {
        await run.type(name, NAME, 16);
        await run.wait(250);
      }
      await run.type(mine('[data-type-address]')[0], d.address, 16);
      await run.wait(400);
      await press(run, mine('[data-sign-in]')[0], 700);
      mine('[data-spin]')[0].classList.add('show');
      await run.wait(1100);

      // 4. Every app but Calendars switched off, one by one.
      step(3);
      show('apps');
      await run.wait(1000);
      for (const app of mine('[data-app="drop"]')) {
        await press(run, app.querySelector('.ia__box')!, 650);
        app.classList.add('off');
        await run.wait(250);
      }
      await run.wait(600);
      await press(run, mine('[data-done]')[0], 750);
      show(null);
      await run.wait(400);
      newRow.classList.add('show');
      await run.wait(1500);

      // 5. In nchova, the new calendar is there to tick.
      step('app');
      appWin.classList.add('show');
      await run.wait(900);
      newCal.classList.add('show');
      await run.wait(700);
      await press(run, toggle, 900);
      toggle.classList.add('on');
      await run.wait(500);
      cursor.classList.remove('show');
    },
    rest: 3800,
  });

  for (const button of picks) {
    button.addEventListener('click', () => {
      provider = button.dataset.pick as Provider;
      for (const b of picks) b.setAttribute('aria-pressed', String(b === button));
      controls.restart();
    });
  }
}
