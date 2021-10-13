import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/hello': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
    }
    },
    
  },
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    })
  ]
})
