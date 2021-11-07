<template>
  <div class="pie-echart">
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

const props = defineProps<{
  pieData: IDataType[]
}>()

const options = computed(() => {
  return {
    tootip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        data: props.pieData,
        redius: '50%',
        name: '分类数据',
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ],
    legend: {
      orient: 'horizontal',
      left: 'left'
    }
  }
})
</script>

<style scoped></style>
