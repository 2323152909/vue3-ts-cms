<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)

    // 退出登录按钮
    const handleExitClick = () => {
      localCache.deleteCache('userInfo')
      localCache.deleteCache('token')
      localCache.deleteCache('userMenu')
      router.replace('/login')
    }
    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style lang="less" scoped>
.user-info {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-dropdown-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>
