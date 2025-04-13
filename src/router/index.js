import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Relatorio from '@/views/Relatorio.vue'
import Unidades from '@/views/Unidades.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/unidades',
      name: 'unidades',
      component: Unidades,
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: Relatorio,
    },
    {
      path: '/minha-unidade',
      name: 'home',
      component: Home,
    },
  ],
})

export default router
