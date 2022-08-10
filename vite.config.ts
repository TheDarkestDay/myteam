import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/myteam/',
  // resolve: {
  //   alias: {
  //     "react": "preact/compat",
  //     "react-dom/test-utils": "preact/test-utils",
  //     "react-dom": "preact/compat",
  //     "react/jsx-runtime": "preact/jsx-runtime"
  //   }
  // },
  plugins: [preact()]
})
