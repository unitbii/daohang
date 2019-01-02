<style lang="less" scoped>
.menu-item {
  li {
    padding: 14px;
    span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width 0.2s ease 0.2s;
    }
    i {
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
  }
}
.menu-item.collapsed-menu {
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    font-size: 22px;
  }
}
</style>

<template>
  <Menu :class="menuitemClasses"
    :active-name="activeName" :theme="menuData.theme"
    width="auto" @on-select="goto">
      <menu-item v-for="item in menuData.items" :key="item.name" :name="item.name">
        <Icon :type="item.iconType"></Icon>
        <span>{{ item.title }}</span>
      </menu-item>
  </Menu>
</template>

<script>
import { goto } from '@/router/func'

export default {
  name: 'LeftSider',
  data () {
    return {
      basePath: '/folder',
      menuData: {
        theme: 'dark',
        items: {
          'appList': {
            name: '/visit/unitbii',
            iconType: 'ios-navigate',
            title: '游客'
          },
          'folder': {
            name: '/folder',
            iconType: 'search',
            title: '收藏'
          },
          'profile': {
            name: '/profile',
            iconType: 'settings',
            title: '设置'
          }
        }
      }
    }
  },
  props: ['isCollapsed'],
  computed: {
    menuitemClasses () {
      return ['menu-item', {'collapsed-menu': this.isCollapsed}]
    },
    activeName () {
      return this.$route.path !== '/' ? this.$route.path : this.basePath
    }
  },
  methods: {
    goto
  }
}
</script>
