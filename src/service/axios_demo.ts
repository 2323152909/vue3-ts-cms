import axios from 'axios'

// axios实例
// 1.模拟get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})

// 2.get请求，并且传入参数
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'coderlhd',
      age: 18
    },
    timeout: 10000
  })
  .then((res) => {
    console.log(res.data)
  })

// 3.post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'coderlhd',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// Promise本身是可以有类型
// new Promise<string>((resolve, reject) => {
//   resolve('abc')
// }).then((res) => {
//   console.log(res.length)
// })

// 4.1.axios的全局配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000
// axios.defaults.headers = {}

// 4.2.每个请求单独的配置
axios
  .get('/get', {
    params: {
      name: 'coderlhd',
      age: 18
    },
    timeout: 2000
  })
  .then((res) => {
    console.log(res.data)
  })

axios
  .post('/post', {
    data: {
      name: 'coderlhd',
      age: 18
    }
  })
  .then((res) => {
    console.log(res.data)
  })

// 5.axios.all
axios
  .all([
    axios.get('/get', {
      params: {
        name: 'coderlhd',
        age: 18
      }
    }),
    axios.post('/post', {
      data: {
        name: 'coderlhd',
        age: 18
      }
    })
  ])
  .then((res) => {
    console.log('axios.all1', res[0])
    console.log('axios.all2', res[1])
  })

// 6.axios的拦截器
// 请求拦截器
// fn1：请求发送成功会执行的函数
// fn2：请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 做一些想做的事情
    // 1.给请求添加token
    // 2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (error) => {
    console.log('请求失败的拦截')
    return Promise.reject(error)
  }
)

// 响应拦截器
// fn1：数据响应成功（服务器正常的返回了数据 20x）
// fn2：数据响应失败（服务区异常的响应 50x）
axios.interceptors.response.use(
  (response) => {
    console.log('响应成功的拦截')
    return response.data
  },
  (error) => {
    console.log('响应失败的拦截')
    return Promise.reject(error)
  }
)
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res.data)
})
