import { createRouter, createWebHistory } from 'vue-router'

import Products from '@/components/products/Products.vue';
import Customers from '@/components/customers/Customers.vue';

const routes = [
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