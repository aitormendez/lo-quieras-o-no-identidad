import { defineConfig } from "astro/config";
// import vercelStatic from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "hybrid",
  adapter: vercel(),
});
