const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "./base.js",
  ],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project,
      },
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = config;
