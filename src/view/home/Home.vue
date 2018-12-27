<style lang="less" scoped>
  .home {
    min-width: 750px;
  }
</style>

<template>
  <Layout class="home full">
    <Header :style="style.iHeader">
      <my-header></my-header>
    </Header>
    <Layout>
      <Sider :style="style.iSider" collapsible :collapsed-width="58" :width="150" v-model="isCollapsed">
        <left-sider :isCollapsed="isCollapsed"></left-sider>
      </Sider>
      <Content :style="style.iContent">
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
      isCollapsed: true, // 边栏初始状态（折叠）
      style: { // 不建议用class写ui框架的样式，因为无法保证优先级，建议写行内样式
        iHeader: {
          background: 'none',
          height: '50px',
          lineHeight: 'normal',
          padding: '0',
          boxShadow: '0 1px 6px rgba(0,0,0,0.3)',
          zIndex: '1999'
        },
        iSider: {
          boxShadow: '1px 0 6px rgba(0,0,0,0.5)',
          zIndex: '1990'
        },
        iContent: {
          position: 'relative'
        }
      }
    }
  }
}
</script>
