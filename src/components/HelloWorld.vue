<style lang="less">
  .layout-con {
    height: 100%;
    width: 100%;
  }
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>

<template>
  <div class="layout">
    <i-layout :style="{minHeight: '100vh'}">
      <i-sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <left-sider :isCollapsed="isCollapsed"></left-sider>
      </i-sider>
      <i-layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="height: 600px">Content</div>
          </Card>
        </Content>
      </i-layout>
    </i-layout>
  </div>
</template>

<script>
import LeftSider from '@/components/LeftSider'
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  components: { LeftSider }
}
</script>
