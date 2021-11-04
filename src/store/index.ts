import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderlhd',
      age: 18,
      height: '231',
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, departments) {
      state.entireDepartment = departments
    },
    changeEntireRole(state, roles) {
      state.entireRole = roles
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const {
        data: { list: departmentList }
      } = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })

      commit('changeEntireDepartment', departmentList)
      const {
        data: { list: roleList }
      } = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })

      commit('changeEntireRole', roleList)
    }
  },
  getters: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
