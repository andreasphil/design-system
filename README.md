# Design System 🐥

**A small, opinionated CSS framework to make sites look good with minimal effort**

- 🔥 Embraces semantic HTML to make native elements look great out of the box, without classes
- 😎 Small set of utilities for additional states and convenience
- 🐛 Tiny footprint (~6 kB min+gzip) with no runtime dependencies and no build step required
- 🌈 Automatic color system that reduces time spent fiddling with color palettes
- 🪗 Fully responsive

## Installation

From a CDN:

```css
@import url("https://esm.sh/gh/andreasphil/design-system@<tag>/dist/design-system.css") layer(theme);

/* Optional: import utilities */
@import url("https://esm.sh/gh/andreasphil/design-system@<tag>/dist/design-system-utils.css");
```

With a package manager:

```sh
pnpm install github:andreasphil/design-system#<tag>
```

## Usage

🔗 <https://andreasphil.github.io/design-system/>

First, import the CSS. I recommend using [layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) to avoid conflicts and specificity chaos when customizing.

```css
@layer base, utils;

@import "@andreasphil/design-system/style.css" layer(base);
@import "@andreasphil/design-system/utils.css" layer(utils);

@layer base {
  /* Add customizations and override variables here. */
}
```

The CSS loosely follows [CUBE CSS](https://piccalil.li/blog/cube-css/):

- **Global, high-level styles:** Most styles apply globally to plain HTML elements. [`src/base/variables.css`](./src/base/variables.css) contains design tokens for colors, fonts, shared spacing, and more. You can use them to customize the Design System or apply them to your own components.

- **Blocks:** The framework includes opinionated styling for almost all common HTML elements.

- **Exceptions:** Some blocks, such as buttons, come with variants (also called exceptions). [According to CUBE CSS](https://cube.fyi/exception.html#why-data-attributes), you apply variants with attributes.

- **Composition & utilities:** Apart from a few utilities, these are outside the scope of the framework.

## Development

Tools: [Node](https://nodejs.org/) ∙ [pnpm](https://pnpm.io/) ∙ [Lightning CSS](https://lightningcss.dev)

```sh
node --run dev    # compile stylesheets in watch mode
node --run build  # bundle for production
```

For a demo, open [index.html](./index.html) in a browser.

## Credits

- Open source packages listed in [package.json](./package.json)
- Icons by [Lucide](https://lucide.dev)
- Inspired by [Pico.css](https://picocss.com/)

Thanks 🙏
