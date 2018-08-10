<style lang="less" scoped>
@r_files_line-height: 40px;
.floor_01 {
  background: #2b2b2b;
  color: rgba(255, 255, 255, 0.7);
  width:150px;
  min-height: 100%;
  position: absolute;
  li {
    padding: 0 8%;
    text-align: center;
    cursor: pointer;
  }
  li.on {
    background: #333;
    box-shadow: 0 0 3px rgba(255,255,233,0.5);
    line-height: @r_files_line-height - 2;
    margin-top: 2px;
    position: relative;
  }
  li:hover {
    background: #666;
    // color: #232326;
    line-height: @r_files_line-height;
    margin-top: 0;
  }
  .new {
    border-top: 1px dashed #666;
    border-bottom: 1px dashed #666;
    color: #888;
    line-height: @r_files_line-height - 2;
    margin-top: 1px;
    opacity: 0.7;
    transition: background-color 0.3s, opacity 0.3s;
  }
  .new:hover {
    background: #333;
    color: #888;
    line-height: @r_files_line-height - 2;
    margin-top: 1px;
    opacity: 1;
  }
  .tools {
    padding: 0 5%;
    position: absolute;
    bottom: 3px;
    img {
      display: block;
      float: left;
      padding: 4%;
      width: 25%;
      opacity: 0.2;
      cursor: pointer;
    }
    img.active {
      opacity: 0.8;
    }
    img:active {
      opacity: 1;
    }
    img:hover {
      opacity: 0.9;
    }
    img.disabled:hover {
      opacity: 0.2;
    }
  }
}
</style>

<template>
  <ul class="floor_01">
    <li v-for="id in repository.content" :key="id"
      :class="{'on': id == repository.activeFloderId, 'disabled': false}"
      @click="switchFloor(id)">
      <h3 class=" ellipsis">{{ folders[id].title }}</h3>
    </li>
    <li class="new"><h3>新建</h3></li>
    <!-- <div class="tools">
      <img :src="img.add">
      <img :class="{active: toolStatus.edit}" @click="edit" :src="img.edit">
      <img :src="img.delete">
      <img class="disabled" :src="img.setting">
    </div> -->
  </ul>
</template>

<script>
export default {
  name: 'Floor01',
  data () {
    return {
      img: {
        add: require('@/assets/images/add02.png'),
        edit: require('@/assets/images/edit02.png'),
        delete: require('@/assets/images/delete02.png'),
        setting: require('@/assets/images/setting02.png')
      }
    }
  },
  props: ['repository', 'data', 'toolStatus'],
  computed: {
    folders: function () {
      return this.repository.folders
    }
  },
  methods: {
    switchFloor: function (id) {
      this.repository.activeFloderId = id
      // window.localStorage.daohangTagData = JSON.stringify(this.data)
      // console.log()
    },
    edit: function () {
      if (this.toolStatus.edit) {
        this.toolStatus.edit = false
      } else {
        this.toolStatus.edit = true
      }
    }
  }
}
</script>
