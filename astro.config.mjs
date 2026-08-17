import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://regsperts.vercel.app',
  base: process.env.GITHUB_ACTIONS ? '/regsperts/' : '/',
  integrations: [sitemap()],
  output: 'static',
  build: { inlineStylesheets: 'auto' }
});
