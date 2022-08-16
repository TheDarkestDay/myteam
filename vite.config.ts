import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myteam/',
  plugins: [
    VitePWA({
      includeAssets: ['src/assets/pwa-icons/favicon.ico', 'src/assets/pwa-icons/apple-touch-icon.png', 'src/assets/pwa-icons/mask-icon.svg'],

      manifest: {
        name: 'Myteam landing page',
        short_name: 'Myteam',
        description: 'A landing page of Myteam IT service company',
        theme_color: '#014e56',
        icons: [
          {
            src: 'src/assets/pwa-icons/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'src/assets/pwa-icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'src/assets/pwa-icons/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }),
    
    preact()
  ]
})
