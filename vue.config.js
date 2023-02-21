// const fs = require('fs')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    hotOnly: false
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  // ? '/hop/code/diyhstoolkit/dist/'
  // : '/hop/code/diyhstoolkit/dist/',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
