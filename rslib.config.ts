import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "es2021",
      dts: true,
      // bundle: false,
    },
    {
      format: "cjs",
      syntax: "es2021",
    },
  ],
  output: {
    minify: {
      js: true,
      css: true,
    },
    distPath: {
      root: "./publish/dist",
    },
  },
  source: {
    entry: {
      index: "./src/index.ts",
      "sdk/index": "./src/sdk/index.ts",
    },
  },
});
