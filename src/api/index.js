import user from './userApi'
import tagData from './tagDataApi'

import { DEV_ENV } from '@/config'

const server = 'http://47.107.178.90:9920'
// const server = 'http://localhost:3000' // 如何解决跨域问题 todo
export const $server = DEV_ENV ? server : ''

const api = {
  user,
  tagData
}
export default api
