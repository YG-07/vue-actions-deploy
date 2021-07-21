const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'build',
  publicPath: '/vue-actions-deploy',
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
        .set("@", resolve("src"))
        .set("pages", resolve("src/pages"))
        .set("public", resolve("public"))
  }
}
