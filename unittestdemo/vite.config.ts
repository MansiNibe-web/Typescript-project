// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

///<reference types="vitest"/>
///<reference types="vite/client"/>
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Simulates a browser environment
    globals: true,        // Allows global test functions like `describe` and `it`
    setupFiles: './src/setupTests.ts', // Optional: Add test setup file
  },
});
