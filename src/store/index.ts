import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import system from './main/system/system'
import dashboard from '@/store/main/analysis/dashboard'

import { getPageListData } from '@/service/main/system/system'

import { IRootState, IStoreType } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderlhd',
      age: 18,
      height: '231',
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
      entireCategory: []
    }
  },
  mutations: {
    changeEntireDepartment(state, departments) {
      state.entireDepartment = departments
    },
    changeEntireRole(state, roles) {
      state.entireRole = roles
    },
    changeEntireMenu(state, menus) {
      state.entireMenu = menus
    },
    changeEntireCategory(state, categorys) {
      state.entireCategory = categorys
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求全部部门数据
      const {
        data: { list: departmentList }
      } = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      commit('changeEntireDepartment', departmentList)

      // 2.请求全部角色数据
      const {
        data: { list: roleList }
      } = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      commit('changeEntireRole', roleList)

      // 3.请求全部菜单数据
      const {
        data: { list: menuList }
      } = await getPageListData('/menu/list', {
        offset: 0,
        size: 1000
      })

      commit('changeEntireMenu', menuList)
      // 3.请求全部菜单数据
      const {
        data: { list: categoryList }
      } = await getPageListData('/category/list', {
        offset: 0,
        size: 1000
      })
      commit('changeEntireCategory', categoryList)
    }
  },
  getters: {},
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
