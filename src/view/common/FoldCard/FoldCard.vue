<style lang="less" scoped>
  @unit_height: 38px;
  .myCollapse {
    border-top: 1px solid #d1d1d1;
    line-height: @unit_height;
    user-select:none;
    .header {
      background: #dfe2a9;
      cursor: pointer;
      height: @unit_height;
      line-height: @unit_height;
      padding: 0 22px;
    }
    .header:hover {
      background: #d6dba7;
    }
    .content {
      max-height: @unit_height*4;
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
        {{ title }}
      </div>
      <div :class="['content', {'isCollapsed': isCollapsed}]" >
        <slot></slot>
      </div>
    </section>
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
  props: ['title'],
  components: { IconArrows },
  methods: {
    toggle () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
