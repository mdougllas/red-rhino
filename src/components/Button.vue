<template>
    <button
        class="w-125 h-40 bg-yellow rounded-25 text-black-light text-18 font-bold hover:bg-blue-light hover:text-white"
        @click="showDetails"
    >DETAILS</button>
</template>

<script>
export default {
    name: 'Button',
    props: ['link', 'asset', 'id'],

    methods: {
        showDetails() {
            const parameter = () => {
                switch(this.asset){
                    case 1:
                    return `/episode/${ this.id }`

                    case 2:
                    return `/character/${ this.id }`

                    default:
                        console.log("link", this.link)
                    return this.link.replace('https://rickandmortyapi.com/api', '')
                }
            }
            this.$router.push(parameter())
        }
    }
}
</script>

