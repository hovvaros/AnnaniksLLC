import Vuex from 'vuex'
import Vue from 'vue'
import Massage from './moduls/massage'
Vue.use(Vuex)

export default new Vuex.Store({
modules:{
    Massage,
}
})

