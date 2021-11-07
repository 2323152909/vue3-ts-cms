import { IDataType } from '@/service/types'
import hdRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return hdRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageDataById(url: string) {
  return hdRequest.delete<IDataType>({
    url
  })
}

export function editPageDataById(url: string, queryInfo: any) {
  return hdRequest.patch<IDataType>({
    url,
    data: queryInfo
  })
}

export function createPageData(url: string, queryInfo: any) {
  return hdRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}
