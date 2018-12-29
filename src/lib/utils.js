/* 较通用的方法 */

// 获取cookie、
export const getCookie = (name) => {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  if (arr) {
    return (arr[2])
  } else {
    return null
  }
}
// 设置cookie，增加到vue实例方便全局调用
export const setCookie = (name, value, expiredays) => {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}
// 删除cookie
export const delCookie = (name) => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

// 克隆对象
export const clone = (myObj) => {
  if (typeof myObj !== 'object' || myObj === null) return myObj
  let myNewObj = {}
  for (let i in myObj) {
    myNewObj[i] = clone(myObj[i])
  }
  return myNewObj
}
// 数组重排
export const compare = function (prop) {
  return function (obj1, obj2) {
    let val1 = obj1[prop]
    let val2 = obj2[prop]
    if (val1 < val2) {
      return -1
    } else if (val1 > val2) {
      return 1
    } else {
      return 0
    }
  }
}

/* 非常个人的用法 */

// 通用判断法
export const checked = (data) => {
  // 为不同类型做特殊处理
  switch (typeof data) {
    case 'number':
      return data === 0 ? true : data // 数字 0 判断为 true
    case 'string':
      return data === 'false' ? false : data // 字符串 false 判断为 false
    case 'object':
      return Object.keys(data).length === 0 ? false : data // 对象的属性个数为0，判断为 false
    default:
      return data
  }
}
// 开启debug模式
export const debug = (debug = 'debug', key = 'true') => {
  return getQuery(debug) === key
}
// 获取query
export const getQuery = (key, string = window.location.search) => {
  let obj = {}
  let list = string.substring(1).split('&')
  for (let i in list) {
    let k = list[i].split('=')[0]
    let val = list[i].split('=')[1]
    obj[k] = val
  }
  return (key) ? obj[key] : obj
}
// 判断终端类型
export const checkTerminalType = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  let isPC = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)

  if (isPC) {
    return 'pc'
  }
  if (isAndroid) {
    return 'android'
  }
  if (isiOS) {
    return 'ios'
  }
  return 'other'
}
