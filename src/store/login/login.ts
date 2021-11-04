import { Module } from 'vuex'
import localCache from '@/utils/cache'
import { mapMenusToPermissions, mapMenuToRouotes } from '@/utils/map-menus'
import router from '@/router'
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByIdRequest
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import { IRootState } from '../types'
import { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, userMenus) {
      state.userMenus = userMenus

      // 动态获取路由信息，并动态生成路由
      // userMenus => routes
      const routes = mapMenuToRouotes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      // 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      // 保存权限信息到state中
      state.permissions = permissions
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      // 1.实现登录逻辑
      const { data: res } = await accountLoginRequest(payload)
      localCache.setCache('token', res.token)
      commit('changeToken', res.token)

      // 2.请求用户信息
      const { data: userInfo } = await userInfoByIdRequest(res.id)
      localCache.setCache('userInfo', userInfo)
      commit('changeUserInfo', userInfo)

      // 3.获取用户对应的菜单树
      const { data: userMenus } = await userMenusByIdRequest(userInfo.role.id)
      console.log(userMenus)
      localCache.setCache('userMenu', userMenus)
      commit('changeUserMenu', userMenus)

      // 4.跳转到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      // 获取本地存储的信息，存入vuex中
      const token = localCache.getCache('token')
      commit('changeToken', token)
      const userInfo = localCache.getCache('userInfo')
      commit('changeUserInfo', userInfo)
      const userMenus = localCache.getCache('userMenu')
      commit('changeUserMenu', userMenus)
    }
  }
}

export default loginModule
