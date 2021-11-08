<template>
  <div class="menu">
    <PageContent :contentTableConfig="contentTableConfig" @showDialog="showDialog" pageName="menu">
      <template #type="{ row }">
        <el-tag :type="row.type === 1 ? '' : row.type === 2 ? 'success' : 'warning'">
          {{ row.type }}
        </el-tag>
      </template>
    </PageContent>
    <PageModal
      :modalConfig="modalConfig"
      pageName="menu"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
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
  // name: 'menu',
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
