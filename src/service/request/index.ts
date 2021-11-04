import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { HYRequestInterceptors, HYRequestConfig } from './type'
import { ElLoading, ILoadingInstance, ElNotification } from 'element-plus'
import { Vue } from 'vue-demi'

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  loading?: ILoadingInstance
  showLoading: boolean

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加默认拦截器（所有实例都有的拦截器）
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例都有的拦截器：请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,.5)'
          })
        }
        return config
      },
      (error) => {
        // console.log('所有实例都有的拦截器：请求失败拦截')
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例都有的拦截器：数据响应成功拦截')
        const data: any = res.data
        if (data.code !== 0) {
          ElNotification({
            type: 'error',
            message: data.data
          })
        }
        // 将loading移除
        this.loading?.close()
        return data
      },
      (error) => {
        // console.log('所有实例都有的拦截器：数据响应失败拦截')
        // 例子：判断不同的HttpErrorCode显示不同的错误信息
        if (error.response.status === 404) {
          ElNotification({
            type: 'error',
            message: 'Not Found~'
          })
        }
        if (error.response.status === 401) {
          ElNotification({
            type: 'error',
            message: '数据请求异常'
          })
        }
        // 将loading移除
        this.loading?.close()

        return Promise.reject(error)
      }
    )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的判断
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 2.将showLoading设置为默认值，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 3.将resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置为默认值，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }
  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' })
  }
  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }
}

export default HYRequest
