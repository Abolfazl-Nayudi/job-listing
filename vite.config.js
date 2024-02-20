import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import reactSvgPlugin from 'vite-plugin-react-svg';
// import reactRefresh from '@vitejs/plugin-react-refresh';
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react(), reactSvgPlugin(), reactRefresh()],
  plugins: [react()],
});
