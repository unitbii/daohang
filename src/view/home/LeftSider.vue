<style lang="less" scoped>
.menu-item {
  li {
    padding: 14px;
    span {
      display: inline-block;
      width: 6em;
      overflow: hidden;
      vertical-align: middle;
      white-space: nowrap;
      transition: width 0.2s ease 0.2s;
    }
    i {
      font-size: 16px;
      line-height: 22px;
      vertical-align: middle;
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
    }
  }
}
.menu-item.collapsed-menu {
  li {
    span {
      width: 0px;
      transition: width 0.2s ease;
    }
    i {
      font-size: 22px;
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
    }
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
      defaultPath: '/folder',
      menuData: {
        theme: 'dark',
        items: [
          {
            name: '/visit/unitbii',
            iconType: 'ios-navigate',
            title: '游客游客游客游客游客游客'
          },
          {
            name: '/folder',
            iconType: 'search',
            title: '收藏'
          },
          {
            name: '/profile',
            iconType: 'settings',
            title: '设置'
          }
        ]
      }
    }
  },
  props: ['isCollapsed'],
  computed: {
    menuitemClasses () {
      return ['menu-item', {'collapsed-menu': this.isCollapsed}]
    },
    activeName () {
      return this.$route.path === '/' ? this.defaultPath : this.$route.path
    }
  },
  methods: {
    goto
  }
}
</script>
