import Vue from 'vue'
import Sample from './15-sample-helper.vue'
import store from './store'

new Vue({
    el: '#app',
    // コンポーネントからストアを利用できるようにする
    store,
    render: h => h(Sample)
})