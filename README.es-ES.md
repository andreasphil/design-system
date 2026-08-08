

<h1 align="center">
  Design System 🐥
</h1>

<p align="center">
  <strong>Un pequeño framework CSS con decisiones predefinidas para que los sitios se vean bien con el mínimo esfuerzo</strong>
</p>

- 🔥 Aprovecha HTML semántico para que los elementos nativos se vean genial por defecto, sin necesidad de clases
- 😎 Conjunto pequeño de utilidades para estados adicionales y mayor comodidad
- 🐛 Huella extremadamente pequeña (~6kb min+gzip) sin dependencias en tiempo de ejecución ni pasos de compilación requeridos
- 🌈 Sistema de colores automático que reduce el tiempo dedicado a ajustar paletas de colores
- 🪗 Totalmente responsivo

## Instalación

Desde un CDN:

```css
@import url("https://esm.sh/gh/andreasphil/design-system@<tag>/dist/design-system.css") layer(theme);

/* Optional: import utilities */
@import url("https://esm.sh/gh/andreasphil/design-system@<tag>/dist/design-system-utils.css");
```

Con un administrador de paquetes:

```sh
pnpm add github:andreasphil/design-system#<tag>
```

## Uso

Encuentra la demostración en <https://andreasphil.github.io/design-system/>.

Primero, importa el CSS. Recomiendo usar [capas](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) para evitar conflictos y caos de especificidad al personalizar.

```css
@layer base, utils;

@import "@andreasphil/design-system/style.css" layer(base);
@import "@andreasphil/design-system/utils.css" layer(utils);

@layer base {
  /* You can add customizations and override variables here. */
}
```

El CSS sigue de manera flexible [CUBE CSS](https://piccalil.li/blog/cube-css/):

- **Estilos globales y de alto nivel:** La mayor parte del estilo es global y aplica a elementos HTML nativos. Hay una serie de tokens de diseño para colores, fuentes, espaciado compartido, etc., en [`src/base/variables.css`](./src/base/variables.css) que puedes usar para personalizar el Design System o aplicar a tus propios componentes.

- **Bloques (Blocks):** El framework incluye estilos con decisiones predefinidas para casi todos los elementos HTML comunes.

- **Excepciones:** Algunos bloques, como los botones, vienen con variantes (también llamadas excepciones). [Según CUBE CSS](https://cube.fyi/exception.html#why-data-attributes), las variantes se aplican mediante atributos.

- **Composición y utilidades:** Con la excepción de algunas utilidades, esto está fuera del alcance del framework.

## Desarrollo

Design System se construye con [Lightning CSS](https://lightningcss.dev). Los paquetes se gestionan con [pnpm](https://pnpm.io). Están disponibles los siguientes comandos:

```sh
node --run dev    # Compile stylesheets in watch mode
node --run build  # Bundle for production
```

Para una demostración, abre [index.html](./index.html) en un navegador.

## Créditos

Esta biblioteca utiliza varios paquetes de código abierto enumerados en [package.json](./package.json). Los iconos son de [Lucide](https://lucide.dev/). Fue inspirada por [Pico.css](https://picocss.com/).

Gracias 🙏
