import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { resolve, parse } from "path";

function getAbsolutePath(filename) {
  const dirname = new URL("..", import.meta.url).pathname;
  return resolve(dirname, filename);
}

function findScssFiles(path) {
  const paths = [];

  readdirSync(path).forEach((entry) => {
    const entryPath = resolve(getAbsolutePath(path), entry);
    const entryStats = statSync(entryPath);

    if (entryStats.isDirectory()) {
      paths.push(...findScssFiles(entryPath));
    } else if (entryStats.isFile() && parse(entryPath).ext === ".scss") {
      paths.push(entryPath);
    }
  });

  return paths;
}

function extractVariables(filePath) {
  const file = readFileSync(filePath, { encoding: "utf-8" });
  const variables = file.match(/--\w[\w-]*/g);
  return Array.from(new Set(variables ? variables : []));
}

function insertNewLines(variables) {
  let prev = "";
  let result = "";

  variables
    .map((variable) => [variable.replace("--", "").split("-")[0], variable])
    .forEach(([prefix, variable]) => {
      if (prefix !== prev) {
        result += "\n";
        prev = prefix;
      }
      result += variable + "\n";
    });

  return result.trim();
}

const files = findScssFiles("src");
const variables = files.flatMap((path) => extractVariables(path)).sort();
const docs = insertNewLines(Array.from(new Set(variables)));

const readmePath = getAbsolutePath("README.md");
let readmeContent = readFileSync(readmePath, { encoding: "utf-8" });

readmeContent = readmeContent.replace(
  /<!-- VARIABLES -->.*<!-- END VARIABLES -->/s,
  "<!-- VARIABLES -->\n```\n" + docs + "\n```\n<!-- END VARIABLES -->"
);

writeFileSync(readmePath, readmeContent, { encoding: "utf-8" });
