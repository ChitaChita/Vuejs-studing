import Vue from 'vue'
import 'es6-promise/auto' // Promise: 非同期の処理をいい感じに使えるAPI、デフォルトはIE11等は対応していないので、これを使う
import App from './App'
import router from './router'
import store from './store' // Vuexのストアインスタンスをインポート

// Vue.config.productionTip : Vue の起動時のプロダクションヒント
// process.env.NODE_ENV : Node の起動時のプロダクションヒント
Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // インポートしたストアインスタンスを'store'オプションとして指定
  render: h => h(App)
})