---
title: "Primeros Pasos"
description: "Genera dinámicamente archivos _headers y _redirects para Netlify en tus proyectos de Nuxt.js"
permalink: /docs/nuxt-netlify/
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
modified: "2019-06-12T00:55:34.687Z"
---

# Nuxt Netlify

Genera dinámicamente archivos `_headers` y `_redirects` para Netlify en tus proyectos de Nuxt.js.

Este módulo soporta la creación de reglas de [**redirecciones**][netlify-redirects] y [**cabecera**][netlify-headers-and-basic-auth] para tu sitio Netlify: puedes configurar fácilmente cabeceras personalizadas, autenticación básica, instrucciones de redirección y reglas de reescritura desde su archivo de configuración nuxt.

## Instalación

::: warning Advertencia
`nuxt >= 2` is requerido.
:::

```bash 
npm install @bazzite/nuxt-netlify
```

o

```bash 
yarn add @bazzite/nuxt-netlify
```

Añade `@bazzite/nuxt-netlify` a la sección de módulos de `nuxt.config.js`:

```js
{
  modules: [
    '@bazzite/nuxt-netlify',
  ],

  netlify: { }
}
```

o

```js
{
  modules: [
    [
      '@bazzite/nuxt-netlify', { }
    ]
  ]
}
```

[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
