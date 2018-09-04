import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/page/Page-home'
import Folder from '@/components/project/Folder/Folder'
import Profile from '@/components/project/Profile/Profile'
import AppList from '@/components/project/AppList/AppList'

import Welcome from '@/components/page/Page-welcome'
import PageNotFind from '@/components/page/PageNotFind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Home,
      children: [
        {
          path: '',
          component: Folder
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'folder',
          component: Folder
        },
        {
          path: 'appList',
          component: AppList
        },
        {
          path: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '*',
      name: 'PageNotFind',
      component: PageNotFind
    }
  ]
})
