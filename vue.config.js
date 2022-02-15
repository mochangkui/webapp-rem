module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader')
      .options({ remUnit: 75, remPrecision: 8 })
      .end()
  }
}