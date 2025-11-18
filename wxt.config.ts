import { defineConfig } from 'wxt'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  modules: ['@wxt-dev/module-vue'],
  vite: () => ({
    plugins: [
      {
          name: 'nuxt-ui-csp-fix',
          enforce: 'pre',
          transform(code:string, id:string) {
            if (id.includes('@nuxt/ui') && code.includes('data-nuxt-ui-colors')) {
              return { code: 'export default () => {}', map: null }
            }
          }
      },
      ui()
    ],
  }),
})
