import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-akash/",
  build: {
    rollupOptions: {
      input: "src/main.tsx", // Explicitly define the entry file for TypeScript (optional)
    },
  },
});
