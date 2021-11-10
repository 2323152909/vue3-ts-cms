<template>
  <div class="hd-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: 'html'
    }
  },
  setup(props) {
    const highlightedCode = ref<string>('')

    watchEffect(() => {
      highlightedCode.value = hljs.highlight(props.code, { language: props.language }).value
    })
    return {
      highlightedCode
    }
  }
})
</script>

<style lang="less" scoped>
.hd-code {
  text-align: left;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
}
</style>
