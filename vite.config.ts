import { defineConfig as viteDefineConfig } from 'vite'
import { defineConfig as vitestDefineConfig, mergeConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


const vitestConfig = vitestDefineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./tests/setup.js"],
  }
})

// https://vitejs.dev/config/
export default mergeConfig(vitestConfig, viteDefineConfig({
  plugins: [react()],
}))
