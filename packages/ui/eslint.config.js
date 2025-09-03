import customConfig from '@age-of-hero/eslint-config-custom/defaults.js';
import storybook from 'eslint-plugin-storybook';

import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    extends: [
      ...customConfig,
      {
        files: ['**/**'],
        rules: {
          'no-underscore-dangle': ['off'],
          'no-restricted-exports': ['off'],
          'import/no-extraneous-dependencies': ['off'],
          'no-alert': ['off'],
          'no-console': ['off'],
        },
      },
      {
        files: ['src/**/*.stories.tsx'],
        rules: {
          'no-shadow': ['off'],
        },
      },
    ],
  },
  storybook.configs['flat/recommended'],
);
