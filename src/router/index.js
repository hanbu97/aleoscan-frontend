import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:"/map"
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/news',
    //   name: 'news',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/NewsView.vue')
    // },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue')
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('../views/NavigationView.vue')
    }

  ]
})

export default router
