<h1 align="center">
  Design System 🐥
</h1>

<p align="center">
  <strong>A amall, opinionated CSS framework to make sites look alright with minimal effort</strong>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/andreasphil-design-system/deploys" title="Netlify Status">
    <img src="https://api.netlify.com/api/v1/badges/3c7e430b-7855-4579-adb3-f879918e2ec0/deploy-status" alt="Netlify Status" />
  </a>
</p>

> ⚠️ Work in progress. Things are most certainly incomplete and/or broken, and will definitely change.

- 🔥 Embraces semantic HTML to make native elements look great out of the box, without classes
- 😎 Small set of utilities for additional states and convenience
- 🐛 Tiny footprint with no runtime dependencies or build step required
- 🌈 Automatic color system that reduces time spent fiddling with color palettes
- 🪗 Fully responsive

## Usage

The package is not currently on npm, but you can install it from this repository:

```
npm install github:andreasphil/design-system#<tag>
```

Then import it in your project:

```js
// JavaScript
import "@andreasphil/design-system/style.css";
```

or

```css
/* CSS */
@import "@andreasphil/design-system/style.css" layer(theme);

@layer theme {
  /* You can add customizations and override variables here. */
}
```

## Development

This library is built with [Lightning CSS](https://lightningcss.dev). Packages are managed by [pnpm](https://pnpm.io). The following commands are available:

```sh
pnpm dev          # Compile stylesheets in watch mode
pnpm build        # Compile the stylesheet
```

For a demo, open [index.html](./index.html) in a browser.

## Deployment

Deployment should work out of the box when linking the repository to a project on [Netlify](https://netlify.com).

## Credits

This library uses a number of open source packages listed in [package.json](./package.json). Icons are from [Lucide](https://lucide.dev/). It was inspired by [Pico.css](https://picocss.com/).

Thanks 🙏
