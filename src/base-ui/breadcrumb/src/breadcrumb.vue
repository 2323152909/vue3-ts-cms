<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/" class="breadcrumb">
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <el-breadcrumb-item :to="{ path: item.path ?? '' }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumb } from '../types'

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
