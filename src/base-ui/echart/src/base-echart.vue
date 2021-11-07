<template>
  <div class="base-content">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '@/base-ui/echart/hooks/useEchart'

// 定义props
const props = withDefaults(
  // 定义props属性类型
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  // 定义默认值
  {
    width: '100%',
    height: '300px'
  }
)

// 获取DOM元素
const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { echartInstance, setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
