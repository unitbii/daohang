<style lang="less" scoped>
  .myCollapse {
    line-height: 38px;
    height: 38px;
    .header {
      background: #eee;
      height: 100%;
      padding: 0 22px;
    }
    .content {
      background: #fff;
      padding: 0 16px;
    }
  }
</style>

<template>
  <section class="myCollapse">
    <div class="header"><icon-arrows slide></icon-arrows>标题</div>
    <div class="content">1111</div>
  </section>
</template>

<script>
import IconArrows from '@/components/Icon/Arrows'
export default {
  name: 'MyCollapse',
  data () {
    return {}
  },
  props: ['repository'],
  components: { IconArrows }
}
</script>
