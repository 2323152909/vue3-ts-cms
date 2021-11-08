<template>
  <div class="category">
    <PageContent
      :contentTableConfig="contentTableConfig"
      @showDialog="showDialog"
      pageName="category"
    ></PageContent>
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="category"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'category',
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, showDialog] = usePageModal()
    return {
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      showDialog
    }
  }
})
</script>

<style scoped></style>
