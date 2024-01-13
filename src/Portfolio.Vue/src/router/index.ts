import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
          name: 'About',
          component: () => import('../components/About.vue')
        },
        {
          path: '/contact_me',
          name: 'Contact Me',
          component: () => import('../components/ContactMe.vue')
        },
        {
          path: '/projects',
          name: 'Projects',
          component: () => import('../components/Software/Projects/Projects.vue')
        },
        {
          path: '/game_dev',
          name: 'Game Dev',
          component: () => import('../components/Software/GameDev/GameDev.vue')
        },
        {
          path: '/3d_modelling',
          name: '3D Modelling',
          component: () => import('../components/Software/3dModelling/3dModelling.vue')
        },
        // /projects/
        {
          path: '/projects/main_portfolio',
          name: 'Main Portfolio',
          component: () => import('../components/Software/Projects/Sites/Portfolios/MainPortfolio.vue')
        },
        {
          path: '/projects/decaf_mechanics',
          name: 'Decaf Mechanics',
          component: () => import('../components/Software/Projects/Sites/Portfolios/DecafMechanics.vue')
        },
        {
          path: '/projects/old_portfolio',
          name: 'Old PortFolio',
          component: () => import('../components/Software/Projects/Sites/Portfolios/OldPortfolio.vue')
        },
        // /game_dev/
        {
          path: '/game_dev/slender-man',
          name: 'SlenderMan',
          component: () => import('../components/Software/GameDev/Games/SlenderMan.vue')
        },
      ]
    },
  ]
})

export default router
