const { FILE_COMMENT, DEFAULT_HEADER_VALUES } = require('./constants')
const { createRedirectContent } = require('./utils')

module.exports = (options) => {
  let content = FILE_COMMENT

  options.redirects.forEach(r => {
    const redirect = Object.assign({}, DEFAULT_HEADER_VALUES, r)
    content += createRedirectContent(redirect)
  })

  return content
}
