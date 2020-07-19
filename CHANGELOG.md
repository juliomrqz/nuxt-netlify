# [1.1.0](https://github.com/juliomrqz/nuxt-netlify/compare/v1.0.0...v1.1.0) (2020-07-19)


* dependencies updates

### Refactor

* update layout of docs articles ([08ea91a](https://github.com/juliomrqz/nuxt-optimized-images/commit/08ea91a4472654d764d83f01d52d7a16ff2ac82b))
* update project owner ([18216ad](https://github.com/juliomrqz/nuxt-optimized-images/commit/18216ad0cb2592770db6f4cb08f0d41815e8d154))


# [1.0.0](https://github.com/juliomrqz/nuxt-netlify/compare/v0.2.0...v1.0.0) (2020-04-12)


* refactor!: update parent company ([3a93e72](https://github.com/juliomrqz/nuxt-netlify/commit/3a93e72a4df48b266e1fe23f3762485fa7d1331b))


### BREAKING CHANGES

* **The package has been renamed from `@bazzite/nuxt-netlify` to `@aceforth/nuxt-netlify`.**

To upgrade

1. `npm install --save-dev @aceforth/nuxt-netlify` 

   or `yarn add --dev @aceforth/nuxt-netlify`

2. `npm uninstall @bazzite/nuxt-netlify` 

   or `yarn remove @bazzite/nuxt-netlify`

3. replace:

```js
{
  buildModules: [
    '@bazzite/nuxt-netlify',
  ],
}
```

with

```js
{
  buildModules: [
    '@aceforth/nuxt-netlify',
  ],
}
```


That’s it, there are no functional changes compared to `@bazzite/nuxt-netlify@0.2.0`.



# [0.2.0](https://github.com/juliomrqz/nuxt-netlify/compare/v0.1.1...v0.2.0) (2020-03-31)


### Bug Fixes

* **docs:** update Installation instructions ([d0fbe6f](https://github.com/juliomrqz/nuxt-netlify/commit/d0fbe6fb1b41ac861ca43f4930b62b7c1c6d9f24))


* refactor!: drop support for Node.js 8 ([34075b7](https://github.com/juliomrqz/nuxt-netlify/commit/34075b7b54dd0a71b5756ce7ecc9a9a9e0c5cd1d))


### Features

* add support for node v12 on travis tests ([21b43c0](https://github.com/juliomrqz/nuxt-netlify/commit/21b43c03e3ceb78a6667374841bb23a6c6620c2d))


### BREAKING CHANGES

* minimum required Node.js version is 10.x



## [0.1.1](https://github.com/juliomrqz/nuxt-netlify/compare/v0.1.0...v0.1.1) (2019-06-12)

* **docs:** extend the description of the project ([21f5e09](https://github.com/juliomrqz/nuxt-netlify/commit/21f5e09))


# 0.1.0 (2019-03-14)

First stable release
