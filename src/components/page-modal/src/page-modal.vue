<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="40%" center destroy-on-close>
      <HdForm v-bind="modelConfig" v-model="formData" ref="formRef"></HdForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmitClick">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import HdForm from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  components: { HdForm },
  props: {
    modelConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    // 表单数据对象
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modelConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    const dialogVisible = ref(false)
    const dialogTitle = ref('新增用户')

    const formRef = ref<InstanceType<typeof HdForm>>()
    console.log(props.defaultInfo)

    // 点击提交按钮的逻辑
    const handleSubmitClick = () => {
      if (Object.keys(props.defaultInfo).length === 1) {
        // 新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      } else {
        // 编辑
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value },
          id: props.defaultInfo.id
        })
      }

      dialogVisible.value = false
    }

    return {
      formData,
      formRef,
      dialogVisible,
      dialogTitle,
      handleSubmitClick
    }
  }
})
</script>

<style scoped></style>
