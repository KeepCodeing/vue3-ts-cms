<template>
  <div>
    <el-form :model="phoneForm" :rules="rules">
      <el-form-item label="手机号" label-width="70px" prop="phone">
        <el-input v-model="phoneForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" label-width="70px" prop="code">
        <div class="code-input-box">
          <el-input v-model="phoneForm.code"></el-input>
          <el-button class="code-button" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { rules } from '../config/phone.config';

export default defineComponent({
  setup() {
    const phoneForm = reactive({
      phone: '',
      code: ''
    });

    return {
      phoneForm,
      rules
    };
  }
});
</script>

<style scoped>
.code-input-box {
  display: flex;
}
.code-input-box > .code-button {
  margin-left: 6px;
}
</style>
