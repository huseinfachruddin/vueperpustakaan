import Vue from 'vue'
import Vuex from 'vuex'




Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        loading:false
    },
    mutations:{
        setLoading(state,data){
            state.loading=data
        }
    },
    actions:{

    },
    modules:{

    }
})