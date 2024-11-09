<template>
    <div class="products">
        <Product v-for="item in products" :item="item" />
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/products/Product.vue';
import { useProducts } from '@/components/products/composables/useProducts';

const { products } = useProducts();
</script>

<style lang="scss" scoped>
.products {
    display: flex;
    gap: 20px;

    .product {
        flex: 20%;
        text-align: left;
        display: flex;
        flex-direction: column;

        :deep(.product-description) {
            margin-top: auto;
            @include mixins.text-clamp(2)
        }
    }
}
</style>