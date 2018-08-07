<style scoped lang="less">
.folder {
  font-size: 16px;
  // 这个屏幕是100%宽高，并做滚动处理
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-3dlight-color: none;
}
.folder::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="folder">
    <!-- 快捷版面 -->
    <top-line :repository="data.repositorys[data.active_repository]" :toolStatus="toolStatus"></top-line>
    <!-- 文件版面 -->
    <my-files :data="data" :toolStatus="toolStatus"></my-files>
  </div>
</template>

<script>
import tagData from '@/assets/js/data.js'

import TopLine from '@/components/Folder/topLine'
import MyFiles from '@/components/Folder/files'

export default {
  name: 'Folder',
  data () {
    return {
      data: tagData,
      toolStatus: {
        edit: false,
        delete: false
      }
    }
  },
  components: { TopLine, MyFiles }
}
</script>
