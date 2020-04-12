---
title: "Overview"
description: "Dynamically generate _headers and _redirects files for Netlify in your Nuxt.js projects"
permalink: /docs/nuxt-netlify/
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
modified: "2020-04-12T17:24:13Z"
---

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects.

This module supports the creation of [**redirects**][netlify-redirects] and [**header**][netlify-headers-and-basic-auth] rules for your Netlify site: you can easily configure custom headers, basic auth, redirect instructions and rewrite rules from your _nuxt config file_.


## Installation

::: warning 
`node >= 10` and `nuxt >= 2` are required.
:::

```bash 
npm install --save-dev @aceforth/nuxt-netlify
```

or

```bash 
yarn add --dev @aceforth/nuxt-netlify
```

Add `@aceforth/nuxt-netlify` to the `buildModules` section of `nuxt.config.js`:

:warning: If you are using Nuxt `< 2.9.0`, use `modules` instead. 

```js
{
  buildModules: [
    '@aceforth/nuxt-netlify',
  ],

  netlify: { 
    // configuration
  }
}
```

or 


```js
{
  buildModules: [
    [
      '@aceforth/nuxt-netlify', { 
        // configuration
      }
    ]
  ]
}
```

[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
