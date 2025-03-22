import { defineConfig } from "vitest/config";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Configure Vitest (https://vitest.dev/config/)
  plugins: [tsconfigPaths()],
  test: {},
  // resolve: {
  //   alias: {
  //     "helper/": new URL("./src/", import.meta.url).pathname,
  //     "types/": new URL("./src/", import.meta.url).pathname,
  //   },
  // },
});
