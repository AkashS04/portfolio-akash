import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-akash/",
  plugins: [react()],
  build:{
    minify:'esbuild',
    cssCodeSplit:true,
    sourcemap:false,
  }
});
