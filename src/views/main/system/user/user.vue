<template>
  <div class="user">
    <div class="search">
      <PageSearch :searchFormConfig="searchFormConfig" />
    </div>
    <div class="content">
      <HdTable :listData="userList" :propList="propList">
        <template #status="{ row }">
          <el-tag :type="row.enable === 1 ? 'success' : 'warning'">
            {{ row.enable === 1 ? '启用' : '禁用' }}
          </el-tag>
        </template>
        <template #createAt="scope">
          <strong>{{ scope.row.createAt }}</strong>
        </template>
      </HdTable>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'
import HdTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: { PageSearch, HdTable },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    const propList: any[] = [
      { prop: 'name', label: '用户名', minWidth: '100px' },
      { prop: 'realname', label: '真实姓名', minWidth: '100px' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100px' },
      { prop: 'enable', label: '状态', minWidth: '100px', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '180px', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '180px', slotName: 'updateAt' }
    ]

    return {
      searchFormConfig,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #e9eef3;
}
</style>
