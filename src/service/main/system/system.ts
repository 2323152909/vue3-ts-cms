import { IDataType } from '@/service/types'
import HdRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return HdRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageDataById(url: string) {
  return HdRequest.delete<IDataType>({
    url
  })
}

export function editPageDataById(url: string, queryInfo: any) {
  return HdRequest.patch<IDataType>({
    url,
    data: queryInfo
  })
}

export function createPageData(url: string, queryInfo: any) {
  return HdRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
