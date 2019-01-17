import Vue from 'vue'
import Sample from './15-sample.vue'
import store from './store'

new Vue({
    el: '#app',
    // コンポーネントからストアを利用できるようにする
    store,
    render: h => h(Sample)
})