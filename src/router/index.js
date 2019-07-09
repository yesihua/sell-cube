import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const login = () => import('components/login/login')
const goods = () => import('components/goods/goods')
const seller = () => import('components/seller/seller')
const ratings = () => import('components/ratings/ratings')
const list = () => import('components/list/list')
const listShow = () => import('components/listShow/list-show')
const menu = () => import('components/menu/v-menu')
const oldIndex = () => import('components/oldIndex/oldIndex')
const routes = [
  {path: '/', redirect: '/menu'},
  {
    path: '/menu',
    name: 'menu',
    component: menu,
    meta: {
      keepAlive: false,
      requireAuth: false
    }
  },
  {
    path: '/oldIndex',
    name: 'oldIndex',
    redirect: '/home/goods',
    component: oldIndex,
    meta: {
      keepAlive: false,
      requireAuth: false
    },
    children: [
      {
        path: '/home/goods',
        component: goods,
        name: 'goods',
        meta: {
          keepAlive: true,
          requireAuth: false
        }
      },
      {
        path: '/home/seller',
        component: seller,
        name: 'seller',
        meta: {
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/home/ratings',
        name: 'ratings',
        component: ratings,
        meta: {
          keepAlive: false,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/list',
    name: 'list',
    component: list,
    meta: {
      keepAlive: false,
      requireAuth: false
    }
  },
  {
    path: '/list/:id',
    name: 'list-show',
    props: true,
    component: listShow
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass: 'active',
  scrollBehavior: () => ({y: 0})
})
export default router
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (JSON.parse(localStorage.getItem('islogin'))) { // 判断本地是否存在access_token
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
  if (to.fullPath === '/login') {
    next({path: from.fullPath})
  }
})
