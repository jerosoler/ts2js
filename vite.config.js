import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({})],
  build: {
    outDir: 'docs'
  }
})
