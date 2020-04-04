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
        path: 'detail/1/:movieId',
        name: 'Detail',
        // 命名视图
        components: {
          default: () => import('../components/NowPlaying/index.vue'),
          detail: () => import('../views/Movie/detail.vue')
        },
        // 多视图
        props: {
          detail: true
        }
      },
      {
        path: 'detail/2/:movieId',
        name: 'Detail',
        // 命名视图
        components: {
          default: () => import('../components/CommingSoon/index.vue'),
          detail: () => import('../views/Movie/detail.vue')
        },
        // 多视图
        props: {
          detail: true
        }
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
