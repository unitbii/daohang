<style lang="less">
  .fill {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .iHeader {
    background: #fff;
    height: 50px;
    line-height: 50px;
    z-index: 1000;
  }
</style>

<template>
  <i-layout class="fill">
    <i-header class="iHeader">
      <my-header></my-header>
    </i-header>
    <i-layout>
      <i-sider collapsible :collapsed-width="58" :width="150" v-model="isCollapsed">
        <left-sider :isCollapsed="isCollapsed"></left-sider>
      </i-sider>
      <Content :style="{padding:'5px'}">
        <my-content></my-content>
      </Content>
    </i-layout>
  </i-layout>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import LeftSider from '@/components/LeftSider'
import MyContent from '@/components/MyContent'

export default {
  data () {
    return {
      isCollapsed: true,
      style: {
      }
    }
  },
  components: { MyHeader, LeftSider, MyContent }
}
</script>
