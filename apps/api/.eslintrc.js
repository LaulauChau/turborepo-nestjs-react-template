/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    jest: true,
  },
  extends: ["@repo/eslint-config/base.js"],
  root: true,
};

module.exports = config;
