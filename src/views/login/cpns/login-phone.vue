<template>
  <el-form ref="formRef" :model="phone" label-width="65px" :rules="rules">
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
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const phone = reactive({ number: '', code: '' })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const store = useStore()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 2.开始进行登录验证
          store.dispatch('login/phoneLoginAction', { ...phone })
        } else {
          return false
        }
      })
    }
    return {
      phone,
      rules,
      formRef,
      loginAction
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
