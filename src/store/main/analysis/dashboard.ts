import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IDashboardState } from './types'
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getGoodsAmountList
} from '@/service/main/analysis/dashboard'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      goodsAmountList: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, data) {
      state.categoryGoodsCount = data
    },
    changeCategoryGoodsSale(state, data) {
      state.categoryGoodsSale = data
    },
    changeCategoryGoodsFavor(state, data) {
      state.categoryGoodsFavor = data
    },
    changAddressGoodsSale(state, data) {
      state.addressGoodsSale = data
    },
    changGoodsAmountList(state, data) {
      state.goodsAmountList = data
    }
  },
  actions: {
    async getDashboardDataActions({ commit }) {
      const { data: categoryGoodsCount } = await getCategoryGoodsCount()
      const { data: categoryGoodsSale } = await getCategoryGoodsSale()
      const { data: categoryGoodsFavor } = await getCategoryGoodsFavor()
      const { data: addressGoodsSale } = await getAddressGoodsSale()
      const { data: goodsAmountList } = await getGoodsAmountList()

      commit('changeCategoryGoodsCount', categoryGoodsCount)
      commit('changeCategoryGoodsSale', categoryGoodsSale)
      commit('changeCategoryGoodsFavor', categoryGoodsFavor)
      commit('changAddressGoodsSale', addressGoodsSale)
      commit('changGoodsAmountList', goodsAmountList)
    }
  }
}

export default dashboardModule
