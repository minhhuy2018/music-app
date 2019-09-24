import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import reg from './views/Reg.vue'
import login from './views/login'
import main from '@/components/main.vue'
import musicdetail from "@/components/musicdetail.vue";





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
    {
      path: '/musicdetail',
      component: musicdetail
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
