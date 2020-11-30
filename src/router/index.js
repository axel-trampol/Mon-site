import Vue from 'vue'
import Router from 'vue-router'
import tete from '@/components/tete'
import corps from '@/components/corps'
import portfolio from '@/components/portfolio'
import precious from '@/components/precious'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tete',
      component: tete
    },
    {
      path: '/',
      name: 'corps',
      component: corps
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
    {
      path: '/precious',
      name: 'precious',
      component: precious
    }
  ]
})

