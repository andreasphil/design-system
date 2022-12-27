import { DocumentationLayout, Preview } from "@/lib/components";

/* -------------------------------------------------- *
 * Examples                                           *
 * -------------------------------------------------- */

const spinnerCode = `
<div aria-busy="true"><div>
`;

function SpinnerExample() {
  return (
    <Preview code={spinnerCode}>
      <div dangerouslySetInnerHTML={{ __html: spinnerCode }}></div>
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function Extra() {
  return (
    <DocumentationLayout
      title="Extra"
      description="Various utilities and small stuff that didn't really fit anywhere else."
    >
      {/* Container -------------------- */}
      <h2 id="container">Container</h2>
      <p>
        Add the <code>data-container</code> attribute to a block element in
        order to horizontally center it and apply a maximum width. Containers
        can be customized either globally or on a per-container basis:
      </p>
      <ul>
        <li>
          <code>--container-max-width</code>: How much the container can grow
        </li>
        <li>
          <code>--container-padding-x</code>: Horizontal padding
        </li>
        <li>
          <code>--container-padding-y</code>: Vertical padding
        </li>
      </ul>

      {/* Spinner -------------------- */}
      <h2 id="spinner">Spinner</h2>
      <SpinnerExample />
    </DocumentationLayout>
  );
}
