import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
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
          component: () => import('../components/Software/Projects.vue')
        },
        {
          path: '/game_dev',
          name: 'gameDev',
          component: () => import('../components/Software/GameDev.vue')
        },
        {
          path: '/blender',
          name: 'blender',
          component: () => import('../components/Software/Blender.vue')
        },
      ]
    },
  ]
})

export default router
