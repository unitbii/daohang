<style lang="less" scoped>
.login {
  background: #96a066;
  .loginCard {
    background: rgba(255,255,255,0.9);
    border: 1px solid #fff;
    border-radius: 4px;
    color: #888;
    width: 40%;
    padding: 10px 0;
    text-align: center;
    position: relative;
    top: -10%;
    h2 {
      // color: #fff;
      font-size: 1.6em;
      margin: 10px 0;
    }
    .row {
      width: 60%;
      margin: 10px;
    }
  }
}
</style>

<template>
  <div class="login flex full">
    <section class="loginCard">
      <header>
        <h2>用户登录</h2>
      </header>
      <Input class="row" size="large" type="text" clearable
        @on-change="(e)=>{recodeName(e)}" placeholder="用户名/电话/邮箱" />
      <Input class="row" size="large" type="password" clearable
        @on-change="(e)=>{recodePassword(e)}" placeholder="密码" />
      <Button class="row" size="large" long @click="loginAsk">登 录</Button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      password: '',
      loading: false
    }
  },
  computed: {},
  methods: {
    recodeName (e) {
      this.name = e.target.value
    },
    recodePassword (e) {
      this.password = e.target.value
    },
    loginAsk () {
      let data = {
        name: this.name,
        password: this.password
      }
      this.$store.dispatch('login', {
        data: data
      }).then(() => {
        console.log('成功')
      }).catch(() => {
        console.log('失败')
      })
    }
  }
}
</script>
