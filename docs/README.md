---
permalink: /docs/nuxt-netlify/
description: "Dynamically generate _headers and _redirects files for Netlify in your Nuxt.js projects"
created: "2019-03-06T15:43:56.239Z"
published: "2019-03-06T15:43:56.239Z"
title: "Overview"
---

<Canonical />

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects

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
