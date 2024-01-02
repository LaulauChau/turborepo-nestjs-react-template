/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', './base.js'],
  rules: {
    'class-methods-use-this': 'off',
  },
};
