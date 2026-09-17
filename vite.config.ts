import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // No base path — assets resolve relative to the domain root.
  // When deployed to mallucupid.com, /assets/index.js resolves correctly.
  // (The previous '/Mallu-Cupid-Website/' base broke asset loading on the
  // custom domain — the browser requested /Mallu-Cupid-Website/assets/...
  // which hit the SPA fallback and returned index.html instead of the JS.)
  server: {
    port: 3001,
    host: true,
  },
})
