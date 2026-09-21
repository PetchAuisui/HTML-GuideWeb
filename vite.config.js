import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/HTML-GuideWeb/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        lesson1: 'lesson1.html',
        lesson2: 'lesson2.html',
        lesson3: 'lesson3.html',
      },
    },
  },
})
