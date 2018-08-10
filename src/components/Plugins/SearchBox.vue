<style lang="less" scoped>
  .searchBox {
    width: 30%;
    height: 30px;
    margin: 10px 20px;
    position: relative;
    .search_form {
      width: 100%;
      height: 100%;
      input {
        display: block;
        line-height: 100%;
        height: 100%;
      }
      input[type=text] {
        border: 1px solid #bbb;
        border-color: #777 #bbb #bbb #777;
        width: 100%;
        padding-left: 0.5em;
        box-shadow: 0 0 0px 1000px white inset;
      }
      .search_control {
        width: 27%;
        min-width: 64px;
        max-width: 74px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        input[type=submit] {
          background-color: #3a3a3a;
          border: 0;
          color: #fff;
          width: 100%;
          padding: 0 14px 0 0;
          outline: 0;
        }
        .triangle {
          cursor: pointer;
          height: 100%;
          padding: 12px 3px;
          position: absolute;
          top: 0;
          right: 0;
          span {
            border: 4px solid transparent;
            border-top: 5px solid #fff;
            display: block;
          }
        }
        .triangle:hover {
          background-color: #478dca;
        }
        .SE_list {
          background-color: #3a3a3a;
          color: #fff;
          width: 100%;
          position: absolute;
          top: 100%;
          right: 0;
          z-index: 10;
          li {
            cursor: pointer;
            line-height: 30px;
            padding-right: 14px;
            text-align: center;
          }
          li:hover {
            background-color: #478dca;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="searchBox">
    <form class="search_form yrow" target="_blank">
      <input type="text" :name="activeSE.name" placeholder="搜索..." @click="toggle">
      <div class="search_control">
        <input type="submit" :formaction="activeSE.url" :value="activeSE.title">
        <div class="triangle" @click="toggle"><span></span></div>
        <ul class="SE_list" v-show="SE.list_show">
          <li v-for="(SE, key) in SE.list" :key="key"
            @click="switchSE(key)">
            {{ SE.title }}
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      SE: {
        actived: 'baidu',
        list_show: false,
        list: {
          google: {
            title: '谷歌',
            url: 'https://www.google.com/search',
            name: 'q'
          },
          baidu: {
            title: '百度',
            url: 'http://www.baidu.com/baidu',
            name: 'word'
          },
          bing: {
            title: 'Bing',
            url: 'https://cn.bing.com/?cc=cn',
            name: 'q'
          }
        }
      }
    }
  },
  computed: {
    activeSE () {
      return this.SE.list[this.SE.actived]
    }
  },
  methods: {
    switchSE (key) {
      this.SE.actived = key
      this.toggle()
    },
    toggle () {
      this.SE.list_show = !this.SE.list_show
    }
  }
}
</script>
