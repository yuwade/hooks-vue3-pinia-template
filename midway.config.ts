import vue from '@vitejs/plugin-vue';
import { defineConfig } from '@midwayjs/hooks-kit';
import { resolve } from 'path/posix'
export default defineConfig({
  vite: {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve('src')
      },
    },
  },
});
