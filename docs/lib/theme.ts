/* -------------------------------------------------- *
 * Types                                              *
 * -------------------------------------------------- */

import { useEffect, useState } from "preact/hooks";

export type Theme = {
  tint?: string;
  saturate?: string;
  lighten?: string;
  primary?: {
    hue: string;
    saturation: string;
    lightness: string;
  };
};

/* -------------------------------------------------- *
 * Utilities                                          *
 * -------------------------------------------------- */

/**
 * Sets a style property on the specified element. Any truthy value will be
 * applied. If the value is falsy, the property will be removed from the
 * element.
 */
function setOrRemove(el: HTMLHtmlElement, name: string, value?: string) {
  if (value) el.style.setProperty(name, value);
  else el.style.removeProperty(name);
}

/** Applies a theme to the root element. */
function applyTheme(theme: Theme) {
  const root = document.querySelector(":root") as HTMLHtmlElement;
  if (!root) return;

  setOrRemove(root, "--theme-tint", theme.tint);
  setOrRemove(root, "--theme-saturate", theme.saturate);
  setOrRemove(root, "--theme-lighten", theme.lighten);

  if (theme.primary) {
    const primary = [
      theme.primary.hue || "1",
      (theme.primary.saturation || "1") + "%",
      (theme.primary.lightness || "1") + "%",
    ].join(" ");
    setOrRemove(root, "--theme-primary", primary);
  } else setOrRemove(root, "--theme-primary");
}

/** Reads the current theme from the root element. */
function readTheme(): Theme {
  const root = document.querySelector(":root") as HTMLHtmlElement;
  if (!root) return {};

  const style = getComputedStyle(root);
  const theme: Theme = {
    tint: style.getPropertyValue("--theme-tint"),
    saturate: style.getPropertyValue("--theme-saturate"),
    lighten: style.getPropertyValue("--theme-lighten"),
  };

  return theme;
}

function getThemeCode(theme: Theme) {
  let code = `--theme-tint: ${theme.tint};
--theme-saturate: ${theme.saturate};
--theme-lighten: ${theme.lighten};`;

  if (theme.primary) {
    code += `\n--theme-primary: ${theme.primary.hue} ${theme.primary.saturation}% ${theme.primary.lightness}%;`;
  }

  return code;
}

/* -------------------------------------------------- *
 * useTheme hook                                      *
 * -------------------------------------------------- */

export default function useTheme() {
  const [code, setCode] = useState("");
  const [theme, setTheme] = useState<Theme>({});
  const [overridePrimary, setOverridePrimary] = useState(false);

  useEffect(() => {
    // Set the theme during an effect as this will only be run on the client,
    // not during pre-rendering (where document is not available and so no
    // theme can be read).
    setTheme(readTheme());
  }, []);

  useEffect(() => {
    applyTheme(theme);
    setCode(getThemeCode(theme));
  }, [theme]);

  useEffect(() => {
    const primary = overridePrimary
      ? { hue: "200", saturation: "80", lightness: "50" }
      : undefined;

    setTheme((t) => ({ ...t, primary }));
  }, [overridePrimary]);

  return { code, theme, setTheme, overridePrimary, setOverridePrimary };
}
