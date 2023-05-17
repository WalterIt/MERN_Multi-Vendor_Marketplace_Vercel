import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icons: true,
      },
    }),
  ],
  base: "/MERN_Multi-Vendor_Marketplace_Vercel", 
  server: { port: 3000 },
});
