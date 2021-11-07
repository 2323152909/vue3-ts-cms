<template>
  <div class="bar-echart">
    <BaseEchart :options="options"></BaseEchart>
  </div>
</template>

<script setup lang="ts">
import { IDataType } from '../types'
import { computed, defineProps, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/echart'
import * as echarts from 'echarts'
import { convertData } from '../utils/convert-data'

const props = withDefaults(
  defineProps<{
    mapData: IDataType[]
    title?: string
  }>(),
  {
    title: ''
  }
)

const options = computed(() => {
  return {
    backgroundColor: '#fff',
    title: {
      text: '全国泵机销售情况',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    legend: {
      orient: 'vertical',
      right: 20,
      top: 10,
      data: ['销量'],
      textStyle: {
        color: '#fff'
      }
    },
    visualMap: {
      min: 0,
      max: 50000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#ececec',
          borderColor: '#3e3e3e'
        },
        emphasis: {
          areaColor: 'rgb(10, 105, 187)'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.mapData),
        symbolSize: 12,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped></style>
