<template>
  <div class="toolsBar">
    <img class="menu" :src="img.menu" alt="">
  </div>
</template>

<script>
export default {
  name: 'ToolsBar',
  data () {
    return {
      img: {
        menu: require('@/assets/images/menu.png')
      }
    }
  }
}
</script>

<style scoped lang="less">
.toolsBar{
  background: #ccc;
  box-shadow: 0 0 5px rgba(0,0,0,.4);
  height: 100%;
  width: 100%;
  .menu {
    width:32px;
    opacity: 0.5;
  }
  .menu:hover {
    opacity: 0.8;
  }
}
</style>
