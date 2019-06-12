---
title: "Overview"
description: "Dynamically generate _headers and _redirects files for Netlify in your Nuxt.js projects"
permalink: /docs/nuxt-netlify/
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
modified: "2019-06-12T00:55:34.687Z"
---

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects.

This module supports the creation of [**redirects**][netlify-redirects] and [**header**][netlify-headers-and-basic-auth] rules for your Netlify site: you can easily configure custom headers, basic auth, redirect instructions and rewrite rules from your _nuxt config file_.


## Installation

::: warning 
`nuxt >= 2` is required.
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
