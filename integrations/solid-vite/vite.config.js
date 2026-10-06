import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [solid()],
});
