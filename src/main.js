// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import Carousel3d from 'vue-carousel-3d';
import PortfolioItem from './components/globalComponent/portfolioItem/ann-portfolio-item.vue'
import Vuex from 'vuex';

import Vuelidate from 'vuelidate'
import VeeValidate from "vee-validate";


Vue.use(VeeValidate);
// Components
Vue.component('ann-portfolio-item', { PortfolioItem})
// Components


// Plugin
Vue.use(Vuex);
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(Carousel3d);
Vue.config.productionTip = false
// Plugin
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
