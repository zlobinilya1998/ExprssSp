<template>
    <div>Количество заказов {{ orders.length }}</div>
    <v-timeline side="end">
        <v-timeline-item v-for="order in orders" :dot-color="order.status === OrderStatus.Completed ? 'success' : 'primary'">
            <Order :item="order" @update="getOrders" />
        </v-timeline-item>
    </v-timeline>
</template>


<script lang="ts" setup>
import { useOrders } from '@/components/orders/composables/useOrders';
import Order from '@/components/orders/Order.vue';
import { OrderStatus } from '@/models/Order';
const { orders, getOrders } = useOrders();

</script>
