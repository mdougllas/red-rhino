<template>
        <div class="w-350 mx-20 h-650 bg-white mb-60 rounded-25 text-15 shadow-xl">
            <div class="h-400">
                <img
                    class="rounded-t-25 bg-image"
                    :src="getAvatar()"
                    alt="Rick & Morty"
                />
            </div>
            <div class="flex justify-center mt-20 text-22 font-semibold">
                {{ data.name }}
            </div>
            <div class="flex justify-center mt-10 text-18">
                {{ data.episode }}
            </div>
            <div class="flex justify-center mt-10 text-18">
                {{ data.air_date }}
            </div>
            <div class="flex justify-center mt-20">
                <Button text="DETAILS" target=test />
            </div>
        </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'Card',
    props: ['data'],
    components: { Button },

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