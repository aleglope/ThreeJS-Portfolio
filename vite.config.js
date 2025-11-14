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
    chunkSizeWarningLimit: 1000, // Aumenta el límite a 1MB
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa Three.js en su propio chunk
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          // Separa react-player en su propio chunk
          player: ["react-player"],
          // Separa GSAP en su propio chunk
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
