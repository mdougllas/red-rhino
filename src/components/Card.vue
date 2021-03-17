<template>
        <div class="w-350 mx-20 h-650 bg-white mb-60 rounded-25 text-15 shadow-xl">
            <div class="h-400">
                <img
                    class="rounded-t-25 bg-image"
                    :src="asset === 1 ? getAvatar() : data.image"
                    :alt="asset === 1 ? 'Rick & Morty' : data.name"
                />
            </div>
            <div class="flex justify-center mt-20 text-22 font-semibold">
                {{ data.name }}
            </div>
            <div class="flex justify-center mt-10 text-18">
                {{ asset === 1 ? data.episode : data.species }}
            </div>
            <div class="flex justify-center mt-10 text-18">
                {{ asset === 1 ? data.air_date : data.gender }}
                <button
                v-if=" asset === 1"
                    :class="favorites.includes(data.id) ? 'text-red' : 'text-gray'"
                    class="ml-40 icon-favorites"
                    @click="checkFavorite"
                >Favorite</button>
            </div>
            <div class="flex justify-center mt-20">
                <Button :link="asset === 1 ? data.url : 3" :asset="this.asset" :id="data.id" />
            </div>
        </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapState } from 'vuex'

export default {
    name: 'Card',
    props: ['data', 'asset'],
    components: { Button },

    data() {
        return {
            favorite: false
        }
    },

    methods: {
        getAvatar() {
            function randomize(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            return `https://rickandmortyapi.com/api/character/avatar/${ randomize(1, 670) }.jpeg`
        },

        checkFavorite(){
            if(this.favorites.length < 1){
                this.add()
                this.favorite = true
            } else {
                if(this.favorites.includes(this.data.id)){
                    this.remove()
                    this.favorite = false
                } else {
                    this.add()
                    this.favorite = true
                }
            }
        },

        add() {
                this.$store.dispatch('fetchFavorites', this.data.id)
        },

        remove() {
            this.$store.commit('removeFavorites', this.data.id)
        }
    },

    computed: {
        ...mapState({
            favorites: state => state.favorites.id
        })
    }
}
</script>

<style scoped>
.icon-favorites:before {
    font-family: 'icomoon';
    content: "\e900";
    margin: 0.3rem;
}
</style>