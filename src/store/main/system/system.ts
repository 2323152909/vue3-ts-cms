import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'
import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload)

      // 1.对页面发送请求
      const { data: pageList } = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = pageList
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
      console.log(pageList)
    }
  }
}

export default systemModule
