import { IFormConfig } from '@/components/custom-form/types';

export const formConfig: IFormConfig = {
  formProps: [
    { label: 'id', placeholder: '请输入ID', type: 'input' },
    { label: '用户名', placeholder: '请输入用户名', type: 'input' },
    { label: '真实姓名', placeholder: '请输入真实姓名', type: 'input' },
    { label: '电话号码', placeholder: '请输入手机号', type: 'input' },
    {
      label: '状态',
      options: ['正常', '警告'],
      placeholder: '请选择状态',
      type: 'select'
    },
    {
      label: '创建时间',
      others: { startPlaceholder: '开始日期', endPlaceholder: '结束日期' },
      type: 'datepicker'
    }
  ]
  // 后面还可以写其它设置，实际上并不是把设置封装成一个类，而是用一个类封装设置...
};
