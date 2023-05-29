import { META } from "@/lib/configuration";
import { useLocation } from "preact-iso";

/* -------------------------------------------------- *
 * Layouts                                            *
 * -------------------------------------------------- */

export function DocumentationLayout({ children }) {
  const { path } = useLocation();

  const pages = [
    { href: "/", title: "Getting started" },
    { href: "/base", title: "Base" },
    { href: "/components", title: "Components" },
    { href: "/colors", title: "Colors" },
    { href: "/extra", title: "Extra" },
  ];

  return (
    <>
      <header data-container>
        <nav>
          <div class="logo__wrapper">
            <Logo />
            <strong>{META.title}</strong>
          </div>
          <ul>
            {pages.map((page) => (
              <li>
                <a
                  href={page.href}
                  title={page.title}
                  data-active={page.href === path}
                >
                  {page.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <hr />
      </header>

      {/* Main content */}
      <main data-container>
        <div data-trim="bottom">{children}</div>
      </main>

      <footer data-container className="footer">
        <small>
          A thing made by <a href={META.authorWebsite}>{META.authorName}</a>. 🐱{" "}
          <a href={META.repository}>View source</a>.
        </small>
      </footer>
    </>
  );
}

/* -------------------------------------------------- *
 * Building blocks                                    *
 * -------------------------------------------------- */

export function Preview({ code, displayCode, previewStyle }) {
  return (
    <div className="preview">
      <details open className="preview__section">
        <summary className="preview__title">Preview</summary>
        <div
          className="preview__content"
          data-trim="both"
          style={previewStyle}
          dangerouslySetInnerHTML={{ __html: code }}
        ></div>
      </details>
      <details className="preview__section">
        <summary className="preview__title">Code</summary>
        <pre className="preview__code">
          {displayCode ? displayCode.trim() : code.trim()}
        </pre>
      </details>
    </div>
  );
}

export function PageHeader({ title, children }) {
  return (
    <hgroup>
      <h1>{title}</h1>
      {children}
    </hgroup>
  );
}

export function Logo() {
  return (
    <figure class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-smile"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" x2="9.01" y1="9" y2="9"></line>
        <line x1="15" x2="15.01" y1="9" y2="9"></line>
      </svg>
    </figure>
  );
}
