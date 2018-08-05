<template>
  <ul class="floor_01">
    <li v-for="(id_1, index) in r.content" 
    :class="{'on':index==r.active_floder,'disabled':false}" 
    @click="change_floor01(index)"
    :key="id_1">
      <h3 class="ellipsis">{{ folders[id_1].title }}</h3>
    </li>
    <!-- <li class="new"><h3>新建</h3></li> -->
    <div class="tools">
      <img :src="img.add">
      <img :class="{active: toolStatus.edit}" @click="edit" :src="img.edit">
      <img :src="img.delete">
      <img class="disabled" :src="img.setting">
    </div>
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
  props: ['data', 'toolStatus'],
  computed: {
    r: function () {
      return this.data.repositorys[this.data.active_repository]
    },
    folders: function () {
      return this.r.folders
    }
  },
  methods: {
    change_floor01: function (index) {
      this.r.active_floder = index
      window.localStorage.daohangTagData = JSON.stringify(this.data)
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

<style scoped lang="less">
@r_files_line-height: 40px;
.floor_01 {
  background: #232326;
  color: #fff;
  width:16%;
  min-height: 100%;
  position: absolute;
  @media (max-width: 768px) {
    display: none;
  }
  li {
    background: #232326;
    color: #fff;
    padding: 0 8%;
    cursor: pointer;
    h3 {
      text-align: center;
    }
  }
  li.on {
    background: #333;
    box-shadow: 0 0 3px rgba(255,255,233,0.5);
    line-height: @r_files_line-height - 2;
    margin-top: 2px;
    position: relative;
  }
  li:hover {
    background: #fff;
    color: #232326;
    line-height: @r_files_line-height;
    margin-top: 0;
  }
  .new {
    border: 1px dashed #666;
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
