import Vue from 'vue'
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/mainIndex'
  },
  {
    path: '/mainIndex',
    name: 'mainIndex',
    meta: {
      pageName: '主页',
    },
    component: () => import('../pages/mainIndex.vue')
  },
  // {
  //   path: '/page01',
  //   name: 'page01',
  //   meta: {
  //     pageName: '页面一',
  //   },
  //   component: () => import('../pages/page01/page01.vue')
  // },
  // {
  //   path: '/page02',
  //   name: 'page02',
  //   meta: {
  //     pageName: '页面二',
  //   },
  //   component: () => import('../pages/page02/page02.vue')
  // }
]

const router = new VueRouter({
  routes,
})


export default router
