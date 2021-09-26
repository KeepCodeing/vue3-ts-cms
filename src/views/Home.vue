<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button>hello</el-button>
    <el-button type="primary">hello</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { inc } from '../service';
import { LoginInfo } from '../service/request/type';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    inc
      .request<LoginInfo>({
        url: '/auth/login',
        method: 'POST',
        data: {
          username: '114514',
          password: '114514'
        },
        interceptors: {
          // 针对单个请求的拦截器何时调用？
          // 针对单个请求的拦截器似乎不是根据请求状态来了，就算请求404也算成功
          // 除非then里的代码抛出异常才会进到catch中，原因是全局拦截器处理
          // 了响应错误，并且返回了，这样针对单个请求获取到的就是返回的错误内容...
          // responseCatchInterceptor: (config) => {
          //   console.log(config, 'err');
          //   return config;
          // }
        }
      })
      .then((res) => {
        console.log(res, 'res');
      })
      .catch((err) => {
        console.log(err, 'err');
      });
  }
});
</script>
