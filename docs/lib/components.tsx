import { RenderableProps } from "preact";
import { useLocation } from "preact-iso";
import { pages } from "./configuration";

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
      {/* TODO: Footer */}
      {/* TODO: Header content */}
      {/* TODO: Unify header across all layouts */}
      <header>
        <nav data-variant="fixed">
          <strong>🐥 Fine</strong>
          <ul>
            <li>
              <a href="https://github.com/andreasphil/fine">View source</a>
            </li>
          </ul>
        </nav>
      </header>

      <div data-nav="fixed" className="sidebar-layout">
        {/* Sidebar navigation */}
        <aside className="sidebar-layout__sidebar">
          <nav>
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
        </aside>

        {/* Main content */}
        <main className="sidebar-layout__content">
          <section className="docs" data-trim="both" data-container>
            <hgroup>
              <h1>{props.title}</h1>
              {props.description ? <p>{props.description}</p> : undefined}
            </hgroup>
            <div>{props.children}</div>
          </section>
        </main>
      </div>
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
