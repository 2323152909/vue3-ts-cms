const path = require('path')

module.exports = {
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',
  devServer: {
    // 开发环境下自动打开浏览器
    open: true
  },
  // 2.配置方式二：和webpack属性完全一直，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // },
  // 3.配置方式三：chainWebpack配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
