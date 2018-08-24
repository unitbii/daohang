<style lang="less" scoped>
  @unit_height: 38px;
  .myCollapse {
    border-top: 1px solid #d1d1d1;
    line-height: @unit_height;
    user-select:none;
    .header {
      background: #e2e6b9;
      cursor: pointer;
      height: @unit_height;
      line-height: @unit_height;
      padding: 0 22px;
    }
    .header:hover {
      background: #d6dba7;
    }
    .content {
      background: #fff;
      max-height: @unit_height*4;
      padding: 2px 6px;
      overflow: hidden;
      transition: max-height ease-in 0.25s;
    }
    .content.isCollapsed {
      min-height: @unit_height;
      max-height: @unit_height;
      transition: max-height ease-out 0.2s;
    }
  }
  .myCollapse:first-child {
    border-top: 0;
  }
</style>

<template>
    <section class="myCollapse">
      <div class="header" @click="toggle">
        <icon-arrows slide :isCollapsed="isCollapsed"></icon-arrows>
        {{ folders[fid].title }}
      </div>
      <div :class="['content', {'isCollapsed': isCollapsed}]" >
        <nav class="yrow">
          <tag v-for="tid in folders[fid].content" :key="tid"
            :tags="tags" :tid="tid"></tag>
        </nav>
      </div>
    </section>
</template>

<script>
import IconArrows from '@/components/base/Icon/Arrows'
import Tag from '@/components/public/Tag'

export default {
  name: 'MyCollapse',
  data () {
    return {
      isCollapsed: true // 边栏初始状态（折叠）
    }
  },
  props: ['repository', 'fid'],
  components: { IconArrows, Tag },
  computed: {
    folders: function () {
      return this.repository.folders
    },
    tags: function () {
      return this.repository.tags
    }
  },
  methods: {
    toggle () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
