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
      label: '名称',
      placeholder: '请输入商品名称',
      type: 'input'
    },
    {
      field: 'newPrice',
      label: '新价格',
      placeholder: '请输入新价格',
      type: 'input'
    },
    {
      field: 'categoryId',
      label: '类别ID',
      placeholder: '请输入商品类别ID',
      type: 'input'
    },
    {
      field: 'address',
      label: '地址',
      placeholder: '请输入要查询的商品所在的城市',
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
  labelWidth: '120px',
  itemStyle: { padding: '20px 30px' },
  colLayout: { span: 8 }
}
