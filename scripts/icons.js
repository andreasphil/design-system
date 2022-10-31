import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

/** Template for the output SCSS */
const scss = ([light, dark]) => `
/* This file is generated with \`node scripts/icons.js\` */
:root {
${light.trim()}
}
@media (prefers-color-scheme: dark) { :root {
${dark.trim()}
}}`;

/** Convert an SVG string into a data URI */
const dataUri = (source) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;

/** Shorthand for getting absolute file paths */
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
    ([light, dark], [name, lightIcon, darkIcon]) => [
      `${light}--icon-${name}: url("${dataUri(lightIcon)}");\n`,
      `${dark}--icon-${name}: url("${dataUri(darkIcon)}");\n`,
    ],
    ["", ""]
  );

writeFileSync(path("_icons.scss"), scss(icons), { encoding: "utf-8" });
