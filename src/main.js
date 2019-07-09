import Vue from 'vue'
import './cube-ui'
import router from './router'
import App from './App.vue'
import './common/stylus/index.styl'
import './register'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: 'dist/loading.gif'
})
new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')
