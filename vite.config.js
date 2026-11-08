import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const API_BASE_URL = '/api';
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      strict: false
    }
  }
})