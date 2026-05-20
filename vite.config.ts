import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlifyPlugin from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  cloudflare: false,
  build: {
    outDir: "dist/public",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [
    netlifyPlugin({
      edge: false,
      functions: "dist/functions",
    }),
  ],
});
