<template>
    <div class="text-center my-40">
        <ul v-if="data.info" class="flex flex-wrap justify-center text-15">
            <li class="p-5">
                <button @click="goTo">❮❮</button>
            </li>
            <li v-if="data.info.prev" class="p-5">
                <button @click="goTo">❮</button>
            </li>
            <span v-for="item in data.info.pages" :key="item">
                <li class="p-5">
                    <button @click="goTo">
                        {{ item }}
                    </button>
                </li>
            </span>
            <li v-if="data.info.next" class="p-5">
                <button @click="goTo">❯</button>
            </li>
            <li class="p-5">
                <button @click="goTo">❯❯</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['data', 'asset'],

    methods: {
        goTo(e) {
            const url = this.data.info.next ? this.data.info.next : this.data.info.prev
            const attributes = url.replace('https://rickandmortyapi.com/api/', '')
            const fetchType = attributes.substring(0, attributes.indexOf('?'))
            const action = this.asset === 1 ? 'fetchEpisodes' : 'fetchCharacters'

            switch(e.target.innerText){
                case '❮❮':
                    this.$store.dispatch(action, `${ fetchType }?page=1`)
                break

                case '❮':
                    const prev = this.data.info.prev.replace('https://rickandmortyapi.com/api/', '')
                    this.$store.dispatch(action, prev)
                break

                case '❯':
                    const next = this.data.info.next.replace('https://rickandmortyapi.com/api/', '')
                    this.$store.dispatch(action, next)
                break

                case '❯❯':
                    const last = this.data.info.pages
                    this.$store.dispatch(action, `${ fetchType }?page=${ last }`)
                break

                default:
                    this.$store.dispatch(action, `${ fetchType }?page=${ e.target.innerText }`)
            }
        }
    }
}
</script>