import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import jsconfigpath from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: {
      src: "/src",
      pages: "/src/pages",
      components: "/src/components",
      routes: "/src/routes",
      services: "/src/services",
      validations: "/src/validations",
      providers: "/src/providers",
      context: "/src/context",
    },
  },
})
