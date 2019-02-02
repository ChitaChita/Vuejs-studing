import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game.vue'
import Score from '@/components/Score.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/game',
      component: Game
    },
    {
      path: '/score',
      component: Score
    },
    {
      path: '*',
      redirect: '/game'
    }
  ]
})
