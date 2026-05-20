import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://familyyouthcoaching.nl",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
