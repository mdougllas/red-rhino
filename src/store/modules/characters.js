import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    state: {
        info: {},
        results: [],
        characterDetails: {}
    },
    mutations: {
        setCharacters(state, payload){
            state.info = payload.info
            state.results = payload.results
        },

        setCharacterDetails(state, payload){
            state.characterDetails = payload
        }
    },

    actions: {
        fetchCharacters({ commit }, payload) {
            RickAndMortyApi.get(`/${ payload }`)
            .then(res => {
                commit('setCharacters', res.data)
            })
        },

        fetchCharacter({ commit }, payload) {
            RickAndMortyApi.get(`/character/${ payload }`)
            .then(res => {
                commit('setCharacterDetails', res.data)
            })
        }
    }
}