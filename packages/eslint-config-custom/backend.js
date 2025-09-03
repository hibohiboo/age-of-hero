import { defineConfig } from 'eslint/config';
import globals from 'globals';
import customConfig from './defaults.js';

export default defineConfig({
  files: ['**/*.ts'],
  ignores: ['dist'],
  extends: [...customConfig],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      ...globals.node,
      myCustomGlobal: 'readonly',
    },
  },
});
