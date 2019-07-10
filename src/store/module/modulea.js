const moduleA = {   // moduleA
    namespaced: true,
    state: { num:1 },
    mutations: {  
        addNum(state,val){
            state.num += val  // 调用的时候执行 this.$store.commit('a/addNum',3)
        }
    },
    actions: { 
        syncAddNum(context,val){
            context.commit("addNum",val)  // 调用的时候执行 this.$store.dispatch('a/syncAddNum',3)
        }
    },
    getters: { 
        addNums(state){
            return state.num + "元 "  // 调用的时候执行 this.$store.getters['a/addNum2']
        }
    }
}
export default moduleA