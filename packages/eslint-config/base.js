const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
const config = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist/", "node_modules/", ".eslintrc.*"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
      ],
      files: ["**/*.{ts,tsx}"],
      parserOptions: {
        project,
      },
      rules: {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { prefer: "type-imports", fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
          "error",
          { checksVoidReturn: { attributes: false } },
        ],
      },
    },
    {
      extends: ["plugin:jsonc/recommended-with-json"],
      files: ["**/*.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": "error",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "typescript-sort-keys"],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
};

module.exports = config;
