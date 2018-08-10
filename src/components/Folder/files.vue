<style lang="less" scoped>
@files_lineHeight: 40px;
.files{
  // background: #fff;
  line-height: @files_lineHeight;
}
</style>

<template>
  <layout class="files">
    <Sider :collapsed-width="58" :width="150" :style="style.iSider">
      <floor01 :repository="repository" :toolStatus="toolStatus"></floor01>
    </Sider>
    <Content>
      <floor02 :repository="repository" :data="data" :toolStatus="toolStatus"></floor02>
    </Content>
  </layout>
</template>

<script>
import floor01 from '@/components/Folder/floor01'
import floor02 from '@/components/Folder/floor02'

export default {
  name: 'Files',
  data () {
    return {
      style: {
        iSider: {
          boxShadow: '0 0 3px rgba(0,0,0,0.3)',
          zIndex: '1890'
        }
      }
    }
  },
  methods: {},
  props: ['repository', 'data', 'toolStatus'],
  components: { floor01, floor02 }
}
</script>
