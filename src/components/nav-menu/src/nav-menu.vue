<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!isCollapse" class="title">Vue3 + TS</span>
    </div>
    <el-menu
      text-color="#b7bdc3"
      background-color="#001529"
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="false"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item项 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''" @click="handleMenuItemClick(subitem)">
                <template #title>
                  <i v-if="subitem.icon" :class="subitem.icon"></i>
                  <span>{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
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
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  setup() {
    // store
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    // router
    const router = useRouter()
    const route = useRoute()
    const currentPath = route.path

    const menu = pathMapToMenu(userMenus.value, currentPath)
    // const breadcrumbs = pathMapBreadcrumbs(userMenus.value, currentPath)

    const defaultValue = ref(menu.id + '')

    // event handle
    const handleMenuItemClick = (item: any) => {
      // 进行对应路由跳转
      router.push(item.url ?? '/not-found')
    }

    return {
      userMenus,
      defaultValue,
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
