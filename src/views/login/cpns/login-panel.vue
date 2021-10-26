<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <LoginPhone></LoginPhone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false" @click="deletePassword">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'

import localCache from '@/utils/cache'

export default defineComponent({
  components: {
    LoginPhone,
    LoginAccount
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }

    const deletePassword = () => {
      localCache.deleteCache('password')
    }

    return {
      isKeepPassword,
      handleLoginClick,
      deletePassword,
      accountRef
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
