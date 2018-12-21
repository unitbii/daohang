<style lang="less" scoped>
  .welcome {
    padding: 20px;
  }
</style>

<template>
  <div class="welcome">
    {{ count }}
    <button @click="counted">+1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Welcome',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      count: 'count' // 等同于 count: state => state.count
    })
  },
  methods: {
    counted () {
      this.$store.commit('increment')
    }
  }
}
</script>
