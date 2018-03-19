import Vue from 'vue'
import Vuex from 'vuex'
import supplies from './modules/supplies'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    supplies
  },
  strict: debug
})
