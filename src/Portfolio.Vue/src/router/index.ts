import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'about',
          component: () => import('../components/About.vue')
        },
        {
          path: '/contact_me',
          name: 'contactMe',
          component: () => import('../components/ContactMe.vue')
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../components/Software/Projects/Projects.vue')
        },
        {
          path: '/game_dev',
          name: 'gameDev',
          component: () => import('../components/Software/GameDev/GameDev.vue')
        },
        {
          path: '/blender',
          name: 'blender',
          component: () => import('../components/Software/Blender/Blender.vue')
        },
      ]
    },
  ]
})

export default router
