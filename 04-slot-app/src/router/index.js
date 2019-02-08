import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Top
    },
    {
        path: '/score',
        component: Score
    }
  ]
})
