import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Force dev server restart to load new Tailwind config variables
export default defineConfig({
  plugins: [react()],
})
