import Vue from 'vue'
import Vuex from 'vuex'
import episodes from '@/store/modules/episodes.js'
import characters from '@/store/modules/characters.js'
import favorites from '@/store/modules/favorites.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        episodes,
        characters,
        favorites
    }
})
