import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  plugins: [
    tsconfigPaths({
      root: __dirname,
    }),
  ],
  test: {},
  // resolve: {
  //   alias: {
  //     "helper/": new URL("./src/", import.meta.url).pathname,
  //     "types/": new URL("./src/", import.meta.url).pathname,
  //   },
  // },
});
