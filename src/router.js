import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // redirect: '/Customer' 
    {
      path: '/' ,
      name: 'home',
      component: Home,
      meta: { title:"主页"},
    },
    {
      path: '/shop' ,
      name: 'shop',
      component: () => import('./views/shop.vue'),
    },
    {
      path: '/moroute' ,
      name: 'moroute',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
      component: () => import('./views/Moroute.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: { title:"登录"},
      
    },
    {
      path: '/My',
      name: 'My',
      component: () => import('./views/My.vue'),
      meta:[ 
        { name: '项目管理列表',path: '/My/My2' },
        { name: '项目列表', path: '/My/My1'  },
        { name: '里程碑' }],
    
      children: [{
        path: 'My1',
        name: 'My1',
        component: () => import('./views/My1.vue'),
      },
      {
        path: 'My2',
        name: 'My2',
        component: () => import('./views/My2.vue'),
      }
      ]
    },
    {
      path: '/My/:id',
      name: 'info',
      component: () => import('./views/info.vue'),
    },
    {
      path: '/Customer',
      name: 'Customer',
      component: () => import('./views/Customer.vue'),
      meta:[ 
        { username: "" ,password:""},
       
      ],
      beforeEnter: (to, from, next) => {
        
        if(to.meta.username &&to.meta.username){
          next()
        }else{
          alert("还没有登录,请先登录,跳转到登录页")
          next("/about")
        }
      // var username = sessionStorage.getItem("username")
      // var password = sessionStorage.getItem("password")
      //   if(username &&password){
      //     next()
      //   }else{
      //     alert("还没有登录,请先登录,跳转到登录页")
      //     next("/about")
      //   }  
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
  // scrollBehavior (to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // }
})
