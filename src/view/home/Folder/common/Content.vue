<style lang="less" scoped>
.folderContent {
  background: #dedcd1;
  height: 100%;
  padding: 10px;
  padding-bottom: 50px;
  overflow-y: scroll;
  .content {
    background: #f5f5f5;
    border: 1px solid #c1c1c1;
    border-radius: 4px;
    margin-bottom: 10px;
    overflow: hidden;
    nav {
      height: 100%;
      padding: 0 6px;
    }
  }
  .content.empty {
    min-height: 400px;
    opacity: 0.7;
  }
}
.folderContent::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="folderContent">
    <div class="content" v-if="activeFolder && activeFolder.content && activeFolder.content.length > 0">
      <fold-card v-for="fid in activeFolder.content" :key="fid" :title="folders[fid].title">
        <nav class="yrow">
          <tag-card v-for="tid in folders[fid].content" :key="tid" :tags="tags" :tid="tid"/>
        </nav>
      </fold-card>
    </div>
    <div class="content empty" v-else>
      列表为空-引导创建
    </div>
  </div>
</template>

<script>
import FoldCard from '@/view/common/FoldCard'
import TagCard from '@/view/common/TagCard'

export default {
  name: 'FolderContent',
  props: ['activeFolder', 'folders', 'tags'],
  components: { FoldCard, TagCard },
  data () {
    return {}
  }
}
</script>
