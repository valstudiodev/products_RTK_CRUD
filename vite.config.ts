import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig(() => {
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'
  return {
    base: isGitHubPages ? '/products_RTK_CRUD/' : '/',
    plugins: [
      react(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@app': path.resolve(__dirname, './src/app'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@entites': path.resolve(__dirname, '/src/entities'),
        '@featured': path.resolve(__dirname, './src/featured'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@widgets': path.resolve(__dirname, './src/widgets'),
      }
    },
    server: {
      port: 3000,
      open: true,
    }
  }
})
