/** publicAttribute */
import { getQuery, checkTerminalType } from './utils'

// 是否支持H5本地储存
export const h5 = (typeof Storage !== 'undefined')

// query
export const query = getQuery()

// 终端类型
export const { isPC, isAndroid, isiOS } = checkTerminalType()
