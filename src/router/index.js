import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/uf',
    name: 'Uf',
    component: () => import('../views/Uf.vue')
    },
  {
    path: '/utm',
    name: 'Utm',
    component: () => import('../views/Utm.vue')
  },
  {
    path: '/dolar',
    name: 'Dolar',
    component: () => import('../views/Dolar.vue')
  },
  {
    path: '/euro',
    name: 'Euro',
    component: () => import('../views/Euro.vue')
  },
  {
    path: '/libra_cobre',
    name: 'Libra_cobre',
    component: () => import('../views/Libra_cobre.vue')
  },
  {
    path: '/bitcoin',
    name: 'Bitcoin',
    component: () => import('../views/Bitcoin.vue')
  },
  {
    path: '/fecha',
    name: 'Fecha',
    component: () => import('../views/Fecha.vue')
  },



    {
      path: '*',
      redirect: '/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
