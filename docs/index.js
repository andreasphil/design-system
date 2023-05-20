import {
  ErrorBoundary,
  LocationProvider,
  Router,
  hydrate,
  lazy,
  prerender as ssr,
} from "preact-iso";
import { useEffect } from "preact/hooks";
import "~/dist/index.min.css";
import { useThemeColor } from "~/scripts/fine";
import { DocumentationLayout } from "./lib/components";
import "./style.css";

const Base = lazy(() => import("./pages/Base.mdx"));
const Colors = lazy(() => import("./pages/Colors.mdx"));
const Components = lazy(() => import("./pages/Components.mdx"));
const Error = lazy(() => import("./pages/404.mdx"));
const Extra = lazy(() => import("./pages/Extra.mdx"));
const GettingStarted = lazy(() => import("./pages/GettingStarted.mdx"));

export function App() {
  useEffect(() => {
    const { unsubscribe } = useThemeColor();
    return () => unsubscribe();
  }, []);

  return (
    <LocationProvider>
      <div class="app">
        <ErrorBoundary>
          <DocumentationLayout>
            <Router>
              <GettingStarted path="/" />
              <Base path="/base" />
              <Colors path="/colors" />
              <Components path="/components" />
              <Extra path="/extra" />
              <Error default />
            </Router>
          </DocumentationLayout>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
