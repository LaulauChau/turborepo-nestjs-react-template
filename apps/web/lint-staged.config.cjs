const config = {
  "src/**/*.{json,ts,tsx}": [
    "prettier --ignore-unknown --write",
    "eslint --fix --max-warnings 0 --report-unused-disable-directives",
    "vitest --run --passWithNoTests",
  ],
};

module.exports = config;
