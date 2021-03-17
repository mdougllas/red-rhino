<template>
    <div class="w-full h-full">
        <div class="w-full h-screen pt-60 overflow-scroll">
            <Pagination :data="characters" :asset="2" />
            <div class="md:mt-60 flex flex-wrap justify-center">
                <div v-for="item in characters.results" :key="item.id">
                    <Card :data="item" :asset="2" />
                </div>
            </div>
            <Pagination :data="characters" :asset="2" />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'
import { mapState } from 'vuex'

export default {
    name: 'Characters',
    components: { Card, Pagination },

    computed: {
        ...mapState({
            characters: state => state.characters
        })
    },

    created() {
        this.$store.dispatch('fetchCharacters', 'character')
    }
}
</script>
