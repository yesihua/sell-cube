import Vue from 'vue'
import './cube-ui'
import VueRouter from 'vue-router'
import App from './App.vue'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import './common/stylus/index.styl'
import './register'
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: goods }
]
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  linkActiveClass: 'active'
})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
