import { resolve } from "node:path";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
const config = defineConfig(({ mode }) => {
  const { CLIENT_PORT, SERVER_URL } = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), TanStackRouterVite()],
    resolve: {
      alias: [{ find: "~", replacement: resolve(__dirname, "src") }],
    },
    server: {
      port: Number(CLIENT_PORT),
      proxy: {
        "/api": {
          changeOrigin: true,
          target: SERVER_URL,
        },
      },
    },
  };
});

export default config;
