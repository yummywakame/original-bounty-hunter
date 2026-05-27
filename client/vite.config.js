import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Proxy API requests to the Express backend during development
    proxy: {
      '/bounty': {
        target: 'http://localhost:7000',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Output to 'build/' to match the path expected by server.js
    outDir: 'build',
  },
  // CRA projects use .js files for JSX — tell esbuild to treat them as jsx
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
})
