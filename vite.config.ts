import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspect from 'vite-plugin-inspect'
import markdown2vue from './plugin/markdown2html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inspect(),
    markdown2vue(),
    vue()
  ],
  root: './src',
  build: {
    outDir: '../'
  },
  server: {
    port: 7000
  }
})
