import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      rules: [{ required: true, message: '请输入角色名' }],
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      rules: [{ required: true, message: '请输入角色介绍' }],
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: {}
}
