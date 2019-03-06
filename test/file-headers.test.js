const { Map } = require('immutable')

const { DEFAULT_CONFIG } = require('../lib/constants')
const generateHeaders = require('../lib/headers')

const defaultOptions = Map(Object.assign({}, DEFAULT_CONFIG, { publicPath: '/_nuxt/' }))
const extraHeaders = {
  '/templates/index.html': [
    'X-Frame-Options: DENY',
    'X-XSS-Protection: 1; mode=block'
  ],
  '/templates/index2.html': [
    'X-Frame-Options: SAMEORIGIN'
  ],
  '/something/*': [
    'Basic-Auth: someuser:somepassword anotheruser:anotherpassword'
  ]
}

describe('file _headers', () => {
  it('can generate default file', () => {
    const options = defaultOptions.toJS()
    const content = generateHeaders(options)
    expect(content).toMatchSnapshot()
  })

  it('can generate default file with a public path as url', () => {
    const options = defaultOptions.set('publicPath', 'https://cdn.example.com').toJS()
    const content = generateHeaders(options)
    expect(content).toMatchSnapshot()
  })

  it('can disable security headers', () => {
    const options = defaultOptions.set('mergeSecurityHeaders', false).toJS()
    const content = generateHeaders(options)

    expect(content).toMatchSnapshot()
  })

  it('can disable caching headers', () => {
    const options = defaultOptions.set('mergeCachingHeaders', false).toJS()
    const content = generateHeaders(options)

    expect(content).toMatchSnapshot()
  })

  it('can disable security & caching headers', () => {
    const options = defaultOptions
      .set('mergeSecurityHeaders', false)
      .set('mergeCachingHeaders', false)
      .toJS()
    const content = generateHeaders(options)

    expect(content).toMatchSnapshot()
  })

  it('can sort headers alphabetically', () => {
    const options = defaultOptions
      .set('transformHeaders', (headers, path) => headers.reverse())
      .toJS()
    const content = generateHeaders(options)

    expect(content).toMatchSnapshot()
  })

  it('can add extra headers', () => {
    const options = defaultOptions
      .set('headers', extraHeaders)
      .toJS()
    const content = generateHeaders(options)

    expect(content).toMatchSnapshot()
  })

  it('can add extra headers with no defaults', () => {
    const options = defaultOptions
      .set('mergeSecurityHeaders', false)
      .set('mergeCachingHeaders', false)
      .set('headers', extraHeaders)
      .toJS()
    const content = generateHeaders(options)

    expect(content).toMatchSnapshot()
  })
})
