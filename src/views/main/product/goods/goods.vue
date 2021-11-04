<template>
  <div class="goods">
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      :pageContentRef="pageContentRef"
      @handleSearchClick="handleSearchClick"
      @handleResetClick="handleResetClick"
    >
      <template #oldPrice="{ row }">
        {{ '￥' + row.oldPrice }}
      </template>
      <template #newPrice="{ row }">
        {{ '￥' + row.newPrice }}
      </template>
      <template #status="{ row }">
        <el-tag :type="row.status === 1 ? 'success' : 'danger'">
          {{ row.status === 1 ? '启用' : '禁用' }}
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    const [pageContentRef, handleSearchClick, handleResetClick] = usePageSearch()
    return {
      contentTableConfig,
      pageContentRef,
      handleSearchClick,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
