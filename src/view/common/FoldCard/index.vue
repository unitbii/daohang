/* 自定义折叠card
 * 已知的缺点：
 * 1、只是简单的自适应了max-height，所以内容没有height，导致slot出去的部分捕捉不到高度，因此无法在外部设置背景色。
 * 2、性能不足，不够丝滑
 * 3、因滑动曲线的关系，设置了内容最大高度为3.5行。
 */
<style lang="less" scoped>
  @unit_height: 38px;
  .foldCard {
    border-top: 1px solid #d1d1d1;
    line-height: @unit_height;
    user-select:none;
    .header {
      background: #dfe2a9;
      height: @unit_height;
      line-height: @unit_height;
      padding: 0 22px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .header:hover {
      background: #d6dba7;
    }
    .content {
      min-height: @unit_height;
      max-height: @unit_height*3.5;
      overflow-y: scroll;
      transition: max-height ease-in 0.25s;
    }
    .content.isCollapsed {
      max-height: @unit_height;
      overflow-y: hidden;
      transition: max-height ease-out 0.2s;
    }
  }
  .foldCard:first-child {
    border-top: 0;
  }
</style>

<template>
    <section class="foldCard">
      <div class="header" @click="toggle">
        <icon-arrows slide :isCollapsed="isCollapsed" />
        {{ title }}
      </div>
      <div :class="['content', {'isCollapsed': isCollapsed}]">
        <slot/>
      </div>
    </section>
</template>

<script>
import IconArrows from '@/components/Icon/Arrows'

export default {
  name: 'FoldCard',
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
