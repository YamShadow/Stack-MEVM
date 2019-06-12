import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "login" */ './views/Home.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( /* webpackChunkName: "login" */ './views/Inscription.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('Here')
    console.log(localStorage.getItem('token'))
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.isAuth)) {
    if (localStorage.getItem('token') != null) {
      next({
        path: '/',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router