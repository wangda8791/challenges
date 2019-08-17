module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_main.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: {'^/api' : ''},
        secure: false
      }
    }
  }
}
