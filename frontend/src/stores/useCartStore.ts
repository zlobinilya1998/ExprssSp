import { Product } from '@/models/Product';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
    const items = ref<Product[]>([]);

    const addToCart = (item: Product) => items.value.push(item)

    return { items, addToCart }
})