<template>
  <div class="flex items-center justify-between h-full pr-5">
    <div class="flex items-center">
      <div>
        <i
          @click="foldMenu"
          class="mr-5 text-2xl cursor-pointer"
          :class="!isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
        />
      </div>
      <div><header-bread-crumb /></div>
    </div>
    <div class="flex items-center">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        class="mr-3"
        size="small"
      ></el-avatar>
      <el-dropdown>
        <span class="font-thin el-dropdown-link">
          UDK<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Action 1</el-dropdown-item>
            <el-dropdown-item command="b">Action 2</el-dropdown-item>
            <el-dropdown-item command="c">Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeaderBreadCrumb from '../../breadcrumb/index';

export default defineComponent({
  components: {
    HeaderBreadCrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const foldMenu = () => {
      isFold.value = !isFold.value;
      emit('foldMenu', isFold.value);
    };
    return {
      foldMenu,
      isFold
    };
  }
});
</script>
