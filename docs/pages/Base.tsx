import { DocumentationLayout, Preview } from "../lib/components";

/* -------------------------------------------------- *
 * Examples                                           *
 * -------------------------------------------------- */

const inlineElementsCode = `
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

function InlineElementsExample() {
  return (
    <Preview code={inlineElementsCode}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
          gap: "1rem",
        }}
        dangerouslySetInnerHTML={{ __html: inlineElementsCode }}
      ></div>
    </Preview>
  );
}

const headingsExampleCode = `
<h1>Headline level 1</h1>
<h2>Headline level 2</h2>
<h3>Headline level 3</h3>
<h4>Headline level 4</h4>
<h5>Headline level 5</h5>
<h6>Headline level 6</h6>
`;

function HeadingsExample() {
  return (
    <Preview code={headingsExampleCode}>
      <div
        data-trim="both"
        dangerouslySetInnerHTML={{ __html: headingsExampleCode }}
      ></div>
    </Preview>
  );
}

const headingsGroupExampleCode = `
<hgroup>
  <p>Above headline</p>
  <h1>Headline group</h1>
  <p>
    This text is grouped with the headline. Lorem ipsum dolor sit amet
    consectetur, adipisicing elit. Fugit error libero deserunt recusandae.
  </p>
</hgroup>
<p>This is normal text.</p>
`;

function HeadingsGroupExample() {
  return (
    <Preview code={headingsGroupExampleCode}>
      <div
        data-trim="both"
        dangerouslySetInnerHTML={{ __html: headingsGroupExampleCode }}
      ></div>
    </Preview>
  );
}

const blockElementsCode = `
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

<blockquote>This is a blockquote.</blockquote>

<figure>
  <blockquote>This is a blockquote with a caption.</blockquote>
  <figcaption>Caption</figcaption>
</figure>

<pre>function hello(name) {"{/* ... */}"}</pre>
`;

function BlockElementsExample() {
  return (
    <Preview code={blockElementsCode}>
      <div
        data-trim="both"
        dangerouslySetInnerHTML={{ __html: blockElementsCode }}
      ></div>
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function Base() {
  return (
    <DocumentationLayout
      title="Base"
      description="Fine comes with reasonable defaults that are consistent across browsers, as well as styles for typography and and other content-based elements."
    >
      {/* Inline elements -------------------- */}
      <h2 id="inline-elements">Inline elements</h2>
      <InlineElementsExample />

      {/* Headings -------------------- */}
      <h2 id="headings">Headings</h2>
      <HeadingsExample />
      <p>Headings can also appear as groups with a paragraph.</p>
      <HeadingsGroupExample />

      {/* Block elements -------------------- */}
      <h2 id="block-elements">Block elements</h2>
      <BlockElementsExample />
    </DocumentationLayout>
  );
}
