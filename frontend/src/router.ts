import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/Main.vue';
import Products from '@/components/products/Products.vue';
import Customers from '@/components/customers/Customers.vue';

const routes = [
  { path: '/', name: 'main', component: Main },
  { path: '/products', name: 'products', component: Products },
  { path: '/customers', name: 'customers', component: Customers },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {
  router,
}