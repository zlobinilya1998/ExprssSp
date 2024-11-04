<template>
    <div class="product">
        <div class="product-name" v-text="item.name"/>
        <div class="product-description" v-text="item.description"/>
        <div class="product-price" v-text="priceText"/>
        <div class="product-stock" v-text="stockText"/>
        <div class="product-customer" v-text="customerText"/>
    </div>
</template>

<script lang="ts" setup>
import { Product } from '@/models/Product';
import { computed } from 'vue';


interface IProps {
    item: Product,
}

const props = defineProps<IProps>()

const stockText = computed(() => `Осталось ${props.item.stock} шт.`)
const customerText = computed(() => `Продавец ${props.item.customer.name}`)
const priceText = computed(() => `${props.item.price} руб.`)

</script>

<style>
</style>