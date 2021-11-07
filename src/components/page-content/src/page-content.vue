<template>
  <div class="page-content">
    <HdTable
      :listData="dataList"
      v-bind="contentTableConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <div class="header-handler">
          <el-button type="primary" size="medium" :disabled="!isCreate" @click="handleAddClick"
            >新增数据</el-button
          >
        </div>
      </template>

      <!-- 2.列中的公共插槽插槽 -->
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit"
            type="text"
            size="mini"
            :disabled="!isUpdate"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-popconfirm title="确定要删除嘛？" @confirm="handleDeleteClick(scope.row.id)">
            <template #reference>
              <el-button icon="el-icon-delete" type="text" size="mini" :disabled="!isDelete">
                删除
              </el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>

      <!-- 在page-content中动态添加剩余的插槽 -->
      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </HdTable>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/usePermission'

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
  emits: ['showDialog'],
  setup(props, { emit }) {
    const store = useStore()
    const isCreate = usePermission(props.pageName, 'create')
    const isDelete = usePermission(props.pageName, 'delete')
    const isUpdate = usePermission(props.pageName, 'update')
    const isQuery = usePermission(props.pageName, 'query')

    // 1.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    // 监听参数的改变，重新发起请求
    watch(pageInfo, () => getPageData(), { deep: true })

    // 2.发送网络请求
    const getPageData = (queryInfo?: any) => {
      // 没有查询权限，则不发送网络请求获取数据
      if (!isQuery) return false

      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3.从vuex中获取数据
    const dataList = computed(() => store.getters['system/getPageListData'](props.pageName))
    const dataCount = computed(() => store.getters['system/getPageListCount'](props.pageName))
    // const pageList = computed(() => store.state.system.userList)
    // const dataCount = computed(() => store.state.system.userCount)

    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    // 添加按钮
    const handleAddClick = () => {
      emit('showDialog', { title: '添加数据' })
    }

    // 编辑按钮
    const handleEditClick = (item: any) => {
      emit('showDialog', { ...item, title: '编辑数据' })
    }

    // 删除按钮
    const handleDeleteClick = (id: any) => {
      console.log(id)

      store.dispatch('system/removePageListAction', {
        pageName: props.pageName,
        id
      })
    }

    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isDelete,
      isUpdate,
      getPageData,
      handleAddClick,
      handleEditClick,
      handleDeleteClick
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
