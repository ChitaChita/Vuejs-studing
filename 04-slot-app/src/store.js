import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 状態管理
    state: {
        stateflg: false,

        result: [
            { }
        ],

        modalflg: false,
        nextId: 0
    },

    getters: {
        getResult(state) {
            return state.result
        },

        getModalflg(state) {
            return state.modalflg
        }
    },

    // 状態の更新
    mutations: {
        chgStateflg(state, {stateflg}) {
            state.stateflg = stateflg
        },

        addResult(state, {result}) {
            state.result.push({
                id: state.nextId,
                slotValues: result
            })

            // 次の追加に備えてIDを更新
            state.nextId++
        },

        chgModalflg(state, {modalflg}) {
            state.modalflg = modalflg
        }
    },

    // 非同期処理、使えば使う
    actions: {
    }
})

// ストアのエクスポート
export default store
