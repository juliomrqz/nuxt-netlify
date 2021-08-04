/**
 * Copyright (c) 2020, Julio Marquez
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path')
const consola = require('consola')

const { DEFAULT_CONFIG } = require('./constants')
const generateHeaders = require('./headers')
const generateRedirects = require('./redirects')
const { createFile } = require('./utils')

const logger = consola.withScope('nuxt:@aceforth/nuxt-netlify')

function nuxtOptimizedImages (moduleOptions) {
  const { rootDir, generate, build } = this.options
  const options = Object.assign({}, DEFAULT_CONFIG, this.options.netlify, moduleOptions)
  options.publicPath = build.publicPath

  // validate options
  if (typeof options.headers !== 'object') {
    logger.fatal('The `headers` property must be an object')
  } else if (!Array.isArray(options.redirects) && typeof options.redirects !== 'function') {
    logger.fatal('The `redirects` property must be an array or function')
  } else if (typeof options.transformHeaders !== 'function') {
    logger.fatal('The `transformHeaders` property must be a function')
  }

  // Generate headers and redirects in dist
  this.nuxt.hook('generate:done', async () => {
    // generate headers
    try {
      const headersPath = path.resolve(rootDir, generate.dir, '_headers')
      const headersContent = generateHeaders(options)
      await createFile(headersPath, headersContent)
      logger.success('Generated /_headers')
    } catch (error) {
      logger.error(error)
    }

    // generate redirects
    try {
      const redirectsPath = path.resolve(rootDir, generate.dir, '_redirects')
      const redirectsContent = await generateRedirects(options)
      await createFile(redirectsPath, redirectsContent)
      logger.success('Generated /_redirects')
    } catch (error) {
      logger.error(error)
    }
  })
}

module.exports = nuxtOptimizedImages
module.exports.meta = require('../package.json')
