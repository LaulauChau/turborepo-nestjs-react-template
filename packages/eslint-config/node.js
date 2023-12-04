/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', './base.js'],
  ignorePatterns: ['!.eslintrc.js'],
  rules: {
    'class-methods-use-this': 'off',
  },
};
