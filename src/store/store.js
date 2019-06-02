import Vue from 'vue'
import Vuex from 'vuex'

// Stores to import
import authModule from './auth'

// Use vuex
Vue.use(Vuex)

// Load imported stores
export default new Vuex.Store({
    modules: {
        auth: authModule
    }
})
