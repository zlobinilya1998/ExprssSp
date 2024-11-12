import { createRouter, createWebHistory } from 'vue-router'

import Main from '@/components/Main.vue';
import Products from '@/components/products/Products.vue';
import Customers from '@/components/customers/Customers.vue';
import Orders from '@/components/orders/Orders.vue';
import CreateCustomer from './components/customers/CreateCustomer.vue';
import Cart from './components/cart/Cart.vue';

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
      {
        path: 'create',
        name: 'createCustomer',
        component: CreateCustomer,
      },
    ]
  },
  { path: '/orders', name: 'orders', component: Orders },
  { path: '/cart', name: 'cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {
  router,
}