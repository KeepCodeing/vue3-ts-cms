<template>
  <div class="p-3 bg-white rounded custom-table">
    <div class="flex justify-between py-2 header">
      <h2 class="font-sans text-xl font-bold">{{ title }}</h2>
      <slot name="headerHandler"></slot>
    </div>
    <el-table
      v-bind="childrenProp"
      border
      :data="data"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="60px" v-if="showSelectionColumn">
      </el-table-column>
      <el-table-column
        type="index"
        width="80"
        label="序号"
        align="center"
        v-if="showIndexColumn"
      ></el-table-column>
      <el-table-column
        v-for="item in tableProps"
        :key="item"
        v-bind="item"
        align="center"
        show-overflow-tooltip
      >
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row[item.prop]">{{
            scope.row[item.prop]
          }}</slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-end mt-4 footer" v-if="showPagination">
      <slot name="footer">
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @current-change="onCurrentChange"
          @size-change="onSizeChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ITableChildren, ITableProps } from '../types';

export default defineComponent({
  props: {
    tableProps: {
      type: Array as PropType<ITableProps[]>,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    showIndexColumn: {
      type: Boolean,
      deafult: false
    },
    showSelectionColumn: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    childrenProp: {
      type: Object as PropType<ITableChildren>
    }
  },
  setup() {
    const handleSelectionChange = (value: any) => {
      console.log(value);
    };
    return {
      handleSelectionChange
    };
  }
});
</script>
