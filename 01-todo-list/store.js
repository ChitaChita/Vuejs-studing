import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
    // ここに実装を書く
    state: {
        // タスクの初期ステート
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                done: false
            },
            {
                id: 2,
                name: 'Vue.jsの本を買う',
                done: true
            }
        ]
    }
})

// ストアのエクスポート
export default store
