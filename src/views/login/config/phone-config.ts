// 编写好规则
export const rules = {
  number: [
    { required: true, message: '手机号为必填项', trigger: 'blur' },
    {
      pattern: /^1[0-9]{10}$/,
      message: '手机号必须为1开头且长度必须是11位',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码必填', trigger: 'blur' },
    {
      pattern: /^1[0-9]{10}$/,
      message: '手机号长度必须是11位',
      trigger: 'blur'
    }
  ]
}
