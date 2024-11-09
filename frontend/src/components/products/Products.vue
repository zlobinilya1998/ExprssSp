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


    // :deep(.product) {
    //     flex: 20%;
    //     text-align: left;
    //     display: flex;
    //     flex-direction: column;

    //     &-description {
    //         margin-top: auto;
    //         display: -webkit-box;
    //         -webkit-box-orient: vertical;
    //         -webkit-line-clamp: 2;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //     }
    // }
}
</style>