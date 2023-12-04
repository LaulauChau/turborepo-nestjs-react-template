/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    './base.js',
  ],
  ignorePatterns: ['src/components/ui/*', '!.eslintrc.cjs'],
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
