import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import reg from './views/Reg.vue'
import login from './views/login'
import information from './views/information'
import Perfectinformation from './views/Perfectinformation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },


    {
      path: '/reg',
      component: reg
    },
    {
      path: '/login',
      component: login
    },
    {//个人信息
      path: '/information',
      component: information
    },
     {//个人信息
      path: '/Perfectinformation',
      component: Perfectinformation
    },
    {
      path: '/about',
    
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
