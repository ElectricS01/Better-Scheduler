import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: "Better Scheduler",
        short_name: "Scheduler",
        description:
          "BetterScheduler is an interactive and simple tool to build schedules for school, work, and home",
        theme_color: "#282a2b",
        background_color: "#181a1b",
        display: "fullscreen",
        categories: ["productivity", "events", "lifestyle", "utilities"],
        start_url: "/scheduler"
      }
    })
  ],
  server: {
    port: 8080
  }
})
