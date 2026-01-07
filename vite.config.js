import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // relativo ao index.html
  plugins: [tailwindcss()]
})
