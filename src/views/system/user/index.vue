<template>
  <div>
    <custom-form v-bind="formConfig" />
    <custom-table
      :showIndexColumn="true"
      :showSelectionColumn="true"
      :tableProps="tableConfig"
      :data="data"
      :title="$route.meta.title"
      class="mt-5"
    >
      <!-- header的插槽 -->
      <template #headerHandler>
        <div>
          <el-button icon="el-icon-refresh" size="medium"></el-button>
          <el-button type="primary" size="medium">新建用户</el-button>
        </div>
      </template>
      <!-- table的插槽 -->
      <template #status="scope">
        <span type="primary">{{ scope.row === 1 ? '启用' : '禁用' }}</span>
      </template>
      <template #handle>
        <div>
          <el-button size="mini" type="text" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button size="mini" type="text" icon="el-icon-delete"
            >删除</el-button
          >
        </div>
      </template>
    </custom-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { formConfig } from './config/search.config';
import { tableConfig, data } from './config/table.config';
import CustomForm from '../../../components/custom-form';
import CustomTable from '../../../components/custom-table';

export default defineComponent({
  components: {
    CustomForm,
    CustomTable
  },
  setup() {
    return {
      formConfig,
      tableConfig,
      data
    };
  }
});
</script>
