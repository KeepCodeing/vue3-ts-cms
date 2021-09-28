<template>
  <div class="flex items-center h-full">
    <i
      @click="foldMenu"
      class="text-2xl cursor-pointer"
      :class="!isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
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
