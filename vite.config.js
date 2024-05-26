import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        landing: resolve(__dirname, "index.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
        account: resolve(__dirname, "account.html"),
      },
    },
  },
});
