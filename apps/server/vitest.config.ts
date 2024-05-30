import { resolve } from "node:path";
import swc from "unplugin-swc";
import { configDefaults, defineConfig } from "vitest/config";

// https://vitest.dev/config/
const config = defineConfig({
  plugins: [swc.vite()],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
  },
  test: {
    exclude: [...configDefaults.exclude],
    globals: true,
    root: "./",
  },
});

export default config;
