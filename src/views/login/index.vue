<template>
  <div class="login-index">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginPanel from './components/login-panel.vue';

export default defineComponent({
  name: 'login-index',
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.login-index {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}
</style>
