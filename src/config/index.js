/* 这里放置的全局属性包括：
 * 1、供项目开发者设置的全局参数。
 * 2、随部署地变化的静态属性，比如本机IP,终端类型等。
 * 注：此处不应放置可变变量，例如，单页应用url中的query等。
 */
import { checkTerminalType } from '@/utils'

/* ============== 本地测试环境 ============== */
export const DEV_ENV = process.env.NODE_ENV === 'development' // production

/* ============== 浏览器属性 ============== */
// 是否支持H5本地储存
export const h5 = (typeof Storage !== 'undefined')
// 浏览器终端类型
export const { isPC, isAndroid, isiOS } = checkTerminalType()
