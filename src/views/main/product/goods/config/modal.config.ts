import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      rules: [{ required: true, message: '请输入商品名称' }],
      label: '名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'desc',
      type: 'input',
      rules: [{ required: true, message: '请输入商品信息' }],
      label: '商品信息',
      placeholder: '请输入商品信息'
    },
    {
      field: 'newPrice',
      type: 'input',
      rules: [{ required: true, message: '请输入新价格' }],
      label: '新价格',
      placeholder: '请输入新价格'
    },
    {
      field: 'oldPrice',
      type: 'input',
      rules: [{ required: true, message: '请输入旧价格' }],
      label: '旧价格',
      placeholder: '请输入旧价格'
    },
    {
      field: 'imgUrl',
      type: 'input',
      rules: [{ required: true, message: '请输入商品图片连接' }],
      label: '图片URL',
      placeholder: '请输入商品图片连接'
    },
    {
      field: 'categoryId',
      type: 'select',
      rules: [{ required: true, message: '请选择商品分类' }],
      label: '商品分类',
      placeholder: '请选择商品分类',
      options: []
    }
  ],
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: {}
}
