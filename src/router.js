import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/views'
import Login from '@/views/login'
import Register from '@/views/register'
import Admin from '@/views/admin'

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
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { layout: 'admin' },
      // Page with middleware
      beforeEnter: (to, from, next) => {
        authMiddleware(to, from, next)
        next()
      },
      component: Admin
    }
  ]
})


export default router