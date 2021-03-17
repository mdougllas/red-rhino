import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    state: {
        info: {},
        results: [],
        episodeDetails: {}
    },
    mutations: {
        setEpisodes(state, payload){
            state.info = payload.info
            state.results = payload.results
        },

        setEpisode(state, payload){
            state.episodeDetails = payload
        }
    },

    actions: {
        fetchEpisodes({ commit }, payload) {
            RickAndMortyApi.get(`/${ payload }`)
            .then(res => {
                commit('setEpisodes', res.data)
            })
        },

        fetchEpisode({ commit }, payload) {
            RickAndMortyApi.get(`/episode/${ payload }`)
            .then(res => {
                commit('setEpisode', res.data)
            })
        }
    },
}