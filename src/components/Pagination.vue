<template>
    <div class="text-center">
        <ul class="flex justify-center text-15">
            <li class="p-5">
                <button @click="goTo">&#10094;&#10094;</button>
            </li>
            <li class="p-5">
                <button>&#10094;</button>
            </li>
            <span v-for="item in pages" :key="item">
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
            pages: this.getPages()
        }
    },

    methods: {
        async getPages() {
            const state = await this.state
            console.log("test", state.episodes.info.pages)
            let query

            switch(this.asset){
                case 1:
                    console.log("asset is episodes", state)
                    query = state.episodes.info.pages
                break
            }
            console.log("test", state)
            let arr = []
            const max = query <= 5 ? query : 5
            for(var i = 1; i <= max; i++){
                arr.push(i)
            }

            return arr
        },

        getAsset() {
            const url = this.data.info.next ? this.data.info.next : this.data.info.prev
            console.log("str", url)
            // const asset = url.replace('https://rickandmortyapi.com/api/', '')
        },

        goTo() {

        }
    },

    computed: {
        ...mapState({
            state: state => state
        })
    },

    created(){
        console.log("state", this.state)
        this.getPages()
        // this.getAsset()

    }
}
</script>