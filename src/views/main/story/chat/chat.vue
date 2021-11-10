<template>
  <div class="chat">
    <HdCard title="说说你的故事">
      <label for="title">
        <el-input v-model="storyReactive.title" placeholder="请输入标题~" />
      </label>
      <HdEdit ref="editRef"></HdEdit>
      <div class="handle-btns">
        <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
        <el-button type="primary" icon="el-icon-search" @click="handleCreateClick">添加</el-button>
      </div>
    </HdCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import HdCard from '@/base-ui/card'
import HdEdit from '@/base-ui/edit'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    HdEdit,
    HdCard
  },
  setup() {
    const editRef = ref<InstanceType<typeof HdEdit>>()
    const storyReactive = reactive({
      title:'',
      content: ''
    })
    const store = useStore()

    const handleResetClick = () => {
      console.log(editRef.value?.editor?.getText())
      console.log(editRef.value?.editor?.children)
      storyReactive.title = ''
      editRef.value?.editor!.clear()
    }
    const handleCreateClick = () => {
      if(!storyReactive.title){
        return ElMessage({
          message: '老伙计，想个标题吧~',
          type: 'warning'
        })
      }else if(!editRef.value?.editor?.getText()){
          return ElMessage({
            message: '说点啥呗？！',
            type: 'warning'
          })
      }else{
        storyReactive.content = editRef.value?.editor?.getText()
        store.dispatch('system/createPageDataAction', {
          pageName: 'story',
          newData: {
            title: storyReactive.title,
            content: storyReactive.content
          }
        })
        handleResetClick()
      }
    }
    return {
      editRef,
      storyReactive,
      handleResetClick,
      handleCreateClick
    }
  }
})
</script>

<style scoped></style>
