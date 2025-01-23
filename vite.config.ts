import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/portfolio-akash/",
  // build: {
  //   rollupOptions: {
  //     input: "src/main.tsx", 
  //   },
  // },
});
