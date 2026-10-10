import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { LANGUAGES } from './src/config.ts';

export default defineConfig({
  site: 'https://nchova.com',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  // Vercel hosts the site: every page stays static; /download is the one function. Web Analytics: no cookies, served
  // from this domain (/_vercel/insights), visitors told apart by a hash that changes every day.
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    // nchova.com/meet is for the people Rudy meets, not for search engines (noindex on the page too). Every page lists
    // its versions in the other languages (the first language at /, the others in their folder) and the build's date.
    sitemap({
      filter: (page) => !/\/meet\/?$/.test(new URL(page).pathname),
      i18n: { defaultLocale: LANGUAGES[0], locales: Object.fromEntries(LANGUAGES.map((l) => [l, l])) },
      lastmod: new Date(),
    }),
  ],
});
