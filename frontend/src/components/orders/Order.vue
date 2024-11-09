<template>
    <div class="order">
        <div class="order-creation-date">Заказ от {{ creationDate }}</div>
        <div class="order-status">Статус заказа: <span class="order-status-text" v-text="orderStatus" /></div>
        <div class="order-amount">Сумма заказа: {{ orderAmount }}</div>
        <div class="order-product">
            <div>{{ item.product.name }}</div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>



<script setup lang="ts">
import { Order } from '@/models/Order';
import { useOrder } from '@/components/orders/composables/useOrder';

export interface IOrderProps {
    item: Order;
}

const props = defineProps<IOrderProps>();

const { creationDate, orderAmount, orderStatus } = useOrder(props)

</script>

<style lang="scss" scoped>
.order {
    padding: 16px 0;

    &-status {
        &-text {
            padding: 2px 4px;
            color: black;
            border-radius: 4px;
            background-color: rgb(150, 192, 192);
            display: inline-block;
        }
    }
}
</style>