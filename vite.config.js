import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^components(.*)$/, replacement: '/src/components$1' },
      { find: /^contexts(.*)$/, replacement: '/src/contexts$1' },
      { find: /^assets(.*)$/, replacement: '/src/assets$1' },
      { find: /^theme(.*)$/, replacement: '/src/theme$1' },
      { find: /^pertemuan6(.*)$/, replacement: '/src/pertemuan6$1' },
      { find: /^routes(\.jsx)?$/, replacement: '/src/routes.jsx' },
    ],
  },
})
