<template>
<div class="w-full">
    <div class="w-full h-full text-center">
        <div class="w-full h-screen pt-60 overflow-scroll">
            <div class="md:mt-60 flex flex-wrap justify-center">
                <div v-for="(item, index) in character.episode" :key="index">
                    <CardDetailsCharacter :url="item" :name="character.name" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import CardDetailsCharacter from '@/components/CardDetailsCharacter.vue'

export default {
    name: 'CharacterDetails',
    components: { CardDetailsCharacter },

    data() {
        return {
            id: this.$route.params.id
        }
    },

    computed: {
        ...mapState({
            character: state => state.characters.characterDetails
        })
    },

    created() {
        this.$store.dispatch('fetchCharacter', `${ this.id }`)
    }
}
</script>