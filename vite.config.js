import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/content.json': {
        target: 'https://www.thinkinno.com/wp-content/uploads',
        changeOrigin: true,
        rewrite: () => '/content.json'
      }
    }
  }
})
