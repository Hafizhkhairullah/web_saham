import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      // Enables @/ absolute imports (e.g. @/lib/utils, @/components/ui/...)
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})

