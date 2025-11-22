 // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      // Add proxy configuration if needed for API calls
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-bootstrap'] 
  }
})