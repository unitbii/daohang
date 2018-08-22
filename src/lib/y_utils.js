/* 重写基础工具 */

// 通用判断法
export function checked (data) {
  // 为不同类型做特殊处理
  switch (typeof data) {
    case 'number':
      return data === 0 ? true : data
    case 'string':
      return data === 'false' ? false : data
    case 'object':
      return Object.keys(data).length === 0 ? false : data
    default:
      return data
  }
}
export function v_debug (debug = 'debug', key = 'true') {
  return getLocationSearch(window.location.search, debug) === key ? true : false
}

// 通过query字符串，获取query数据
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
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
  let isPC = !/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
  if(isPC) return 'pc'
  if(isAndroid) return 'android'
  if(isiOS) return 'ios'
  return 'other'
}