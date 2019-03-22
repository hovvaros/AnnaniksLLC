import Vue from 'vue'
import Router from 'vue-router'
import homePage from './../components/pages/ann-home-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: homePage
    },
   
  ],
  mode:'history'
})
