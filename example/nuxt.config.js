const path = require('path')
const pkg = require('./package')

const demoRedirects = [
  {
    from: 'https://example.com/temp/*',
    to: 'https://example.com/:splat*'
  },
  {
    from: '/en/*',
    to: '/en/404.html',
    status: 404
  },
  {
    from: '/articles',
    to: '/posts/:tag/:id',
    status: 301,
    force: true,
    query: {
      id: ':id',
      tag: ':tag',
    }
  },
  {
    from: '/china/*',
    to: '/china/zh-cn/:splat',
    status: 302,
    conditions: {
      Language: 'zh',
      Country: 'cn,hk,tw',
    }
  }
]

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    path.resolve('../lib/index.js')
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  netlify: {
    // redirects: demoRedirects,
    async redirects() {
      const getRedirects = () => new Promise(
        resolve => setTimeout(resolve(demoRedirects), 500)
      )
      return await getRedirects()
    }
  }
}
