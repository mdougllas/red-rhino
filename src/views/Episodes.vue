<template>
    <div class="w-full h-full">
        <div class="w-full h-screen flex flex-wrap justify-center pt-60 overflow-scroll">
            <Card />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
    name: 'Episodes',
    components: { Card },

    data() {
        return {
            test: "test"
        }
    },

    created() {
        this.$store.dispatch('fetchEpisodes', '')
    }
}
</script>
