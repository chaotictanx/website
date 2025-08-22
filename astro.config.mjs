// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://chaotictanx.github.io',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
