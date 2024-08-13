const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // publicPath:"./"  //基础路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
})
