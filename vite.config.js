import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        corporate: resolve(__dirname, 'services/corporate.html'),
        immigration: resolve(__dirname, 'services/immigration.html'),
        family: resolve(__dirname, 'services/family.html'),
        consulting: resolve(__dirname, 'services/consulting.html'),
        entertainment: resolve(__dirname, 'services/entertainment.html'),
      },
    },
  },
})
