import { IForm } from '@/base-ui/form'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      rules: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      rules: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      label: '密码',
      placeholder: '请输入密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      rules: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: []
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: []
    }
  ],
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: {}
}
