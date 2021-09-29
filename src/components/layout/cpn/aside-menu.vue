<template>
  <div class="flex items-center justify-center my-3 h-9">
    <img class="mr-2 h-9" :src="'/favicon.ico'" />
    <span v-show="!isFold" class="font-sans font-thin text-white"
      >Cookie CMS</span
    >
  </div>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#001529"
    text-color="#999"
    active-text-color="#fff"
    :collapse="isFold"
    :collapse-transition="false"
    :default-openeds="[$route.path]"
    router
  >
    <template v-for="(route, idx) in menuRoutes" :key="idx">
      <el-menu-item
        :index="route.path"
        v-if="!route.children || !route.children.length"
      >
        <i v-if="route.meta?.icon" :class="route.meta?.icon" />
        <span v-show="!isFold">{{ route.meta?.title }}</span>
      </el-menu-item>

      <el-sub-menu v-else :index="idx + ''">
        <template #title>
          <i v-if="route.meta?.icon" :class="route.meta?.icon" />
          <span v-show="!isFold">{{ route.meta?.title }}</span>
        </template>
        <el-menu-item-group v-if="route.children !== undefined">
          <el-menu-item
            v-for="(item, iidx) in route.children"
            :key="iidx"
            :index="route.path + '/' + item.path"
          >
            {{ item.meta?.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { routes } from '../../../router';

export default defineComponent({
  props: {
    isFold: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuRoutes = routes.filter((item) => item.meta?.show);
    return {
      menuRoutes
    };
  }
});
</script>

<style scoped>
.el-menu--collapse {
  border: none;
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}
</style>
