import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/views'
import Login from '@/views/login'
import Register from '@/views/register'
import Dashboard from '@/views/dashboard'

// Middlewares
import authMiddleware from '@/middleware/authMiddleware'

// Layouts : { admin }

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'landing'}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {layout: 'landing'}
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { layout: 'landing' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: 'dashboard' },
      beforeEnter: authMiddleware,
      component: Dashboard
    }
  ]
})


export default router