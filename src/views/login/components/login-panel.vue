<template>
  <div class="login-panel">
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登陆</span>
        </template>
        <login-account ref="accountFormRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-phone"></i>手机登陆</span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="login-action">
      <el-checkbox v-model="isRemember" label="记住密码"></el-checkbox>
      <el-link type="primary" :underline="false">忘记密码？</el-link>
    </div>
    <el-button class="w-full m-1" @click="handleLogin" type="primary"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import loginAccount from './login-account.vue';
import loginPhone from './login-phone.vue';

export default defineComponent({
  components: { loginAccount, loginPhone },
  setup() {
    const isRemember = ref(false);

    const accountFormRef = ref<InstanceType<typeof loginAccount>>();

    const handleLogin = () => {
      accountFormRef.value?.loginAction();
    };

    return {
      isRemember,
      handleLogin,
      accountFormRef
    };
  }
});
</script>

<style scoped>
.login-panel {
  width: 320px;
  margin-bottom: 120px;
}
.login-panel > .login-action {
  display: flex;
  justify-content: space-between;
}
</style>
