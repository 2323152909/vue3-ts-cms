import { createStore } from 'vuex'
import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderlhd',
      age: 18,
      height: '231'
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login
  }
})

export default store
