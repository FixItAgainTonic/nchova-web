import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nchova.com',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [
    sitemap(),
  ],
});
