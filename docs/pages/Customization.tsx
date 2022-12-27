import { DocumentationLayout, Preview } from "@/lib/components";
import useTheme from "@/lib/theme";

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
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Color palette                                      *
 * -------------------------------------------------- */

function ColorPalette() {
  return (
    <>
      <div className="palette">
        <div className="palette__item" style="--bg: var(--neutral-50)" />
        <div className="palette__item" style="--bg: var(--neutral-100)" />
        <div className="palette__item" style="--bg: var(--neutral-200)" />
        <div className="palette__item" style="--bg: var(--neutral-300)" />
        <div className="palette__item" style="--bg: var(--neutral-400)" />
        <div className="palette__item" style="--bg: var(--neutral-500)" />
        <div className="palette__item" style="--bg: var(--neutral-600)" />
        <div className="palette__item" style="--bg: var(--neutral-700)" />
        <div className="palette__item" style="--bg: var(--neutral-800)" />
        <div className="palette__item" style="--bg: var(--neutral-900)" />
        <div className="palette__item" style="--bg: var(--neutral-950)" />
      </div>
      <div className="palette">
        <div className="palette__item" style="--bg: var(--primary-50)" />
        <div className="palette__item" style="--bg: var(--primary-100)" />
        <div className="palette__item" style="--bg: var(--primary-200)" />
        <div className="palette__item" style="--bg: var(--primary-300)" />
        <div className="palette__item" style="--bg: var(--primary-400)" />
        <div className="palette__item" style="--bg: var(--primary-500)" />
        <div className="palette__item" />
        <div className="palette__item" />
        <div className="palette__item" />
        <div className="palette__item" />
        <div className="palette__item" />
      </div>
    </>
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
        Fine comes with two color palettes — neutral and primary. All colors
        share the same hue (should be between 0 and 359), which is stored in the{" "}
        <code>--theme-tint</code> CSS variable. Changing this variable allows
        you to easily adjust the entire color scheme, and in most cases, this
        will be the only variable you need to touch.
      </p>
      <p>
        By default, the primary color is based on the theme variables just like
        every other color. This will work for many colors. But sometimes you'll
        need more control, e.g. if you want a particularly vibrant primary
        color. When that happens, you can override the primary color by
        specifying hue, saturation, and lightness:
      </p>
      <pre>--theme-primary: 200 80% 50%</pre>

      <h3>Playground</h3>
      <p>You can try the different color parameters below:</p>
      <ColorPalette />
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
