import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
