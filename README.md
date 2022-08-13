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
- 💨 Optimized to pair well with [Windi CSS](https://github.com/windicss/windicss)

## Usage

## Customization

The following CSS custom properties can be customized:

<!-- VARIABLES -->

```
--article-padding-x
--article-padding-y

--auto-bg-opacity

--block-spacing-y

--body-padding-x
--body-padding-y

--border-radius
--border-radius-large
--border-radius-small
--border-width

--button-bg
--button-border-color
--button-fg
--button-focus-color
--button-font-weight
--button-padding-x
--button-padding-y

--c-backdrop-bg
--c-bg
--c-border
--c-code
--c-del
--c-fg
--c-fg-variant
--c-ins
--c-mark
--c-on-primary
--c-primary
--c-primary-container
--c-shadow
--c-surface-bg
--c-surface-fg
--c-surface-variant-bg
--c-surface-variant-fg

--color-scheme

--container-max-width
--container-padding-x
--container-padding-y

--dialog-max-width
--dialog-padding-x
--dialog-padding-y

--disabled-opacity

--font-size
--font-size-h1
--font-size-h2
--font-size-h3
--font-size-h4
--font-size-h5
--font-size-h6
--font-size-small

--icon-check
--icon-chevron-down

--input-bg
--input-border-color
--input-fg
--input-focus-color
--input-padding-x
--input-padding-y
--input-placeholder-color

--line-height
--line-height-h

--link-color
--link-decoration-color
--link-hover-color
--link-hover-decoration-color

--nav-height
--nav-z-index

--rem-base

--shadow-elevation-high
--shadow-elevation-low
--shadow-elevation-medium

--spinner-duration
--spinner-fg
--spinner-size
--spinner-width

--svg-height

--tint

--transition-duration
--transition-timing-function
```

<!-- END VARIABLES -->

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

## Ressources

> ✅ TODO

## Credits

Apart from the open source packages listed in package.json, Fine uses icons from [Lucide](https://lucide.dev/).

Thanks 🙏
