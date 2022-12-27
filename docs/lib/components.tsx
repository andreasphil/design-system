import { META, pages } from "@/lib/configuration";
import { RenderableProps } from "preact";
import { useLocation } from "preact-iso";

/* -------------------------------------------------- *
 * Layouts                                            *
 * -------------------------------------------------- */

type DocumentationLayoutProps = RenderableProps<{
  title: string;
  description?: string;
}>;

export function DocumentationLayout(props: DocumentationLayoutProps) {
  const { path } = useLocation();

  return (
    <>
      <header data-container>
        <nav>
          <strong>{META.title}</strong>
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
        <hgroup>
          <h1>{props.title}</h1>
          {props.description ? <p>{props.description}</p> : undefined}
        </hgroup>
        <div data-trim="bottom">{props.children}</div>
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

type PreviewProps = RenderableProps<{
  code: string;
}>;

export function Preview(props: PreviewProps) {
  return (
    <div className="preview">
      <details open className="preview__section">
        <summary className="preview__title">Preview</summary>
        <div className="preview__content" data-trim="both">
          {props.children}
        </div>
      </details>
      <details className="preview__section">
        <summary className="preview__title">Code</summary>
        <pre className="preview__code">{props.code.trim()}</pre>
      </details>
    </div>
  );
}
