import { useStore } from '@/store'

export function usePermission(pageName: any, handleName: string) {
  const store = useStore()
  const permissions: string[] = store.state.login.permissions
  const verifyPermission = `system:${pageName}:${handleName}`
  const flag = permissions.find((item) => item === verifyPermission)
  // const flag = permissions.indexOf(`system:${pageName}:${handleName}`)

  return !!flag
  // return Boolean(flag)
  // return flag !== -1 ? true : false
}
