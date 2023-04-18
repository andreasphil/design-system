import {
  ErrorBoundary,
  hydrate,
  lazy,
  LocationProvider,
  prerender as ssr,
  Router,
} from "preact-iso";

const Base = lazy(() => import("./pages/Base"));
const Components = lazy(() => import("./pages/Components"));
const Customization = lazy(() => import("./pages/Customization"));
const Extra = lazy(() => import("./pages/Extra"));
const Forms = lazy(() => import("./pages/Forms"));
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const Error = lazy(() => import("./pages/_Error"));

import "~/dist/index.min.css";
import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <div class="app">
        <ErrorBoundary>
          <Router>
            <GettingStarted path="/" />
            <Base path="/base" />
            <Components path="/components" />
            <Forms path="/forms" />
            <Extra path="/extra" />
            <Customization path="/customization" />
            <Error default />
          </Router>
        </ErrorBoundary>
      </div>
    </LocationProvider>
  );
}

hydrate(<App />);

// @ts-expect-error WMR doesn't run this through TypeScript during development,
// so we can't add type annotations
export async function prerender(data) {
  return await ssr(<App {...data} />);
}
