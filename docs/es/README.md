---
title: "Primeros Pasos"
description: "Genera dinámicamente archivos _headers y _redirects para Netlify en tus proyectos de Nuxt.js"
permalink: /docs/nuxt-netlify/
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
modified: "2020-03-31T20:16:44Z"
---

# Nuxt Netlify

Genera dinámicamente archivos `_headers` y `_redirects` para Netlify en tus proyectos de Nuxt.js.

Este módulo soporta la creación de reglas de [**redirecciones**][netlify-redirects] y [**cabecera**][netlify-headers-and-basic-auth] para tu sitio Netlify: puedes configurar fácilmente cabeceras personalizadas, autenticación básica, instrucciones de redirección y reglas de reescritura desde su archivo de configuración nuxt.

## Instalación

::: warning Advertencia
`node >= 10` y `nuxt >= 2` son requeridos.
:::

```bash 
npm install --save-dev @bazzite/nuxt-netlify
```

o

```bash 
yarn add --dev @bazzite/nuxt-netlify
```

Añade `@bazzite/nuxt-netlify` a la sección `buildModules` de `nuxt.config.js`:

:warning: Si estás usando Nuxt `< 2.9.0`, usa `modules` en su lugar.

```js
{
  buildModules: [
    '@bazzite/nuxt-netlify',
  ],

  netlify: { 
    // configuración
  }
}
```

o

```js
{
  buildModules: [
    [
      '@bazzite/nuxt-netlify', { 
        // configuración
      }
    ]
  ]
}
```

[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
