import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2';

const envDir = resolve(process.cwd(), '../'); // Repo root
const envPrefix = 'PUBLIC';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, envDir, envPrefix); // Required for `server.port` as `envDir` hasn't yet been evaluated below

  return {
    css: {
      devSourcemap: true,
    },
    envDir: envDir,
    envPrefix: envPrefix,
    plugins: [
      react(),
      ViteFaviconsPlugin({ // https://github.com/khalwat/vite-plugin-favicon
        logo: resolve(process.cwd(), 'src', 'assets', 'logo.svg'),
        favicons: { // https://github.com/itgalaxy/favicons#usage
          appDescription: 'Uses the TfL Unified API to display service statuses for the various TfL services.',
          appName: 'TfL Status',
          developerName: null,
          developerURL: null,
          icons: {
            appleStartup: false,
            yandex: false,
          },
          lang: 'en-GB',
        },
      }),
    ],
    publicDir: resolve(__dirname, 'public'),
    resolve: {
      alias: {
        '@api': resolve(__dirname, 'src', 'stores', 'api'),
        '@components': resolve(__dirname, 'src', 'components'),
        '@constants': resolve(__dirname, 'src', 'constants'),
        '@icons': resolve(__dirname, 'src', 'components', 'shared', 'icons'),
        '@layouts': resolve(__dirname, 'src', 'layouts'),
        '@routes': resolve(__dirname, 'src', 'routes'),
        '@stores': resolve(__dirname, 'src', 'stores'),
        '@utils': resolve(__dirname, 'src', 'utils'),
        '@views': resolve(__dirname, 'src', 'views'),
      },
    },
    server: {
      port: env.PUBLIC_CLIENT_PORT_NUMBER,
    },
  };
});
