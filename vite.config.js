import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const page = (name) => fileURLToPath(new URL(`./pages/${name}.html`, import.meta.url));

export default defineConfig({
  root: 'pages',
  base: '/Grup1-Optigen/',
  publicDir: '../public',
  resolve: {
    alias: {
      '/src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
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
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: page('index'),
        indexInici: page('indexInici'),
        indexFuncionalitats: page('indexFuncionalitats'),
        indexFAQ: page('indexFAQ'),
        indexSobreNosaltres: page('indexSobreNosaltres'),
        indexCookies: page('indexCookies'),
        indexPrivacitat: page('indexPrivacitat'),
        indexAvisLegal: page('indexAvisLegal'),
      },
    },
  },
});
