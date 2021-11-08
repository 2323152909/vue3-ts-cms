import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      rules: [{ required: true, message: '请输入部门名称' }],
      label: '名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      rules: [{ required: true, message: '请输入部门领导' }],
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'parentId',
      type: 'select',
      rules: [{ required: true, message: '请选择上级' }],
      label: '上级',
      placeholder: '请选择上级',
      options: []
    }
  ],
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: {}
}
