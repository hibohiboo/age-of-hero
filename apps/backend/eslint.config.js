import backendConfig from '@age-of-hero/eslint-config-custom/backend.js';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  { ignores: ['vite.config.ts', '**/dist/**', '**/public/**'] },
  {
    extends: [
      ...backendConfig,
      {
        files: ['eslint.config.js'],
        rules: {
          'import/no-extraneous-dependencies': ['off'],
        },
      },
    ],
  },
);
