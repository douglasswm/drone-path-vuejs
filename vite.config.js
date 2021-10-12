import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/batt': 'http://localhost:5000'
    }
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    })
  ]
})
