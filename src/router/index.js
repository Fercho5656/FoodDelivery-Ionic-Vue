import { createRouter, createWebHistory } from '@ionic/vue-router'
import { isAuthorized } from '../services/auth'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../views/Food.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/food/categories',
    name: 'FoodCategories',
    component: () => import('../views/FoodCategories.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import('../views/Restaurants.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/restaurant/categories',
    name: 'RestaurantCategories',
    component: () => import('../views/RestaurantCategories.vue'),
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
  if (['Register', 'Login'].includes(to.name) && isLoggedIn) {
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
