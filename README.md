<h1 align="center">
  Fine 🐥
</h1>

<p align="center">
  <strong>Small, opinionated CSS framework to make sites look alright with minimal effort</strong>
</p>

> ⚠️ Work in progress. Things are most certainly incomplete and/or broken, and will definitely change.

- 🔥 Embraces semantic HTML to make native elements look great out of the box, without classes
- 😎 Small set of utilities for additional states and convenience
- 🐛 Tiny footprint with no runtime dependencies or build step required
- 🧼 Built on top of [sanitize.css](https://github.com/csstools/sanitize.css) for sane, robust defaults
- ⚙️ Flexible customization via CSS custom properties
- 🌈 Automatic color system that reduces time spent fiddling with color palettes
- 🌗 Includes light and dark modes based on user preferences
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
```

## Development

```sh
npm install       # Download dependencies
npm start         # Compile stylesheets
```

Once stylesheet compilation is running, open `index.html` in your browser to see a preview page. You don't need a dev server. But if you want one, `npx serve` is a good choice.

## Building

```sh
npm build:icons   # Re-builds the icon SCSS file (should run automatically on start and build)
npm build         # Creates bundled + minified output in dist
```

## Credits

Apart from the open source packages listed in [package.json](package.json), Fine uses icons from [Lucide](https://lucide.dev/).

Fine was inspired by [Pico.css](https://picocss.com).

Thanks 🙏
