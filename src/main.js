// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Axios from 'axios'

import App from './App'
import router from './router/router'
import store from './store/store'

// UI框架iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/styles/my-theme/index.less' // iview自定义样式 接口文件

// 本地公共样式
import '@/assets/styles/reset.css'
import '@/assets/styles/type.css'
import '@/assets/styles/index.less'

Vue.use(iView)

Vue.config.productionTip = false

Vue.prototype.axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
