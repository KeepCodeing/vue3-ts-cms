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
      <template #footer>
        <slot name="pageFooter"></slot>
      </template>
      <!-- 渲染自定义插槽 -->
      <template
        v-for="item in slotList"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="`p-${item.slotName}`" :row="scope.row"></slot>
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
    // 针对这里写死的插槽进行过滤
    const slotList =
      props.pageContentConfig.tableConfig?.tableProps.filter(
        (item) =>
          item.slotName !== 'pageHeaderHandler' &&
          item.slotName !== 'pageFooter' &&
          item.slotName
      ) ?? [];
    return {
      dataList,
      slotList
    };
  }
});
</script>
