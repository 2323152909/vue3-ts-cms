<template>
  <div class="page-search">
    <HdFrom v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </HdFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HdFrom from '@/base-ui/form'

export default defineComponent({
  components: { HdFrom },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定的
    // 1.优化一：formData中的属性应该是动态的
    const formItem = props.searchFormConfig.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItem) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)
    // 优化二：当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
    }

    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
