<template>
  <el-form :model="phone" label-width="65px" :rules="rules">
    <el-form-item label="手机号" prop="number">
      <el-input v-model="phone.number"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code"></el-input>
        <el-button type="primary" class="getcode-btn">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({ number: '', code: '' })
    return {
      phone,
      rules
    }
  }
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
  .getcode-btn {
    margin-left: 10px;
  }
}
</style>
