[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a55402d7c89b4084882c3362427132d8)](https://www.codacy.com/app/juliomrqz/nuxt-netlify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=juliomrqz/nuxt-netlify&amp;utm_campaign=Badge_Grade)
[![Travis](https://img.shields.io/travis/juliomrqz/nuxt-netlify.svg)](https://travis-ci.org/juliomrqz/nuxt-netlify)
[![David](https://img.shields.io/david/peer/juliomrqz/nuxt-netlify.svg)](https://david-dm.org/juliomrqz/nuxt-netlify?type=peer)
[![David](https://img.shields.io/david/dev/juliomrqz/nuxt-netlify.svg)](https://david-dm.org/juliomrqz/nuxt-netlify?type=dev)
[![version](https://img.shields.io/npm/v/@aceforth/nuxt-netlify.svg)](https://www.npmjs.com/package/@aceforth/nuxt-netlify)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/juliomrqz/nuxt-netlify/develop/LICENSE)

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects.

This module supports the creation of [**redirects**][netlify-redirects] and [**header**][netlify-headers-and-basic-auth] rules for your Netlify site: you can easily configure custom headers, basic auth, redirect instructions and rewrite rules from your _nuxt config file_.

*Read this in other languages: [English][docs], [Español][docs-es]*


## Installation

:warning: `node >= 10` and `nuxt >= 2` are required.


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
    mergeSecurityHeaders: true 
  }
}
```

or 


```js
{
  buildModules: [
    [
      '@aceforth/nuxt-netlify',
      {
        mergeSecurityHeaders: true
      }
    ]
  ]
}
```


## Usage

The default configuration will generate an empty `_redirects` file and a `_headers` file with some caching and security headers:

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

> :warning: the `/_nuxt/*` reference automatically changes with the value of [`build.publicPath`][nuxt-docs-build-publicPath].

### Headers

The headers object represents a JS version of the [Netlify `_headers` file format][netlify-headers-and-basic-auth]. You should pass in a object with string keys (representing the paths) and an array of strings for each header. For example:


You can add extra headers as follows:

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

that will generate:

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

### Redirects

You can also add [redirects][netlify-redirects], as many as you like. You should pass in an array of objects with the redirection attributes. For example:


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

will generate:

```text
# _redirects

/home               /               301
/my-redirect        /               302!
/en/*               /en/404.html    404
/*                  /index.html     200
/store    id=:id    /blog/:id       301
/                   /china          302    Country=cn,hk,tw
```


See the [configuration][docs-configuration] section for all available options.

## Documentation & Support

- 📄 If you want extra details of how to configure and use this project, the **full documentation** is available at [https://marquez.co/docs/nuxt-netlify/][docs].
- 🐞 For **Bug reports** or **Feature requests**, use the [Issues section][issues].
- 💬 For **questions**, you can also use the [Issues section][issues].
- 🚀 You may also want to **follow me** [on Twitter][twitter].

## Professional Support

This project is sponsored by me, a Full Stack Developer. If you require Professional Assistance on your project(s), please contact me at [https://marquez.co][contact-page].

## Code of Conduct

Everyone participating in this project is expected to agree to abide by the [Code of Conduct][code-of-conduct].


## License

Code released under the [MIT License][license-page].


![](https://ga-beacon.appspot.com/UA-65885578-17/juliomrqz/nuxt-netlify?pixel)

[docs]: https://marquez.co/docs/nuxt-netlify/?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[docs-es]: https://marquez.co/es/docs/nuxt-netlify/?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[docs-configuration]: https://marquez.co/docs/nuxt-netlify/configuration/?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[nuxt-docs-build-publicPath]: https://nuxtjs.org/api/configuration-build#publicPath
[netlify-headers-and-basic-auth]: https://www.netlify.com/docs/headers-and-basic-auth/
[netlify-redirects]: https://www.netlify.com/docs/redirects/
[issues]: https://github.com/juliomrqz/nuxt-netlify/issues
[twitter]: https://twitter.com/juliomrqz
[contact-page]: https://marquez.co?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[code-of-conduct]: https://www.contributor-covenant.org/version/2/0/code_of_conduct/
[license-page]: https://github.com/juliomrqz/nuxt-netlify/blob/develop/LICENSE
