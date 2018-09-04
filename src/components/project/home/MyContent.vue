<style lang="less" scoped>
.myContent {
  height: 100%;
  position: relative;
}
</style>

<template>
  <div class="myContent">
    {{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyContent',
  data () {
    return {}
  }
}
</script>
