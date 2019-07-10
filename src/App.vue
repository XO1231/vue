<template>
  <div id="app">
   <!-- <div v-if ="$route.meta.footshow"> -->
     <bottom-nav></bottom-nav>
     <!-- </div> -->
   <transition :name="transitionName" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";
 import Head from './views/head'
export default {
  name: "App",
  components: {
    BottomNav,
    Head
  },
  data(){
    return{
      transitionName:'left'
    }
  },
  watch: {  
    '$route' (to, from) {  
//         console.log(from.path)  
      if(to.path === '/'){  
        this.transitionName = 'left';  
      }else {  
        this.transitionName = 'right';  
      }  
    }  
  }  
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: red;
    }
  }
}  
.left-enter{
transform: translateX(-100%);
}
.left-enter-active{
  transition: .3s ease-in;
}
.right-enter{
transform: translateX(100%);
}
.right-enter-active{
  transition: .3s ease-in;
}
.right-leave{
  transform: translateX(100%);
}
.right-leave-active{
  transition: .3s ease-in;
}
</style>
