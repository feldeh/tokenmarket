import { createRouter, createWebHistory } from 'vue-router'
import CoinsView from '../views/CoinsView.vue'
import ExchangesView from '../views/ExchangesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoinsView
    },
    {
      path: '/exchanges',
      name: 'exchanges',
      component: ExchangesView
    }
  ]
})

export default router
