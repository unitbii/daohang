<style lang="less" scoped>
  .user-infoPlate {
    cursor: pointer;
    padding: 14px 0;
    text-align: center;
    div {
      height: 64px;
      transition: all 0.2s;
      transform-origin: center top;
      .name {
        color: #fff;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: opacity 0.2s;
      }
    }
    div.collapsed-user {
      height: 24px;
      transform: scale(0.6);
      .name {
        opacity: 0;
      }
    }
  }
</style>

<template>
  <div class="leftBar">
    <!-- 用户信息 -->
    <div class="user-infoPlate">
      <div :class="{'collapsed-user' : this.isCollapsed }">
        <i-avatar icon="person" size="large"/>
        <p class="name">{{ userDate.name }}</p>
      </div>
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
      },
      userDate: {
        name: 'unitbii'
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
