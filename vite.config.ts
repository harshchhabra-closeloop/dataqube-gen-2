import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@ui-components': path.resolve(__dirname, 'src/components/ui-components'),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
