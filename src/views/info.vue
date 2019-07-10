<template>
  <ul>
   <p>{{ item }}</p>
  </ul>
</template>
<script>
export default {
    data() {
    
return{
    item:{}
}
    
  },
  mounted() {
      // console.log(this.$route)
     this.item = this.getplayer(this.$route.params.id);
  },
  // beforeUpdate(to,from,next) {
  //    this.item = this.getplayer(to.parms.id);
  //    next()
  // },
  methods: {
    getplayer(id) {
      switch (id) {
        case "1":
          return  '我是aaa' ;
        case "2":
          return '我是bbb' ;
        case "3":
          return '我是ccc';
        default:
          return '我是ddd';    
      }
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
  margin: 70px auto;
  width: 400px;
  height: 100px;
  background-color: rgb(142, 142, 211);
  border: 1px solid red;
}
</style>
