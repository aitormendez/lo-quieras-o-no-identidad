import { defineConfig } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "static",
  adapter: vercelStatic(),
});
