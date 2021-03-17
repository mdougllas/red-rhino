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
                <button :class="favorite ? 'text-red' : 'text-gray'" class="ml-40 icon-favorites">Favorite</button>
            </div>
            <div class="flex justify-center mt-20">
                <Button :link="asset === 1 ? data.url : 3" :asset="this.asset" :id="data.id" />
            </div>
        </div>
</template>

<script>
import Button from '@/components/Button.vue'

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
        }
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