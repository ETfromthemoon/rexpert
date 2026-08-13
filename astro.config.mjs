import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rexpert.com',
  base: process.env.GITHUB_ACTIONS ? '/rexpert/' : '/',
  integrations: [sitemap()],
  output: 'static',
  build: { inlineStylesheets: 'auto' }
});
