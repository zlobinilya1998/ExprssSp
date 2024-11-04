<template>
    <div class="products">
        <Product v-for="item in products" :item="item" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Product from '@/components/Product.vue';
import { ProductService } from '@/services/ProductService';
import { Product as TProduct } from '@/models/Product';


const products = ref<TProduct[]>([])

const getProducts = async () => {
    products.value = await ProductService.getAll();
}


onMounted(() => {
    getProducts();
})

</script>

<style lang="scss">
.products {
    display: flex;
    gap: 20px;
    .product {
        flex: 20%;
        text-align: left;
        display: flex;
        flex-direction: column;
        &-description {
            margin-top: auto;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>