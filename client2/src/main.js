import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';

import bFormSlider from 'vue-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

Vue.use(bFormSlider)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
