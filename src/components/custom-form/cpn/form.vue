<template>
  <div class="overflow-hidden bg-white rounded p-7">
    <el-form label-width="100px">
      <el-row>
        <el-col v-bind="colLayout" v-for="fprop in formProps" :key="fprop">
          <el-form-item class="w-full" :label="fprop.label" :style="itemStyle">
            <template v-if="fprop.type === 'input'">
              <el-input :placeholder="fprop.placeholder"></el-input>
            </template>
            <template v-else-if="fprop.type === 'select' && fprop.options">
              <el-select class="w-full" :placeholder="fprop.placeholder">
                <el-option
                  v-for="item in fprop.options"
                  :key="item"
                  :value="item"
                  :label="item"
                >
                  {{ item }}
                </el-option>
              </el-select>
            </template>
            <template v-else-if="fprop.type === 'datepicker'">
              <el-date-picker
                style="width: 100%"
                v-bind="fprop.others"
                type="daterange"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="pr-5 text-right footer">
      <slot name="footer">
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IFormProp } from '../types';

export default defineComponent({
  props: {
    formProps: {
      type: Object as PropType<IFormProp>,
      required: true,
      default: () => ({})
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 20px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  setup() {
    return {};
  }
});
</script>
