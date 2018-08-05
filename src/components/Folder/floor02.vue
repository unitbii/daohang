<template>
  <div class="floor_02">
    <template v-for="(id_1, index) in r.content" v-if="index==r_active_floder">
      <template v-if="folders[id_1].content.length>0">
        <section class="section_f2" v-for="id_2 in folders[id_1].content" :key="id_2">
          <header @click="slideToggle">
            <h3>{{ folders[id_2].title }}</h3>
          </header>
          <div class="floor_03" :data-height="floor_03_height" :style="floor_03_styel">
            <nav class="yrow">
              <template v-for="tid in folders[id_2].content">
                <a v-if="tags[tid].title" :href="tags[tid].href" :data-desp="tags[tid].desp" :key="tid">
                  <img class="d-img" :src="img.label"><span>{{ tags[tid].title }}</span>
                  <span class="info">
                    <span class="title">{{ tags[tid].title }}</span><span class="desp" v-if="tags[tid].desp"> | {{ tags[tid].desp }}</span><br/>
                    <span class="url">{{ tags[tid].href }}</span>
                  </span>
                </a>
              </template>
            </nav>
            <div class="showMore" @click="slideToggle">
              <span class="img">...</span>
              <span class="bg"></span>
            </div>
          </div>
        </section>
      </template>
      <template v-else>
        空页面
      </template>
    </template>
  </div>
</template>

<script>
import $ from 'jquery'

function showMore ($ele) {
  $ele = $($ele)
  if (!$ele.hasClass('floor_03')) {
    $ele = $ele.find('.floor_03')
  }
  $ele.each(function () {
    var $t = $(this)
    var height = $t.outerHeight()
    var navHeight = $t.find('nav').outerHeight()
    var $showMore = $t.find('.showMore')
    if (height === navHeight) {
      $showMore.hide()
    } else {
      $showMore.show()
    }
  })
}
window.onload = function () {
  showMore('.floor_02')
}

export default {
  name: 'Floor02',
  data () {
    return {
      img: {
        label: require('@/assets/images/1688-label.png')
      },
      floor_03_height: '40'
    }
  },
  props: ['data', 'toolStatus'],
  computed: {
    r: function () {
      return this.data.repositorys[this.data.active_repository]
    },
    tags: function () {
      return this.r.tags
    },
    folders: function () {
      return this.r.folders
    },
    r_active_floder: function () {
      return this.r.active_floder
    },
    floor_03_styel: function () {
      return {
        'height': this.floor_03_height + 'px',
        'min-height': this.floor_03_height + 'px'
      }
    }
  },
  methods: {
    slideToggle: function (e) {
      var $ele = $(e.target).parents('section').find('.floor_03')
      var height = parseInt($ele.attr('data-height'))
      var navHeight = $ele.find('nav').outerHeight()
      if (height === navHeight) return
      if (height === $ele.outerHeight()) {
        $ele.css({'height': navHeight})
        $ele.find('.showMore').hide(300)
      } else {
        $ele.css({'height': height})
        $ele.find('.showMore').show(300)
      }
    }
  },
  watch: {
    r_active_floder: function () {
      setTimeout(function () {
        showMore('.floor_02')
      }, 10)
    }
  }
}
</script>

<style scoped lang="less">
.floor_02 {
  margin-left:16%;
  @media (max-width: 768px) {
    margin-left: 0;
  }
  section {
    @padding-left: 1.6%;
    header {
      background: #d6dba9;
      padding-left: @padding-left;
      cursor: pointer;
    }
    .floor_03 {
      background: #fff;
      overflow: hidden;
      position: relative;
      transition: height 0.3s;
      a {
        color: #232326;
        display: block;
        font-size: 16px;
        float: left;
        padding: 0 @padding-left;
        text-decoration: none;
        position: relative;
        img {
          width: 1em;
          height: 1em;
          margin: 0 .2em -2px 0;
        }
        .info {
          display: none;
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
          bottom: 108%;
          left: 60%;
          z-index: 1001;
          .title {
            color: #eee;
            font-size: 14px;
          }
        }
      }
      a:hover {
        color: #f18;
        .info {
          // display: block;
        }
      }
      .showMore {
        display: none;
        width: 18px;
        position: absolute;
        right: 0;
        bottom: 0;
        cursor: pointer;
        .img {
          color: #bbb;
          line-height: 22px;
          position: relative;
          left: 4px;
          z-index: 2;
        }
        .bg {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          background: #ddd;
          position: absolute;
          right: -18px;
          bottom: -18px;
        }
      }
    }
    .floor_03.full {
      a {
        padding: 0 0.3em;
        width: 25%;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
