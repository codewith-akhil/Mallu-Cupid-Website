import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mallu-Cupid-Website/',
  server: {
    port: 3001,
    host: true,
  },
})
