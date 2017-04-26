# Shoperti Gourmet Theme
> Este es el tema utilizado en [Gourmet] (https://gourmet-theme.shoperti.com/) y puede servirte de inspiración. Puedes usarlo cómo base para crear uno nuevo o realizar ajustes pequeños y modificaciones. Sin duda, puede ser el punto de partida para aprender a construir tus propios temas desde cero.
>
> ** Para más detalles sobre el desarrollo del tema, lee nuestra [Documentación del tema] (https://github.com/Shoperti-Themes/Gourmet) **.

## Obteniendo este tema
1. <a href="https://github.com/Shoperti-Themes/Gourmet/archive/master.zip"> Descargar </a> la última versión y rama master.
2. También puedes clonar el reporte git: <code>git clone git@github.com:Shoperti-Themes/Gourmet.git</code>

![alt text](https://raw.githubusercontent.com/Shoperti-Themes/Bold/master/screenshot.png "Screeshot")

## Implementación manual
La opción más sencilla si no deseas realizar cambios en el tema es cargar el archivo [theme.zip] (dist/theme.zip) encontrado dentro de la carpeta 'dist' una vez ya descargado el paquete completo.

**Puede realizar cualquier cambio directamente descomprimiendo el archivo zip, sin embargo no es recomendable porque puede dañar alguna parte del código**

## Personalizando el tema

Para facilitar aún más el desarrollo y la implementación del tema, puede utilizar las herramientas para construcción con Webpack incluídas.

Estas tareas toman el código fuente del tema y empaquetan en un zip para ser instalado.

### Instalando Node

Es indispensable contar con NodeJs instalado. Para saber si cuenta con él, vaya a su terminal y escriba <code>node -v</code> y podrá ver algo así <code>v6.9.1</code> si ya lo tiene instalado. En caso contrario vaya a la página de [Node] (https://nodejs.org/download/) 

1. Navegue hasta la raíz de este proyecto de tema descargado
2. Ejecute `npm install`.

Npm examinará [package.json] (package.json) e instalará automáticamente las dependencias locales necesarias que se encuentren allí.

** ¿Qué es `npm`? Npm significa [node packaged modules] (http://npmjs.org/) y es una forma de administrar dependencias de desarrollo a través de NodeJs.

## Comandos y funcionalidades

Existen 2 comandos para desarrollo y producción:

```
npm run start

npm run serve
```

```npm run start``` servirá para publicar tus archivos html, estilos y scripts en la carpeta **public** y así construir tu sitio sin funcionalidades de Twig. Incluye un servidor http para ver el sitio usando la ruta http://localhost:9000

```npm run start``` generará una carpeta 'theme' dentro de 'dist' que te servirá para probar tu plantilla en ambiente local, los archivos serán ```.twig``` 

Estas tareas toman el código fuente del tema y empaquetan en un zip para ser instalado.

### Implementación del tema

Pending

* Pending ` mi-página`. *

### Tareas de Webpack
Cada ves que corra alguno de los comandos desde su terminal, Webpack realizará varias acciones, cómo compilar sus estilos Sass, Javascript o empaquetar los archivos.
Si quiere saber más sobre [Webpack 2](https://webpack.js.org/)
Para crear las páginas, estilos y scripts sin empaquetarse:
* <code>npm run dev</code>
Para crear un empaquetado listo para distribuir:
* <code>npm run build</code>

#### Estructura de los estilos

Es posible agregar cualquier tipo de hoja de estilo o preprocesador (less o sass).
Si desea agregar una hoja CSS, sólo debe agregarla a la carpeta ```src/assets/``` con el nombre que guste.
Ejemplo: miestilo.css
Para poder usar dicha hoja en el template, deberás agregarla al archivo ```src/app.js```.

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

&copy; Copyright Shoperti 2017 - Ver [TÉRMINOS Y CONDICIONES](https://www.shoperti.com/terminos-y-condiciones) para más detalles.