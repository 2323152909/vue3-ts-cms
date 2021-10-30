import { IDataType } from '@/service/types'
import HdRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  return HdRequest.post<IDataType>({
    url,
    params: queryInfo
  })
}
