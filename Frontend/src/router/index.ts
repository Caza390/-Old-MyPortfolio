import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabsView from '../components/TabsView.vue'
import CategoryView from '../components/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:tabs',
      name: 'tabs',
      component: TabsView,
    },
    {
      path: '/:tabs/:category',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: () => import('../views/ContactMeView.vue')
    },
  ]
})

export default router
