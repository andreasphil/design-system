import { useRef } from "preact/hooks";

/* -------------------------------------------------- *
 * Colors                                             *
 * -------------------------------------------------- */

export function ColorPalette() {
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
 * Base                                               *
 * -------------------------------------------------- */

export const blockElements = `
<ul>
  <li>Unordered list</li>
  <li>Unordered list</li>
  <li>Unordered list</li>
</ul>

<ol>
  <li>Ordered list</li>
  <li>Ordered list</li>
  <li>Ordered list</li>
</ol>

<hr />

<pre>function hello(name) {"{/* ... */}"}</pre>

<figure>
  <blockquote>This is a blockquote with a caption.</blockquote>
  <figcaption><cite>Caption</cite></figcaption>
</figure>

<blockquote>This is a blockquote.</blockquote>
`;

export const headings = `
<h1>Headline level 1</h1>
<h2>Headline level 2</h2>
<h3>Headline level 3</h3>
<h4>Headline level 4</h4>
<h5>Headline level 5</h5>
<h6>Headline level 6</h6>
`;

export const hgroup = `
<hgroup>
  <p>Above headline</p>
  <h1>Headline group</h1>
  <p>
    This text is grouped with the headline. Lorem ipsum dolor sit amet
    consectetur, adipisicing elit. Fugit error libero deserunt recusandae.
  </p>
</hgroup>
<p>
  This is normal text. Lorem ipsum dolor sit amet consectetur, adipisicing
  elit. Fugit error libero deserunt recusandae.
</p>
`;

export const inlineElements = `
<a href="#">Anchor</a>
<strong>Bold</strong>
<em>Italic</em>
<u>Underlined</u>
<s>Strikethrough</s>
<abbr title="An abbreviation">Abbreviation</abbr>
<span>Text<sub>sub</sub>, Text<sup>sup</sup></span>
<small>Small</small>
<span><code>code();</code></span>
<span><kbd>Keyboard</kbd></span>
<span><mark>Marked</mark></span>
<span><del>Deleted</del></span>
<span><ins>Inserted</ins></span>
`;

/* -------------------------------------------------- *
 * Components                                         *
 * -------------------------------------------------- */

export const article = `
<article>
  <hgroup>
    <h3>This is an article</h3>
    <p>
      Articles have a card-like appearance and provide some special formatting
      for their content. For example, the margins of the first and last
      elements are trimmed, and elements such as <code>hr</code> run over the
      entire width of the container.
    </p>
  </hgroup>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est.
  </p>
  <hr />
  <p>You can also add a footer:</p>
  <footer>
    <button data-variant="ghost">Cancel</button>
    <button>OK</button>
  </footer>
</article>
`;

export const buttons = `
<button>Primary</button>
<button data-variant="outline">Outline</button>
<button data-variant="ghost">Ghost</button>
<button aria-busy="true">Loading ...</button>
<button disabled>Disabled</button>
<button data-variant="muted">Muted</button>

<!-- links with button role -->
<a href="#" role="button">Primary link</a>
<a href="#" data-variant="outline" role="button">Outline link</a>
<a href="#" data-variant="ghost" role="button">Ghost link</a>

<!-- with icons -->
<button>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
  With icon
</button>

<button data-variant="outline">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
  With icon
</button>

<button data-variant="ghost">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
  With icon
</button>

`;

export const checkbox = `
<label>
  <input type="checkbox" checked />A checkbox
</label>
`;

export const checkboxSwitch = `
<label>
  <input type="checkbox" checked role="switch" />A switch
</label>
`;

export const details = `
<details>
  <summary>First</summary>
  <p>Content for the first details block</p>
</details>
<details>
  <summary>Second</summary>
  <p>Content for the second details block</p>
</details>
`;

export const Dialog = () => {
  const dialogRef = useRef(null);

  function showDemoDialog() {
    dialogRef.current?.showModal();
  }

  function closeDemoDialog() {
    dialogRef.current?.close();
  }

  return (
    <div className="preview">
      <details open className="preview__section">
        <summary className="preview__title">Preview</summary>
        <div className="preview__content" data-trim="both">
          <button onClick={() => showDemoDialog()}>Show dialog</button>
          <dialog ref={dialogRef}>
            <button data-variant="outline" onClick={() => closeDemoDialog()}>
              Close dialog
            </button>
          </dialog>
        </div>
      </details>
      <details className="preview__section">
        <summary className="preview__title">Code</summary>
        <pre className="preview__code">
          {`<script>
  function showDemoDialog() {
    const dialog = document.getElementById("demo-dialog");
    dialog.showModal();
  }

  function closeDemoDialog() {
    const dialog = document.getElementById("demo-dialog");
    dialog.close();
  }
</script>

<button onclick="showDemoDialog()">Show dialog</button>

<dialog id="demo-dialog">
  <button data-variant="outline" onclick="closeDemoDialog()">
    Close dialog
  </button>
</dialog>`}
        </pre>
      </details>
    </div>
  );
};

export const horizontalNav = `
<header>
  <nav>
    <strong>Title</strong>
    <ul>
      <li><a href="#" data-active="true">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
  </nav>
</header>
`;

export const input = `
<label>
  Label
  <input type="text" placeholder="Placeholder" />
  <small>You can also add hints.</small>
</label>
`;

export const radio = `
<label>
  <input type="radio" name="radio" value="a" checked />Value A
</label>
<label>
  <input type="radio" name="radio" value="b" />Value B
</label>
<label>
  <input type="radio" name="radio" value="c" />Value C
</label>
`;

export const select = `
<label>
  A select
  <select>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <small>Selects can have hints, too.</small>
</label>
`;

export const specialInputs = `
<label>
  Email
  <input type="email" placeholder="Placeholder" />
</label>

<label>
  Password
  <input type="password" placeholder="Placeholder" />
</label>

<label>
  Date
  <input type="date" placeholder="Placeholder" />
</label>

<label>
  Time
  <input type="time" placeholder="Placeholder" />
</label>

<label>
  Search
  <input type="search" placeholder="Placeholder" />
</label>

<label>
  Disabled
  <input type="text" disabled value="Value" />
</label>
`;

export const tabs = `
<ul role="tablist">
  <li><a href="#">Link</a></li>
  <li><a href="#" data-active="true">Active link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
`;

export const textarea = `
<label>
  A textarea
  <textarea data-resize="false"></textarea>
</label>
`;

export const verticalNav = `
<nav>
  <strong>Title</strong>
  <ul>
    <li><a href="#" data-active="true">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</nav>
`;

/* -------------------------------------------------- *
 * Extra                                              *
 * -------------------------------------------------- */

export function BoxShadow() {
  return (
    <div className="shadows">
      <div
        className="shadows__item"
        style="--shadow: var(--shadow-elevation-low)"
      />
      <div
        className="shadows__item"
        style="--shadow: var(--shadow-elevation-medium)"
      />
      <div
        className="shadows__item"
        style="--shadow: var(--shadow-elevation-high)"
      />
    </div>
  );
}

export const spinner = `
<div aria-busy="true"><div>
`;
