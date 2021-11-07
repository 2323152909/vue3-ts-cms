<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="40%" center destroy-on-close>
      <HdForm v-bind="modalConfig" v-model="formData" ref="formRef"></HdForm>
      <slot></slot>
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
import { computed, defineComponent, ref, watch } from 'vue'
import HdForm from '@/base-ui/form'
import { useStore } from '@/store'

export default defineComponent({
  components: { HdForm },
  props: {
    modalConfig: {
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
    },
    otherData: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const store = useStore()
    // 表单数据对象
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    const dialogVisible = ref(false)
    const dialogTitle = ref('新增数据')

    const formRef = ref<InstanceType<typeof HdForm>>()
    const otherDataComputed = computed(() => ({ ...props.otherData }))

    // 点击提交按钮的逻辑
    const handleSubmitClick = () => {
      formRef.value?.formRef?.validate((valid) => {
        if (valid) {
          // 表单验证通过
          if (Object.keys(props.defaultInfo).length === 1) {
            // 新建
            store.dispatch('system/createPageDataAction', {
              pageName: props.pageName,
              newData: { ...formData.value, ...otherDataComputed.value }
            })
          } else {
            // 编辑
            store.dispatch('system/editPageDataAction', {
              pageName: props.pageName,
              editData: { ...formData.value, ...otherDataComputed.value },
              id: props.defaultInfo.id
            })
          }

          dialogVisible.value = false
        } else {
          // 表单验证失败
          return false
        }
      })
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
