import Vue from "vue"
import App from "./App"
import axios from './common/http.js';
import uView from "uview-ui"
Vue.use(uView)
// const vconsole = require('vconsole')
// Vue.prototype.$vconsole = new vconsole() // 使用vconsole
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
App.mpType = "app"
// #ifdef APP-PLUS
setTimeout(() => {
  // #endif 
  const app = new Vue({
    ...App,
  })
  app.$mount()
  // #ifdef APP-PLUS
}, 3000)
  // #endif