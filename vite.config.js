import vue from "@vitejs/plugin-vue2";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.js"),
      name: "VueComponentObserver",
      fileName: (format) => `vue-component-observer.${format}.js`,
    },

    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  define: {
    VERSION: JSON.stringify(require("./package.json").version),
  },
});
