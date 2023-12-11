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
          path: '/3d_modelling',
          name: '3dModelling',
          component: () => import('../components/Software/3dModelling/3dModelling.vue')
        },
        // /projects/
        {
          path: '/projects/main_portfolio',
          name: 'mainPortfolio',
          component: () => import('../components/Software/Projects/Sites/Portfolios/MainPortfolio.vue')
        },
        {
          path: '/projects/decaf_mechanics',
          name: 'decafMechanics',
          component: () => import('../components/Software/Projects/Sites/Portfolios/DecafMechanics.vue')
        },
        {
          path: '/projects/old_portfolio',
          name: 'oldPortFolio',
          component: () => import('../components/Software/Projects/Sites/Portfolios/OldPortfolio.vue')
        },
      ]
    },
  ]
})

export default router
