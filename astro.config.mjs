// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import paraglide from '@inlang/paraglide-astro';

// https://astro.build/config
export default defineConfig({
  // Use astro's i18n routing for deciding which language to use
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  integrations: [
    tailwind(),
    paraglide({
      // recommended settings
      project: './project.inlang',
      outdir: './src/paraglide', //where your files should be
    }),
  ],
});
