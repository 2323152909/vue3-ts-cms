<template>
  <div class="line-echart">
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { IDataType } from '../types'
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'

const props = withDefaults(
  defineProps<{
    lineData: IDataType[]
    title?: string
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {},
    toolbox: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.lineData.map((item) => item.name)
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '销量',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: props.lineData.map((item) => item.value)
      }
    ]
  }
})
</script>

<style scoped></style>
