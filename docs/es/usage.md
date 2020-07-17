---
title: "Uso"
description: "La configuración por defecto generará un archivo `_redirects` vacío y un archivos `_headers` con algunos headers de securidad y cache"
created: "2019-03-06T15:43:56Z"
published: "2019-03-06T15:43:56Z"
modified: "2020-07-17T20:01:04Z"
position: 2
category: "Primeros Pasos"
---

La configuración por defecto generará un archivo `_redirects` vacío y un archivo `_headers` con algunas cabeceras de securidad y caché:

```text
# _headers

/*
  Referrer-Policy: origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block

/_nuxt/*
  Cache-Control: public, max-age=31536000, immutable

/sw.js
  Cache-Control: no-cache
```


<docs-alert variant="info">

La referencia  `/_nuxt/*` automáticamente cambia con el valor de [`build.publicPath`][nuxt-docs-build-publicPath].

</docs-alert>

## Cabeceras

El objeto cabecera representa una versión en JS del [formato de archivos de Netlify `_headers`][netlify-headers-and-basic-auth]. Debes pasar un objecto con índices de texto (representando las rutas) y un arreglo de textos para cada cabecera. Por ejemplo:

```js
const pkg = require('./package.json')

{
  netlify: { 
    headers: {
      '/*': [
        'Access-Control-Allow-Origin: *',
        `X-Build: ${pkg.version}`
      ],
      '/favicon.ico': [
        'Cache-Control: public, max-age=86400'
      ]
    }
  }
}
```

esto generará lo siguiente:

```text
# _headers

/*
  Referrer-Policy: origin
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Access-Control-Allow-Origin: *
  X-Build: 1.0.1

/_nuxt/*
  Cache-Control: public, max-age=31536000, immutable

/sw.js
  Cache-Control: no-cache
  
/favicon.ico
  Cache-Control: public, max-age=86400
```

## Redirecciones

También puedes añadar redirecciones, tantas como desees. Debes pasar un arreglo de objetos con los atributos de redirección. Por ejemplo:


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
        from: '/en/*',
        to: '/en/404.html',
        status: 404
      },
      {
        from: '/*',
        to: '/index.html',
        status: 200
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

que generará:

```text
# _redirects

/home               /               301
/my-redirect        /               302!
/en/*               /en/404.html    404
/*                  /index.html     200
/store    id=:id    /blog/:id       301
/                   /china          302    Country=cn,hk,tw
```


Ve la sección de [configuración](/es/docs/nuxt-netlify/configuration) para todas las opciones disponibles.



[nuxt-docs-build-publicPath]: https://nuxtjs.org/api/configuration-build#publicPath
[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
