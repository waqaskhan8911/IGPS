import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/IGPS",
    server: {
      hmr: {
        overlay: true
      }
    },
      resolve: {
        alias: {
          'swiper': 'swiper/swiper-bundle.esm.js'
        }
      }
    })


