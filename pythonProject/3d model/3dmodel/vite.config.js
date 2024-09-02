import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
