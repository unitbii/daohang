<style lang="less" scoped>
  .myContent {
    background: #96a066;
    padding: 5px;
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
  data () {
    return {}
  },
  components: { Folder }
}
</script>
