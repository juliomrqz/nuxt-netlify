---
title: "Configuración"
description: "Las opciones por defecto podrían ser suficiente, pero puedes cambiar cada una de las opciones disponibles si así los deseas."
created: "2019-03-06T15:43:56Z"
published: "2019-03-06T15:43:56Z"
modified: "2020-07-17T20:01:04Z"
position: 3
category: "Primeros Pasos"
---

Las opciones por defecto podrían ser suficiente, pero puedes cambiar cada una de las opciones disponibles si así los deseas.

## headers

- Type: `object`
- Default: `{}`

Añade cabeceras extras.

Debes pasar un objecto con índices de texto (representando las rutas) y un arreglo de textos para cada cabecera.

```js
{
  netlify: { 
    headers: {
      '/*': [
        'Access-Control-Allow-Origin: *'
      ],
      '/favicon.ico': [
        'Cache-Control: public, max-age=86400'
      ]
    }
  }
}
```

## redirects

- Type: `array`
- Default: `[]`

Añade redireciones extras.

Debes pasar un arreglo de objetos con los atributos de redirección. Los atributos disponibles para cada redirección son:

- **from** (requerido): la ruta que quieres redireccionar.
- **to** (requerido): la URL o ruta a dodne quieres redireccionar.
- **status**: el código de estado HTTP que quieres usar en esa redirección (por defecto: `301`).
- **force**: sobreescribir o no cualquier contenido existente en la ruta (por defecto: `false`).
- **query**: los parámetros de consulta requerido que coinciden con la redirección. Puedes leer más sobre los [Parámetros de Consulta aquí][netlify-redirects-query-params].
- **conditions**: las condiciones que coinciden con la redirección, como las condiciones [Geo-IP][netlify-redirects-geo-ip] o [Role][netlify-redirects-role].


Ejemplo:

```js
{
  netlify: { 
    redirects: [
      {
        from: '/home',
        to: '/'
      },
      {
        from: '/my-redirect',
        to: '/',
        status: 302,
        force: true
      },
      {
        from: '/store',
        to: '/blog/:id',
        query: {
          id: ':id'
        }
      },
      {
        from: '/',
        to: '/china',
        status: 302,
        conditions: {
          Country: 'cn,hk,tw'
        }
      }
    ]
  }
}
```

## mergeSecurityHeaders

- Type: `boolean`
- Default: `true`

Une las cabeceras por defecto de seguridad en `_headers`:

```text
/*
  Referrer-Policy: origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
```

## mergeCachingHeaders

- Type: `boolean`
- Default: `true`

Une las cabeceras por defecto de seguridad caché en `_headers`:

```text
/_nuxt/*
  Cache-Control: public, max-age=31536000, immutable

/sw.js
  Cache-Control: no-cache
```

<docs-alert variant="info">

La referencia  `/_nuxt/*` automáticamente cambia con el valor de [`build.publicPath`][nuxt-docs-build-publicPath].

</docs-alert>


## transformHeaders

- Type: `function`
- Default: `(headers, path) => headers`

Transformador opcional para la manipulación de las cabeceras bajo cada ruta (p.ej. ordenar alfabéticamente). Ejemplo:

```js
{
  netlify: { 
    transformHeaders: (headers, path) => headers.sort()
  }
}

```

[netlify-redirects-query-params]: https://www.netlify.com/docs/redirects/#query-params
[netlify-redirects-geo-ip]: https://www.netlify.com/docs/redirects/#geoip-and-language-based-redirects
[netlify-redirects-role]: https://www.netlify.com/docs/redirects/#role-based-redirect-rules
[nuxt-docs-build-publicPath]: https://nuxtjs.org/api/configuration-build#publicPath
