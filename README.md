<h1 align="center">
  Design System 🐥
</h1>

<p align="center">
  <strong>A small, opinionated CSS framework to make sites look good with minimal effort</strong>
</p>

- 🔥 Embraces semantic HTML to make native elements look great out of the box, without classes
- 😎 Small set of utilities for additional states and convenience
- 🐛 Tiny (<6kb min+gzip) footprint with no runtime dependencies or build step required
- 🌈 Automatic color system that reduces time spent fiddling with color palettes
- 🪗 Fully responsive

## Installation

From a CDN:

```css
@import url("https://esm.sh/gh/andreasphil/design-system@<tag>/dist/design-system.min.css")
layer(theme);
```

```js
import { useThemeColor } from "https://esm.sh/gh/andreasphil/design-system@<tag>";
```

With a package manager:

```sh
npm install github:andreasphil/design-system#<tag>
```

## Usage

Find the demo at <https://andreasphil.github.io/design-system/>.

First, import the CSS. I recommend using [layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) to avoid conflicts and specificity chaos when customizing.

```css
@import "@andreasphil/design-system/style.css" layer(theme);

@layer theme {
  /* You can add customizations and override variables here. */
}
```

### Automatic theme color

There is a helper that will manage the theme color for light and dark mode automatically:

```js
import { useThemeColor } from "@andreasphil/design-system";

const { unsubscribe } = useThemeColor();

// Call if you want to stop automatic theme color management
unsubscribe();
```

### Optimizing for different types of websites

The Design System tries to strike a balance between styling that works for app-like experiences, and content-heavy pages. Nevertheless, you might want to apply some tweaks to optimize for one or the other. For example, if you're writing an app, you could apply the following:

```css
:root {
  /* remove body size restrictions and centering */
  --body-padding-x: 0;
  --body-padding-y: 0;
  --body-width: auto;

  /* remove almost all outer margins */
  --block-spacing-y: 0;

  /* Make headings the same size as normal text */
  --font-size-h1: var(--font-size);
}
```

On the other hand, the following would work well for pages with lots of text content:

```css
:root {
  /* More spacious text */
  --h-margin-top: 2rem;
  --line-height: 1.7;

  /* More visible links */
  --link-fg: var(--primary);
  --link-hover-fg: var(--c-fg);
}
```

## Development

Design System is built with [Lightning CSS](https://lightningcss.dev). Packages are managed by [npm](https://npmjs.org). The following commands are available:

```sh
node --run dev          # Compile stylesheets in watch mode
node --run build        # Bundle for production
```

For a demo, open [index.html](./index.html) in a browser.

## Deployment

Deployment should work out of the box on GitHub Pages.

## Credits

This library uses a number of open source packages listed in [package.json](./package.json). Icons are from [Lucide](https://lucide.dev/). It was inspired by [Pico.css](https://picocss.com/).

Thanks 🙏
