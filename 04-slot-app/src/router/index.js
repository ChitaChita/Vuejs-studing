import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Game
    },
    {
      path: '/score',
      component: Score
    }
  ]
})
