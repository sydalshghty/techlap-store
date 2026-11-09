import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), cssInjectedByJs()],
})
