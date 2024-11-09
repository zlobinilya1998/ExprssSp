<template>
    <div>Количество заказов {{ orders.length }}</div>
    <Order v-for="order in orders" :item="order"/>
</template>


<script lang="ts" setup>
import { useOrders } from '@/components/orders/composables/useOrders';
import Order from '@/components/orders/Order.vue';

const { orders } = useOrders();


</script>
