import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/Main.vue';
import Products from '@/components/products/Products.vue';
import Customers from '@/components/customers/Customers.vue';
import Orders from '@/components/orders/Orders.vue';

const routes = [
  { path: '/', name: 'main', component: Main },
  { path: '/products', name: 'products', component: Products },
  {
    path: '/customer',
    children: [
      {
        path: '',
        name: 'customers',
        component: Customers,
      },
    ]
  },
  { path: '/orders', name: 'orders', component: Orders },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {
  router,
}