<style lang="less" scoped>
</style>

<template>
  <folder
    :username="username"
    :permission="permission"
  ></folder>
</template>

<script>
import { getCookie } from '@/lib/utils'
import Folder from './Folder/folder'

export default {
  name: 'Collect',
  components: { Folder },
  data () {
    return {
      username: getCookie('username'),
      permission: false
    }
  },
  created () {
    // 检查cookie
    this.checkPermission()
  },
  methods: {
    checkPermission () {
      const data = {
        username: this.username,
        loginCode: getCookie('loginCode')
      }
      this.$store.dispatch('checkPermission', { data }).then((res) => {
        // 成功
        // res = JSON.parse(res)
        if (res.code === 200) {
          console.log('设置权限为true')
          this.permission = true
        } else {
          // 去往社区页，或者登录页
          this.$router.push('/login')
        }
      }).catch((res) => {
        // 失败
      })
    }
  }
}
</script>
