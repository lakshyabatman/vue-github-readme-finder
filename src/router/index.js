import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'
import Readme from '../views/Readme.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/:name',
    name: 'SearchResult',
    component: Results
  },
  {
    path: '/:name/:project',
    name: 'ReadMe',
    component: Readme
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
