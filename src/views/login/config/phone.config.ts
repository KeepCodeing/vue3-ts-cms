export const rules = {
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      min: 13,
      max: 13,
      message: '手机号长度必须为13个字符！',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码！',
      trigger: 'blur'
    },
    {
      min: 4,
      max: 4,
      message: '验证码长度必须为4个字符！',
      trigger: 'blur'
    }
  ]
};
