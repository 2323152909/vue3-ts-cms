<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!isCollapse" class="title">Vue3 + TS</span>
    </div>
    <el-menu
      text-color="#b7bdc3"
      background-color="#001529"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="false"
    >
      <template v-for="(item, index) in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="`${index + 1 + ''}`">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item项 -->
            <template v-for="(subitem, index1) in item.children" :key="subitem.id">
              <el-menu-item
                :index="`${index + 1 + '-' + (index1 + 1)}`"
                @click="handleMenuItemClick(subitem)"
              >
                <template #title>
                  <i v-if="subitem.icon" :class="subitem.icon"></i>
                  <span>{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="`${index + 1 + ''}`">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const userMenus = computed(() => store.state.login.userMenus)

    const handleMenuItemClick = (item: any) => {
      // 进行对应路由跳转
      router.replace(item.url)
    }

    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
  .el-menu {
    width: 100%;
    text-align: left;
    color: #fff;
    border-right: none !important;
    .el-sub-menu {
      width: 100%;
    }
    .el-menu-item {
      width: 100%;
      background-color: #0c2135;
    }
    .is-active {
      background-color: #035ec1;
      color: #fff;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
}
</style>
