---
title: "Primeros Pasos"
description: "Genera dinámicamente archivos _headers y _redirects para Netlify en tus proyectos de Nuxt.js"
created: "2019-03-06T15:43:56Z"
published: "2019-03-06T15:43:56Z"
modified: "2020-07-17T20:01:04Z"
position: 1
category: "Primeros Pasos"
---

# Nuxt Netlify

Genera dinámicamente archivos `_headers` y `_redirects` para Netlify en tus proyectos de Nuxt.js.

Este módulo soporta la creación de reglas de [**redirecciones**][netlify-redirects] y [**cabecera**][netlify-headers-and-basic-auth] para tu sitio Netlify: puedes configurar fácilmente cabeceras personalizadas, autenticación básica, instrucciones de redirección y reglas de reescritura desde su archivo de configuración nuxt.

## Instalación

<docs-alert>

`node >= 10` y `nuxt >= 2` son requeridos.

</docs-alert>

<docs-code-group>
  <docs-code-block label="Yarn" active>

  ```bash
  yarn add --dev @aceforth/nuxt-netlify
  ```

  </docs-code-block>
  <docs-code-block label="NPM">

  ```bash
  npm install --save-dev @aceforth/nuxt-netlify
  ```

  </docs-code-block>
</docs-code-group>

Añade `@aceforth/nuxt-netlify` a la sección `buildModules` de `nuxt.config.js`:

<docs-alert>

Si estás usando Nuxt `< 2.9.0`, usa `modules` en su lugar.

</docs-alert>

```js
{
  buildModules: [
    '@aceforth/nuxt-netlify',
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
      '@aceforth/nuxt-netlify', { 
        // configuración
      }
    ]
  ]
}
```

[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
