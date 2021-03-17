<template>
<div class="w-full">
    <div class="w-full h-full text-center">
        <div class="w-full h-screen pt-60 overflow-scroll">
            <div class="md:mt-60 flex flex-wrap justify-center">
                <div v-for="(item, index) in episode.characters" :key="index">
                    <CardDetailsEpisode :url="item" :name="episode.name" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import CardDetailsEpisode from '@/components/CardDetailsEpisode.vue'

export default {
    name: 'EpisodeDetails',
    components: { CardDetailsEpisode },

    data() {
        return {
            id: this.$route.params.id
        }
    },

    computed: {
        ...mapState({
            episode: state => state.episodes.episodeDetails
        })
    },

    created() {
        this.$store.dispatch('fetchEpisode', `${ this.id }`)
    }
}
</script>