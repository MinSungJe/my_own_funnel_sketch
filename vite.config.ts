import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const vitestConfig = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ...vitestConfig,
});
