import Axios from 'axios'
import { $server } from './index'

export default {
  fetchTagData (parames) {
    return new Promise((resolve, reject) => {
      Axios.get(`${$server}/api/getTagData`).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
