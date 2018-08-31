<style lang="less" scoped>
.folder {
  font-size: 14px;
  height: 100%;
  .floor02 {
    // background: #292929;
    background: #dedcd1;
    height: 100%;
    padding: 10px;
    padding-bottom: 50px;
    overflow-y: scroll;
    .content {
      border: 1px solid #c1c1c1;
      border-radius: 4px;
      margin-bottom: 10px;
      overflow: hidden;
      nav {
        background: #fff;
        padding: 2px 6px;
      }
    }
  }
  .floor02::-webkit-scrollbar {
    display: none;
  }
}
</style>

<template>
  <Layout class="folder">
    <!-- 快捷 -->
    <Header :style="style.iHeader">
      <top-line :repository="repository" :toolStatus="toolStatus"></top-line>
    </Header>
    <Layout>
      <!-- 边栏 -->
      <Sider :width="150" :style="style.iSider">
        <folder-sider :repository="repository" :toolStatus="toolStatus"></folder-sider>
      </Sider>
      <!-- 内容 -->
      <Content>
        <div class="floor02">
          <div class="content" v-if="activeFloder && activeFloder.content.length > 0">
            <my-collapse v-for="fid in activeFloder.content" :key="fid" :title="folders[fid].title">
              <nav class="yrow">
                <tag v-for="tid in folders[fid].content" :key="tid"
                  :tags="tags" :tid="tid"></tag>
              </nav>
            </my-collapse>
          </div>
          <div v-else>空页面</div>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import tagData from '@/data/data.js'

import TopLine from '@/components/project/Folder/topLine'
import FolderSider from '@/components/project/Folder/folderSider'

import MyCollapse from '@/components/public/MyCollapse'
import Tag from '@/components/public/Tag'

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
    },
    activeFloder: function () {
      return this.repository.folders[this.repository.active_floder]
    },
    folders: function () {
      return this.repository.folders
    },
    tags: function () {
      return this.repository.tags
    }
  },
  components: { TopLine, FolderSider, MyCollapse, Tag }
}
</script>
