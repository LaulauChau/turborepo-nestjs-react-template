const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist/*', 'node_modules/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
