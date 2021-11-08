export const contentTableConfig = {
  title: '部门列表',
  propList: [
    { prop: 'name', label: '名称', minWidth: '100px' },
    { prop: 'leader', label: '领导', minWidth: '60px' },
    { prop: 'createAt', label: '创建时间', minWidth: '180px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180px', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: true
}
