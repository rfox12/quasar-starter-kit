// Configuration for your app

module.exports = function (ctx) {
  return {
    vendor: [
      'axios',
      'vue-i18n',
      'some-package'
    ],
    plugins: [
      'axios',
      'i18n',
      'some-package'
    ],
    css: [
      'my-style.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : '',
      'material-icons'
      // 'ionicons',
      // 'fontawesome',
      // 'animate'
    ],
    build: {
      supportIE: true,
      wow () {
        // console.log('a')
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: false
    },
    extend (config) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|quasar)/
      })
    }
  }
}
