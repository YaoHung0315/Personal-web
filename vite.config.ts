import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In dev, serve from root so local preview works.
// In the production build, use the GitHub Pages repo subpath.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Personal-web/' : '/',
}));
