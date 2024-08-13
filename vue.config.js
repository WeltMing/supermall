const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    // node_modules里的依赖默认是不会编译的,会导致es6语法在ie中的语法报错,
  // 所以需要在vue.config.js中使用transpileDependencies属性配置node_modules
  // 中指定哪些文件夹或文件需要编译.true时全部编译
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 配置路径别名
      // @是已经配置好的路径别名: 对应的是src路径
      alias: {
        'assets':'@/asset',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  },




})
