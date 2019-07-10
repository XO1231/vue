<template>
  <div class="hello">
    <a href="www.baidu.com">点我到百福</a>
       <ul>
      <router-link to="/My/1" tag="li">aa</router-link>
      <router-link to="/My/2" tag="li">bb</router-link>
      <router-link to="/My/3" tag="li">cc</router-link>
      <router-link to="/My/4" tag="li">dd</router-link>
    </ul>
    ----------------------------------------------------------
     <!-- <div @click="add"> 
       a=> {{num}}-- b =>{{num1}}
       </div>
       <div @click="events({name:'王安石',age:35})" >
          {{age}}-- --{{name}}
       </div> -->
  </div>
</template>

<script>
import login from '@/components/login'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      namea:"家加"
    };
  },
 
  // computed: {
  //   // ...mapState({
  //   //   // num:"num" 第一种写法
  //   //   // num:state => state.num 第二种写法 
  //   //   num(state){
  //   //     return this.namea + state.num 
  //   //     // 第三种呢 等同于第二种  只不过第三种可以使用this 方便vuex里面的数据结合本地的数据
  //   //   }

  //   // }),
  //   num(){
  //     return this.$store.state.a.num
  //   },
  //   num1(){
  //     return this.$store.state.b.num
  //   },
  //   // nums(){
  //   //   return this.$store.getters.nums
  //   // },
  //   ...mapGetters({
  //      nums:"nums"
  //     // nums(state){
  //     //   return this.namea + nums
  //     // }
  //   }),
  //   age(){
  //     return this.$store.state.age
  //   },
  //   name(){return this.$store.state.name}
  // },
  methods: {
    // add(){
    //   this.$store.commit('addnum',2)
    // },
    // add(){
    //   this.$store.commit("addNum")
    // },
    ...mapMutations([
    //  addnum: "addnum"
       "addnum"
   ]),
    // events(){
    //   // this.$store.commit(('events'),{name:"王安石",age:35})
    //       this.$store.dispatch(('syncevents'),{name:"王安石",age:35})
    // }
    ...mapActions({
      events:"syncevents"
    })
  },
  components:{
    login
  }
};
</script>


<style scoped lang="scss">
$coloraa:pink;
.hello {
  margin: 70px auto;
  width: 400px;
  height: 1000px;
  background-color: $coloraa;
  border: 1px solid red;
  h3 {
    margin: 70px 0 0;
  }
  a {
    color: #42b983;
    display: block;
    &:hover {
      color: aqua;
    }
  }
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
