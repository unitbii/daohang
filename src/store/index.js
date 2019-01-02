import Vue from 'vue'
import Vuex from 'vuex'

import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined: false,
    user: { // 用户信息
      name: '',
      nickname: '',
      description: ''
    },
    tagData: { // 它应该有一个基本的架子吗？
      // activeRepository: 1,
      // repositorys: {
      //   1: {
      //     name: '',
      //     activeFolder: '',
      //     content: [],
      //   }
      // }
    }
  },
  getters: {
    repository (state, getters) {
      return state.tagData.repositorys[state.tagData.activeRepository]
    },
    activeFolder (state, getters) {
      return getters.repository.folders[getters.repository.activeFolder]
    },
    folders (state, getters) {
      return getters.repository.folders
    },
    tags (state, getters) {
      return getters.repository.tags
    }
  },
  mutations: {
    // 通用修改state（只能修改第一层）
    PUT (state, payload) {
      // console.log(payload)
      for (let key in payload) {
        state[key] = payload[key]
      }
    },
    // 新建tag
    newTag (state, payload) {
      const { id, fatherID, reDate, newTag } = payload
      let repositorys = state.tagData.repositorys[state.tagData.activeRepository]
      repositorys.tags[id] = newTag
      // 添加到父级
      const father = repositorys.folders[fatherID]
      father.reDate = reDate
      father.content.push(id)
      // 如何公共的更新修改时间？ todo
    },
    // 修改folder todo
    setFolder (state, payload) {
      const { id, title, content, reDate } = payload
      console.log(id, title, content, reDate)
    }
  },
  actions: actions
})
