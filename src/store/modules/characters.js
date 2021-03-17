import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    state: {
        info: {},
        results: []
    },
    mutations: {
        setCharacters(state, payload){
            state.info = payload.info
            state.results = payload.results
        }
    },
    actions: {
        fetchCharacters({ commit }, payload) {
            RickAndMortyApi.get(`/${ payload }`)
            .then(res => {
                commit('setCharacters', res.data)
            })
        }
    },
}