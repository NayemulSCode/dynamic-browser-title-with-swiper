import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Define your aliases here
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@lib': '/src/lib',
      '@ui': '/src/ui',
      '@store': '/src/store',
      '@settings': '/src/settings',
      '@data': '/src/fake-data',
    },
  },
  plugins: [react()],
})
