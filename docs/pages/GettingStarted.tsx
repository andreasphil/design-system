import { DocumentationLayout } from "@/lib/components";

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function GettingStarted() {
  return (
    <DocumentationLayout
      title="Getting started"
      description="Hello! 😊 Fine is a small, opinionated CSS framework to make sites look alright with minimal effort."
    >
      <h2>Features</h2>
      <ul>
        <li>
          🔥 Embraces semantic HTML to make native elements look great out of
          the box, without classes
        </li>
        <li>😎 Small set of utilities for additional states and convenience</li>
        <li>
          🐛 Tiny footprint with no runtime dependencies or build step required
        </li>
        <li>
          🧼 Built on top of{" "}
          <a href="https://github.com/csstools/sanitize.css">sanitize.css</a>{" "}
          for sane, robust defaults
        </li>
        <li>
          🌈 Automatic color system that reduces time spent fiddling with color
          palettes
        </li>
        <li>🪗 Fully responsive</li>
      </ul>
      <h2>Usage</h2>
      <p>
        Fine is not currently on npm, but you can install it from this
        repository:
      </p>
      <pre>npm install github:andreasphil/fine#&lt;tag&gt;</pre>
      <p>Then import it in your project:</p>
      <pre>import "finecss/dist/index.min.css"; // JavaScript</pre>
      <p>or</p>
      <pre>/* CSS */ @import "finecss/dist/index.min.css" layer(fine);</pre>
    </DocumentationLayout>
  );
}
