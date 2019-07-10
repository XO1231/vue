<template>
  <div>
    <p>用户名 {{username}}</p>
    <p>密码   {{password}}</p>
    <button @click="logout">退出登录</button>
    <Transtion></Transtion>
     
  </div>
</template>
<script>
import Transtion from './transtion'

export default {
  name: "Customer",
  data() {
    return {
      username: "",
      password: "",
      list:""
    };
  },
  components:{
    Transtion,

  },
  created() {
    this.getParams();
   this.username = this.$route.meta.username;
   this.password  = this.$route.meta.password;
  },
     
  methods: {
    getParams() {
    //   const routerParams = this.$route.query.user;
    //   this.username = routerParams.username
    //   this.password =routerParams.password
    //  this.username = sessionStorage.getItem("username")
    //  this.password = sessionStorage.getItem("password")  
    },
    logout(){
        this.$router.options.routes[4].meta.username = ""
        this.$router.options.routes[4].meta.password= "";
        // sessionStorage.removeItem("username")
        // sessionStorage.removeItem("password")
        this.$router.push({name:"about"})
    }
  },
//   watch: {
//     '$route': 'getParams'
//   }
};
</script>
<style  scoped >
div {
  margin: 70px auto;
  width: 400px;
  height: 1000px;
  background-color: blue;
  border: 1px solid red;
  color: red
}
</style>

