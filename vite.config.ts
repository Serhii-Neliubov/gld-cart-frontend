import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),

      services: `${path.resolve(__dirname, "./src/services/")}`,
      pages: `${path.resolve(__dirname, "./src/pages/")}`,
      models: `${path.resolve(__dirname, "./src/models/")}`,
      assets: `${path.resolve(__dirname, "./src/assets/")}`,
      components: `${path.resolve(__dirname, "./src/components/")}`,
      store: `${path.resolve(__dirname, "./src/store/")}`,
      utils: `${path.resolve(__dirname, "./src/utils/")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
    }
  },
});