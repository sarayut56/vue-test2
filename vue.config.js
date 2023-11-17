const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "": {
        target: process.env.VUE_APP_BASE_API,
        pathRewrite: { "^": "" },
        changeOrigin: true,
        secure: false
      },
    }
  }
})
