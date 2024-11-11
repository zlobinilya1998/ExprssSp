<template>
    <div class="d-flex">
        <v-card-title>Товары</v-card-title>
        <CreateProductDialog />
    </div>
    <Loader v-if="loading" />
    <div v-else-if="sortedByStockProducts.length" class="products">
        <Product v-for="item in sortedByStockProducts" :item="item" />
    </div>
    <EmptyRecord v-else />
</template>

<script setup lang="ts">
import Product from '@/components/products/Product.vue';
import { useProducts } from '@/components/products/composables/useProducts';
import EmptyRecord from '@/components/shared/EmptyRecord.vue';
import CreateProductDialog from '@/components/dialog/CreateProductDialog.vue';
import Loader from '@/components/shared/Loader.vue';

const { loading, sortedByStockProducts } = useProducts();
</script>

<style lang="scss" scoped>
.products {
    display: flex;
    gap: 20px;

    .product {
        flex: 0 1 20%;
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