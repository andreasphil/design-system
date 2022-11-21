import { useRef } from "preact/hooks";
import { DocumentationLayout, Preview } from "../lib/components";

/* -------------------------------------------------- *
 * Examples                                           *
 * -------------------------------------------------- */

const buttonCode = `
<button>Primary</button>
<button data-variant="outline">Outline</button>
<button data-variant="ghost">Ghost</button>
<button aria-busy="true">Loading ...</button>
<button disabled>Disabled</button>
<button style="--button-color: orangered;" data-variant="outline">Delete</button>
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
      <p>
        Use <code>button</code>, <code>input[type="button"]</code>,{" "}
        <code>input[type="submit"]</code>, <code>input[type="reset"]</code>, or{" "}
        <code>[role="button"]</code> to create a button. Most buttons will be
        formatted as block elements. To create an inline button, use{" "}
        <code>[role="button"]</code> on an appropriate element.
      </p>
      <p>
        Buttons come in different variants. The default is a filled button in
        the primary color. There are also variants for outlined buttons and
        buttons without any border or fill. Buttons expose a{" "}
        <code>--button-color</code> custom property that can be used to quickly
        change the appearance of the button without having to define hover
        states or overriding button rules.
      </p>
      <p>
        To display a <a href="/extra#spinner">spinner</a>, combine the button
        with <code>[aria-busy="true"]</code>.
      </p>
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
      <p>
        You can also apply the <code>[data-variant="fixed"]</code>
        modifier to the <code>nav</code> in order to give it a fixed position at
        the top of the page. If you do that, also use{" "}
        <code>[data-nav="fixed"]</code> on the elements containing the rest of
        your page in order to give them a top padding that matches the height of
        the navigation.
      </p>
      <p>
        Use <code>[data-variant="vertical"]</code> or{" "}
        <code>[data-variant="horizontal"]</code> to force a direction in any
        context.
      </p>
    </DocumentationLayout>
  );
}
