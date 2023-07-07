import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import "vite/modulepreload-polyfill";

// vite.config.js
export default defineConfig({
  plugins: [react()],
  // // root: "src",
  // build: {
  //   // generate manifest.json in outDir
  //   manifest: true,
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     input: "./src/App.tsx",
  //   },
  //   server: {
  //     proxy: {
  //       "/api": "http://localhost:3000/", // the address that u serve in the backend
  //     },
  //   },
  // },
});
