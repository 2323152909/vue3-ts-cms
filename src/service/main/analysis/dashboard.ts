import hdRequest from '@/service'
import { IDataType } from '@/service/types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  goodsAmountList = '/goods/amount/list'
}

export function getCategoryGoodsCount() {
  return hdRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return hdRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return hdRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return hdRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
export function getGoodsAmountList() {
  return hdRequest.get<IDataType>({
    url: DashboardAPI.goodsAmountList
  })
}
