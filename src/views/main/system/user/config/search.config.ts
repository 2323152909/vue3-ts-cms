import { IForm } from '@/base-ui/form'

export const FormConfig: IForm = {
  formItems: [
    {
      label: 'ID',
      placeholder: '请输入ID',
      type: 'input'
    },
    {
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
      rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
    },
    {
      label: '密码',
      placeholder: '请输入密码',
      type: 'password'
    },
    {
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      type: 'select',
      options: [
        { label: '篮球', value: 'basketball' },
        { label: '足球', value: 'football' }
      ]
    },
    {
      label: '创建时间',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '120px',
  itemStyle: { padding: '20px 30px' },
  colLayout: { span: 8 }
}
