import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/index'
    },

    {
      path: '/',
      component: Home,
      children: [{
        path: '/index',
        component: () => import('../views/Index.vue')
      }, {
        path: '/follow',
        component: () => import('../views/Follow.vue')
      }]
    }
  ]
})

export default router