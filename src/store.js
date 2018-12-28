import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const production = process.env.NODE_ENV === 'production'
const server = 'http://47.107.178.90:9920' // 有跨域问题
const $api = !production ? server : ''

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    login (context, payload) {
      const { data } = payload
      return new Promise((resolve, reject) => {
        Axios.post(`${$api}/api/login`, data).then((re) => {
          console.log('成功')
          resolve(re)
        }).catch((re) => {
          console.log('失败')
          reject(re)
        })
      })
    }
  }
})
