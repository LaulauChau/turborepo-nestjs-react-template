import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

import { env } from "./src/lib/env";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
  },
  server: {
    port: env.CLIENT_PORT,
    proxy: {
      "/api": {
        target: env.SERVER_URL,
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    exclude: [...configDefaults.exclude],
  },
});

export default config;
