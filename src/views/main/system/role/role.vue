<template>
  <div class="role">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleSearchClick="handleSearchClick"
      @handleResetClick="handleResetClick"
    />
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      ref="pageContentRef"
      @showDialog="showDialog"
    />
    <PgeModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherData="otherData"
    >
      <div class="menu-tree">
        <el-tree
          :data="menuData"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          ref="elTreeRef"
          :default-checked-keys="defaultCheckedKeys"
          :default-expanded-keys="defaultCheckedKeys"
          @check="handleMenuTreeCheck"
        />
      </div>
    </PgeModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, nextTick } from 'vue'
import { getMenuLeafKeys } from '@/utils/map-menus'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PgeModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from '@/store'
// import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PgeModal
  },
  setup() {
    const [pageContentRef, handleSearchClick, handleResetClick] = usePageSearch()

    // 1.处理pageModal的hook
    // const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      const leafKeys = getMenuLeafKeys(item.menuList)
      defaultCheckedKeys.value = leafKeys
      // nextTick(() => {
      //   elTreeRef.value?.setCheckedKeys(leafKeys, false)
      // })
    }
    const [pageModalRef, defaultInfo, showDialog] = usePageModal(undefined, editCallback)

    const otherData = ref({})
    const store = useStore()
    const menuData = computed(() => store.state.entireMenu)
    const menuList = ref<number[]>([])
    // 默认选中的键
    const defaultCheckedKeys = ref<number[]>([])

    const handleMenuTreeCheck = (data: any, item: any) => {
      menuList.value = [...item.checkedKeys, ...item.halfCheckedKeys]
      otherData.value = { menuList }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleSearchClick,
      handleResetClick,
      modalConfig,
      pageModalRef,
      defaultInfo,
      showDialog,
      menuData,
      otherData,
      // 默认选中的键
      defaultCheckedKeys,
      // elTreeRef,
      handleMenuTreeCheck
    }
  }
})
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
