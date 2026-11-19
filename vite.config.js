import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import { mountApi } from './server/routes.js';

const newsletterDbPath = resolve(process.env.NEWSLETTER_DB_PATH || '.optigen-data/newsletter.sqlite');

function mountViteApi(server) {
  server.middlewares.use(mountApi(server.config.base));
}

export default defineConfig({
  base: '/Grup1-Optigen/',
  server: {
    fs: {
      deny: [
        '.env',
        '.env.*',
        '*.{crt,pem}',
        '**/.git/**',
        '**/.optigen-data/**',
        newsletterDbPath,
        `${newsletterDbPath}-*`,
      ],
    },
  },
  plugins: [
    tailwindcss(),
    {
      name: 'optigen-api',
      configureServer: mountViteApi,
      configurePreviewServer: mountViteApi,
    },
  ],
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
