const { appendHeaders, createHeadersContent } = require('../lib/utils')

describe('headers', () => {
  it('can append headers', () => {
    const headers1 = {
      '/*': [
        'X-Frame-Options: DENY',
        'X-XSS-Protection: 1; mode=block',
        'X-Content-Type-Options: nosniff'
      ]
    }

    const headers2 = {
      '/*': [
        'X-UA-Compatible: ie=edge',
        'Access-Control-Allow-Origin: *',
        'Referrer-Policy: origin'
      ]
    }

    const headers3 = {
      '/*': [
        'X-Frame-Options: SAMEORIGIN'
      ]
    }

    expect(appendHeaders(headers1, '/*', headers2['/*'])).toMatchSnapshot()
    expect(appendHeaders(headers1, '/*', headers3['/*'])).toMatchSnapshot()
  })

  it('can create header content', () => {
    const headers1 = [
      'Cache-Control: public, max-age=31536000, immutable'
    ]

    const headers2 = [
      'X-Frame-Options: DENY',
      'X-XSS-Protection: 1; mode=block'
    ]

    const headers3 = [
      'Basic-Auth: someuser:somepassword anotheruser:anotherpassword'
    ]

    const headers4 = [
      'Link: </style.css>; rel=preload; as=style',
      'Link: </main.js>; rel=preload; as=script',
      'Link: </image.jpg>; rel=preload; as=image'
    ]

    expect(appendHeaders(createHeadersContent(headers1, '/static/*'))).toMatchSnapshot()
    expect(appendHeaders(createHeadersContent(headers2, '/templates/index.html'))).toMatchSnapshot()
    expect(appendHeaders(createHeadersContent(headers3, '/something/*'))).toMatchSnapshot()
    expect(appendHeaders(createHeadersContent(headers4, '/*'))).toMatchSnapshot()
  })
})
