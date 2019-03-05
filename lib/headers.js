const { SECURITY_HEADERS, CACHING_HEADERS, FILE_COMMENT } = require('./constants')
const { createHeadersContent, appendHeaders, isUrl } = require('./utils')

module.exports = (options) => {
  console.log('options', options)

  const { transformHeaders, publicPath } = options
  let content = FILE_COMMENT

  if (options.mergeSecurityHeaders) {
    options.headers = appendHeaders(options.headers, '/*', SECURITY_HEADERS['/*'])
  }

  if (options.mergeCachingHeaders) {
    // public path
    if (!isUrl(publicPath)) {
      options.headers = appendHeaders(options.headers,
        `${publicPath}*`,
        CACHING_HEADERS['/_nuxt/*'])
    }

    // sw.js
    options.headers = appendHeaders(options.headers, '/sw.js', CACHING_HEADERS['/sw.js'])
  }

  // transform and generate headers content
  for (const key in options.headers) {
    if (options.headers.hasOwnProperty(key)) {
      const headers = transformHeaders(options.headers[key], key)
      content += createHeadersContent(headers, key)
    }
  }

  return content
}
