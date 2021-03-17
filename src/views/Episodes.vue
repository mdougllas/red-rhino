<template>
    <div class="w-full h-full">
        <div class="w-full h-screen pt-60 overflow-scroll">
            <div class="md:mt-60 flex flex-wrap justify-center">
                <Card />
            </div>
            <Pagination :asset="1" />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    name: 'Episodes',
    components: { Card, Pagination },

    data() {
        return {
            test: this.episodes
        }
    },

    created() {
        this.$store.dispatch('fetchEpisodes', '#')
    }
}
</script>
