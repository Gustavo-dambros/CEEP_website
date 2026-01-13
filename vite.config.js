import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/CEEP_website/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'administracao': 'src/cursos/administracao.html',
        'analise_e_desenvolvimento': 'src/cursos/ads.html',
        'edificacoes': 'src/cursos/edificacoes.html',
        'eletronica': 'src/cursos/eletronica.html',
        'eletromecanica': 'src/cursos/eletromecanica.html',
        'enfermagem': 'src/cursos/enfermagem.html',
        'estetica': 'src/cursos/estetica.html',
        'IA': 'src/cursos/IA.html',
      },
    },
  },
})
