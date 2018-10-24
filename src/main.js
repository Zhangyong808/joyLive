// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Mint from 'mint-ui'
import { Picker } from 'mint-ui';
Vue.component(Picker.name, Picker);

Vue.use(VueAxios, axios,Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
