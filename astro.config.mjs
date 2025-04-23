// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',  // Permite conexiones externas
      port: 3000,       // O el puerto que estés usando
    }
  }
});

