// UI框架iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/styles/my-theme/index.less' // iview自定义样式 接口文件

// 本地公共样式
import '@/assets/styles/reset.css'
import '@/assets/styles/type.css'
import '@/assets/styles/index.less'

export default (Vue) => {
  Vue.use(iView)
}
