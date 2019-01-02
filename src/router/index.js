import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home/Home'
import Folder from '@/view/Home/Folder/folder'
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
          component: Folder
        },
        {
          path: '/visit/:id',
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
