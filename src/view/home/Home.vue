<style lang="less">
  .iHeader {
    background: none;
    height: 50px;
    line-height: normal;
    padding: 0;
    box-shadow: 0 1px 6px rgba(0,0,0,0.3);
    z-index: 1999;
  }
  .iSider {
    box-shadow: 1px 0 6px rgba(0,0,0,0.5);
    z-index: 1990;
  }
  .iContent {
    position: relative;
  }
</style>

<template>
  <Layout class="Home full">
    <Header class="iHeader">
      <my-header></my-header>
    </Header>
    <Layout>
      <!-- <Sider class="iSider" collapsible :collapsed-width="58" :width="150" v-model="isCollapsed">
        <left-sider :isCollapsed="isCollapsed"></left-sider>
      </Sider> -->
      <Content class="iContent">
          <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MyHeader from './MyHeader'
import LeftSider from './LeftSider'

export default {
  name: 'Home',
  components: { MyHeader, LeftSider },
  data () {
    return {
      isCollapsed: true // 边栏初始状态（折叠）
    }
  }
}
</script>
