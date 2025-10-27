import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // site: 'https://www.aionhcss.com', // set actual site URL before launch
  integrations: [tailwind()],
});
