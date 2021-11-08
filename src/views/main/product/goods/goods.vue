<template>
  <div class="goods">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleSearchClick="handleSearchClick"
      @handleResetClick="handleResetClick"
    ></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      @showDialog="showDialog"
      ref="pageContentRef"
    >
      <template #oldPrice="{ row }">
        {{ '￥' + row.oldPrice }}
      </template>
      <template #newPrice="{ row }">
        {{ '￥' + row.newPrice }}
      </template>
      <template #status="{ row }">
        <el-tag :type="row.status === 1 ? 'success' : 'danger'">
          {{ row.status === 1 ? '已上架' : '未上架' }}
        </el-tag>
      </template>
      <template #image="{ row }">
        <el-image
          :src="row.imgUrl"
          style="width: 60px; height: 60px"
          :preview-src-list="[row.imgUrl]"
        ></el-image>
      </template>
    </PageContent>
    <PageModal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      pageName="goods"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'
import { searchFormConfig } from './config/search.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent,
    PageModal,
    PageSearch
  },
  setup() {
    const store = useStore()
    const [pageContentRef, handleSearchClick, handleResetClick] = usePageSearch()
    const [pageModalRef, defaultInfo, showDialog] = usePageModal()

    const modalConfigRef = computed(() => {
      const categoryItems = modalConfig.formItems.find((item) => item.field === 'categoryId')
      categoryItems!.options = store.state.entireCategory.map((item) => ({
        label: item.name,
        value: item.id
      }))

      return modalConfig
    })
    const category = store.state.entireCategory

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleSearchClick,
      handleResetClick,
      modalConfigRef,
      pageModalRef,
      defaultInfo,
      showDialog,
      category
    }
  }
})
</script>

<style scoped></style>
