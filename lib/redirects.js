const { FILE_COMMENT } = require('./constants')
const { createRedirectContent, promisifyRedirects } = require('./utils')

module.exports = async (options) => {
  let content = FILE_COMMENT
  const redirects = await promisifyRedirects(options.redirects)

  redirects.forEach(r => {
    content += createRedirectContent(r)
  })

  return content
}
