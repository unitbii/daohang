<style lang="less" scoped>
.myContent {
  background: #96a066;
  height: 100%;
}
</style>

<template>
  <div class="myContent">
    <!-- <Card :style="{}">
      <div>卡片1</div>
    </Card> -->
    <Folder></Folder>
  </div>
</template>

<script>
import Folder from '@/components/Folder/index'

export default {
  name: 'MyContent',
  data () {
    return {}
  },
  components: { Folder }
}
</script>
