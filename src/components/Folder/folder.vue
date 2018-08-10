<style lang="less" scoped>
.folder {
  font-size: 14px;
  height: 100%;
  // width: 100%;
  // position: absolute;
  overflow-y: scroll;
  .files{
    line-height: 40px;
  }
}
.folder::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <Layout class="folder">
    <!-- 快捷版面 -->
    <Header :style="style.iHeader">
      <top-line :repository="repository" :toolStatus="toolStatus"></top-line>
    </Header>
    <!-- 文件版面 -->
    <Layout class="files">
      <Sider :width="150" :style="style.iSider">
        <folder-sider :repository="repository" :toolStatus="toolStatus"></folder-sider>
      </Sider>
      <Content>
        <floor02 :repository="repository" :toolStatus="toolStatus"></floor02>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import tagData from '@/assets/js/data.js'

import TopLine from '@/components/Folder/topLine'
import FolderSider from '@/components/Folder/floor01'
import Floor02 from '@/components/Folder/floor02'

export default {
  name: 'Folder',
  data () {
    return {
      data: tagData,
      toolStatus: {
        edit: false,
        delete: false
      },
      style: {
        iHeader: {
          background: 'none',
          height: 'auto',
          lineHeight: 'normal',
          padding: '0',
          boxShadow: '0 0 3px rgba(0,0,0,0.3)',
          zIndex: '1899'
        },
        iSider: {
          boxShadow: '0 0 3px rgba(0,0,0,0.3)',
          zIndex: '1890'
        }
      }
    }
  },
  computed: {
    repository: function () {
      return this.data.repositorys[this.data.active_repository]
    }
  },
  components: { TopLine, FolderSider, Floor02 }
}
</script>
