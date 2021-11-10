<template>
  <div class="edit">
    <!-- 工具栏 -->
    <Toolbar :editorId="editorId" :mode="mode" style="border-bottom: 1px solid #ccc" />
    <!-- 编辑器 -->
    <Editor
      :editorId="editorId"
      :mode="mode"
      :defaultConfig="editorConfig"
      :defaultContent="getDefaultContent"
      @onChange="handleChange"
      @customAlert="customAlert"
      @customPaste="customPaste"
      style="height: 500px"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '@wangeditor/editor/dist/css/style.css' // 也可以在 <style> 中 import

import { computed, onUnmounted } from 'vue'
import { Editor, Toolbar, getEditor, removeEditor } from '@wangeditor/editor-for-vue'
import lodash from 'lodash'

export default defineComponent({
  name: 'MyEditor',
  components: { Editor, Toolbar },
  setup() {
    const editorId = 'wangeEditor-1'
    const editor = computed(() => getEditor(editorId))

    // 默认内容
    const defaultContent = [
      {
        type: 'paragraph',
        children: [{ text: '' }]
      }
    ]

    // 注意，深度拷贝 content ，否则会报错
    const getDefaultContent = computed(() => lodash.cloneDeep(defaultContent))

    // 编辑器配置
    const editorConfig = {
      placeholder: '请输入内容...',
      MENU_CONF: {
        insertImage: {
          checkImage(src: any) {
            console.log('image src', src)
            if (src.indexOf('http') !== 0) {
              return '图片网址必须以 http/https 开头'
            }
            return true
          }
        }
      }
    }

    // 编辑器回调函数
    const handleChange = (editor: any) => {
    }
    const customAlert = (info: any, type: any) => {
      alert(`【自定义提示】${type} - ${info}`)
    }
    const customPaste = (editor: any, event: any, callback: any) => {
      // 自定义插入内容
      // editor.insertText('xxx')

      // 返回值（注意，vue 事件的返回值，不能用 return）
      callback(true) // 返回 false ，阻止默认粘贴行为
      // callback(true) // 返回 true ，继续默认的粘贴行为
    }

    // 及时销毁编辑器
    onUnmounted(() => {
      const editor = getEditor(editorId)
      if (editor == null) return

      // 销毁，并移除 editor
      // editor.destroy()
      removeEditor(editorId)
    })

    return {
      editorId,
      editor,
      mode: 'default',
      getDefaultContent,
      editorConfig,
      handleChange,
      customAlert,
      customPaste
    }
  }
})
</script>

<style lang="less" scoped></style>
