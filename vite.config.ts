import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// lucide-react v0.344 ships its ESM entry as re-exports from 1,500+ individual
// icon files. On Windows NTFS, Rollup reading all those files causes the build
// to hang for 10+ minutes at "transforming...". Aliasing to the single CJS
// bundle means Rollup processes one file instead of 1,500.
const __dirname = new URL('.', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lucide-react': resolve(__dirname, 'node_modules/lucide-react/dist/cjs/lucide-react.js'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
