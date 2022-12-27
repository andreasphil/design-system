import { defineConfig } from "wmr";

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  alias: { "~/*": "./", "@/*": "./docs/" },
  out: "dist/docs",
  public: "docs",
});
