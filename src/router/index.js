import { createRouter, createWebHistory } from '@ionic/vue-router'
import { isAuthorized } from '../services/auth'

const routes = [
  {
    path: '/login',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await isAuthorized()
  if (to.name === 'Auth' && isLoggedIn) {
    next({ name: 'Main' })
  } else if (to.meta.requiresAuth && !isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
