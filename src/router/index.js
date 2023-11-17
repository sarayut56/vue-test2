import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SearchForm from '../views/SearchForm.vue'
import ComView from '../views/ComView.vue'
import Goview from '../views/GoView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/search',
    name: 'search',
    component : SearchForm
    
  },
  {
    path: '/com/:com_id?',
    name: 'com',
    component : ComView
  },
  {
    path: '/go',
    name: 'go',
    component :Goview
  },
  
  // {
  //   path: '/out',
  //   name: 'out',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/OutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
