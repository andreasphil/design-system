import { DocumentationLayout, Preview } from "../lib/components";

/* -------------------------------------------------- *
 * Examples                                           *
 * -------------------------------------------------- */

const spinnerCode = `
<div aria-busy="true"><div>
`;

function SpinnerExample() {
  return (
    <Preview code={spinnerCode}>
      <div dangerouslySetInnerHTML={{ __html: spinnerCode }}></div>
    </Preview>
  );
}

const forcedThemeCode = `
<article data-theme="dark" data-trim="both">
  <p>This will always appear in dark mode.</p>
  <button data-variant="outline">Sounds good!</button>
</article>

<article data-theme="light" data-trim="both">
  <p>This will always appear in light mode.</p>
  <button data-variant="outline">Sounds good!</button>
</article>`;

function ForcedThemeExample() {
  return (
    <Preview code={forcedThemeCode}>
      <div
        data-trim="both"
        dangerouslySetInnerHTML={{ __html: forcedThemeCode }}
      ></div>
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function Extra() {
  return (
    <DocumentationLayout
      title="Extra"
      description="Various utilities and small stuff that didn't really fit anywhere else."
    >
      {/* Container -------------------- */}
      <h2 id="container">Container</h2>
      <p>
        Add the <code>data-container</code> attribute to a block element in
        order to horizontally center it and apply a maximum width. Containers
        can be customized either globally or on a per-container basis:
      </p>
      <ul>
        <li>
          <code>--container-max-width</code>: How much the container can grow
        </li>
        <li>
          <code>--container-padding-x</code>: Horizontal padding
        </li>
        <li>
          <code>--container-padding-y</code>: Vertical padding
        </li>
      </ul>

      {/* Spinner -------------------- */}
      <h2 id="spinner">Spinner</h2>
      <p>
        Add the <code>[aria-busy="true"]</code> attribute to an element to
        display a spinner. The spinner will adapt to the current text color and
        font size. Also works with <a href="/components#button">buttons</a>!
      </p>
      <SpinnerExample />

      {/* Forced theme -------------------- */}
      <h2 id="forced-theme">Forced light and dark mode</h2>
      <p>
        By default, the theme will switch between light and dark mode
        automatically depending on the user's preferences. You can force a theme
        for the entire page by setting <code>[data-theme="theme"]</code>
        to <code>light</code> or <code>dark</code> on the root element. Setting
        the theme on an element other than root will apply the theme to that
        element and its children.
      </p>
      <ForcedThemeExample />

      {/* Utilities -------------------- */}
      <h2 id="utilities">Utilities</h2>
      <p>Fine provides a small set of utility classes:</p>
      <ul>
        <li>
          <code>[data-trim="top/bottom/both"]</code>: Removes margin from the
          first immediate child, last child, or both.
        </li>
        <li>
          <code>[data-hidden]</code>: Visually hides the element, but leaves it
          accessible for screenreaders.
        </li>
      </ul>
    </DocumentationLayout>
  );
}
