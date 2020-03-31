---
title: "Overview"
description: "Dynamically generate _headers and _redirects files for Netlify in your Nuxt.js projects"
permalink: /docs/nuxt-netlify/
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
modified: "2020-03-31T20:07:29Z"
---

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects.

This module supports the creation of [**redirects**][netlify-redirects] and [**header**][netlify-headers-and-basic-auth] rules for your Netlify site: you can easily configure custom headers, basic auth, redirect instructions and rewrite rules from your _nuxt config file_.


## Installation

::: warning 
`node >= 10` and `nuxt >= 2` are required.
:::

```bash 
npm install @bazzite/nuxt-netlify
```

or

```bash 
yarn add @bazzite/nuxt-netlify
```

Add `@bazzite/nuxt-netlify` to the modules section of `nuxt.config.js`:

```js
{
  modules: [
    '@bazzite/nuxt-netlify',
  ],

  netlify: { }
}
```

or 


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
