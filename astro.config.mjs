import { defineConfig } from "astro/config";

import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), sitemap(), tailwind()],
  site: "https://example.com",
});
