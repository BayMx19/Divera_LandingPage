import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TentangKamiView from '@/views/TentangKamiView.vue'
import ProdukView from '@/views/ProdukView.vue'
import TemplatesView from '@/views/TemplatesView.vue'

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
    {
      path: '/produk',
      name: 'produk',
      component: ProdukView,
    },
    {
      path: '/templates',
      name: 'templates',
      component: TemplatesView,
    },
  ],
})

export default router
