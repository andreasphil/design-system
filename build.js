// @ts-check
import { bundle } from "lightningcss";
import { readFileSync, writeFileSync, watch } from "node:fs";

/**
 * @param {object} rgb
 * @param {number} rgb.r
 * @param {number} rgb.g
 * @param {number} rgb.b
 * @returns
 */
function rgbToHex({ r, g, b }) {
  return `#${[r, g, b].map((i) => i.toString(16)).join("")}`;
}

/**
 * @param {string} raw File content
 * @param {string} [stroke] Stroke color
 * @returns {string}
 */
function svgToData(raw, stroke) {
  let result = raw
    .trim()
    .replace(/\n/g, "")
    .replace(/\s+/g, " ")
    .replace(/> </g, "><");

  if (stroke) result = result.replace(/stroke="[^"]+"/g, `stroke="${stroke}"`);

  return `data:image/svg+xml;base64,${btoa(result)}`;
}

function build() {
  let { code } = bundle({
    filename: "./src/index.css",
    minify: true,

    visitor: {
      Function: {
        icon: ({ arguments: args }) => {
          let path = args[0].value.value;
          let raw = readFileSync(`./src/icons/${path}`, { encoding: "utf-8" });
          let color = rgbToHex(args[2].value);
          let iconUrl = svgToData(raw, color);

          return { raw: `url("${iconUrl}")` };
        },
      },
    },
  });

  writeFileSync("./dist/index.min.css", Buffer.from(code));
  console.log("✨ Build done");
}

function buildWatch() {
  build();

  console.log("👀 Watching for changes");
  watch("./src", { recursive: true }, (ev, filename) => {
    console.log(`🔹 [${ev}] ${filename}, rebuilding ...`);
    build();
  });
}

if (process.argv[2] === "--watch") buildWatch();
else build();
