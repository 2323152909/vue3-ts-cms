import { App } from 'vue-demi'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerProperties)
}
