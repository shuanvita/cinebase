import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage'),
  },
  // {
  //   name: 'not-found',
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('@/pages/NotFoundPage'),
  // },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
