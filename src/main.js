// 全局引入资源，变量名已占用，局部变量请避开以下变量名
import Vue from 'vue'
import App from './App'
import router from './router'

// UI框架iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
// iview自定义样式 接口文件
import '@/styles/my-theme/index.less'

// 本地公共样式
import '@/styles/reset.css'
import '@/styles/type.css'
import '@/styles/index.less'

Vue.config.productionTip = false

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
