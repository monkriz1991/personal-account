export const state = ()=>({
    rentcar:[],
})

export const mutations = {
    setRent(state,rentcar){
        state.rentcar = rentcar
    },
}

export const actions = {

    async getallRent({commit},filter){
        let results = await this.$axios.$get(`/rents/get/my/rents`);
        console.log(results)
        commit('setRent',results)
        return results
      },
}

export const getters = {
    rentcar: state => state.rentcar,
    
}


export default {
    state,
    mutations,
    actions,
    getters,
  }