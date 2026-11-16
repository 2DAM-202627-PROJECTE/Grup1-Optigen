import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Grup1-Optigen/',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        indexInici: 'indexInici.html',
        indexFuncionalitats: 'indexFuncionalitats.html',
        indexCookies: 'indexCookies.html',
      },
    },
  },
});
