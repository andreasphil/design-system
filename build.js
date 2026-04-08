// @ts-check

import { readFileSync, writeFileSync, watch } from "node:fs";
import { bundle } from "lightningcss";

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
  let result = raw.trim().replace(/\n/g, "").replace(/\s+/g, " ").replace(/> </g, "><");

  if (stroke) result = result.replace(/stroke="[^"]+"/g, `stroke="${stroke}"`);

  return `data:image/svg+xml;base64,${btoa(result)}`;
}

function build() {
  const entries = [
    { from: "./src/index.css", to: "./dist/design-system.css" },
    { from: "./src/utils/utils.css", to: "./dist/design-system-utils.css" },
  ];

  entries.forEach(({ from, to }) => {
    let { code } = bundle({
      filename: from,

      visitor: {
        Function: {
          icon: ({ arguments: args }) => {
            let path = args[0].value.value;
            let raw = readFileSync(`./src/icons/${path}`, {
              encoding: "utf-8",
            });
            let color = rgbToHex(args.find((a) => a.type === "color").value);
            let iconUrl = svgToData(raw, color);

            return { raw: `url("${iconUrl}")` };
          },
        },
      },
    });

    writeFileSync(to, Buffer.from(code));
  });

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
