import path from 'path';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@age-of-hero/frontend': path.join(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-router', 'react-dom/client'],
          util: ['swr', 'uuid'],
          vendors: ['hono', ],
        },
      },
    },
  },
});
