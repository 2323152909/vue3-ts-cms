<template>
  <div class="aside">
    <el-menu
      default-active="2-1"
      text-color="#636e72"
      class="el-menu-vertical-demo"
      background-color="#60a3bc"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="4-1">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.aside {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
