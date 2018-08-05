<style scoped lang="less">
.folder {
  font-size: 16px;
}
</style>

<template>
  <div class="folder">
      <template>
      <!-- 快捷版面 -->
      <top-line :repository="data.repositorys[data.active_repository]" :toolStatus="toolStatus"></top-line>
      <!-- 文件版面 -->
      <!-- <my-files :data="data" :toolStatus="toolStatus" :key="k" ></my-files> -->
    </template>
  </div>
</template>

<script>
import tagData from '@/assets/js/data.js'

import TopLine from '@/components/Folder/topLine'
// import MyFiles from '@/components/Folder/files'

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
  components: { TopLine }
}
</script>
