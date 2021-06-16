import Vue from 'vue'
import Router from 'vue-router'
import tete from '@/components/tete'
import corps from '@/components/corps'
import portfolio from '@/components/portfolio'
import cv from '@/components/cv'
import club from '@/components/club'
import artist from '@/components/artist'
import about from '@/components/about'
import contactinky from '@/components/contactinky'
import terre from '@/components/terre'
import earth from '@/components/earth'
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
      path: '/cv',
      name: 'cv',
      component: cv
    },
    {
      path: '/club',
      name: 'club',
      component: club
    },
    {
      path: '/artist',
      name: 'artist',
      component: artist
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contactinky',
      name: 'contactinky',
      component: contactinky
    },
    {
      path: '/terre',
      name: 'terre',
      component: terre
    },
    {
      path: '/earth',
      name: 'earth',
      component: earth
    }
    
    
  ]
})



