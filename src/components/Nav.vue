<template>
    <div class="md:w-full md:h-80 h-screen w-325 text-22 bg-black bg-opacity-75">
        <div class="md:hidden w-full h-80 flex flex-col justify-center bg-black-light bg-opacity-75 text-center text-yellow">
            Rick & Morty Fan Site
        </div>
        <div class="md:flex-row md:h-80 md:text-15 md:justify-center flex flex-col items-center">
            <router-link to="/" class="p-10 m-30">Episodes</router-link>
            <router-link to="/about" class="p-10 m-30">Characters</router-link>
            <router-link to="/about" class="p-10 m-30">Favorites</router-link>
        </div>
    </div>
</template>

<style scoped>
a {
    font-weight: bold;
    color: #fff;
}

a::before{

}

.router-link-exact-active {
    color: #363636;
    background-color: #E3AE00;
}
</style>