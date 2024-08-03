<h1 align="center">
  Design System 🐥
</h1>

<p align="center">
  <strong>My personal design system: a amall, opinionated CSS framework to make sites look alright with minimal effort—think CSS reset with some extra styling based on semantic HTML!</strong>
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

The library is built with [Lightning CSS](https://lightningcss.dev). Packages are managed by [pnpm](https://pnpm.io). The following commands are available for developing and running the demo:

```sh
pnpm dev          # Compile stylesheets in watch mode
pnpm run docs     # Run playground/documentation
pnpm build        # Compile the stylesheet
```

## Credits

Apart from the open source packages listed in [package.json](package.json), this package uses:

- Icons from [Lucide](https://lucide.dev/)
- Inspiration from [Pico.css](https://picocss.com/)

Thanks 🙏
