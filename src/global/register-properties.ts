import { App } from 'vue'
import { formatUtcDate } from '@/utils/date-format'
import { ElMessage, ElNotification } from 'element-plus'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcDate(value)
    }
  }
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notification = ElNotification
}
