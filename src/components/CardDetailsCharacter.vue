<template>
        <div v-if="data" class="w-350 mx-20 pb-40 bg-white mb-60 rounded-25 text-15 shadow-xl">
            <div class="h-400">
                <img
                    class="rounded-t-25 bg-image"
                    :src="getAvatar()"
                    :alt="name"
                />
            </div>
            <div class="flex justify-center mt-20 text-22 font-semibold">
                {{ name }}
            </div>
            <div class="flex justify-center mt-10 text-18">
                Episode: {{ data.name }}
            </div>
            <div class="flex justify-center mt-20">
                    <button
                        class="bg-yellow rounded-25 py-10 px-15 text-black-light text-18 font-bold hover:bg-blue-light hover:text-white"
                        @click="showDetails"
                    >Episode Details</button>
            </div>
        </div>
</template>

<script>
import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    name: 'CardDetails',
    props: ['url', 'name'],

    data() {
        return {
            data: null
        }
    },

    methods: {
        fetchEpisodeDetails() {
            const parameter = this.url.replace('https://rickandmortyapi.com/api/', '')

            RickAndMortyApi.get(parameter)
            .then(res => {
                this.data = res.data
            })
        },

        getAvatar() {
            const image = this.$route.params.id
            return `https://rickandmortyapi.com/api/character/avatar/${ image }.jpeg`
        },

        showDetails() {
            this.$router.push(`/episode/${ this.data.id }`)
        }
    },

    created() {
        this.fetchEpisodeDetails()
    }
}
</script>