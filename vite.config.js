import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/CEEP_website/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'administracao': './administracao.html',
        'analise_e_desenvolvimento': './ads.html',
      },
    },
  },
})
