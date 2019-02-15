/* tagData store */
import api from '@/api'
import testData from '@/config/testData'
import { DEV_ENV } from '@/config'
import { timeAddRandom } from '@/utils/random'

export default {
  namespaced: true,
  state: {
    repositorys: {},

    activeRepositoryID: '',
    activeFolderID: '',

    isLoading: false
  },
  getters: {
    repository (state, getters, rootState) {
      const repo = state.repositorys
      let rid = state.activeRepositoryID
      if (repo) {
        if (!rid) {
          rid = Object.keys(repo)[0]
          state.activeRepositoryID = rid
        }
        return repo[rid]
      }
      return null
    },
    folders (state, { repository: rop }) {
      return rop ? rop.folders : null
    },
    activeFolder (state, { repository: rop, folders }) {
      let fid = state.activeFolderID
      if (rop && rop.content) {
        if (!fid) {
          fid = rop.content[0]
          state.activeFolderID = fid
        }
        return folders[fid]
      }
      return null
    },
    tags (state, { repository: rop }) {
      return rop ? rop.tags : null
    }
  },
  mutations: {
    // 通用修改state（只能修改第一层）
    PUT (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    },
    // 新建tag
    newTag (state, payload) {
      const { id, fatherID, redate, newTag } = payload
      let repositorys = state.tagData.repositorys[state.tagData.activeRepository]
      repositorys.tags[id] = newTag
      // 添加到父级
      const father = repositorys.folders[fatherID]
      father.redate = redate
      father.content.push(id)
      // 如何公共的更新修改时间？ todo
    },
    // 修改folder todo
    setFolder (state, payload) {
      const { id, title, content, redate } = payload
      console.log(id, title, content, redate)
    }
  },
  actions: {
    // 获取tagData
    fetch ({ commit, dispatch, state, getters, rootState }, payload) {
      return new Promise((resolve, reject) => {
        if (DEV_ENV) {
          const resp = {
            code: 0,
            tagData: testData
          }
          commit('PUT', { repositorys: resp.tagData.repositorys })
          resolve(resp)
          return
        }
        api.tagData.fetchTagData().then((result) => {
          const resp = result.data
          if (resp.code === 0) {
            commit('PUT', { repositorys: resp.tagData.repositorys })
            resolve(resp)
          } else {
            console.error(resp)
            reject(resp)
          }
        })
      })
    },
    setActiveRepositoryID ({ commit }, payload) {
      const { id } = payload
      commit('PUT', {
        activeRepositoryID: id
      })
    },
    setActiveFolderID ({ commit }, payload) {
      const { id } = payload
      commit('PUT', {
        activeFolderID: id
      })
    },
    // 创建tag（本地）
    createTag (context, payload) {
      return new Promise((resolve, reject) => {
        try {
          const { title, href, desp, fatherID } = payload
          const redate = new Date().getTime()
          const id = timeAddRandom(redate)
          const newTag = { title, redate, href, desp }
          context.commit('newTag', { id, fatherID, redate, newTag })
          resolve({code: 0, msg: '创建tag成功'})
          // 接下来要上传数据，但我们知道上传是可能会出错的，比如服务器宕机，这时候想回滚操作就麻烦了 todo
          // 方案1: 先上传，再更新本地
          // （优点：逻辑严谨；缺点：需要等待，服务器宕机就不可用，不适合本业务)
          // 方案2: 先更新本地，持续的发送更新请求。
          // （优点：用户体验优，对于低安全性操作可行；缺点：需要解决异地更新同步的问题）
        } catch (err) {
          console.error(err)
          reject(err)
        }
      })
    }
  }
}
