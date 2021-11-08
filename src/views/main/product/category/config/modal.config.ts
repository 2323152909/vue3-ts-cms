import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      rules: [{ required: true, message: '请输入类别名' }],
      label: '类别名',
      placeholder: '请输入类别名'
    }
  ],
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: {}
}
