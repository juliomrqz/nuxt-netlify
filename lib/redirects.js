const { FILE_COMMENT } = require('./constants')
const { createRedirectContent } = require('./utils')

module.exports = (options) => {
  let content = FILE_COMMENT

  options.redirects.forEach(r => {
    content += createRedirectContent(r)
  })

  return content
}
