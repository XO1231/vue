import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import moduleA from "./module/modulea"
import moduleB from "./module/moduleb"
 const store = new Vuex.Store({
    modules: {
        a: moduleA,   
        b: moduleB
      },
     state:{
     },
     mutations:{
     },
     getters:{},
     actions:{}
 })
export default store
    