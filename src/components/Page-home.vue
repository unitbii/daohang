<style lang="less" scoped>
</style>

<template>
  <Layout class="fill">
    <Header :style="style.iHeader">
      <my-header></my-header>
    </Header>
    <Layout>
      <Sider collapsible :collapsed-width="58" :width="150" v-model="isCollapsed">
        <left-sider :isCollapsed="isCollapsed"></left-sider>
      </Sider>
      <Content>
        <my-content></my-content>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import LeftSider from '@/components/LeftSider'
import MyContent from '@/components/MyContent'

export default {
  name: 'Page-home',
  data () {
    return {
      isCollapsed: true,
      style: {
        iHeader: {
          background: '#fff',
          boxShadow: '0 0 3px rgba(0,0,0,0.2)',
          height: '50px',
          lineHeight: '50px',
          padding: '0',
          zIndex: '1000'
        }
      }
    }
  },
  components: { MyHeader, LeftSider, MyContent }
}
</script>
