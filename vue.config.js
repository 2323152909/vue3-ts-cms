const path = require('path')

const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // 1.配置方式一：CLI提供的属性
  outputDir: './dist',
  devServer: {
    // 开发环境下自动打开浏览器
    // open: true,
    // 配置代理，解决跨域
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  publicPath: './',
  // 2.配置方式二：和webpack属性完全一直，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // },
  // 3.配置方式三：chainWebpack配置
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
