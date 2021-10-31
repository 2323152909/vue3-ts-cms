import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    }
  },
  getters: {
    getPageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    getPageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const { pageName, queryInfo } = payload
      const pageUrl = `/${pageName}/list`
      const upperPageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      // switch (pageName) {
      //   case 'user':
      //     pageUrl = `/users/list`
      //     upperPageName = 'User'
      //     break
      //   case 'role':
      //     pageUrl = `/role/list`
      //     upperPageName = 'Role'
      //     break
      // }

      // 1.对页面发送请求
      const { data: pageList } = await getPageListData(pageUrl, queryInfo)
      const { list, totalCount } = pageList
      commit(`change${upperPageName}List`, list)
      commit(`change${upperPageName}Count`, totalCount)
      console.log(pageList)
    }
  }
}

export default systemModule
