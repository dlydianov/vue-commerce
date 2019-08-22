import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { authService } from '@/services/authServices'

window.axios = require('axios')

Vue.config.productionTip = false

Vue.mixin(authService)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
