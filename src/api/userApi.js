import Axios from 'axios'
import { $server } from './index'

export default {
  login (parames) {
    return new Promise((resolve, reject) => {
      const { name, password } = parames
      Axios.post(`${$server}/api/login`, { name, password }).then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      Axios.get(`${$server}/api/logout`).then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
