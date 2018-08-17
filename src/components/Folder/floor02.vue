<style lang="less" scoped >
.floor_02 {
  // background: #292929;
  background: #dedcd1;
  height: 100%;
  padding: 10px;
  padding-bottom: 50px;
  overflow-y: scroll;
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
  @padding-left: 1.6%;
  a {
    border: 1px solid #ccc;
    border-radius: 4px;
    float: left;
    line-height: 2.2em;
    padding: 0 @padding-left;
    margin: 0 10px 10px 0;
    transition: box-shadow 0.2s;
    .d-img {
      width: 1em;
      height: 1em;
      margin: 0 .2em -2px 0;
    }
  }
  a:hover {
    box-shadow: 0 0 4px rgba(0,0,0, 0.2);
  }
}
.floor_02::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="floor_02">
    <template v-if="activeFloder && activeFloder.content.length > 0">
      <Collapse :style="style.collapse" v-model="collapseShow">
        <Panel :name="index.toString()" v-for="(fid, index) in activeFloder.content" :key="fid">
          {{ folders[fid].title }}
          <p slot="content">
            <nav class=" yrow">
              <a v-for="tid in folders[fid].content" :key="tid" v-if="tags[tid].title"
                :href="tags[tid].href"
                :data-desp="tags[tid].desp">
                <Tooltip :delay="100" placement="top-start">
                  <img class="d-img" :src="img.label">
                  <span>{{ tags[tid].title }}</span>
                  <div slot="content">
                    <p v-if="tags[tid].desp">{{ tags[tid].desp }}</p>
                    <p><i>{{ tags[tid].href  }}</i></p>
                  </div>
                </Tooltip>
              </a>
            </nav>
          </p>
        </Panel>
      </Collapse>
      
      <my-collapse :style="style.collapse" :repository="repository"></my-collapse>
      
    </template>
    <template v-else>
      空页面
      <router-link to='/user'>Go to user</router-link>
    </template>
  </div>
</template>

<script>
import MyCollapse from '@/components/Plugins/MyCollapse'
export default {
  name: 'Floor02',
  data () {
    return {
      img: {
        label: require('@/assets/images/1688-label.png')
      },
      collapseShow: '0',
      style: {
        collapse: {
          border: '1px solid #c1c1c1',
          borderRadius: '4px',
          marginBottom: '10px',
          overflow: 'hidden'
        }
      }
    }
  },
  props: ['repository', 'toolStatus'],
  components: { MyCollapse },
  computed: {
    tags: function () {
      return this.repository.tags
    },
    folders: function () {
      return this.repository.folders
    },
    activeFloder: function () {
      return this.folders[this.repository.activeFloderId]
    }
  },
  methods: {
  }
}
</script>
