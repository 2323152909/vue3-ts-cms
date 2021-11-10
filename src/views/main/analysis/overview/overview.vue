<template>
  <div class="overview">
    <HdCard title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5
        等后台系统解决方案。
      </div>
    </HdCard>
    <HdCard title="技术栈">
      <HdDescriptions title="开发时依赖" :tableDatas="devDependencies" :column="2"></HdDescriptions>
      <HdDescriptions title="生产时依赖" :tableDatas="dependencies" :column="2"></HdDescriptions>
    </HdCard>
    <HdCard title="项目结构">
      <HdCode :code="projectDir" language="bash"></HdCode>
    </HdCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HdCard from '@/base-ui/card'
import HdCode from '@/base-ui/code'
import HdDescriptions from '@/base-ui/descriptions'
import { projectDir, dependencies, devDependencies } from './config/index'

export default defineComponent({
  name: 'overview',
  components: {
    HdCard,
    HdCode,
    HdDescriptions
  },
  setup() {
    return {
      projectDir,
      dependencies,
      devDependencies
    }
  }
})
</script>

<style lang="less" scoped>
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 10px;
    &:deep(.el-card__header span) {
      font-weight: 700;
    }
  }

  .descriptions {
    &:deep(.el-descriptions__title) {
      font-weight: 400;
    }
  }
}
</style>
