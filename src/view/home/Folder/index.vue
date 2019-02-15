<style lang="less" scoped>
.folder {
  font-size: 14px;
}
</style>

<template>
  <Layout class="folder full">
    <Header :style="style.iHeader">
      <top-line :repository="repository" :tags="tags"/>
    </Header>
    <Layout>
      <Sider :width="150" :style="style.iSider">
        <folder-sider
          :repository="repository"
          :activeFolder="activeFolder"
          :folders="folders" />
      </Sider>
      <Content>
        <folder-content
          :activeFolder="activeFolder"
          :folders="folders"
          :tags="tags"/>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import FoldCard from '@/view/common/FoldCard'
import TagCard from '@/view/common/TagCard'
import TopLine from './common/TopLine'
import FolderSider from './common/Sider'
import FolderContent from './common/Content'

export default {
  name: 'Folder',
  components: { TopLine, FolderSider, FolderContent, FoldCard, TagCard },
  data () {
    return {
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
    this.init()
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
      return this.$store.getters['tagData/repository']
    },
    activeFolder () {
      return this.$store.getters['tagData/activeFolder']
    },
    folders () {
      return this.$store.getters['tagData/folders']
    },
    tags () {
      return this.$store.getters['tagData/tags']
    }
  },
  methods: {
    init () {
      // 获取数据
      this.$store.dispatch('tagData/fetch')
      // 抓取路由
      console.log(this.$route)
      const { rid, pid } = this.$route.query
      if (rid) {
        this.$store.dispatch('tagData/setActiveRepositoryID', {id: rid})
      }
      if (pid) {
        this.$store.dispatch('tagData/setActiveFolderID', {id: pid})
      }
    },
    createTag (payload) {
      // this.$store.dispatch('tagData/createTag', payload)
    }
  }
}
</script>
