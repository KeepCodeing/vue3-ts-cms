<template>
  <page-content :page-content-config="pageContentConfig">
    <template #p-handle>
      <div>
        <el-button size="mini" type="text" icon="el-icon-edit">编辑</el-button>
        <el-button size="mini" type="text" icon="el-icon-delete"
          >删除</el-button
        >
      </div>
    </template>
  </page-content>
</template>

<script lang="ts">
import pageContent from '@/components/page-content/cpn/page-content.vue';
import { defineComponent } from 'vue';
import { pageContentConfig } from './config/content.config';

export default defineComponent({
  components: { pageContent },
  setup() {
    return {
      pageContentConfig
    };
  }
});
</script>
