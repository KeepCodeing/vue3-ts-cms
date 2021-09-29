<template>
  <div>
    <custom-form v-bind="formConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomForm from '../../../components/custom-form';
import { formConfig } from './config/search.config';

export default defineComponent({
  components: {
    CustomForm
  },
  setup() {
    return {
      formConfig
    };
  }
});
</script>
