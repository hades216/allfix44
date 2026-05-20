import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlifyPlugin from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [
    netlifyPlugin({
      edge: false,
      functions: "dist/functions",
      publish: "dist/public",
    }),
  ],
});
