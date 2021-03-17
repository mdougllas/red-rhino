import Vue from 'vue'
import VueRouter from 'vue-router'
import Episodes from '../views/Episodes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Episodes
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../views/Favorites.vue')
  },
  {
    path: '/episode/:id',
    name: 'EpisodeDetails',
    component: () => import(/* webpackChunkName: "episodeDetails" */ '../views/EpisodeDetails.vue')
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: () => import(/* webpackChunkName: "characterDetails" */ '../views/CharacterDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
