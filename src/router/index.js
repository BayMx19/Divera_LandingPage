import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TentangKamiView from '@/views/TentangKamiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tentang-kami',
      name: 'tentang-kami',
      component: TentangKamiView,
    },
  ],
})

export default router
