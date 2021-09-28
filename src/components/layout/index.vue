<template>
  <el-container class="h-full">
    <el-aside
      style="transition: 0.35s"
      :width="!isFold ? '200px' : '60px'"
      class="bg-gray-800"
    >
      <aside-menu :is-fold="isFold" />
    </el-aside>
    <el-container>
      <el-header>
        <main-header @fold-menu="foldMenu" />
      </el-header>
      <el-main class="h-full bg-gray-100">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { routes } from '../../router';
import AsideMenu from './cpn/aside-menu.vue';
import MainHeader from './cpn/header.vue';

export default defineComponent({
  components: {
    AsideMenu,
    MainHeader
  },
  setup() {
    const menuRoutes = routes.filter((item) => item.meta?.show);
    const isFold = ref(false);
    const foldMenu = (fold: boolean) => (isFold.value = fold);
    return {
      menuRoutes,
      foldMenu,
      isFold
    };
  }
});
</script>
