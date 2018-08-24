import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Page-home'
import User from '@/components/page/Page-user'
import PageNotFind from '@/components/page/PageNotFind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '*',
      name: 'PageNotFind',
      component: PageNotFind
    }
  ]
})
