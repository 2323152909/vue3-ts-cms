import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名称',
      placeholder: '请输入角色名称',
      type: 'input'
    },
    {
      field: 'intro',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      type: 'input'
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
  labelWidth: '120px'
}
