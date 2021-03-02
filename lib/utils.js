const fs = require('fs-extra')
const { DEFAULT_HEADER_VALUES } = require('./constants')

const isEmptyObject = input => Object.keys(input).length === 0

const createFile = async (filePath, content) => {
  if (await fs.exists(filePath)) {
    await fs.appendFile(filePath, `\n\n${content}`)
  } else {
    await fs.ensureFile(filePath)
    await fs.writeFile(filePath, content)
  }
}

const createHeadersContent = (headers, path) => {
  let content = `${path}\n`

  headers.forEach(h => {
    content += `  ${h}\n`
  })

  return `${content}\n`
}

const appendHeaders = (headersList, key, headers) => {
  if (headersList[key]) {
    headersList[key].push(...headers)
  } else {
    headersList[key] = headers
  }

  headersList[key] = Array.from(new Set(headersList[key]))

  return headersList
}

const isUrl = (url) => {
  return ['http', '//'].some(str => url.startsWith(str))
}

const createRedirectContent = r => {
  const redirect = Object.assign({}, DEFAULT_HEADER_VALUES, r)
  const divider = '    '

  // from
  let content = `${redirect.from}${divider}`

  // query params
  if (redirect.query && !isEmptyObject(redirect.query)) {
    content += Object.keys(redirect.query)
      .map(k => `${k}=${redirect.query[k]}`)
      .join('  ')
    content += divider
  }

  // to
  if (redirect.to) {
    content += `${redirect.to}${divider}`
  }

  // status
  content += `${redirect.status}${redirect.force ? '!' : ''}`

  // conditions
  if (redirect.conditions && !isEmptyObject(redirect.conditions)) {
    content += divider
    content += Object.keys(redirect.conditions)
      .map(k => `${k}=${redirect.conditions[k]}`)
      .join('  ')
  }

  return `${content}\n`
}

/**
 * Promisify the `options.redirects` option
 * @remarks Borrowed from nuxt/common/utils
 */
function promisifyRedirects(fn) {
  // If routes is an array
  if (Array.isArray(fn)) {
    return Promise.resolve(fn)
  }
  // If routes is a function expecting a callback
  if (fn.length === 1) {
    return new Promise((resolve, reject) => {
      fn(function (err, routeParams) {
        if (err) {
          reject(err)
        }
        resolve(routeParams)
      })
    })
  }
  let promise = fn()
  if (!promise || (!(promise instanceof Promise) && typeof promise.then !== 'function')) {
    promise = Promise.resolve(promise)
  }
  return promise
}

module.exports = {
  createFile,
  createHeadersContent,
  appendHeaders,
  isUrl,
  createRedirectContent,
  promisifyRedirects
}
