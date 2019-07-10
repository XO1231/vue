const moduleB = {
    namespaced: true,
    state: { num:2 },
    mutations: { 
        addNum(state){
            state.num += 3
        }
     },
    actions: {  },
    
  }
export default moduleB