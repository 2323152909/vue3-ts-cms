export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'name', label: '类别', minWidth: '100px' },
    { prop: 'createAt', label: '创建时间', minWidth: '180px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180px', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
