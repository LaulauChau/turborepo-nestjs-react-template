import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { CLIENT_PORT, SERVER_URL } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
    },
    server: {
      port: Number(CLIENT_PORT),
      proxy: {
        '/api': {
          target: SERVER_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
