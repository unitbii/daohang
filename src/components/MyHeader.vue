<style lang="less" scoped>
  .myHeader {
    .logo {
      h1 {
        display: inline-block;
        font-size: 30px;
      }
    }
  }
</style>

<template>
  <div class="myHeader">
    <div class="logo fl">
      <h1>Dao航</h1>
      <span>自定义导航专家</span>
    </div>
    <Dropdown v-for="data in dropDownData" :key="data.id">
      <a href="javascript:void(0)">{{ data.title }}</a>
      <DropdownMenu slot="list" v-if="data.items" v-for="item in data.items" :key="item.id">
          <DropdownItem :disabled="item.disabled" :divided="item.divided" >{{ item.name }}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <div class="user fr">
      <i-avatar icon="person" size="default"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dropDownData: {
        1: {
          id: '1',
          title: '社区',
          items: false
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
  }
}
</script>
