<style lang="less" scoped>
.folder {
  font-size: 14px;
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
  <Layout class="folder full">
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
          <div class="content" v-if="activeFolder && activeFolder.content.length > 0">
            <fold-card v-for="fid in activeFolder.content" :key="fid" :title="folders[fid].title">
              <nav class="yrow">
                <tag-card v-for="tid in folders[fid].content" :key="tid"
                  :tags="tags" :tid="tid"></tag-card>
              </nav>
            </fold-card>
          </div>
          <div v-else>空页面</div>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import FoldCard from '@/view/common/FoldCard/FoldCard'
import TagCard from '@/view/common/TagCard/TagCard'
import TopLine from './topLine'
import FolderSider from './folderSider'

export default {
  name: 'Folder',
  components: { TopLine, FolderSider, FoldCard, TagCard },
  data () {
    return {
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
          zIndex: '1900'
        },
        iSider: {
          boxShadow: '0 0 3px rgba(0,0,0,0.3)',
          zIndex: '1890'
        }
      }
    }
  },
  created () {
    // 获取数据
    this.$store.dispatch('getTagData')
  },
  mounted () {
    // 添加tag已经成功，只需要做成按钮 todo
    // this.createTag({
    //   title: '例子',
    //   href: 'http://',
    //   desp: '描述',
    //   fatherID: 3001
    // })
  },
  computed: {
    repository () {
      return this.$store.state.tagData.repositorys[this.$store.state.tagData.activeRepository]
    },
    activeFolder () {
      return this.repository.folders[this.repository.activeFolder]
    },
    folders () {
      return this.repository.folders
    },
    tags () {
      return this.repository.tags
    }
  },
  methods: {
    createTag (payload) {
      this.$store.dispatch('createTag', payload)
    }
  }
}
</script>
