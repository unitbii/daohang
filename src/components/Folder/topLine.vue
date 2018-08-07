<style lang="less" scoped>
.topLine {
  border: 1px dashed #fff;
  padding: 2px;
  margin-bottom: 5px;
  li {
    background-color: rgba(255,255,255,.2);
    border: 1px solid #fff;
    border-radius: 4px;
    float: left;
    height: 32px;
    margin: 4px;
    overflow: hidden;
    position: relative;
    a {
      color: #fff;
      display: block;
      padding: 4px 8px;
      transition: color 0.3s;
      img {
        height: 1em;
        margin-bottom: -2px;
      }
    }
    .edit {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      cursor: pointer;
      span {
        background: #5a823a;
        width: 20px;
        height: 20px;
        position: absolute;
        top: -10px;
        right: -10px;
        transform: rotate(45deg);
        transition: all 0.2s;
      }
    }
    .info {
      background: rgba(0,0,0,0.8);
      border-radius: 3px;
      box-shadow: 1px 1px 6px rgba(0,0,0,.2);
      color: #ccc;
      display: none;
      font-size: 12px;
      line-height: 1.3;
      padding: 0.1em 0.6em;
      margin-top: 0.2em;
      white-space: nowrap;
      position: absolute;
      bottom: 120%;
      left: 40%;
      z-index: 1001;
      .title {
        color: #eee;
        font-size: 14px;
      }
    }
  }
  li.normal:hover {
    a {
      color: #f18;
      text-decoration: underline;
    }
  }
  li.editing:hover {
    .edit {
      span {
        width: 30px;
        height: 30px;
        top: -15px;
        right: -15px;
      }
    }
    a {
      color: #5a823a;
    }
  }
}
</style>

<template>
  <ul class="topLine yrow">
    <li :class="{normal:li_normal, editing:li_edit}" v-for="id in repository.topLine.content" :key="id">
      <a :href="tags[id].href">
        <img :src="img.star02">
        <span>{{ tags[id].title }}</span>
      </a>
      <div class="edit" v-show="li_edit"><span></span></div>
      <!-- <div class="info">
        <span class="title">{{ tags[id].title }}</span><span class="desp" v-if="tags[id].desp"> | {{ tags[id].desp }}</span><br/>
        <span class="url">{{ tags[id].href }}</span>
      </div> -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TopLine',
  data () {
    return {
      img: {
        star02: require('@/assets/images/1688-star02.png')
      }
    }
  },
  props: ['repository', 'toolStatus'],
  computed: {
    tags: function () {
      return this.repository.tags
    },
    li_edit: function () {
      return this.toolStatus.edit
    },
    li_delete: function () {
      return false
    },
    li_normal: function () {
      return !(this.li_edit || this.li_delete)
    }
  }
}
</script>
