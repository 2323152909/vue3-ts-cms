import PageModal from '@/components/page-modal'
import { ref } from 'vue'

type CallbackType = (item?: any) => void

export function usePageModal(newCb?: CallbackType, editCb?: CallbackType) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const showDialog = (item: any) => {
    defaultInfo.value = item
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.dialogTitle = item.title
    }
    // 判断是新建还是编辑
    Object.keys(item).length === 1 ? newCb && newCb() : editCb && editCb(item)
  }

  return [pageModalRef, defaultInfo, showDialog]
}
