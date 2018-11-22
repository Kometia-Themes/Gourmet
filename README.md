# Kometia Gourmet Theme 1.0.0
> Este es el tema instalado en [Gourmet] (https://gourmet-theme.kometia.com/) y puede servirte de inspiración. Úsalo como base para crear uno nuevo, realizar ajustes pequeños o modificaciones. Sin duda, puede ser el punto de partida para aprender a construir tus propios temas desde cero.
>
> **Para más detalles sobre el desarrollo del tema, lee nuestra [Documentación del tema] (https://github.com/Shoperti-Themes/Gourmet)**.

## Obteniendo este tema
1. [Descargar] (https://github.com/Shoperti-Themes/Gourmet/archive/master.zip) la última versión de la rama master.
2. También puedes clonar el repositorio con git: <code>git clone git@github.com:Shoperti-Themes/Gourmet.git</code>

![alt text](https://raw.githubusercontent.com/Shoperti-Themes/Gourmet/master/screenshot.png "Screeshot")

## Implementación manual
La opción más sencilla, si no deseas realizar cambios en el tema, es cargar el archivo [theme.zip] (dist/theme.zip) encontrado dentro de la carpeta 'dist' del archivo theme.zip descargado.

**Puedes realizar cualquier cambio directamente descomprimiendo el archivo zip, sin embargo, no es recomendable porque se puede dañar alguna parte del código.**

## Personalizando el tema

Para facilitar aún más el desarrollo y la implementación del tema, utiliza las herramientas para construcción con Webpack incluídas.

Estas tareas toman el código fuente del 'src' (source), lo procesa y empaqueta en un zip para ser instalado.

### Instalando Node

Para compilar el tema debes tener Node. Para saber si cuentas con él, ve a tu terminal y escribe `node -v` y podrás ver algo así `v10.0.0` si ya lo tienes instalado. En caso contrario, ve al sitio de [Node] (https://nodejs.org/download/) y sigue las intrucciones.

1. Navega hasta la raíz de este proyecto descargado.
2. Ejecuta `npm install` para NPM o `yarn install` si usas Yarn.

Npm/Yarn examinará [package.json] (package.json) e instalará automáticamente las dependencias locales necesarias.

** ¿Qué es `npm` y `yarn`? Ambos son gestores de paquetes [npm] (http://npmjs.org/) / [yarn] (https://yarnpkg.com) y es una forma de administrar dependencias de desarrollo a través de Node.

## Comandos y funcionalidades

Existen 2 comandos, uno para desarrollo y otro para producción:

```
$ npm dev
$ npm build
```

```npm dev``` sirve para publicar tus archivos html, estilos y scripts en la carpeta **public** y así construir tu sitio sin funcionalidades de Twig. Incluye un servidor http para ver el sitio usando la ruta http://localhost:9000

```npm build``` genera una carpeta 'theme' dentro de 'dist' que te servirá para probar tu plantilla en ambiente local. Algunos archivos ahora tendrán la extensión ```.twig```.

Estas tareas toman el código fuente del tema y lo empaquetan en un zip para ser instalado.

### Implementación del tema

Instala un tema básico, puede ser Simplex, por ejemplo, y copia el contenido de cada archivo que hay al descomprimir el archivo theme.zip que está dentro de 'dist'.
Crea los 'partials' que no existan y que necesites, al igual en las páginas nuevas, layouts, estilos y scripts.

### Tareas de Webpack
Cada vez que corras alguno de los comandos desde tu terminal, Webpack realizará varias acciones, cómo compilar tus estilos CSS, SASS, LESS, Javascript o empaquetar los archivos.
Si quiere saber más sobre ve [Webpack 2](https://webpack.js.org/).

Para crear las páginas, estilos y scripts sin empaquetarse ejecuta: `npm dev` o `yarn dev` y Webpack estará en estado 'watch' esperando cambios para compilar y actualizar las vistas, scripts o estilos.

Para crear un empaquetado final para distribuir ejecuta: `npm build` o `yarn build `
Todo el contenido de la carpeta 'dist' se eliminará para colocar los nuevos archivos.

#### Estructura de los estilos

Es posible agregar cualquier tipo de hoja de estilo o preprocesador (less o sass).
Si deseas agregar una hoja CSS, sólo debe agregarla a la carpeta ```src/assets/``` con el nombre que gustes.
Ejemplo: miestilo.css
Para poder usar dicha hoja en el template, deberás agregarla al archivo ```src/app.js``` con esto sabrá Webpack lo que debe hacer.

Ejemplo:
```var css = require('./assets/miestilo.css');```

Puedes agregar cualquier archivo siguiendo el orden deseado de importación.

Ejemplo:

```
// Default Stylesheet
var sassfile = require('./assets/styles.scss');
var lessfile = require('./assets/lessfile.less');
var cssfile = require('./assets/miestilo.css');

```
Puedes importar archivos dentro de less o sass usando la tradicional nomenclatura.

Ejemplo:

```
// Less miarchivo.less
@import "miarchivo";
// Sass _miarchivo.scss
@import "miarchivo";
```

Variables:
Recuerda declarar las variables, ya sea en less o scss, con ```$``` o ```@```, según corresponda al tipo de archivo.


## Estructura final

```
theme
├── 1.0.0
|   ├── assets
│   │   ├── app.js.twig
│   │   ├── apple-touch-icon-114.png
│   │   ├── apple-touch-icon-144.png
│   │   ├── blur-password.jpg
│   │   ├── favicon.ico
│   │   └── styles.css.twig
│   │
│   ├── config
│   │   ├── data.json
│   │   └── schema.json
│   │
│   ├── layouts
│   │   └── layout.twig
│   │
│   ├── pages
│   │   └── customers
│   │   │		├── account.twig
│   │   │		├── activate.twig
│   │   │		├── login.twig
│   │   │		├── order.twig
│   │   │		├── recover.twig
│   │   │		├── register.twig
│   │   │		└── reset.twig
│   │   │
│   │   ├── blog.twig
│   │   ├── cart.twig
│   │   ├── category.twig
│   │   ├── collection.twig
│   │   ├── collections.twig
│   │   ├── error404.twig
│   │   ├── home.twig
│   │   ├── maintenance.twig
│   │   ├── page.contact.twig
│   │   ├── page.twig
│   │   ├── password.twig
│   │   ├── post.twig
│   │   ├── product.twig
│   │   ├── products.twig
│   │   └── search.twig
│   │
│   ├── partials
│   │   └── ...
│   │
│   ├── screeshots
│   │
│   ├── .editorconfig
│   ├── .gitignore
│   ├── findreplace.js
│   ├── LICENSE
│   ├── README.md
│   ├── removefiles.js
│   ├── theme.png
│   ├── webpack.config.js
│   └── webpack.production.config.js

```

## Versionado

Para mayor transparencia y comprensión de nuestro ciclo de lanzamiento, y para tratar de mantener la compatibilidad con versiones anteriores, este proyecto se mantendrá en la medida de lo posible bajo las directrices de Versión Semántica.

`<Major>. <Minor>. <Patch>`

* `MAJOR` versión al realizar cambios incompatibles,
* `MINOR` cuando se agregue una funcionalidad de una manera que siga siendo compatible con versiones anteriores.
* `PATCH` cuando se corrijan errores compatibles con versiones anteriores.

Para obtener más información sobre [SemVer] (http://semver.org/lang/es/).


## Copyright

&copy; Copyright Kometia 2018 - Ver [TÉRMINOS Y CONDICIONES](https://www.kometia.com/terminos-y-condiciones) para más detalles.
