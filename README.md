[![Bazzite Project](https://img.shields.io/badge/Bazzite-project-blue.svg)](https://www.bazzite.com/docs/nuxt-netlify)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a55402d7c89b4084882c3362427132d8)](https://www.codacy.com/app/bazzite/nuxt-netlify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=bazzite/nuxt-netlify&amp;utm_campaign=Badge_Grade)
[![Travis](https://img.shields.io/travis/bazzite/nuxt-netlify.svg)](https://travis-ci.org/bazzite/nuxt-netlify)
[![David](https://img.shields.io/david/peer/bazzite/nuxt-netlify.svg)](https://david-dm.org/bazzite/nuxt-netlify?type=peer)
[![David](https://img.shields.io/david/dev/bazzite/nuxt-netlify.svg)](https://david-dm.org/bazzite/nuxt-netlify?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/bazzite/nuxt-netlify.svg)](https://greenkeeper.io/)
[![version](https://img.shields.io/npm/v/@bazzite/nuxt-netlify.svg)](https://www.npmjs.com/package/@bazzite/nuxt-netlify)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/bazzite/nuxt-netlify/develop/LICENSE)

# Nuxt Netlify

Dynamically generate `_headers` and `_redirects` files for Netlify in your Nuxt.js projects.

*Read this in other languages: [English][docs], [Español][docs-es]*


## Installation

:warning: `nuxt >= 2` is required.


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

  netlify: { mergeSecurityHeaders: true }
}
```

or 


```js
{
  modules: [
    [
      '@bazzite/nuxt-netlify',
      {
        mergeSecurityHeaders: true
      }
    ]
  ]
}
```


## Usage

The default configuration will generate an empty `_redirects` file and a `_headers` file with the following:

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

> :warning: the `/_nuxt/*` reference automatically changes with the value of `build.publicPath`.

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

You can also add redirects, as many as you like. For example:


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

- If you want extra details of how to configure and use this project, the **full documentation** is available at [https://www.bazzite.com/docs/nuxt-netlify/][docs].
- For **Bug reports** or **Feature requests**, use the [Issues section][issues].
- You may also want to **follow the company** supporting this project [on Twitter][twitter].

## Professional Support

This project is sponsored by [Bazzite][bazzite-website]. If you require Professional Assistance on your project(s), please contact us at [https://www.bazzite.com/contact][contact-page].

## Code of Conduct

Everyone participating in this project is expected to agree to abide by the [Code of Conduct][code-of-conduct].


## License

Code released under the [MIT License][license-page].


[docs]: https://www.bazzite.com/docs/nuxt-netlify/?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[docs-es]: https://www.bazzite.com/es/docs/nuxt-netlify/?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[docs-configuration]: https://www.bazzite.com/docs/nuxt-netlify/configuration/?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[nuxt-docs-build-publicPath]: https://nuxtjs.org/api/configuration-build#publicPath
[issues]: https://github.com/bazzite/nuxt-netlify/issues
[twitter]: https://bazzite.xyz/Twitter
[bazzite-website]: https://www.bazzite.com?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[contact-page]: https://www.bazzite.com/contact?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[code-of-conduct]: https://www.bazzite.com/open-source/code-of-conduct?utm_source=github&utm_medium=readme&utm_campaign=nuxt-netlify
[license-page]: https://github.com/bazzite/nuxt-netlify/blob/develop/LICENSE
