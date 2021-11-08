import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      rules: [{ required: true, message: '请输入菜单名称' }],
      label: '名称',
      placeholder: '请输入菜单名称'
    },
    {
      field: 'icon',
      type: 'input',
      rules: [{ required: true, message: '请输入ICON图标' }],
      label: '图标',
      placeholder: '请输入ICON图标'
    }
  ],
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: {}
}
