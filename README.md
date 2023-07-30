<h1 align="center">
  Fine 🐥
</h1>

<p align="center">
  <strong>Small, opinionated CSS framework to make sites look alright with minimal effort—think CSS reset with some extra styling based on semantic HTML—think CSS reset with some extra styling based on semantic HTML!</strong>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/fine-playground/deploys" title="Netlify Status">
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

Fine is not currently on npm, but you can install it from this repository:

```
npm install github:andreasphil/fine#<tag>
```

Then import it in your project:

```js
// JavaScript
import "finecss/dist/index.min.css";
```

or

```css
/* CSS */
@import "finecss/dist/index.min.css" layer(fine);

@layer fine {
  /* You can add customizations and override variables here. */
}
```

## Development

```sh
npm install       # Download dependencies
npm run dev       # Compile stylesheets
npm run docs      # Run playground/documentation
```

## Building

```sh
npm build         # Re-builds the stylesheet
```

## Credits

Apart from the open source packages listed in [package.json](package.json), Fine uses:

- Icons from [Lucide](https://lucide.dev/)
- Favicons generated with [IconKitchen](https://icon.kitchen/)
- Inspiration from [Pico.css](https://picocss.com/)

Thanks 🙏
