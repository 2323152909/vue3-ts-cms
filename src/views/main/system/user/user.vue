<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleSearchClick="handleSearchClick"
      @handleResetClick="handleResetClick"
    />
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @showDialog="showDialog"
    >
      <template #status="{ row }">
        <el-tag :type="row.enable === 1 ? 'success' : 'danger'">
          {{ row.enable === 1 ? '启用' : '禁用' }}
        </el-tag>
      </template>
    </PageContent>
    <PageModal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      pageName="users"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup(props) {
    const [pageContentRef, handleSearchClick, handleResetClick] = usePageSearch()

    // pageModal相关的hook逻辑
    // 1.处理密码的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
    }

    // 2.动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => item.field === 'departmentId')
      departmentItem!.options = store.state.entireDepartment.map((item) => ({
        label: item.name,
        value: item.id
      }))

      const roleItem = modalConfig.formItems.find((item) => item.field === 'roleId')
      roleItem!.options = store.state.entireRole.map((item) => ({
        label: item.name,
        value: item.id
      }))
      return modalConfig
    })

    // 3.调用hook获取公共变量和函数
    const [pageModalRef, defaultInfo, showDialog] = usePageModal(newCallback, editCallback)

    return {
      searchFormConfig,
      contentTableConfig,
      // content组件的ref对象
      pageContentRef,
      // search组件中的自定义事件
      handleSearchClick,
      handleResetClick,
      // modal组件的ref对象
      pageModalRef,
      // 默认信息
      defaultInfo,
      // 控制dialog消息框的弹出函数
      showDialog,
      // 使用计算属性包裹后的modalConfig
      modalConfigRef
    }
  }
})
</script>

<style lang="less" scoped></style>
