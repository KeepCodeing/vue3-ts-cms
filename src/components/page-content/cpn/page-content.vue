<template>
  <div>
    <custom-form v-bind="pageContentConfig.formConfig" />
    <custom-table
      :data="dataList"
      class="mt-5"
      v-bind="pageContentConfig.tableConfig"
    >
      <!-- 这里是什么意思：拿到表格组件里的插槽然后把page-content的插槽传进去 -->
      <template #headerHandler>
        <slot name="pageHeaderHandler"></slot>
      </template>
      <!-- <template #status="scope">
        <span type="primary">{{ scope.row === 1 ? '启用' : '禁用' }}</span>
      </template> -->
      <template #handle>
        <slot name="pageHandle"></slot>
      </template>
      <template #footer>
        <slot name="pageFooter"></slot>
      </template>
    </custom-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { useStore } from 'vuex';
import { IPageContentProps } from '../types';
import CustomForm from '../../custom-form';
import CustomTable from '../../custom-table';

export default defineComponent({
  components: {
    CustomForm,
    CustomTable
  },
  props: {
    pageContentConfig: {
      type: Object as PropType<IPageContentProps>,
      required: true
    }
    // pageName: {
    //   type: String,
    //   required: true
    // },
    // modelName: {
    //   type: String,
    //   required: true
    // }
  },
  setup(props) {
    const store = useStore();
    store.dispatch(
      `${props.pageContentConfig.modelName}/get${props.pageContentConfig.pageName}List`
    );
    const dataList = computed(() =>
      store.getters[`${props.pageContentConfig.modelName}/getDataList`](
        props.pageContentConfig.pageName
      )
    );
    return {
      dataList
    };
  }
});
</script>
