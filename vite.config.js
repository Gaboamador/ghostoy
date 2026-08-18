import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    VitePWA({
      disable: mode !== 'production',
      registerType: 'prompt',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Ghost of Yotei Builds', short_name: 'Ghostoy',
        description: 'Builds y colección de Ghost of Yotei',
        theme_color: '#b7342c', background_color: '#101211', display: 'standalone',
        start_url: '/', scope: '/', orientation: 'portrait-primary',
        icons: [
          { src: '/pwa-192x192.svg', sizes: '192x192', type: 'image/svg+xml', purpose: 'any' },
          { src: '/pwa-512x512.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
      workbox: { navigateFallback: 'index.html', cleanupOutdatedCaches: true },
    }),
  ],
}));
