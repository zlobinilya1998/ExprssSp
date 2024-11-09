<template>
    <Loader v-if="loading" />
    <div v-else class="products">
        <Product v-for="item in sortedByStockProducts" :item="item" @purchase="getProducts"/>
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/products/Product.vue';
import { useProducts } from '@/components/products/composables/useProducts';
import Loader from '@/components/shared/Loader.vue';

const { loading, sortedByStockProducts, getProducts } = useProducts();
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
        :deep(.product-purchase) {
            margin-top: 20px;
        }
    }
}
</style>