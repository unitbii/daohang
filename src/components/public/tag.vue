<style lang="less" scoped>
  a {
    border: 1px solid #fff;
    border-radius: 4px;
    color: #333;
    float: left;
    line-height: 28px;
    padding: 0 1.6%;
    margin: 2px;
    transition: box-shadow 0.2s;
    .d-img {
      width: 1em;
      height: 1em;
      margin: 0 .2em -2px 0;
    }
  }
  a:hover {
    color: rgb(51, 173, 255);
  }
</style>

<template>
  <a :href="tags[tid].href"  v-if="tags[tid].title">
    <Tooltip :delay="100" placement="top-start">
      <img class="d-img" :src="img.label">
      <span>{{ tags[tid].title }}</span>
      <div slot="content">
        <p v-if="tags[tid].desp">{{ tags[tid].desp }}</p>
        <p><i>{{ tags[tid].href }}</i></p>
      </div>
    </Tooltip>
  </a>
</template>

<script>
export default {
  name: 'Tag',
  data () {
    return {
      img: {
        label: require('@/assets/images/1688-label.png')
      }
    }
  },
  props: ['tags', 'tid']
}
</script>
