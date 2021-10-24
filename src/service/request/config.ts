// 根据process.env.NODE_ENV区分
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'production') {
  //生产环境
  BASE_URL = 'http://coderwhy.org/prod'
} else if (process.env.NODE_ENV === 'development') {
  //开发环境
  BASE_URL = 'http://123.207.32.32:8000'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }