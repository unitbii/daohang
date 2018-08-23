<style lang="less" scoped>
  .myCollapse {
    color: #666;
    line-height: 38px;
    section {
      border-top: 1px solid #d1d1d1;
      user-select:none;
      .header {
        background: #f1f1f1;
        color: #666;
        cursor: pointer;
        height: 38px;
        line-height: 38px;
        padding: 0 22px;
      }
      .header:hover {
        background: #f6f6f6;
      }
      .header:active {
        background: #f6f6f6;
      }
      .content {
        background: #fff;
        height: 38px;
        padding: 0 16px;
        overflow: hidden;
        transition: height 0.2s;
      }
      .content.isCollapsed {
        height: 0;
        // display: none;
      }
    }
    section:first-child {
      border-top: 0;
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
      <div :class="['content', {'isCollapsed': collapseStatus[fid].isCollapsed}]" >1111</div>
    </section>
  </div>
</template>

<script>
import IconArrows from '@/components/Icon/Arrows'
import { clone } from '@/lib/y_utils'

export default {
  name: 'MyCollapse',
  data () {
    return {
      collapseStatus: {},
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
    }
  },
  methods: {
    toggleCollapse (fid) {
      this.collapseStatus[fid].isCollapsed = !this.collapseStatus[fid].isCollapsed
      // 我还必须克隆一个新的obj，再覆盖原来的对象，才能更新= =
      let newObj = clone(this.collapseStatus)
      this.collapseStatus = newObj
    }
  },
  created () {
    this.activeFloder.content.forEach((id) => {
      this.collapseStatus[id] = {isCollapsed: this.isCollapsed}
    })
  }
}
</script>
