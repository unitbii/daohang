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
