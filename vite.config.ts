import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // Adjust the manifest options according to your project requirements
        // Make sure the paths to icons and shortcuts are correct
        // The paths are relative to your project root
        theme_color: "#232e58",
        background_color: "#232e58",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Todo App",
        description: "Todo App",
        name: "Todo Frontend",
        icons: [
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          // Add similar entries for other icon sizes
        ],
        shortcuts: [
          {
            name: "Add Task",
            description: "Add Task",
            url: "/add",
            icons: [
              {
                src: "/add.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
          // Add similar entries for other shortcuts
        ],
      },
      // Check if workbox configuration is causing issues, you can comment it out for now
      // workbox: {
      //   globPatterns: ["/*"],
      // },
      // Check if includeAssets is causing issues, you can comment it out for now
      // includeAssets: ["/*"],
      // Check if devOptions is causing issues, you can comment it out for now
      // devOptions: {
      //   enabled: true,
      //   type: "module",
      // },
      // Check if registerType is causing issues, you can comment it out for now
      // registerType: "autoUpdate",
    }),
  ],
});