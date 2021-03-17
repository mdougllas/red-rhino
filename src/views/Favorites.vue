<template>
    <div class="w-full h-full">
        <div class="w-full h-screen pt-60 overflow-scroll">
            <div class="md:mt-60 flex flex-wrap justify-center">
                <div v-for="item in data" :key="item.id">
                    <CardFavorite :data="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CardFavorite from '@/components/CardFavorite.vue'
import { mapState } from 'vuex'
import { RickAndMortyApi } from '@/apis/rickAndMortyApi.js'

export default {
    name: 'Characters',
    components: { CardFavorite },

    data() {
        return {
            data: []
        }
    },

    computed: {
        ...mapState({
            favorites: state => state.favorites.id
        })
    },

    methods: {
        fetchFavoriteDetails() {
            if(this.favorites.length > 0){
                let parameter = this.favorites.toString()
                RickAndMortyApi.get(`episode/${ parameter }`)
                .then(res => {
                    this.data = res.data.length > 1 ? res.data : [res.data]
                })
            }
        },
    },

    created(){
        this.fetchFavoriteDetails()
    }
}
</script>
