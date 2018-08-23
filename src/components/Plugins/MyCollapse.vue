<style lang="less" scoped>
  .myCollapse {
    color: #666;
    line-height: 38px;
    section {
      border-bottom: 1px solid #d1d1d1;
      .header {
        background: #f1f1f1;
        color: #666;
        cursor: pointer;
        height: 38px;
        line-height: 38px;
        padding: 0 22px;
      }
      .content {
        background: #fff;
        padding: 0 16px;
      }
    }
  }
</style>

<template>
  <div class="myCollapse">
    <section v-for="fid in activeFloder.content" :key="fid">
      <div class="header" @click="toggleCollapse(fid)">
        <icon-arrows slide :isCollapsed="collapseStatus[fid].isCollapsed"></icon-arrows>
        {{ folders[fid].title }}
      </div>
      <div class="content">1111</div>
    </section>
  </div>
</template>

<script>
import IconArrows from '@/components/Icon/Arrows'

export default {
  name: 'MyCollapse',
  data () {
    return {
      isCollapsed: true // 边栏初始状态（折叠）
    }
  },
  props: ['repository'],
  components: { IconArrows },
  computed: {
    tags: function () {
      return this.repository.tags
    },
    folders: function () {
      return this.repository.folders
    },
    activeFloder: function () {
      return this.folders[this.repository.activeFloderId]
    },
    collapseStatus () {
      let obj = {}
      this.activeFloder.content.forEach((id) => {
        obj[id] = {
          isCollapsed: this.isCollapsed
        }
      })
      return obj
    }
  },
  methods: {
    toggleCollapse (fid) {
      this.collapseStatus[fid].isCollapsed = !this.collapseStatus[fid].isCollapsed
      // this.isCollapsed = !this.isCollapsed
      console.log(this.collapseStatus)
    },
    getCollapseStatus (fid) {

    }
  },
  mounted () {
  },
  watch: {
    collapseStatus (newq, oldq) {
      console.log(newq, oldq)
    }
  }
}
</script>
