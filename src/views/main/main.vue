<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header><nav-header @foldChange="handleFoldChange" /></el-header>
        <el-main>
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import navMenu from '@/components/nav-menu'
import navHeader from '@/components/nav-header'

export default defineComponent({
  components: {
    navMenu,
    navHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }

    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
}
.el-header {
  color: var(--el-text-color-primary);
  // text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #00142d;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  overflow: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: 100%;
  .page-info {
    background-color: #fff;
  }
}
.el-container {
  height: 100%;
  margin-bottom: 40px;
}
</style>
