import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 配置proxy 解决跨域问题
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3120/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  plugins: [react()],
  // 配置路径别名
  resolve: {
    alias: {
      "@":  fileURLToPath(new URL("./src", import.meta.url))
    }
  }
})
