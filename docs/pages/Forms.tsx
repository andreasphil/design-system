import { useState } from "preact/hooks";
import { DocumentationLayout, Preview } from "../lib/components";

/* -------------------------------------------------- *
 * Examples                                           *
 * -------------------------------------------------- */

const inputCode = `
<label>
  Label
  <input type="text" placeholder="Placeholder" />
  <small>You can also add hints.</small>
</label>
`;

function InputExample() {
  return (
    <Preview code={inputCode}>
      <div dangerouslySetInnerHTML={{ __html: inputCode }}></div>
    </Preview>
  );
}

const specialInputsCode = `
<label>
  Email
  <input type="email" placeholder="Placeholder" />
</label>

<label>
  Password
  <input type="password" placeholder="Placeholder" />
</label>

<label>
  Date
  <input type="date" placeholder="Placeholder" />
</label>

<label>
  Time
  <input type="time" placeholder="Placeholder" />
</label>

<label>
  Search
  <input type="search" placeholder="Placeholder" />
</label>

<label>
  Disabled
  <input type="text" disabled value="Value" />
</label>
`;

function SpecialInputsExample() {
  return (
    <Preview code={specialInputsCode}>
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fill, minmax(12rem, 1fr))",
        }}
        dangerouslySetInnerHTML={{ __html: specialInputsCode }}
      ></div>
    </Preview>
  );
}

const textareaCode = `
<label>
  A textarea
  <textarea data-resize="false"></textarea>
</label>
`;

function TextareaExample() {
  const [resizable, setResizable] = useState(false);

  return (
    <Preview code={textareaCode}>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          role="switch"
          checked={resizable}
          onChange={(e) => {
            e.preventDefault();
            setResizable(e.currentTarget.checked);
          }}
        />
        Resizable
      </label>

      <label>
        A textarea
        <textarea data-resize={resizable}></textarea>
      </label>
    </Preview>
  );
}

const selectCode = `
<label>
  A select
  <select>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <small>Selects can have hints, too.</small>
</label>
`;

function SelectExample() {
  return (
    <Preview code={selectCode}>
      <div dangerouslySetInnerHTML={{ __html: selectCode }}></div>
    </Preview>
  );
}

const checkboxCode = `
<label>
  <input type="checkbox" checked />A checkbox
</label>
`;

function CheckboxExample() {
  return (
    <Preview code={checkboxCode}>
      <div dangerouslySetInnerHTML={{ __html: checkboxCode }}></div>
    </Preview>
  );
}

const switchCode = `
<label>
  <input type="checkbox" checked role="switch" />A switch
</label>
`;

function SwitchExample() {
  return (
    <Preview code={switchCode}>
      <div dangerouslySetInnerHTML={{ __html: switchCode }}></div>
    </Preview>
  );
}

const radioCode = `
<label>
  <input type="radio" name="radio" value="a" checked />Value A
</label>
<label>
  <input type="radio" name="radio" value="b" />Value B
</label>
<label>
  <input type="radio" name="radio" value="c" />Value C
</label>
`;

function RadioExample() {
  return (
    <Preview code={radioCode}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        dangerouslySetInnerHTML={{ __html: radioCode }}
      ></div>
    </Preview>
  );
}

/* -------------------------------------------------- *
 * Docs                                               *
 * -------------------------------------------------- */

export default function Forms() {
  return (
    <DocumentationLayout
      title="Forms"
      description="Here you'll find elements for user input."
    >
      {/* Input -------------------- */}
      <h2 id="input">Input</h2>
      <InputExample />
      <p>
        Some inputs automatically display an icon based on their type. You can
        also manually set an icon on an input:
      </p>
      <pre>{`.custom-input {
  --input-has-icon: 1; /* increases padding on the left side */
  --input-icon: url(...); /* URL of the input icon */
}`}</pre>
      <SpecialInputsExample />
      <p>Textareas work almost the same as inputs.</p>
      <TextareaExample />

      {/* Select -------------------- */}
      <h2 id="select">Select</h2>
      <SelectExample />

      {/* Checkbox -------------------- */}
      <h2 id="checkbox">Checkbox</h2>
      <CheckboxExample />
      <p>
        Give a checkbox the <code>role="switch"</code> to make it appear as a
        switch.
      </p>
      <SwitchExample />

      {/* Radio -------------------- */}
      <h2 id="radio">Radio</h2>
      <RadioExample />
    </DocumentationLayout>
  );
}
