import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Page-home'
import User from '@/components/Page-user'
import PageNotFind from '@/components/PageNotFind'

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
