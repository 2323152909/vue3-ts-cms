<template>
  <div class="timeline">
    <el-timeline>
      <template v-for="item in dataList" :key="item.id">
        <el-timeline-item :timestamp="$filters.formatTime(item.createAt)" :placement="placement">
          <hd-card :title="item.title">
            <p>{{ item.content }}</p>
          </hd-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import HdCard from '@/base-ui/card'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    HdCard
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: 'top'
    }
  },
  setup(props) {
    const store = useStore()

    const getPageList = () => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: 0,
          size: 100
        }
      })
    }

    getPageList()

    const dataList = computed(() => store.getters['system/getPageListData'](props.pageName))
    const dataCount = computed(() => store.getters['system/getPageListCount'](props.pageName))

    return {
      dataList,
      dataCount
    }
  }
})
</script>

<style lang="less" scoped>
.timeline {
  padding: 10px;

  .el-timeline {
    &:deep(.el-timeline-item__timestamp) {
      text-align: left;
    }
  }

  .el-card {
    &:deep(.el-card__header) {
      font-weight: 700;
      font-size: 15px !important;
    }
  }
}
</style>
