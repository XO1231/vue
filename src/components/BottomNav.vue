<template>
  <div>
    <ul class="bottomnav">
      <li class="tab">
        <router-link to="/">
          <p>首页</p>
        </router-link>
      </li>
      <li class="tab">
        <router-link to="/about">
        
          <p>登录</p>
        </router-link>
      </li>
      <li class="tab">
        <router-link to="/My">
        
          <p>我的</p>
        </router-link>
      </li>
      <li class="tab">
        
        <router-link to="/Customer">
         
          <p>用户信息</p>
        </router-link>
      </li>
       <li class="tab">
        
        <router-link to="/moroute">
        
          <p>登录项目</p>
        </router-link>
      </li>
       <li class="tab">
        
        <router-link to="/shop">
        
          <p>购物车</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  data(){
      return{
          show:false
      }
  }
}
</script>
<style scoped >
.router-link-active{
  color:red
}
.bottomnav {
  display: flex;
  width: 100%;
  height: 40px;
  padding: 5px 0;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: space-around;
  align-items: center;
  /* box-sizing: border-box; */
}
.tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
}
.tab div{
    font-size: 16px;
}
.tab p{
    width: 40px;
    height: 20px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    letter-spacing: 1px;
    color:#333;
}
</style>

    
    
