import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  build: {
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Keep React out of the optional 3D chunks so Design can load without WebGL.
        onlyExplicitManualChunks: true,
        manualChunks(id) {
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "react-vendor";
          if (id.includes("node_modules/three/")) return "three-core";
          if (id.includes("node_modules/@react-three/")) return "three-react";
          if (/node_modules\/(react-globe.gl|globe.gl|three-globe|three-render-objects)\//.test(id)) return "globe";
          if (/node_modules\/(gsap|@gsap\/react)\//.test(id)) return "gsap";
        },
      },
    },
  },
});
