import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      syntax: "es2021",
      dts: true,
      bundle: false,
      // bundle: false,
    },
    {
      format: "cjs",
      syntax: "es2021",
      bundle: false,
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
  // source: {
  //   entry: {
  //     index: "./src/index.ts",
  //     "sdk/index": "./src/sdk/index.ts",
  //   },
  // },
  source: {
    exclude: ["./src/openapi/openapi.yml"],
    entry: {
      index: "./src/**/*.{ts,js,css}",
    },
  },
});
