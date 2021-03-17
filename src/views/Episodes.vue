<template>
    <div class="w-full h-full">
        <div class="w-full h-screen pt-60 overflow-scroll">
            <Pagination :data="episodes" />
            <div class="md:mt-60 flex flex-wrap justify-center">
                <div v-for="item in episodes.results" :key="item.id">
                    <Card :data="item" />
                </div>
            </div>
            <Pagination :data="episodes" />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import { mapState } from 'vuex'

export default {
    name: 'Episodes',
    components: { Card, Pagination },

    data() {
        return {
            test: this.episodes
        }
    },

    computed: {
        ...mapState({
            episodes: state => state.episodes
        })
    },

    created() {
        this.$store.dispatch('fetchEpisodes', 'episode')
    }
}
</script>
