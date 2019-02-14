/* user store */
import api from '@/api'

export default {
  state: {
    isLogined: false,
    user: { // 用户信息
      name: '',
      nickname: '',
      description: ''
    }
  },
  getters: {},
  mutations: {
    // 通用修改state（只能修改第一层）
    PUT (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    login ({ commit, state, getters, rootState }, payload) {
      return new Promise((resolve, reject) => {
        const { name, password } = payload
        api.user.login({ name, password }).then((result) => {
          const resp = result.data
          if (resp.code === 0) {
            commit('PUT', { isLogined: true }) // 有默认change吗？todo
            // 在state中填上登录信息 todo
            resolve(resp)
          } else {
            console.error(resp)
            reject(resp)
          }
        })
      })
    },
    logout (context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        api.user.logout().then((result) => {
          const resp = result.data
          if (resp.code === 0) {
            context.commit('PUT', { isLogined: false })
            // 在state中删去登录信息 todo
            resolve(resp)
          } else {
            console.error(resp)
            reject(resp)
          }
        })
      })
    }
  }
}
