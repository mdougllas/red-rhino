<template>
        <div v-if="data" class="w-350 mx-20 pb-40 bg-white mb-60 rounded-25 text-15 shadow-xl">
            <div class="h-400">
                <img
                    class="rounded-t-25 bg-image"
                    :src="data.image"
                    :alt="data.name"
                />
            </div>
            <div class="flex justify-center mt-20 text-22 font-semibold">
                {{ data.name }}
            </div>
            <div class="flex justify-center mt-10 text-18">
                Episode: {{ name }}
            </div>
            <div class="flex justify-center mt-20">
                    <button
                        class="bg-yellow rounded-25 py-10 px-15 text-black-light text-18 font-bold hover:bg-blue-light hover:text-white"
                        @click="showDetails"
                    >Character Details</button>
            </div>
        </div>
</template>

<script>
import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'
import { mapState } from 'vuex'

export default {
    name: 'CardDetails',
    props: ['url', 'name'],

    data() {
        return {
            data: null
        }
    },

    methods: {
        fetchDetails() {
            const parameter = this.url.replace('https://rickandmortyapi.com/api/', '')

            RickAndMortyApi.get(parameter)
            .then(res => {
                this.data = res.data
            })
        },

        showDetails() {
            this.$router.push(`/character/${ this.data.id }`)
        }
    },

    computed: {
        ...mapState({
            episode: state => state.episodes.episodeDetails
        })
    },

    created() {
        this.fetchDetails()
    }
}
</script>