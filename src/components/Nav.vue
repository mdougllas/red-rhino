<template>
    <div class="md:w-full md:h-80 h-screen w-325 text-22 bg-black bg-opacity-75">
        <div class="md:hidden w-full h-80 flex flex-col justify-center bg-black-light bg-opacity-75 text-center text-yellow">
            Rick & Morty Fan Site
        </div>
        <div class="md:flex-row md:h-80 md:text-15 md:justify-center flex flex-col items-center">
            <router-link to="/" class="p-10 m-20 rounded-15 icon-episodes">Episodes</router-link>
            <router-link to="/characters" class="p-10 m-20 rounded-15 icon-characters">Characters</router-link>
            <router-link to="/favorites" class="p-10 m-20 rounded-15 icon-favorites">Favorites</router-link>
        </div>
    </div>
</template>

<style scoped>
a {
    font-weight: bold;
    color: #fff;
}

.icon-favorites:before {
    font-family: 'icomoon';
    content: "\e900";
    margin: 0.3rem;
}

.icon-characters:before {
    font-family: 'icomoon';
    content: "\e902";
    margin: 0.3rem;
}

.icon-episodes:before {
    font-family: 'icomoon';
    content: "\e901";
    margin: 0.3rem;
}

.router-link-exact-active {
    color: #363636;
    background-color: #E3AE00;
}
</style>