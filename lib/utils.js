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

module.exports = {
  createFile,
  createHeadersContent,
  appendHeaders,
  isUrl,
  createRedirectContent
}
