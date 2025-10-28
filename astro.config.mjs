// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mixpanel from "astrojs-mixpanel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  base: "web-toquea-campaign/",
  integrations: [
    mixpanel({
      token: "daa7a6fb17dffa5f376bebb915c73c73",
    }),
  ],
});
