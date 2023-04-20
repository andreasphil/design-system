import { useEffect, useState } from "preact/hooks";

/* -------------------------------------------------- *
 * Utilities                                          *
 * -------------------------------------------------- */

/**
 * Sets a style property on the specified element. Any truthy value will be
 * applied. If the value is falsy, the property will be removed from the
 * element.
 */
function setOrRemove(el, name, value) {
  if (value) el.style.setProperty(name, value);
  else el.style.removeProperty(name);
}

/** Applies a theme to the root element. */
function applyTheme(theme) {
  const root = document.querySelector(":root");
  if (!root) return;

  setOrRemove(root, "--theme-tint", theme.tint);

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
function readTheme() {
  const root = document.querySelector(":root");
  if (!root) return {};

  const style = getComputedStyle(root);

  const theme = { tint: style.getPropertyValue("--theme-tint") };

  const primary = style.getPropertyValue("--theme-primary");

  if (primary) {
    const [, hue, saturation, lightness] = primary.match(/(\d+) (\d+)% (\d+)%/);
    theme.primary = { hue, saturation, lightness };
  }

  return theme;
}

function getThemeCode(theme) {
  let code = `--theme-tint: ${theme.tint};`;

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
  const [theme, setTheme] = useState({});
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

/* -------------------------------------------------- *
 * Theme playground                                   *
 * -------------------------------------------------- */

export function ThemePlayground() {
  const { code, theme, setTheme, overridePrimary, setOverridePrimary } =
    useTheme();

  /** Apply changes to the basic theme colors */
  function onUpdateTheme(e) {
    setTheme((t) => {
      if (!(e.target instanceof HTMLInputElement)) return t;
      return { ...t, [e.target.name]: e.target.value };
    });
  }

  /** Apply changes to the primary color */
  function onUpdatePrimary(e) {
    setTheme((t) => {
      if (!(e.target instanceof HTMLInputElement)) return t;
      if (!t.primary) throw new Error();

      return {
        ...t,
        primary: { ...t.primary, [e.target.name]: e.target.value },
      };
    });
  }

  /** Toggle between automatic primary color and custom override */
  function onUpdateOverridePrimary(e) {
    if (e.target instanceof HTMLInputElement) {
      setOverridePrimary(e.target.checked);
    }
  }

  return (
    <div className="preview">
      <details open className="preview__section">
        <summary className="preview__title">Preview</summary>
        {/* Basic theme colors */}
        <fieldset
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
          }}
        >
          <label>
            Tint
            <input
              type="number"
              value={theme.tint}
              name="tint"
              onInput={onUpdateTheme}
            />
          </label>
        </fieldset>

        {/* Custom primary color switch */}
        <label>
          <input
            type="checkbox"
            role="switch"
            checked={overridePrimary}
            onInput={onUpdateOverridePrimary}
          />
          Use custom primary color
        </label>

        {/* Custom primary color */}
        <fieldset
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
          }}
        >
          <label>
            Hue
            <input
              type="number"
              name="hue"
              value={theme.primary?.hue}
              disabled={!overridePrimary}
              onInput={onUpdatePrimary}
            />
          </label>
          <label>
            Saturation
            <input
              type="number"
              name="saturation"
              value={theme.primary?.saturation}
              disabled={!overridePrimary}
              onInput={onUpdatePrimary}
            />
          </label>
          <label>
            Lightness
            <input
              type="number"
              name="lightness"
              value={theme.primary?.lightness}
              disabled={!overridePrimary}
              onInput={onUpdatePrimary}
            />
          </label>
        </fieldset>
      </details>
      <details className="preview__section">
        <summary className="preview__title">Code</summary>
        <pre className="preview__code">{code.trim()}</pre>
      </details>
    </div>
  );
}
