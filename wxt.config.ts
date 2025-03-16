import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],
  vite: () => ({
    plugins: [vue(), ui()],
  }),
})
