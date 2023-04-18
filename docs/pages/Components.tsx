import { DocumentationLayout, Preview } from "@/lib/components";
import { useRef } from "preact/hooks";

/* -------------------------------------------------- *
 * Examples                                           *
 * -------------------------------------------------- */

const buttonCode = `
<button>Primary</button>
<button data-variant="outline">Outline</button>
<button data-variant="ghost">Ghost</button>
<button aria-busy="true">Loading ...</button>
<button disabled>Disabled</button>
<button data-variant="muted">Muted</button>
<a href="#" role="button">Primary link</a>
<a href="#" data-variant="outline" role="button">Outline link</a>
<a href="#" data-variant="ghost" role="button">Ghost link</a>
`;

function ButtonExample() {
  return (
    <Preview code={buttonCode}>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
        }}
        dangerouslySetInnerHTML={{ __html: buttonCode }}
      ></div>
    </Preview>
  );
}

const detailsCode = `
<details>
  <summary>First</summary>
  <p>Content for the first details block</p>
</details>
<details>
  <summary>Second</summary>
  <p>Content for the second details block</p>
</details>
`;

function DetailsExample() {
  return (
    <Preview code={detailsCode}>
      <div dangerouslySetInnerHTML={{ __html: detailsCode }}></div>
    </Preview>
  );
}

const articleCode = `
<article>This is an article.</article>
`;

function ArticleExample() {
  return (
    <Preview code={articleCode}>
      <div
        data-trim="both"
        dangerouslySetInnerHTML={{ __html: articleCode }}
      ></div>
    </Preview>
  );
}

const verticalNavigationCode = `
<nav>
  <strong>Title</strong>
  <ul>
    <li><a href="#" data-active="true">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</nav>
`;

function VerticalNavigationExample() {
  return (
    <Preview code={verticalNavigationCode}>
      <div dangerouslySetInnerHTML={{ __html: verticalNavigationCode }}></div>
    </Preview>
  );
}

const horizontalNavigationCode = `
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

function HorizontalNavigationExample() {
  return (
    <Preview code={horizontalNavigationCode}>
      <div dangerouslySetInnerHTML={{ __html: horizontalNavigationCode }}></div>
    </Preview>
  );
}

const dialogCode = `
<script>
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
</dialog>
`;

function DialogExample() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function showDemoDialog() {
    dialogRef.current?.showModal();
  }

  function closeDemoDialog() {
    dialogRef.current?.close();
  }

  return (
    <Preview code={dialogCode}>
      <button onClick={() => showDemoDialog()}>Show dialog</button>

      <dialog ref={dialogRef} style={{ marginTop: "100px" }}>
        <button data-variant="outline" onClick={() => closeDemoDialog()}>
          Close dialog
        </button>
      </dialog>
    </Preview>
  );
}

const tabsCode = `
<ul role="tablist">
  <li><a href="#">Link</a></li>
  <li><a href="#" data-active="true">Active link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
`;

function TabsExample() {
  return (
    <Preview code={tabsCode}>
      <div dangerouslySetInnerHTML={{ __html: tabsCode }}></div>
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function Components() {
  return (
    <DocumentationLayout
      title="Components"
      description="Fine has styling for basic interactive controls such as buttons, dialogs, navigations, and more."
    >
      {/* Button -------------------- */}
      <h2 id="button">Button</h2>
      <ButtonExample />

      {/* Dialog -------------------- */}
      <h2 id="dialog">Dialog</h2>
      <DialogExample />

      {/* Details -------------------- */}
      <h2 id="details">Details</h2>
      <DetailsExample />

      {/* Article -------------------- */}
      <h2 id="article">Article</h2>
      <ArticleExample />

      {/* Navigation -------------------- */}
      <h2 id="navigation">Navigation</h2>
      <p>Navigations are stacked vertically by default.</p>
      <VerticalNavigationExample />
      <p>
        Wrap a navigation in a <code>header</code> element to create horizontal
        navigation.
      </p>
      <HorizontalNavigationExample />

      {/* Tabs -------------------- */}
      <h2 id="tabs">Tabs</h2>
      <TabsExample />
    </DocumentationLayout>
  );
}
