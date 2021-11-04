<template>
  <div class="menu">
    <PageContent :contentTableConfig="contentTableConfig" pageName="menu">
      <template #type="{ row }">
        <el-tag :type="row.type === 1 ? '' : row.type === 2 ? 'success' : 'warning'">
          {{ row.type }}
        </el-tag>
      </template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  // name: 'menu',
  components: { PageContent },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
