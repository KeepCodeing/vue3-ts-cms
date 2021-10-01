<template>
  <page-content :page-content-config="pageContentConfig">
    <template #pageHeaderHandler>
      <div>
        <el-button icon="el-icon-refresh" size="medium"></el-button>
        <el-button size="medium" type="primary">新建用户</el-button>
      </div>
    </template>
    <template #p-handle>
      <div>
        <el-button size="mini" type="text" icon="el-icon-edit">编辑</el-button>
        <el-button size="mini" type="text" icon="el-icon-delete"
          >删除</el-button
        >
      </div>
    </template>
    <template #p-status="scope">
      <el-button
        plain
        size="mini"
        :type="scope.row === 1 ? 'success' : 'danger'"
        >{{ scope.row === 1 ? '正常' : '警告' }}</el-button
      >
    </template>
  </page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { pageContentConfig } from './config/content.config';
import PageContent from '../../../components/page-content';

export default defineComponent({
  components: {
    PageContent
  },
  setup() {
    return {
      pageContentConfig
    };
  }
});
</script>
