import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'

import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = "http://localhost:6578/";

Vue.config.productionTip = false;

if (localStorage.getItem("token")) {
  axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  }
}

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')