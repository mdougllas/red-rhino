<template>
    <div class="text-center">
        <ul v-if="state.episodes.info" class="flex justify-center text-15">
            <li class="p-5">
                <button @click="goTo">&#10094;&#10094;</button>
            </li>
            <li class="p-5">
                <button>&#10094;</button>
            </li>
            <span v-for="item in state.episodes.info.pages" :key="item">
                <li class="p-5">{{ item }}</li>
            </span>
            <li class="p-5">
                <button>&#10095;</button>
            </li>
            <li class="p-5">
                <button>&#10095;&#10095;</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Pagination',
    props: ['asset'],

    data() {
        return {
            pages: 0
        }
    },

    methods: {
        goTo() {

        }
    },

    computed: {
        ...mapState({
            state: state => state
        })
    },
}
</script>