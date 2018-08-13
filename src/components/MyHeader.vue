<style lang="less" scoped>
.myHeader {
  background: #F5F7F9;
  height: 50px;
  line-height: 50px;
  .logo {
    padding: 0 20px;
    h1 {
      display: inline-block;
      font-size: 22px;
      font-weight: 700;
    }
    .description {
        color: #666;
    }
  }
  .dropDownA {
    color: #232326;
    display: inline-block;
    font-size: 16px;
    padding: 0 20px;
    transition: background-color 0.3s, color 0.3s;

  }
  .dropDownA:hover {
    background: #232326;
    color: #fff;
  }
  .user {
    padding: 0 20px;
  }
}
</style>

<template>
  <div class="myHeader">
    <div class="logo fl">
      <h1>Dao航</h1>
      <span class="description">自定义导航专家</span>
    </div>
    <Dropdown class=" fl" v-for="data in navData" :key="data.id">
      <a class="dropDownA" href="javascript:void(0)">{{ data.title }}</a>
      <DropdownMenu slot="list" v-for="item in data.items" :key="item.id">
          <DropdownItem :disabled="item.disabled" :divided="item.divided" >{{ item.name }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <div class="user fr">
      <Avatar icon="person" size="default"/>
    </div>
    <search-box class="fr" :style="style.searchBox"></search-box>
  </div>
</template>

<script>
import SearchBox from '@/components/Plugins/SearchBox'

export default {
  name: 'MyHeader',
  data () {
    return {
      navData: {
        1: {
          id: '1',
          title: '社区',
          items: {}
        },
        2: {
          id: '2',
          title: '收藏',
          items: {
            1: {
              id: '1',
              name: '驴打滚',
              disabled: false,
              divided: false
            },
            2: {
              id: '2',
              name: '豆汁儿',
              disabled: true,
              divided: false
            },
            3: {
              id: '3',
              name: '北京烤鸭',
              disabled: false,
              divided: true
            }
          }
        }
      },
      style: {
        searchBox: {
          width: '30%',
          height: '30px',
          margin: '10px 20px'
        }
      }
    }
  },
  components: { SearchBox }
}
</script>
