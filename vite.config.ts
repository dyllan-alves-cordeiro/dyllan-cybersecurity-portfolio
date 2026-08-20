// DGX FILE HEADER
// nivel: L1-small
// arquivo: vite.config.ts
// papel: Configuração local do shell web do portfólio.
// validar: npm run build
// DGX:ANCHOR: personal-portfolio-vite-config

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
