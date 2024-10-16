import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountUpView from '../views/CountUpView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/count-up',
          name: 'count-up',
          component: CountUpView
        },
      ],
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
  ]
})

export default router
