import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cinema',
    name: 'Cinema',
    component: () => import('../views/Cinema/index.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('../views/Mine/index.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/Movie/index.vue'),
    children: [
      {
        path: 'city',
        name: 'City',
        component: () => import('../components/City/index.vue')
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('../components/Search/index.vue')
      },
      {
        path: 'comingSoon',
        name: 'ComingSoon',
        component: () => import('../components/CommingSoon/index.vue')
      },
      {
        path: 'nowPlaying',
        name: 'NowPlaying',
        component: () => import('../components/NowPlaying/index.vue')
      },
      {
        path: '/movie',
        redirect: '/movie/nowPlaying'
      }
    ]
  },
  {
    path: '/*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
