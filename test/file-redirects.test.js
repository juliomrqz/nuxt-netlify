const { Map } = require('immutable')

const { DEFAULT_CONFIG } = require('../lib/constants')
const generateRedirects = require('../lib/redirects')

const defaultOptions = Map(Object.assign({}, DEFAULT_CONFIG, { publicPath: '/_nuxt/' }))

describe('file _redirects', () => {
  it('can generate an empty file', () => {
    const options = defaultOptions.toJS()
    const content = generateRedirects(options)
    expect(content).toMatchSnapshot()
  })

  it('can generate one redirect', () => {
    const redirects = [
      {
        from: '/google',
        to: 'https://www.google.com'
      }
    ]
    const options = defaultOptions.set('redirects', redirects).toJS()
    const content = generateRedirects(options)
    expect(content).toMatchSnapshot()
  })

  it('can generate multiple redirects', () => {
    const redirects = [
      {
        from: '/google',
        to: 'https://www.google.com'
      },
      {
        from: '/my-redirect',
        to: '/',
        status: 302
      },
      {
        from: 'http://blog.yoursite.com/*',
        to: 'https://www.yoursite.com/blog/:splat',
        force: true
      },
      {
        from: 'http://blog.yoursite.com/*',
        to: 'https://www.yoursite.com/blog/:splat',
        status: 302,
        force: true
      },
      {
        from: '/articles',
        to: '/posts/:tag/:id',
        query: {
          id: ':id',
          tag: ':tag'
        }
      }
    ]
    const options = defaultOptions.set('redirects', redirects).toJS()
    const content = generateRedirects(options)
    expect(content).toMatchSnapshot()
  })
})
