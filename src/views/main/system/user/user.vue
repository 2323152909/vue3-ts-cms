<template>
  <div class="user">
    <div class="search">
      <HdForm v-bind="FormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HdForm from '@/base-ui/form'
import { FormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: { HdForm },
  setup() {
    return {
      FormConfig
    }
  }
})
</script>

<style lang="less" scoped></style>
