<template>
  <div class="list">
    <HdCard title="故事列表">
      <PageTimeline pageName="story"></PageTimeline>
    </HdCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageTimeline from '@/components/page-timeline'
import HdCard from '@/base-ui/card'

export default defineComponent({
  name: 'list',
  components: {
    PageTimeline,
    HdCard
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.list {
  .el-card {
    &:deep(.el-card__header) {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
