import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/papantonhs_web/', // 👈 ΤΟ ΟΝΟΜΑ ΤΟΥ REPO ΣΟΥ
})

