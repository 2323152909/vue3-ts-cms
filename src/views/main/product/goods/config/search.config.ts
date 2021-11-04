import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      label: 'ID',
      placeholder: '请输入ID',
      type: 'input'
    },
    {
      field: 'name',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      type: 'input'
    },
    {
      field: 'cellphone',
      label: '手机号码',
      placeholder: '请输入电话号码',
      type: 'input'
    },
    {
      field: 'enable',
      label: '用户状态',
      placeholder: '请选择用户状态',
      type: 'select',
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' }
      ]
    },
    {
      field: 'createAt',
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
