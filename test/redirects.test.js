const { createRedirectContent } = require('../lib/utils')

describe('redirects', () => {
  it('can generate a simple redirect', () => {
    expect(createRedirectContent({
      from: '/home',
      to: '/'
    })).toEqual('/home    /    301\n')

    expect(createRedirectContent({
      from: '/blog/my-post.php',
      to: '/blog/my-post'
    })).toEqual('/blog/my-post.php    /blog/my-post    301\n')

    expect(createRedirectContent({
      from: '/google',
      to: 'https://www.google.com'
    })).toEqual('/google    https://www.google.com    301\n')

    expect(createRedirectContent({
      from: '/news/*',
      to: '/blog/:splat'
    })).toEqual('/news/*    /blog/:splat    301\n')
  })

  it('can generate a redirect with a different status code', () => {
    expect(createRedirectContent({
      from: '/my-redirect',
      to: '/',
      status: 302
    })).toEqual('/my-redirect    /    302\n')

    expect(createRedirectContent({
      from: '/pass-through',
      to: '/index.html',
      status: 200
    })).toEqual('/pass-through    /index.html    200\n')

    expect(createRedirectContent({
      from: '/ecommerce',
      to: '/store-closed',
      status: 404
    })).toEqual('/ecommerce    /store-closed    404\n')

    expect(createRedirectContent({
      from: '/en/*',
      to: '/en/404.html',
      status: 404
    })).toEqual('/en/*    /en/404.html    404\n')

    expect(createRedirectContent({
      from: '/*',
      to: '/index.html',
      status: 200
    })).toEqual('/*    /index.html    200\n')
  })

  it('can force redirection', () => {
    expect(createRedirectContent({
      from: 'http://blog.yoursite.com/*',
      to: 'https://www.yoursite.com/blog/:splat',
      force: true
    })).toEqual('http://blog.yoursite.com/*    https://www.yoursite.com/blog/:splat    301!\n')

    expect(createRedirectContent({
      from: 'http://blog.yoursite.com/*',
      to: 'https://www.yoursite.com/blog/:splat',
      status: 302,
      force: true
    })).toEqual('http://blog.yoursite.com/*    https://www.yoursite.com/blog/:splat    302!\n')
  })

  it('can generate a redirect with query params', () => {
    expect(createRedirectContent({
      from: '/store',
      to: '/blog/:id',
      query: {
        id: ':id'
      }
    })).toEqual('/store    id=:id    /blog/:id    301\n')

    expect(createRedirectContent({
      from: '/articles',
      to: '/posts/:tag/:id',
      query: {
        id: ':id',
        tag: ':tag'
      }
    })).toEqual('/articles    id=:id  tag=:tag    /posts/:tag/:id    301\n')
  })

  it('can generate a redirect with conditons', () => {
    expect(createRedirectContent({
      from: '/',
      to: '/china',
      status: 302,
      conditions: {
        Country: 'cn,hk,tw'
      }
    })).toEqual('/    /china    302    Country=cn,hk,tw\n')

    expect(createRedirectContent({
      from: '/',
      to: '/israel',
      status: 302,
      conditions: {
        Country: 'il'
      }
    })).toEqual('/    /israel    302    Country=il\n')

    expect(createRedirectContent({
      from: '/admin/*',
      status: 200,
      force: true,
      conditions: {
        Role: 'admin'
      }
    })).toEqual('/admin/*    200!    Role=admin\n')

    expect(createRedirectContent({
      from: '/private/*',
      status: 200,
      force: true,
      conditions: {
        Role: 'editor,admin'
      }
    })).toEqual('/private/*    200!    Role=editor,admin\n')
  })
})
