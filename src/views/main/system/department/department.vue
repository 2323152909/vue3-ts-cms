<template>
  <div class="department">
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="department"
      @showDialog="showDialog"
    ></PageContent>
    <PageModal
      pageName="department"
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'department',
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, showDialog] = usePageModal()
    const store = useStore()

    // 动态添加上级列表
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.field === 'parentId')
      departmentItem!.options = store.state.entireDepartment.map((item) => ({
        label: item.name,
        value: item.id
      }))

      return modalConfig
    })

    return {
      contentTableConfig,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      showDialog
    }
  }
})
</script>

<style scoped></style>
