import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    }
  }
}

export default loginModule
