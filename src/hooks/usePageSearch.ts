import PageContent from '@/components/page-content'
import { ref } from 'vue'

export function usePageSearch() {
  // 组件的ref对象
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  // 查询操作
  const handleSearchClick = (queryInfo: any) => {
    console.log('点击了搜索按钮')

    pageContentRef.value?.getPageData(queryInfo)
  }

  // 重置操作
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }

  return [pageContentRef, handleSearchClick, handleResetClick]
}
