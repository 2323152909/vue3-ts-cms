<template>
  <div class="page-content">
    <HdTable :listData="pageList" v-bind="contentTableConfig">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <div class="header-handler">
          <el-button type="primary" size="medium">新增用户</el-button>
        </div>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="{ row }">
        <el-tag :type="row.enable === 1 ? 'success' : 'danger'">
          {{ row.enable === 1 ? '启用' : '禁用' }}
        </el-tag>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" type="text" size="mini">编辑</el-button>
          <el-button icon="el-icon-delete" type="text" size="mini">删除</el-button>
        </div>
      </template>
    </HdTable>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import HdTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HdTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      requried: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const pageList = computed(() => store.getters['system/getPageListData'](props.pageName))
    const pageCount = computed(() => store.getters['system/getPageCountData'](props.pageName))
    // const pageList = computed(() => store.state.system.userList)
    // const pageCount = computed(() => store.state.system.userCount)
    return {
      pageList,
      pageCount
    }
  }
})
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #e9eef3;
}
</style>
