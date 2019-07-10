<template>
  <div class="about">
    <h1>登录页</h1>
    <div>
      <label for>用户名</label>
      <input type="text" v-model="user.username"/>
    </div>
    <div>
      <label for>密码</label> &nbsp;&nbsp;
      <input type="password"  v-model="user.password"/>
    </div>
    <button @click="getInfo(user)">登录</button>
----------------------------------------------------------
  <div @click="add()" class="mo"> 
       a=> {{num}}---- {{name}}- b =>{{num1}}
       </div>
       <!-- <div @click="events({name:'王安石',age:35})" >
          {{age}}-- --{{name}}
       </div> -->

  </div>
</template>
<script>
export default {
  data(){
    return{
     user:{ 
      username:"ww",
      password:"123"
      }
    }
  },
   created() {
    console.log(this.$store)
  },
  computed: {
     num(){
      return this.$store.state.a.num
    },
    num1(){
      return this.$store.state.b.num
    },
    name(){
      return  this.$store.getters['a/addNums']
    }
  },
  methods:{
    getInfo(user){
      //  sessionStorage.setItem("username", this.user.username)
      //  sessionStorage.setItem("password",this.user.password)
      console.log(this.$router.options.routes)
      var arrs = this.$router.options.routes
      var needs = arrs.find(ele =>ele.name == "Customer")
    
      needs.meta.username = this.user.username;
      needs.meta.password = this.user.password;
        console.log(needs)
      this.$router.push({name:"Customer"})
    //  this.$router.push(
    //    {name:"Customer",
    //    query: {
    //         user:user
    //       }
    //    })
      
    },
   add(){
     this.$store.commit("a/addNum",4)
   }
  }
}
</script>
<style  scoped lang="scss">
.about {
  margin: 70px auto;
  width: 400px;
  height: 1000px;
  background-color: blue;
  border: 1px solid red;
   .mo{
     color:aquamarine;
   }
}
.about>div{
  margin-top:30px;
}
.about>div>input{
  height: 20px;
}
.about>button{
 
  margin-top:30px;
   
}
</style>
