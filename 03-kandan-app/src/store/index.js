import Vue from 'vue'
import 'es6-promise/auto' // プロイスをポリフィルする
import App from './App'
import router from './router'
import store from './store' // Vuexのストアインスタンスをインポート

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // インポートしたストアインスタンスを'store'オプションとして指定
  render: h => h(App)
})
