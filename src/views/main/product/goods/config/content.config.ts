export const contentTableConfig = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100px' },
    { prop: 'categoryId', label: '类别', minWidth: '80px', slotName: 'category' },
    { prop: 'oldPrice', label: '原价', minWidth: '80px', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价', minWidth: '80px', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '图片链接', minWidth: '100px', slotName: 'image' },
    { prop: 'desc', label: '商品介绍', minWidth: '100px' },
    { prop: 'address', label: '地址', minWidth: '100px' },
    { prop: 'status', label: '状态', minWidth: '80px', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: '180px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180px', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
