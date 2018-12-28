import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/Home/Home'
import Folder from '@/view/Home/Folder/folder'
import Collect from '@/view/Home/Collect'
// import Welcome from '@/view/Welcome/welcome'
import Login from '@/view/Login/login'
import PageNotFind from '@/view/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '(|collect)',
          component: Collect
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
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
