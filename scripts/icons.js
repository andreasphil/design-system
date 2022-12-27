// @ts-check

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

/**
 * Template for the output SCSS.
 * @param {string[]} light
 * @param {string[]} dark
 * @returns {string}
 */
function scss(light, dark) {
  return `/* This file is generated with \`node scripts/icons.js\` */
:root {
${light.join("\n").trim()}
}
@media (prefers-color-scheme: dark) { :root {
${dark.join("\n").trim()}
}}`;
}

/**
 * Convert an SVG string into a data URI
 * @param {string} source
 * @returns {string}
 */
function dataUri(source) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
}

/**
 * Shorthand for getting absolute file paths.
 * @param {string} filename
 */
function path(filename) {
  const dirname = new URL("..", import.meta.url).pathname;
  return resolve(dirname, "src/icons", filename);
}

const icons = readdirSync(path("."))
  .filter((f) => f.match(/\.svg$/))
  .map((i) => {
    // Read SVGs and generate a light and dark version for each icon
    let icon = readFileSync(path(i), { encoding: "utf-8" });
    let name = i.replace(".svg", "");

    return [
      name,
      icon.replace(/="currentColor"/g, '="#000000"'), // for light mode
      icon.replace(/="currentColor"/g, '="#ffffff"'), // for dark mode
    ];
  })
  .reduce(
    // Group all light and dark icons together and convert them into data URIs
    (
      /** @type Record<string, string[]> */ all,
      [name, lightIcon, darkIcon]
    ) => {
      all.light.push(`--icon-${name}: url("${dataUri(lightIcon)}");`);
      all.dark.push(`--icon-${name}: url("${dataUri(darkIcon)}");`);
      return all;
    },
    { light: [], dark: [] }
  );

writeFileSync(path("_icons.scss"), scss(icons.light, icons.dark), {
  encoding: "utf-8",
});
