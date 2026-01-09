import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/CEEP_website', // relativo ao index.html
  plugins: [tailwindcss()]
})
