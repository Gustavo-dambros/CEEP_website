import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/CEEP_website/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        administracao: resolve(__dirname, 'src/cursos/administracao.html'),
        analise_e_desenvolvimento: resolve(__dirname, 'src/cursos/ads.html'),
        edificacoes: resolve(__dirname, 'src/cursos/edificacoes.html'),
        eletronica: resolve(__dirname, 'src/cursos/eletronica.html'),
        eletromecanica: resolve(__dirname, 'src/cursos/eletromecanica.html'),
        enfermagem: resolve(__dirname, 'src/cursos/enfermagem.html'),
        estetica: resolve(__dirname, 'src/cursos/estetica.html'),
        IA: resolve(__dirname, 'src/cursos/IA.html'),
      },
    },
  },
})
