const path = require('path')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  assetsDir: 'static',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    // 设置静态目录别名
    config.resolve.alias.set('public', path.resolve('public'))
  }
}
