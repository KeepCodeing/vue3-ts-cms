import { IFormConfig } from '@/components/custom-form/types';

export const formConfig: IFormConfig = {
  formProps: [
    {
      label: '角色名称',
      placeholder: '请输入角色名称',
      type: 'input',
      filed: 'rolename'
    },
    {
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      type: 'input',
      filed: 'powerinfo'
    },
    {
      label: '创建时间',
      others: { startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
      type: 'datepicker',
      filed: 'createdAt'
    }
  ]
  // 后面还可以写其它设置，实际上并不是把设置封装成一个类，而是用一个类封装设置...
};
