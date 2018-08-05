<template>
  <div class="r_files">
    <floor01 :data="data" :toolStatus="toolStatus"></floor01>
    <floor02 :data="data" :toolStatus="toolStatus"></floor02>
  </div>
</template>

<script>
import floor01 from '@/components/folderStyle/floor01'
import floor02 from '@/components/folderStyle/floor02'

export default {
  name: 'Files',
  data () {
    return {}
  },
  methods: {},
  props: ['data', 'toolStatus'],
  components: { floor01, floor02 }
}
</script>

<style scoped lang="less">
.r_files{
  @r_files_line-height: 40px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,.3);
  line-height: @r_files_line-height;
  height: 100%;
  min-height: @r_files_line-height * 12;
  margin-bottom: 2em;
  position: relative;
}
</style>
