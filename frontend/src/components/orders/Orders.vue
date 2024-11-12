<template>
    <v-card-title>История заказов</v-card-title>
    <div v-if="orders.length">
        <v-card-subtitle v-text="orderCountText"/>
        <v-card-subtitle v-text="completedOrderCountText"/>
    </div>
    <EmptyRecord v-else/>
    <v-timeline side="end">
        <v-timeline-item v-for="order in orders"
            :dot-color="order.status === OrderStatus.Completed ? 'success' : 'primary'">
            <Order :item="order" @update="getOrders" />
        </v-timeline-item>
    </v-timeline>
</template>


<script lang="ts" setup>
import { useOrders } from '@/components/orders/composables/useOrders';
import Order from '@/components/orders/Order.vue';
import EmptyRecord from '@/components/shared/EmptyRecord.vue';
import { OrderStatus } from '@/models/Order';
import { computed } from 'vue';
const { orders, completedOrders, getOrders } = useOrders();

const orderCountText = computed(() => `Количество заказов ${orders.value.length}`)
const completedOrderCountText = computed(() => `Выполненных заказов ${completedOrders.value.length}`)
</script>
