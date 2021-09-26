export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号！',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 10,
      message: '账号字符长度必须介于3到10之间！',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！',
      trigger: 'blur'
    },
    {
      min: 3,
      message: '密码长度必须大于3个字符！',
      trigger: 'blur'
    }
  ]
};
