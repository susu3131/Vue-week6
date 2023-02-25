import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import ('../views/HomeView.vue'),
      children:[
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
          path: '/index',
          name: '首頁',
          component: () => import ('../views/IndexView.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: '後台訂單管理',
      component: () => import ('../views/AdminView.vue')
    },
    {
      path: '/login',
      name: '登入',
      component: () => import ('../views/LoginView.vue')
    },
    //404
    {
      path:'/:pathMatch(.*)*',
      component: () => import ('../views/NotFound.vue')
    }
  ]
})

export default router
