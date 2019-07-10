<template>
  <div>
    <span v-for="(item , index) in list" :key="index">
      <router-link v-if="item.path" :to="item.path">{{ item.name }} ></router-link>
      <a v-else>{{  item.name}} > </a>
      <!-- <router-view></router-view> -->
    </span>
  </div>
</template>
<script>
export default {
  props: ["list"],
  created() {
    console.log(this.list, 111);
  }
};
</script>
<style lang="scss" scoped>
//    span{
//        display: block;
//        margin-left: 5px;
//    }
</style>


