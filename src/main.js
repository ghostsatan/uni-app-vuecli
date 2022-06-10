import Vue from "vue"
import App from "./App"
import axios from './common/http.js';


import uView from "uview-ui"
Vue.use(uView)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
App.mpType = "app"

const app = new Vue({
  ...App,
})
app.$mount()
