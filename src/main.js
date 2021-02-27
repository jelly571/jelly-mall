import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.use(toast)
 
//用Vue实例作为事件总线
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
