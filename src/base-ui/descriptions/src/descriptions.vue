<template>
  <div class="descriptions">
    <el-descriptions :title="title" :column="column" border>
      <template v-for="(item, index) in tableDatas" :key="index">
        <el-descriptions-item>
          <template #label>{{ item.name }}</template>
          <el-tag style="small">{{ item.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    tableDatas: {
      type: Array,
      default: () => []
    },
    column: {
      type: Number,
      default: 1
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.descriptions {
  margin-bottom: 20px;
}
</style>
