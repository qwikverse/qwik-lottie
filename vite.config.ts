import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import netlifyEdge from '@netlify/vite-plugin-netlify-edge';

export default defineConfig(() => {
  return {
    build: {
      target: 'es2020',
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
    },
    plugins: [
      qwikVite({ ssr: { outDir: 'netlify/edge-functions/entry.netlify-edge' } }),
      netlifyEdge({ functionName: 'entry.netlify-edge' }),
    ],
  };
});
