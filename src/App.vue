<template>
    <div id="app" class="md:flex-col-reverse md:h-screen md:bg-right flex bg-rick-morty-bg bg-cover bg-center">
        <Nav />
        <router-view/>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    components: { Nav }
}
</script>