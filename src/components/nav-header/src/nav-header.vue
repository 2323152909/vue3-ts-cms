<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="!isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    />
    <div class="content">
      <HdBreadcrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import HdBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    HdBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)

    // 面包屑的数据: [{name: '', path: ''}]
    const store = useStore()

    const breadcrumbs: ComputedRef<IBreadcrumb[]> = computed(() => {
      const route = useRoute()
      const userMenus = computed(() => store.state.login.userMenus)
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus.value, currentPath)
    })

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
  .fold-menu {
    cursor: pointer;
    font-size: 30px;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
}
</style>
