// 编写好规则
export const rules = {
  name: [
    { required: true, message: '必须填写账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5-10个字母或数字组成',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须填写密码', trigger: 'blur' },
    { max: 10, min: 6, message: '密码长度在6-10之间', trigger: 'blur' }
  ]
}
