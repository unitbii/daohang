<style lang="less" scoped>
.myContent {
  height: 100%;
  position: relative;
}
</style>

<template>
  <div class="myContent">
    <Folder></Folder>
  </div>
</template>

<script>
import Folder from '@/components/project/Folder/folder'

export default {
  name: 'MyContent',
  data () {
    return {}
  },
  components: { Folder }
}
</script>
