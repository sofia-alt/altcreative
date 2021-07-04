import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    redirect: { name: 'HomePage' },
    component: () => import('@/layouts/MainLayout'),
    children: [
      { 
        path: '/home',
        name: 'HomePage',
        component: () => import('@/views/HomePage') 
      },
      {
        path: 'portfolio',
        name: 'PortfolioPage',
        component: () => import('@/views/PortfolioPage') 
      },
      {
        path: 'shop',
        name: 'ShopPage',
        component: () => import('@/views/ShopPage') 
      },
      {
        path: 'contacts',
        name: 'ContactsPage',
        component: () => import('@/views/ContactsPage') 
      },
      {
        path: 'blog',
        name: 'BlogPage',
        component: () => import('@/views/BlogPage') 
      }
    ]
  }
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
