// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

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

Vue.use(Vuex)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
