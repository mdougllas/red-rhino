import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    state: {
        info: {},
        results: []
    },
    mutations: {
        setEpisodes(state, payload){
            state.info = payload.info
            state.results = payload.results
        }
    },
    actions: {
        fetchEpisodes({ commit }, payload) {
            RickAndMortyApi.get(`/episode/${ payload }`)
            .then(res => {
                commit('setEpisodes', res.data)
            })
        }
    },
}