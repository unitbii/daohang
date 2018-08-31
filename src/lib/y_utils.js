/* 重写基础工具 */

// 克隆对象
export function clone (myObj) {
  if (typeof myObj !== 'object' || myObj === null) return myObj
  let myNewObj = {}
  for (let i in myObj) {
    myNewObj[i] = clone(myObj[i])
  }
  return myNewObj
}

// 通用判断法
export function checked (data) {
  // 为不同类型做特殊处理
  switch (typeof data) {
    case 'number':
      return data === 0 ? true : data // 数字 0 判断为 true
    case 'string':
      return data === 'false' ? false : data // 字符串 false 判断为 false
    case 'object':
      return Object.keys(data).length === 0 ? false : data // 对象的属性为0，判断为 false
    default:
      return data
  }
}
// 开启debug模式
export function debug (debug = 'debug', key = 'true') {
  return getLocationSearch(window.location.search, debug) === key
}

// 获取url中？后面的指定数据，如果没设置第二参数则返回整个数据对象
export function getLocationSearch (string, mykey) {
  if (!(string.indexOf('?') === 0) && string.length <= 1) return
  let obj = {}
  let list = string.substring(1).split('&')
  for (let i in list) {
    let key = list[i].split('=')[0]
    let value = list[i].split('=')[1]
    obj[key] = value
  }
  return (mykey) ? obj[mykey] : obj
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

// 数组重排
export const compare = function (prop) {
  return function (obj1, obj2) {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  }
}
