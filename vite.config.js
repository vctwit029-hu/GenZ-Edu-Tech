```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': rootDir,
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
```
