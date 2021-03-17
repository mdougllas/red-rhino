export default {
    state: {
        id: []
    },

    mutations: {
        setFavorites(state, payload){
            state.id.push(payload)
        },

        removeFavorites(state, payload){
            state.id.map((e, i, a) => {
                if(e == payload){
                    a.splice(i, 1)
                }
            })
        }
    },

    actions: {
        fetchFavorites({ commit }, payload){
            commit( 'setFavorites', payload )
        }

    }
}