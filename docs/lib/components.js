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
      <header>
        <nav data-variant="fixed">
          <div class="logo__wrapper">
            <img
              src="/assets/icon-192.png"
              class="logo"
              width="32px"
              height="32px"
            />
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
      </header>

      {/* Main content */}
      <main>
        <div data-trim="both">{children}</div>
      </main>

      <footer className="footer">
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
