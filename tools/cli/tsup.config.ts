import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/index.ts'],
  clean: true,
  watch,
  sourcemap: watch ? 'inline' : true,
  format: ['cjs'],
  target: 'node16',
}));
