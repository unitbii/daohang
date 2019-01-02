<style lang="less" scoped>
.myHeader {
  background: #fff;
  height: 50px;
  line-height: 50px;
  .option {
    padding: 0 20px;
  }
  .logo {
    h1 {
      cursor: pointer;
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
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
  }
  .dropDownA:hover {
    background: #232326;
    color: #fff;
  }
}
.mySearchBox {
  width: 28%;
  height: 30px;
  margin: 10px 20px;
}
</style>

<template>
  <div class="myHeader yrow">
    <div class="logo option fl">
      <h1 @click="goto()">Dao航</h1>
      <span class="description">自定义导航专家</span>
    </div>
    <Dropdown class="fl" v-for="data in navData" :key="data.id">
      <span class="option dropDownA">{{ data.title }}</span>
      <DropdownMenu slot="list" v-for="item in data.items" :key="item.id">
          <DropdownItem :disabled="item.disabled" :divided="item.divided" >{{ item.name }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>

    <span class="option dropDownA fr" @click="logoutAsk">登出</span>
    <router-link class="option dropDownA fr" to="/login">登录</router-link>
    <!-- <div class="user option fr">
      <Avatar icon="person" size="default"/>
    </div> -->
    <search-box class="mySearchBox fr"></search-box>
  </div>
</template>

<script>
import { goto } from '@/router/func'
import SearchBox from '@/components/SearchBox/SearchBox'

export default {
  name: 'MyHeader',
  components: { SearchBox },
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
      }
    }
  },
  methods: {
    logoutAsk () {
      this.$store.dispatch('logout').then((res) => {
        if (res.code === 200) {
          this.$router.push('/login')
        } else {
          console.error(res)
        }
      }).catch((err) => {
        console.error(err)
      })
    },
    goto
  }
}
</script>
