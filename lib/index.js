/**
 * Copyright (c) 2019, Bazzite, LLC
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path')
// const consola = require('consola')

const { DEFAULT_CONFIG } = require('./constants')
const generateHeaders = require('./headers')
const generateRedirects = require('./redirects')
const { createFile } = require('./utils')

function nuxtOptimizedImages (moduleOptions) {
  const { rootDir, generate, build } = this.options
  const options = Object.assign({}, DEFAULT_CONFIG, this.options.netlify, moduleOptions)
  options.publicPath = build.publicPath

  // TODO: validate

  // Generate headers and redirects in dist
  this.nuxt.hook('generate:done', async () => {
    // generate headers
    const headersPath = path.resolve(rootDir, generate.dir, '_headers')
    const headersContent = generateHeaders(options)
    await createFile(headersPath, headersContent)

    // generate redirects
    const redirectsPath = path.resolve(rootDir, generate.dir, '_redirects')
    const redirectsContent = generateRedirects(options)
    await createFile(redirectsPath, redirectsContent)
  })
}

module.exports = nuxtOptimizedImages
module.exports.meta = require('../package.json')
