<style lang="less" scoped>
  .iconArrows {
    display: inline-block;
    line-height: 100%;
    width: 1.2em;
    height: 100%;
    position: relative;
    vertical-align: bottom;
    span {
      display: flex;
      align-items:center;
      justify-content: center;
      height: 100%;
      width: 100%;
      span {
        border: 1px solid #888;
        border-left: none;
        border-bottom: none;
        width: 0.6em;
        height: 0.6em;
      }
      span.top {
        transform: rotate(-45deg);
        margin-top: 0.3em;
      }
      span.right {
        transform: rotate(45deg);
        margin-left: -0.3em;
      }
      span.bottom {
        transform: rotate(135deg);
        margin-top: -0.3em;
      }
      span.left {
        transform: rotate(225deg);
        margin-left: 0.3em;
      }
    }
  }
  .cursor {
    cursor: pointer;
  }
  .slide {
    transition: transform 0.3s;
  }
</style>

<template>
  <span :class="['iconArrows', {'slide': slide, 'cursor': cursor}]">
    <span><span class="top"></span></span>
  </span>
</template>

<script>
export default {
  name: 'Arrows',
  data () {
    return {}
  },
  props: {
    arrowsColor: {
      type: String,
      default: '#888'
    },
    slide: Boolean,
    cursor: Boolean
  },
  computed: {}
}
</script>
