import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      component: Game
    }
  ]
})
