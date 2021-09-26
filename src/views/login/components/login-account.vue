<template>
  <div class="login-account">
    <el-form :model="accountForm" :rules="rules" ref="loginForm">
      <el-form-item label="账号" label-width="60px" prop="name">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="60px" prop="password">
        <el-input v-model="accountForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import { rules } from '../config/account.config';

export default defineComponent({
  setup() {
    const accountForm = reactive({
      name: '',
      password: ''
    });

    const loginForm = ref<InstanceType<typeof ElForm>>();

    const loginAction = () => {
      loginForm.value?.validate((isValid) => {
        console.log(isValid);
      });
    };

    return {
      accountForm,
      rules,
      loginAction,
      loginForm
    };
  }
});
</script>

<style scoped></style>
