class LocalCache {
  // 添加缓存
  setCache(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  // 获取缓存
  getCache(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除缓存
  deleteCache(key: string) {
    localStorage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    localStorage.clear()
  }
}

export default new LocalCache()
