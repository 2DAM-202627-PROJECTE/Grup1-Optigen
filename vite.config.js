import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Grup1-Optigen/',
  // Keep private local archives outside Vite’s file serving.
  server: {
    fs: {
      deny: [
        '.env',
        '.env.*',
        '*.{crt,pem}',
        '**/.git/**',
        '**/.optigen-data/**',
      ],
    },
  },
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        indexInici: 'indexInici.html',
        indexFuncionalitats: 'indexFuncionalitats.html',
        indexFAQ: 'indexFAQ.html',
        indexSobreNosaltres: 'indexSobreNosaltres.html',
        indexCookies: 'indexCookies.html',
        indexPrivacitat: 'indexPrivacitat.html',
        indexAvisLegal: 'indexAvisLegal.html',
      },
    },
  },
});
