import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css'
Vue.use(ElementUI);
Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  window.document.title = to.meta.title;
  next();  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
