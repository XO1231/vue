// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     name:"李白",
//     age:"30",
//     num:3
//   },
//   // 相当于计算属性
//   getters:{
//      nums(state){
//       return state.num +"圆角分分"
//      }
//   },
//   mutations: {
//        addnum(state,val,){
//         state.num += val
//        },
//       //  events(state,val){
//       //   state.name = val.name
//       //   state.age = val.age
//       //  }
//        events(state,{name,age}){
//         // setTimeout(() => {
//           state.name = name
//         state.age = age
//         // },1000);
//        }
//   },
//   actions: {
//     //  syncevents(context,{name,age}){
//     //   console.log(context)
//     //   setTimeout(() => {
//     //   context.commit('events',{name,age})
//     //   },400);
//     //  },
//      syncevents({commit},{name,age}){
//       setTimeout(() => {
//        commit('events',{name,age})
//       },400);
//      },
//   }
// })
