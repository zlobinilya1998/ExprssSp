<template>
    <div class="order">
        <div class="order-creation-date">Заказ от {{ creationDate }}</div>
        <div class="order-status">Статус заказа: <span class="order-status-text" v-text="orderStatus" /></div>
        <div class="order-amount">Сумма заказа: {{ orderAmount }}</div>
        <div class="order-product" v-text="item.product.name"/>
        <v-btn v-if="!isCompleted" class="mt-2" color="success" @click="confirmDelivery" :loading="loading">
            Подтвердить получение
            <v-icon class="ml-2">mdi-check-circle-outline</v-icon>    
        </v-btn>
    </div>
</template>



<script setup lang="ts">
import { Order } from '@/models/Order';
import { useOrder } from '@/components/orders/composables/useOrder';

export interface IOrderProps {
    item: Order;
}
interface IOrderEmits {
    (event: 'update'): void,
}

const props = defineProps<IOrderProps>();
const emit = defineEmits<IOrderEmits>();

const { creationDate, orderAmount, orderStatus, isCompleted, completeOrder, loading } = useOrder(props);

const confirmDelivery = async () => {
    await completeOrder();
    emit('update');
}



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