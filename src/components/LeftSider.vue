<style lang="less" scoped>
  .user-information {
    padding: 20px 0;
    text-align: center;
    .name {
      color: #fff;
      display: inline-block;
      font-size: 16px;
      padding-top: 8px;
    }
  }
</style>

<template>
  <div>
    <!-- 用户信息 -->
    <div class="user-information">
      <span><i-avatar icon="person" size="large"/></span><br/>
      <span class="name">unitbii</span>
    </div>
    <!-- 菜单栏 -->
    <i-menu :active-name="menuData.activeName" :theme="menuData.theme" width="auto" :class="menuitemClasses">
      <menu-item :name="item.name" v-for="item in menuData.items" :key="item.name">
        <Icon :type="item.iconType"></Icon>
        <span>{{ item.title }}</span>
      </menu-item>
    </i-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuData: {
        theme: 'dark',
        activeName: '1-1',
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
