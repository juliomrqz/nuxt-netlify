---
title: "Configuration"
description: "The default options could be enough, but you can overwrite every available option if you want to."
created: "2019-03-06T15:43:56Z"
published: "2019-03-06T15:43:56Z"
modified: "2020-07-17T20:01:04Z"
position: 3
category: "Getting started"
---

The default options could be enough, but you can overwrite every available option if you want to.

## headers

- Type: `object`
- Default: `{}`

Adds extra headers.

You should pass in a object with string keys (representing the paths) and an array of strings for each header.

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

Adds extra redirects.

You should pass in an array of objects with the redirection attributes. The available attributes for each redirect are:

- **from** (required): the path you want to redirect.
- **to** (required): the URL or path you want to redirect to.
- **status**: the HTTP status code you want to use in that redirect (default: `301`).
- **force**: whether to override any existing content in the path or not (default: `false`).
- **query**: the query string parameters required to match the redirect. You can read more about [Query Params here][netlify-redirects-query-params].
- **conditions**: conditions to match the redirect, like [Geo-IP][netlify-redirects-geo-ip] and [Role][netlify-redirects-role] conditions.


Example:

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

Merge the default security headers in `_headers`:

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

Merge the default caching headers in `_headers`:

```text
/_nuxt/*
  Cache-Control: public, max-age=31536000, immutable

/sw.js
  Cache-Control: no-cache
```

<docs-alert variant="info">

The `/_nuxt/*` reference automatically changes with the value of [`build.publicPath`][nuxt-docs-build-publicPath].

</docs-alert>


## transformHeaders

- Type: `function`
- Default: `(headers, path) => headers`

Optional transform for manipulating headers under each path (e.g.sorting), etc. Example:

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
