import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default () => {
  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'components': path.resolve(__dirname, './src/components'),
        'assets': path.resolve(__dirname, './src/assets'),
        'services': path.resolve(__dirname, './src/services'),
        'models': path.resolve(__dirname, './src/models'),
      }
    },
  })
}
