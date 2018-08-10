<style lang="less" scoped>
.menu-item {
  li {
    padding: 14px;
    span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      // text-overflow: ellipsis;
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
  <Menu :active-name="menuData.activeName"
    :theme="menuData.theme" width="auto"
    :class="['menu-item', {'collapsed-menu': isCollapsed}]">
    <menu-item :name="item.name" v-for="item in menuData.items" :key="item.name">
      <Icon :type="item.iconType"></Icon>
      <span>{{ item.title }}</span>
    </menu-item>
  </Menu>
</template>

<script>
export default {
  name: 'LeftSider',
  data () {
    return {
      menuData: {
        theme: 'dark',
        activeName: '1-2',
        items: {
          '1-1': {
            name: '1-1',
            iconType: 'ios-navigate',
            title: '应用'
          },
          '1-2': {
            name: '1-2',
            iconType: 'search',
            title: '导航'
          },
          '1-3': {
            name: '1-3',
            iconType: 'settings',
            title: '设置'
          }
        }
      }
    }
  },
  props: ['isCollapsed'],
  computed: {
    menuitemClasses: function () {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  }
}
</script>
