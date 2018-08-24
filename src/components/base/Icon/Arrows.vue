// 父级组件可传参数，请看 props
// 想要点击旋转，请在父级组件写 @click 并修改传入参数 isCollapsed

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
    transition: transform 0.3s, margin 0.3s;
  }
</style>

<template>
  <span :class="['iconArrows', {'cursor': cursor}]">
    <span><span :class="spanStyle" :style="style.span"></span></span>
  </span>
</template>

<script>
export default {
  name: 'Arrows',
  data () {
    return {
      start: 'right',
      end: 'bottom',
      style: {
        span: {
          borderTop: this.borderWidth + ' solid ' + this.borderColor,
          borderRight: this.borderWidth + ' solid ' + this.borderColor,
          width: this.size,
          height: this.size
        }
      }
    }
  },
  props: {
    borderColor: { // 箭头颜色
      type: String,
      default: '#555'
    },
    borderWidth: { // 箭头粗细
      type: String,
      default: '0.07em'
    },
    size: { // 箭头长&宽
      type: String,
      default: '0.6em'
    },
    // 旋转方向，方向可以选择top/right/bottom/left
    // 如果选两个方向，用'-'相接，首方向为折叠方向，尾
    rotate: {
      type: String,
      default: 'right-bottom'
    },
    slide: Boolean, // 旋转时是否有动画
    cursor: Boolean, // 鼠标hover是否变为小手
    isCollapsed: Boolean // 是否折叠，
  },
  computed: {
    spanStyle () {
      let style = {'slide': this.slide}
      if (this.end === '') {
        style[this.start] = true
      } else {
        style[this.start] = this.isCollapsed
        style[this.end] = !this.isCollapsed
      }
      return style
    }
  },
  methods: {
    check_rotate () {
      // if (!this.rotate || this.rotate.indexOf('-') === -1) return
      // let list = this.rotate.split('-')
      // let reg = /^top$|^right$|^bottom$|^left$/
      // if (reg.test(list[0]) && reg.test(list[1])) {
      //   this.start = list[0]
      //   this.end = list[1]
      // }
      let reg = /^top$|^right$|^bottom$|^left$/
      if (this.rotate && this.rotate.indexOf('-') !== -1) {
        let list = this.rotate.split('-')
        if (reg.test(list[0]) && reg.test(list[1])) {
          this.start = list[0]
          this.end = list[1]
        }
      } else {
        if (reg.test(this.rotate)) {
          this.start = this.rotate
          this.end = ''
        }
      }
    }
  },
  created () {
    this.check_rotate()
  }
}
</script>
