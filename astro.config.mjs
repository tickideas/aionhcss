import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({ mode: 'static' }),
  // site: 'https://www.aionhcss.com', // set actual site URL before launch
  integrations: [tailwind()],
});
