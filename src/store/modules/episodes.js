import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        fetchEpisodes({ commit }, payload) {
            RickAndMortyApi.get(`/episode/${ payload }`)
            .then(res => {
                console.log(res)
            })
        }
    },
}