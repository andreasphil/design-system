import { DocumentationLayout, Preview } from "../lib/components";
import useTheme from "../lib/theme";

/* -------------------------------------------------- *
 * Theme playground                                   *
 * -------------------------------------------------- */

function ThemePlayground() {
  const { code, theme, setTheme, overridePrimary, setOverridePrimary } =
    useTheme();

  /** Apply changes to the basic theme colors */
  function onUpdateTheme(e: InputEvent) {
    setTheme((t) => {
      if (!(e.target instanceof HTMLInputElement)) return t;
      return { ...t, [e.target.name]: e.target.value };
    });
  }

  /** Apply changes to the primary color */
  function onUpdatePrimary(e: InputEvent) {
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
  function onUpdateOverridePrimary(e: InputEvent) {
    if (e.target instanceof HTMLInputElement) {
      setOverridePrimary(e.target.checked);
    }
  }

  return (
    <Preview code={code}>
      {/* Basic theme colors */}
      <fieldset
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
        }}
      >
        <legend>Theme</legend>
        <label>
          Tint
          <input
            type="number"
            value={theme.tint}
            name="tint"
            onInput={onUpdateTheme}
          />
        </label>
        <label>
          Saturate
          <input
            type="number"
            value={theme.saturate}
            name="saturate"
            onInput={onUpdateTheme}
          />
        </label>
        <label>
          Lighten
          <input
            type="number"
            value={theme.lighten}
            name="lighten"
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
        <legend>Primary</legend>
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
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function Customization() {
  return (
    <DocumentationLayout
      title="Customization"
      description="You can tweak Fine's look and feel to match your project through CSS variables."
    >
      <h2>Color scheme</h2>
      <p>
        Colors are derived from three basic properties: tint, saturation, and
        lightness. Tweaking these allows you to quickly change the colors of
        your page without having to touch with any specific color.
      </p>
      <ul>
        <li>
          <p>
            <code>--theme-tint</code>: This is the hue used by all colors.
            Should be between 0 and 359. In most cases, this will be the only
            variable you need to touch.
          </p>
        </li>
        <li>
          <p>
            <code>--theme-lighten</code> and <code>--theme-saturate</code>{" "}
            adjusts the lightness and saturation of the colors. Lightness and
            saturation of all colors are multiplied with these values. Both are
            1 by default. Note that the colors are quite sensitive to these
            modifiers, so small changes usually work best (i.e. no more than
            plus or minus 0.1).
          </p>
        </li>
      </ul>
      <h3>Primary color</h3>
      <p>
        By default, the primary color is based on the theme variables just like
        every other color. This will work for many colors. But sometimes you'll
        need more control, e.g. if you want a particularly vibrant primary
        color. In that case, you can override the primary color by specifying
        hue, saturation, and lightness:
      </p>
      <pre>--theme-primary: 200 80% 50%</pre>
      <p>
        The value will be used for automatically calculating the different
        variations of the primary color that are needed.
      </p>

      <h3>Playground</h3>
      <p>You can try the different color parameters below:</p>
      <ThemePlayground />

      <h2>Other variables</h2>
      <p>
        There are more variables than can be customized. Have a look at the{" "}
        <a href="https://github.com/andreasphil/fine/blob/main/src/base/_variables.scss">
          variables file
        </a>{" "}
        to learn more.
      </p>
    </DocumentationLayout>
  );
}
