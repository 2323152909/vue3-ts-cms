type IFormType = 'input' | 'password' | 'select' | 'datepicker'

interface ISelectOption {
  label: string
  value: any
}

export interface IFormItem {
  type: IFormType
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: ISelectOption[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
