import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './service/axios_demo'
import HyRequest from './service'

// 全局引入element-plus
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

HyRequest.request<DataType>({
  method: 'GET',
  url: '/home/multidata'
  // showLoading: false
})

// HyRequest.request({
//   method: 'GET',
//   url: '/home/multidata',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的res')
//       return res
//     }
//   }
// })
