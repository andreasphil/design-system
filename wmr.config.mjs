import { defineConfig } from "wmr";
import mdx from "@mdx-js/rollup";

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  alias: { "~/*": "./", "@/*": "./docs/" },
  out: "dist/docs",
  public: "docs",
  plugins: [mdx({ jsxImportSource: "preact" })],
});
