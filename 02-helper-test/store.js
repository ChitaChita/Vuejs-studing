import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state, value) {
            state.count += value
        }
    }
})

// ストアのエクスポート
export default store
