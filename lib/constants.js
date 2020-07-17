/**
 * Plugin values
 */
const DEFAULT_CONFIG = {
  // add more headers
  headers: {},
  // turn off the default security headers
  mergeSecurityHeaders: true,
  // turn off the default caching headers
  mergeCachingHeaders: true,
  // optional transform for manipulating headers under each path (e.g.sorting), etc.
  transformHeaders: (headers, path) => headers,
  // add redirects
  redirects: []
}

const DEFAULT_HEADER_VALUES = {
  from: null,
  to: null,
  status: 301,
  force: false,
  query: {},
  conditions: {}
}

const SECURITY_HEADERS = {
  '/*': [
    'Referrer-Policy: origin',
    'X-Content-Type-Options: nosniff',
    'X-Frame-Options: DENY',
    'X-XSS-Protection: 1; mode=block'
  ]
}

const CACHING_HEADERS = {
  '/_nuxt/*': ['Cache-Control: public, max-age=31536000, immutable'],
  '/sw.js': ['Cache-Control: no-cache']
}

const FILE_COMMENT = '## Created with https://github.com/juliomrqz/nuxt-netlify\n'

module.exports = {
  DEFAULT_CONFIG,
  DEFAULT_HEADER_VALUES,
  SECURITY_HEADERS,
  CACHING_HEADERS,
  FILE_COMMENT
}
