import Axios from 'axios'

import testdata from '@/data/data'
import { h5 } from '@/lib/publicAttribute'
import { timeAddRandom } from '@/lib/random'

const production = process.env.NODE_ENV === 'production'
// const server = 'http://47.107.178.90:9920'
const server = 'http://localhost:3000' // 如何解决跨域问题 todo
const $api = !production ? server : ''

export default {
  // 创建tag（本地）
  createTag (context, payload) {
    return new Promise((resolve, reject) => {
      try {
        const { title, href, desp, fatherID } = payload
        const reDate = new Date().getTime()
        const id = timeAddRandom(reDate)
        const newTag = { title, reDate, href, desp }
        context.commit('newTag', { id, fatherID, reDate, newTag })
        resolve({code: 200, msg: '创建tag成功'})
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
  },
  login (context, payload) {
    const { name, password } = payload
    return new Promise((resolve, reject) => {
      Axios.post(`${$api}/api/login`, { name, password }).then((response) => {
        if (response.data.code === 200) {
          context.commit('PUT', { isLogined: true })
          // 在state中填上登录信息 todo
        }
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  logout (context, payload) {
    return new Promise((resolve, reject) => {
      Axios.get(`${$api}/api/logout`).then((response) => {
        if (response.data.code === 200) {
          context.commit('PUT', { isLogined: false })
          // 在state中删去登录信息 todo
        }
        resolve(response.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  // 获取tagData todo
  getTagData (context, payload) {
    if (h5) {
      let tagData = localStorage.getItem('tagData')
      if (tagData) {
        context.commit('PUT', { tagData })
        // 比较更新时间 todo
      } else {
        // 拉取数据 todo
        Axios.get(`${$api}/api/getTagData`).then((res) => {
        }).catch(() => {
        })
        let tagData = testdata
        context.commit('PUT', { tagData })
        // 把数据存进h5缓存 todo
      }
    }
  }
}
