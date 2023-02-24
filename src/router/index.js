import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首頁',
      component: () => import ('../views/HomeView.vue')
    },
    {
      path: '/product',
      name: '前台產品列表',
      component: () => import ('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: '購物車',
      component: () => import ('../views/UserCart.vue')
    },
    {
      path: '/admin',
      name: '後台訂單管理',
      component: () => import ('../views/AdminView.vue')
    }
  ]
})

export default router
