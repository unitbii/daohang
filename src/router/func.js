/** 项目内公共router、store */
import $router from '@/router'
import $store from '@/store'

const defaultPath = '/login'
// 无需权限列表
const unPermissionList = [
  '/login',
  /^\/visit\/[A-Za-z0-9_]+$/,
  '/folder',
  '/'
]

// 匹配正则数组(兼容字符串)
const RegArrTest = (string, arr = unPermissionList) => {
  for (let key in arr) {
    let item = arr[key]
    if (typeof item === 'string') {
      item = new RegExp(`^${item}$`)
    }
    let result = item.test(string)
    if (result) {
      return result
    }
  }
  return false
}

// 带权限的跳转
// 只有goto跳转时做了鉴权，前端路由本身没有做鉴权 todo
// 记录跳转来源，登录后再回到跳转来源 todo
export const goto = (path = '/') => {
  const { isLogined } = $store.state
  if (isLogined || RegArrTest(path)) {
    $router.push(path)
  } else {
    console.warn('warn: 无权访问，跳转到登录页')
    $router.push(defaultPath)
  }
}
