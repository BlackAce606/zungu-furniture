import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project site (https://<user>.github.io/zungu-furniture/) needs assets
  // requested from that subpath, not the domain root.
  base: '/zungu-furniture/',
})
