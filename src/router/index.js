import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home'
import Folder from '@/view/Home/Folder'
import Login from '@/view/Login'
import PageNotFind from '@/view/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '(|folder)',
          name: 'Folder',
          component: Folder
        },
        {
          path: 'visit/:id', // 访客逻辑还有待深挖
          name: 'Visit',
          component: Folder
        },
        {
          path: '*',
          name: 'PageNotFind',
          component: PageNotFind
        }
      ]
    }
  ]
})
