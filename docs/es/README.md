---
title: "Primeros Pasos"
description: "Genera dinámicamente archivos _headers y _redirects para Netlify en tus proyectos de Nuxt.js"
permalink: /docs/nuxt-netlify/
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
modified: "2019-06-05T12:51:34.314Z"
---

# Nuxt Netlify

Genera dinámicamente archivos `_headers` y `_redirects` para Netlify en tus proyectos de Nuxt.js.

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
