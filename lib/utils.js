const fs = require('fs-extra')

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

  return headersList
}

const isUrl = (url) => {
  return ['http', '//'].some(str => url.startsWith(str))
}

const createRedirectContent = redirect => {
  const divider = '    '

  // from
  let content = `${redirect.from}${divider}`

  // query params
  if (redirect.query) {
    content += Object.keys(redirect.query)
      .map(k => `${k}=${redirect.query[k]}`)
      .join('  ')
    content += divider
  }

  // to
  content += `${redirect.to}${divider}`

  // status
  content += `${redirect.status}${redirect.force ? '!' : ''}${divider}`

  // conditions
  if (redirect.conditions) {
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
