<template>
  <div>
   
    <!-- <div>
       <router-view name="info"></router-view>
    </div> -->
   
    <router-link to="/My/My1" tag="li">children路由一</router-link>
    <router-link to="/My/My2" tag="li">children路由二</router-link>

    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <tip :list="list"></tip>
    
  </div>
</template>
<script>
import LoginC from "../components/login";
import tip from "@/components/tip"
import { defaultCoreCipherList } from "constants";
export default {
  name: "My",
  data() {
    return {
      transitionName: "left",
      list:""
    };
  },
    components: { tip },
    created() {
      this.list = this.$route.meta;
    },
};
</script>
<style scoped lang="scss" >
.router-link-active {
  color: red;
}
div {
  margin: 70px auto;
  width: 400px;
  height: 300px;
  background-color: yellow;
  border: 1px solid red;
}
.left-enter {
  transform: translateX(-200%);
}
.left-enter-active {
  transition: 0.3s ease-in;
}
</style>
