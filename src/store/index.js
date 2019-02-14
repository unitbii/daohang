import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/userStore'
import tagData from './modules/tagDataStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    tagData
  }
})
