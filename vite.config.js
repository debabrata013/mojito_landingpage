import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/mojito_landingpage/',
  build: {
    assetsDir: 'assets',
  },
  publicDir: 'public',
})
