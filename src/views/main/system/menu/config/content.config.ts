export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '名称', minWidth: '100px' },
    { prop: 'type', label: '类型', minWidth: '60px', slotName: 'type' },
    { prop: 'url', label: '菜单URL', minWidth: '100px' },
    { prop: 'icon', label: '菜单图标', minWidth: '100px' },
    { prop: 'permission', label: '按钮权限', minWidth: '100px' },
    { prop: 'createAt', label: '创建时间', minWidth: '180px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180px', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  showFooter: false
}
