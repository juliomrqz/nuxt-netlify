---
title: "Overview"
description: "Dynamically generate _headers and _redirects files for Netlify in your Nuxt.js projects"
createdAt: "2019-03-06T15:43:56Z"
publishedAt: "2019-03-06T15:43:56Z"
updatedAt: "2020-07-17T20:01:04Z"
position: 1
category: "Getting started"
---

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects.

This module supports the creation of [**redirects**][netlify-redirects] and [**header**][netlify-headers-and-basic-auth] rules for your Netlify site: you can easily configure custom headers, basic auth, redirect instructions and rewrite rules from your _nuxt config file_.


## Installation

<docs-alert>

`node >= 10` and `nuxt >= 2` are required.

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


Add `@aceforth/nuxt-netlify` to the `buildModules` section of `nuxt.config.js`:

<docs-alert>

If you are using Nuxt `< 2.9.0`, use `modules` instead. 

</docs-alert>

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
