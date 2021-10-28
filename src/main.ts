import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
import 'normalize.css'
import './assets/css/index.less'

// 全局引入element-plus
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 先调用本地存储信息初始化到vuex中
setupStore()

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
