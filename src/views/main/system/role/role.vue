<template>
  <div class="role">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleSearchClick="handleSearchClick"
      @handleResetClick="handleResetClick"
    />
    <PageContent :contentTableConfig="contentTableConfig" pageName="role" ref="pageContentRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleSearchClick, handleResetClick] = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleSearchClick,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
