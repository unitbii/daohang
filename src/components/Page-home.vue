<style lang="less">
</style>

<template>
  <Layout class="fill">
    <Header :style="style.iHeader">
      <my-header></my-header>
    </Header>
    <Layout>
      <Sider collapsible :collapsed-width="58" :width="150" v-model="isCollapsed" :style="style.iSider">
        <left-sider :isCollapsed="isCollapsed"></left-sider>
      </Sider>
      <Content>
        <my-content></my-content>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MyHeader from '@/components/home/MyHeader'
import LeftSider from '@/components/home/LeftSider'
import MyContent from '@/components/home/MyContent'

export default {
  name: 'Page-home',
  data () {
    return {
      isCollapsed: true, // 边栏初始状态（折叠）
      style: {
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
        }
      }
    }
  },
  components: { MyHeader, LeftSider, MyContent }
}
</script>
