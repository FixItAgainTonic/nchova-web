import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://nchova.com',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  // Vercel hosts the site: every page stays static; /download is the one function. Web Analytics: no cookies, served
  // from this domain (/_vercel/insights), visitors told apart by a hash that changes every day.
  adapter: vercel({ webAnalytics: { enabled: true } }),
  integrations: [
    sitemap(),
  ],
});
