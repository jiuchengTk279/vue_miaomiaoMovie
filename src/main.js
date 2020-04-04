import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios的已引入
import axios from 'axios'
Vue.prototype.$axios = axios;

// 图片过滤器
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
});

// 引入scroll，注册为全局组件
import Scroll from '@/components/Scroll'
Vue.component('Scroll', Scroll)

// 引入Loading，注册为全局组件
import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
