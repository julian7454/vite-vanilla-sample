import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss'
import path from 'path';
export default () => {
  return defineConfig({
    plugins: [
        legacy({
            targets: ['defaults'],
        }),
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer({
            overrideBrowserslist: [
              'last 2 versions',
            ],
          }),
        ],
      }
    },
    publicDir: false
  })
}